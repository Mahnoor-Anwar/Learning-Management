import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Button, Paper, Box } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../config/Firebase';
import Swal from "sweetalert2";


const CreatePaper = () => {
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');

  const handleChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      let paperObj = {
        subject,
        description
      }
      await addDoc(collection(database, "paper"), paperObj)
      Swal.fire({
        title: "Success",
        text: "Paper Created Successfully",
        icon: "success",
      });
      setDescription("")
      setSubject("")
    } catch(err) {
      Swal.fire({
        title: "error",
        text: err,
        icon: "error",
      });
    }
  };

  return (
    <Paper sx={{ p: 3 , mt:5}} className="container  mt-5">
      <h1>Create Paper</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          required
          id="subject"
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />
        <ReactQuill
          value={description}
          onChange={handleChange}
          modules={CreatePaper.modules}
          formats={CreatePaper.formats}
          placeholder="Write your description here..."
          style={{ height: '200px' }}
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" className="addbtn" sx={{ mt: 5 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

// Define the toolbar options (modules) and formats for React Quill
CreatePaper.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    [{ 'align': [] }],
    ['clean']
  ],
};

CreatePaper.formats = [
  'header', 'bold', 'italic', 'underline', 'list', 'bullet', 'link', 'image', 'align'
];

export default CreatePaper;
