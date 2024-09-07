
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Container, Typography } from "@mui/material";

const Addsubject = () => {
  const [subName, setName] = useState("");
  const [forClass, setForClass] = useState("");
  const [description, setDescription] = useState("");
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
    { value: 0, label: 10 },
  ];

  const addData = async () => {
    let studentObj = {
      subName,
      forClass,
      description
     
    };

    try {
      const addSubjectData = await addDoc(
        collection(database, "subject"),
        studentObj
      );
      Swal.fire({
        title: "Success",
        text: "Subject Added Successfully",
        icon: "success",
      });
      navigate("/subjectList");
      console.log(addSubjectData);
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
        Add Subject
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
     
      <TextField
        fullWidth
        margin="normal"
        select
        label="Class"
        value={forClass}
        onChange={(e) => setForClass(e.target.value)}
      >
        {classOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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
        Add Subject
      </Button>
    </Container>
  );
};

export default Addsubject;

