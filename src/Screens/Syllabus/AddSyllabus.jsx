
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Container, Typography } from "@mui/material";

const AddSyllabus = () => {
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();



  const addData = async () => {
    let syllabusObj = {
      subject,
      chapter,
      description,

    };

    try {
      const addSyllabusData = await addDoc(
        collection(database, "syllabus"),
        syllabusObj
      );
      Swal.fire({
        title: "Success",
        text: "Syllabus Added Successfully",
        icon: "success",
      });
      navigate("/syllabusList");
      console.log(addSyllabusData);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Syllabus
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        onChange={(e) => setSubject(e.target.value)}
      />
     
      
      <TextField
        fullWidth
        margin="normal"
        type="text"
        label="Chapter"
        onChange={(e) => setChapter(e.target.value)}
      />
       <TextField
        fullWidth
        margin="normal"
        type="text"
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        // color="primary"
        className="addbtn"
        onClick={addData}
        sx={{ mt: 2 }}
      >
        Add Syllabus
      </Button>
    </Container>
  );
};

export default AddSyllabus;

