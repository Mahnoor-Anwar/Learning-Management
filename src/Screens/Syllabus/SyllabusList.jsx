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
    <CustomTableContainer component={Paper}>
      <div className='listheader'>
      <h1>Syllabus List</h1>
     <Button mb={4} variant="contained" className='addbtn' sx={{float:'right', marginBottom:'20px', marginTop:'20px', marginRight:'20px'}}onClick={()=>navigate('/addSyllabus')}>Add Syllabus</Button>
      </div>
        
      <Table>
        <CustomTableHead>
          <TableRow>
            <CustomTableCell sx={{color:'white'}}>Subject Name</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Chapter Name</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Description</CustomTableCell>
            <CustomTableCell sx={{color:'white'}}>Actions</CustomTableCell>
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {syllabusList.map((item) => (
            <CustomTableRow key={item.id}>
              <CustomTableCell>{item.subject}</CustomTableCell>
              <CustomTableCell>{item.chapter}</CustomTableCell>
              <CustomTableCell>{item.description}</CustomTableCell>
              <CustomTableCell>
                <ModeEditOutlineIcon onClick={()=>navigate(`/editSyllabus/${item.id}`)}/>
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

export default SyllabusList;

  
  