
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography, Paper } from '@mui/material';

const EditTeacher = () => {
  const [editData, setEditData] = useState({
    teacherName: "",
    age: "",
    gender: "",
    classRoom: "",
    subject: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

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
      await updateDoc(doc(database, "teacher", id), editData);
      Swal.fire({
        title: "Success",
        text: "Teacher Edited Successfully",
        icon: "success",
      });
      navigate("/teacherList");
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
      const getTeacherData = await getDoc(doc(database, "teacher", id));
      setEditData(getTeacherData.data());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
   
    <Container maxWidth="sm" className="container  mt-5">
      <Typography variant="h4" gutterBottom className="title">
        Edit Teacher
      </Typography>
      <FormControl fullWidth margin="normal" className="formControl">
        <TextField
          label="Teacher Name"
          value={editData.teacherName}
          onChange={handleChange}
          name="teacherName"
          variant="outlined"
        />
      </FormControl>
     
      <FormControl fullWidth margin="normal" className="formControl">
        <InputLabel>Gender</InputLabel>
        <Select
          value={editData.gender}
          onChange={handleChange}
          name="gender"
          label="Gender"
        >
          {genderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="formControl">
        <InputLabel>Class Room</InputLabel>
        <Select
          value={editData.classRoom}
          onChange={handleChange}
          name="classRoom"
          label="Class Room"
        >
          {classOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="formControl">
        <TextField
          label="subject Number"
          type="text"
          value={editData.subject}
          onChange={handleChange}
          name="subject"
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

export default EditTeacher;
