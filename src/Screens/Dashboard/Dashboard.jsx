import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from './Sidebar'
import Logout from '../../assets/logout.png'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Dashboard() {

  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let getname = localStorage.getItem("userId")
  // let userName = JSON.parse(getname)
// console.log(userName);
 
  return (
  <>
    <Navbar className="bg-body-tertiary">
      <Container fluid>
      <>
      <Button variant="light" onClick={handleShow}>
        <img src={Logo} alt="LMS" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Learning Management System</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <NavDropdown title="Students" id="basic-nav-dropdown">
              <NavDropdown.Item href="/studentList">Student List</NavDropdown.Item>
              <NavDropdown.Item href="/addStudent">
                Student Registrtaion
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Teacher" id="basic-nav-dropdown">
              <NavDropdown.Item href="teacherList">Teacher List</NavDropdown.Item>
              <NavDropdown.Item href="addTeacher">
                Teacher Registrtaion
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              <NavDropdown.Item href="/syllabusList">Syllabus List</NavDropdown.Item>
              <NavDropdown.Item href="/addSyllabus">
                Add Syllabus
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="School" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admissionForm">Admission Form</NavDropdown.Item>
              <NavDropdown.Item href="/teacherList">
                Teacher List
              </NavDropdown.Item>
              <NavDropdown.Item href="/studentList">
                Student List
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Class" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admissionForm">Registration</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Fees" id="basic-nav-dropdown">
              <NavDropdown.Item href="/feeStructure">Fees Structure</NavDropdown.Item>
              <NavDropdown.Item href="/feeVoucher">Fees Voucher</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admission" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admissionForm">Admission Form</NavDropdown.Item>
              <NavDropdown.Item href="/admissionList">Admission List</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Exam" id="basic-nav-dropdown">
              <NavDropdown.Item href="/examSchedule">Schedule</NavDropdown.Item>
              <NavDropdown.Item href="/createPaper">Paper Creation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Subject" id="basic-nav-dropdown">
              <NavDropdown.Item href="/subjectList">Subject List</NavDropdown.Item>
              <NavDropdown.Item href="/addSubject">Add Subject</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <button className='logout' onClick={()=>{localStorage.clear(); navigate('/')}}>
          <img src={Logout} alt="Logout"/>
        </button>
      </Container>
    </Navbar>
    </>
 
  );
}

export default Dashboard;