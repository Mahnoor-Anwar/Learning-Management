// import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { database } from "../../config/Firebase";
// import Swal from "sweetalert2";

// const EditStudent = () => {
//   const [editData, setEditData] = useState({
//     stuName: "",
//     age: "",
//     gender: "",
//     classRoom: "",
//     roll: "",
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const genderOptions = [
//     { value: "male", label: "Male" },
//     { value: "female", label: "Female" },
//   ];

//   const classOptions = [
//     { value: 1, label: 1 },
//     { value: 2, label: 2 },
//     { value: 3, label: 3 },
//     { value: 4, label: 4 },
//     { value: 5, label: 5 },
//     { value: 6, label: 6 },
//     { value: 7, label: 7 },
//     { value: 8, label: 8 },
//     { value: 9, label: 9 },
//     { value: 0, label: 10 },
//   ];

//   const handleChange = (e) => {
//     const { name } = e.target;
//     setEditData((prevState) => ({
//       ...prevState,
//       [name]: e.target.value,
//     }));
//   };

//   const handleEdit = async () => {
//     try {
//       const updateStudentData = await updateDoc(
//         doc(database, "students", id),
//         editData
//       );
//       Swal.fire({
//         title: "success",
//         text: "Student Edited Successfully",
//         icon: "success",
//       });
//       navigate("/studentList");
//     } catch (err) {
//       Swal.fire({
//         title: "danger",
//         text: err,
//         icon: "danger",
//       });
//     }
//   };

//   const getData = async () => {
//     try {
//       const getStuData = await getDoc(doc(database, "students", id));
//       console.log("stuData", getStuData.data());
//       setEditData(getStuData.data());
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [id]);

//   return (
//     <div>
//       <h1>eidt student</h1>
//       <div>
//         <input
//           type="text"
//           value={editData.stuName}
//           onChange={handleChange}
//           placeholder="name"
//           name="stuName"
//         />
//         <input
//           type="number"
//           value={editData.age}
//           onChange={handleChange}
//           placeholder="age"
//           name="age"
//         />
//         {/* <input type="text" value={editData.gender} onChange={handleChange} placeholder='gender'name='gender'/> */}
//         <select value={editData.gender} onChange={handleChange} name="gender">
//           {genderOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
     
//         <select
//           value={editData.classRoom}
//           onChange={handleChange}
//           name="classRoom"
//         >
//           {classOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number" 
//           value={editData.roll}
//           onChange={handleChange}
//           placeholder="roll"
//           name="roll"
//         />
//         <button onClick={() => handleEdit()}>edit</button>
//       </div>
//     </div>
//   );
// };

// export default EditStudent;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../config/Firebase";
import Swal from "sweetalert2";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography } from '@mui/material';

const EditStudent = () => {
  const [editData, setEditData] = useState({
    stuName: "",
    age: "",
    gender: "",
    classRoom: "",
    roll: "",
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
    { value: 0, label: 10 },
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
      await updateDoc(doc(database, "students", id), editData);
      Swal.fire({
        title: "Success",
        text: "Student Edited Successfully",
        icon: "success",
      });
      navigate("/studentList");
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
      const getStuData = await getDoc(doc(database, "students", id));
      setEditData(getStuData.data());
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
        Edit Student
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Name"
          value={editData.stuName}
          onChange={handleChange}
          name="stuName"
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Age"
          type="number"
          value={editData.age}
          onChange={handleChange}
          name="age"
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
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
      <FormControl fullWidth margin="normal">
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
      <FormControl fullWidth margin="normal">
        <TextField
          label="Roll Number"
          type="number"
          value={editData.roll}
          onChange={handleChange}
          name="roll"
          variant="outlined"
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

export default EditStudent;
