import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {database} from '../../config/Firebase'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Custom styled components
const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
  padding: '20px',
  width:'90%',
  marginTop:'50px'

}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  padding: '12px 15px',
  borderBottom: '1px solid #ddd',
  color:'#726f72'
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: '#67526b',
  color: '#ffff',
  fontWeight:'bolder'
}));

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:hover': {
    backgroundColor: '#ddd',
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
    <CustomTableContainer component={Paper}>
      <div className='listheader'>
      <h1>Student List</h1>
     <Button mb={4} variant="contained" className='addbtn' sx={{float:'right', marginBottom:'20px', marginTop:'20px', marginRight:'20px'}}onClick={()=>navigate('/addStudent')}>Add Student</Button>
      </div>
        
      <Table>
        <CustomTableHead>
          <TableRow>
            <CustomTableCell sx={{color:'white'}}>Stdent Name</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Age</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Gender</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Class</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Roll No</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Actions</CustomTableCell>
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {studentList.map((item) => (
            <CustomTableRow key={item.id}>
              <CustomTableCell>{item.stuName}</CustomTableCell>
              <CustomTableCell>{item.age}</CustomTableCell>
              <CustomTableCell>{item.gender}</CustomTableCell>
              <CustomTableCell>{item.classRoom}</CustomTableCell>
              <CustomTableCell>{item.roll}</CustomTableCell>
              <CustomTableCell>
                <ModeEditOutlineIcon onClick={()=>navigate(`/editStudent/${item.id}`)}/>
                <DeleteIcon onClick={()=>handleDelete(item.id)}/>
              </CustomTableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
    </>
  );
};

export default StudentList;
