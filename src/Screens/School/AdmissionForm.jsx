import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Container, Typography } from "@mui/material";


const AdmissionForm = () => {
  const [stuName, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
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

  const addData = async () => {
    let studentObj = {
      stuName,
      age,
      gender,
      address,
      contact
    };

    try {
      const addStudentData = await addDoc(
        collection(database, "admission"),
        studentObj
      );
      Swal.fire({
        title: "Success",
        text: "Form Submitted Successfully",
        icon: "success",
      });
      navigate("/admissionList");
      console.log(addStudentData);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <Container className="container  mt-5">
      <Typography variant="h4" gutterBottom>
        Admission Form
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Student Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        type="number"
        label="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        select
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        margin="normal"
        select
        label="Class"
        value={classRoom}
        onChange={(e) => setClassRoom(e.target.value)}
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
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
        <TextField
        fullWidth
        margin="normal"
        type="text"
        label="Parent's Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <Button
        variant="contained"
        // color="primary"
        className="addbtn"
        onClick={addData}
        sx={{ mt: 2 }}
      >
        Add Student
      </Button>
    </Container>
  );
};

export default AdmissionForm;

