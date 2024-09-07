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

const SubjectList = () => {

  const [subjectList , setSubjectList] = useState([])
  const [refresh , setRefresh] = useState(false)
  const navigate = useNavigate()

  const getSubjectList = async () => {
    try {
      const arr=[]
      const subject = await getDocs(collection(database, 'subject'))
      subject.forEach((doc)=>{
        arr.push({...doc.data() , id:doc.id})
        console.log("subject" , subject)
      })
      setSubjectList(arr)
      
    } catch(err) {
      console.log(err)
    }
  }


  const handleDelete = async (id) =>{
    try {
      const deleteDelete = await deleteDoc(doc(database , 'subject' , id))
      Swal.fire({
        title: "success",
        text: "Subject Deleted Successfully",
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
    getSubjectList()
  },[refresh])
  return (
    <>
    <Button mb={4} variant="contained" className='addbtn' sx={{float:'right', marginBottom:'20px', marginTop:'20px', marginRight:'20px'}}onClick={()=>navigate('/addSubject')}>Add Subject</Button>
    <TableContainer component={Paper} mt={5} >
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Subject Name</StyledTableCell>
          <StyledTableCell align="right"> For Class</StyledTableCell>
          <StyledTableCell align="right">Description</StyledTableCell>
          <StyledTableCell align="right">Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {subjectList.map((row) => (
          
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.subName}
            </StyledTableCell>
            <StyledTableCell align="right">{row.forClass}</StyledTableCell>
            <StyledTableCell align="right">{row.description}</StyledTableCell>
            <StyledTableCell align="right">
            <ModeEditOutlineIcon onClick={()=>navigate(`/editSubject/${row.id}`)}/>
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

export default SubjectList
  