
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography } from '@mui/material';

const EditSyllabus = () => {
  const [editData, setEditData] = useState({
    subject: "",
    chapter: "",
    description: "",
  
  });
  const { id } = useParams();
  const navigate = useNavigate();




  const handleChange = (e) => {
    const { name } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleEdit = async () => {
    try {
      await updateDoc(doc(database, "syllabus", id), editData);
      Swal.fire({
        title: "Success",
        text: "Syllabus Edited Successfully",
        icon: "success",
      });
      navigate("/syllabusList");
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
      const getSyllabusData = await getDoc(doc(database, "syllabus", id));
      setEditData(getSyllabusData.data());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Syllabus
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Subject Name"
          value={editData.subject}
          onChange={handleChange}
          name="subject"
          variant="outlined"
        />
      </FormControl>
    
      <FormControl fullWidth margin="normal">
        <TextField
          label="Chapter"
          type="text"
          value={editData.chapter}
          onChange={handleChange}
          name="chapter"
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Description"
          type="text"
          value={editData.description}
          onChange={handleChange}
          name="description"
          variant="outlined"
          multiline
          rows={2}
          maxRows={4}
        />

      </FormControl>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleEdit}
        fullWidth
      >
        Edit
      </Button>
    </Container>
  );
};

export default EditSyllabus;
