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

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StudentList = () => {

  const [studentList , setStudentList] = useState([])
  const [refresh , setRefresh] = useState(false)
  const navigate = useNavigate()

  const getstudentlist = async () => {
    try {
      const arr=[]
      const students = await getDocs(collection(database, 'students'))
      students.forEach((doc)=>{
        arr.push({...doc.data() , id:doc.id})
        console.log("students" , students)
      })
      setStudentList(arr)
      
    } catch(err) {
      console.log(err)
    }
  }


  const handleDelete = async (id) =>{
    try {
      const deleteStudent = await deleteDoc(doc(database , 'students' , id))
      Swal.fire({
        title: "success",
        text: "Student Deleted Successfully",
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
    getstudentlist()
  },[refresh])
  return (
    <>
    <Button mb={4} variant="contained" className='addbtn' sx={{float:'right', marginBottom:'20px', marginTop:'20px', marginRight:'20px'}}onClick={()=>navigate('/addStudent')}>Add Student</Button>
    <TableContainer component={Paper} mt={5} sx={{ mt: 5, display: 'flex', justifyContent: 'center' }} >
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Age</StyledTableCell>
          <StyledTableCell align="right">Gender</StyledTableCell>
          <StyledTableCell align="right">ClassRoom</StyledTableCell>
          <StyledTableCell align="right">Roll no</StyledTableCell>
          <StyledTableCell align="right">Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {studentList.map((row) => (
          
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.stuName}
            </StyledTableCell>
            <StyledTableCell align="right">{row.age}</StyledTableCell>
            <StyledTableCell align="right">{row.gender}</StyledTableCell>
            <StyledTableCell align="right">{row.classRoom}</StyledTableCell>
            <StyledTableCell align="right">{row.roll}</StyledTableCell>
            <StyledTableCell align="right">
            <ModeEditOutlineIcon onClick={()=>navigate(`/editStudent/${row.id}`)}/>
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

export default StudentList
  