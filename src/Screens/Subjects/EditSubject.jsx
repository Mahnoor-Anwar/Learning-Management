
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography } from '@mui/material';

const EditSubject = () => {
  const [editData, setEditData] = useState({
    subName: "",
    forClass: "",
    teacher:""
  });
  const { id } = useParams();
  const navigate = useNavigate();
  


  const classOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  const handleChange = (e) => {
    const { name } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleEdit = async () => {
    try {
      await updateDoc(doc(database, "subject", id), editData);
      Swal.fire({
        title: "Success",
        text: "Subject Edited Successfully",
        icon: "success",
      });
      navigate("/subjectList");
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };

  const getData = async () => {
    try {
      const getSubData = await getDoc(doc(database, "subject", id));
      setEditData(getSubData.data());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Container maxWidth="sm" className="container  mt-5">
      <Typography variant="h4" gutterBottom>
        Edit Student
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Subject Name"
          value={editData.subName}
          onChange={handleChange}
          name="subName"
          variant="outlined"
        />
      </FormControl>
    
    
      <FormControl fullWidth margin="normal">
        <InputLabel>For Class</InputLabel>
        <Select
          value={editData.forClass}
          onChange={handleChange}
          name="forClass"
          label="For Class"
        >
          {classOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
      <FormControl fullWidth margin="normal">
        <TextField
          label="Teacher Name"
          value={editData.teacher}
          onChange={handleChange}
          name="teacher"
          variant="outlined"
        />
      </FormControl>
     
      <Button 
        variant="contained" 
        // color="primary" 
        className="addbtn"
        onClick={handleEdit}
        fullWidth
      >
        Edit
      </Button>
    </Container>
  );
};

export default EditSubject;
