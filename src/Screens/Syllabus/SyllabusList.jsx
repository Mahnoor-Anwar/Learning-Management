import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {database} from '../../config/Firebase'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const SyllabusList = () => {

  const [syllabusList , setsyllabusList] = useState([])
  const [refresh , setRefresh] = useState(false)
  const navigate = useNavigate()

  const getsyllabusList = async () => {
    try {
      const arr=[]
      const syllabus = await getDocs(collection(database, 'syllabus'))
      syllabus.forEach((doc)=>{
        arr.push({...doc.data() , id:doc.id})
        console.log("syllabus" , syllabus)
      })
      setsyllabusList(arr)
      
    } catch(err) {
      console.log(err)
    }
  }


  const handleDelete = async (id) =>{
    try {
      const deleteTeaher = await deleteDoc(doc(database , 'syllabus' , id))
      Swal.fire({
        title: "success",
        text: "syllabus Deleted Successfully",
        icon: "success"
      });
        setRefresh(!refresh)
    } catch(err){
      Swal.fire({
        title: "danger",
        text: err,
        icon: "danger"
      });
    }
  }
 

  useEffect(()=>{
    getsyllabusList()
  },[refresh])
  return (
    <>
    <Button mb={4} variant="contained" className='addbtn' sx={{float:'right', marginBottom:'20px', marginTop:'20px', marginRight:'20px'}}onClick={()=>navigate('/addSyllabus')}>Add Syllabus</Button>
    <TableContainer component={Paper} mt={5} >
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Subject</StyledTableCell>
          <StyledTableCell align="right">Chapter</StyledTableCell>
          <StyledTableCell align="right">Description</StyledTableCell>
          <StyledTableCell align="right">
            Action
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {syllabusList.map((row) => (
          
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.subject}
            </StyledTableCell>
            <StyledTableCell align="right">{row.chapter}</StyledTableCell>
            <StyledTableCell align="right">{row.description}</StyledTableCell>
            <StyledTableCell align="right">
            <ModeEditOutlineIcon onClick={()=>navigate(`/editSyllabus/${row.id}`)}/>
              <DeleteIcon onClick={()=>handleDelete(row.id)}/>
            </StyledTableCell>
           
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </>

  )
}

export default SyllabusList
  