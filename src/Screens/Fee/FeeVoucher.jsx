import React, { useState } from 'react'
import { TextField, MenuItem, Button, Container, Typography } from "@mui/material";
import jsPDF from 'jspdf';
import { doc } from 'firebase/firestore';


const FeeVoucher = () => {
  const [name, setName] = useState("")
  const [classRoom, setClassRoom] = useState("")
  const [amount , setAmount] = useState("")

  const handleAmountChange = (e) => {
    const value = e.target.value;
   
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  let amountparse = parseFloat(amount)
  let librarayFee = 300;
  let Activityfee = 500;
  let total = librarayFee + Activityfee + amountparse;
 
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

  const generateFeePdf =() => {
    const doc = new jsPDF();

    doc.text('Fee Voucher', 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Class: ${classRoom}`, 10, 30);
    doc.text(`Activity Fee: ${Activityfee}`, 10, 40);
    doc.text(`Libraray Fee: ${librarayFee}`, 10, 50);
    doc.text(`Amount: ${amount}`, 10, 60);
    doc.text(`Total: ${total}`, 10, 70);
 

    // Save the PDF
    doc.save('fee-voucher.pdf');
  }

  return (
    <Container className="container">
    <Typography variant="h4" gutterBottom>
      Create Fee Voucher
    </Typography>
    <form onSubmit={(e)=>generateFeePdf()}>
    <TextField
      fullWidth
      margin="normal"
      label="Student Name"
      onChange={()=>handleAmountChange()}
    />
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
      type='number'
      label="Amount"
      onChange={(e) => setAmount(e.target.value)}
    />
    <Button
      variant="contained"
      // color="primary"
      className='addbtn'
     type='submit'
      sx={{ mt: 2 }}
    >Download Voucher
    </Button>
    </form>
  </Container>
  )
}

export default FeeVoucher
