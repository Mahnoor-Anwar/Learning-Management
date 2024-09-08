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
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, ListItemText, Typography } from '@mui/material';

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
              {/* <NavDropdown.Item href="/studentList">Student List</NavDropdown.Item> */}
              <NavLink to={'/studentList'} className="navbarlinks" >
            <ListItemText primary="Student List" />
            </NavLink>
              {/* <NavDropdown.Item href="/addStudent">
                Student Registrtaion
              </NavDropdown.Item> */}
                {/* <NavDropdown.Item href="/studentList">Student List</NavDropdown.Item> */}
                <NavLink to={'/addStudent'} className="navbarlinks" >
            <ListItemText primary="Student Reigstration" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Teacher" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="teacherList">Teacher List</NavDropdown.Item> */}
              <NavLink to={'/teacherList'} className="navbarlinks" >
            <ListItemText primary="Teacher List" />
            </NavLink>
            <NavLink to={'/addTeacher'} className="navbarlinks" >
            <ListItemText primary="Teacher Reigstration" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/syllabusList">Syllabus List</NavDropdown.Item> */}
              <NavLink to={'/syllabusList'} className="navbarlinks" >
            <ListItemText primary="Syllabus List" />
            </NavLink>
            <NavLink to={'/addSyllabus'} className="navbarlinks" >
            <ListItemText primary="Add Syllabus" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="School" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/admissionForm">Admission Form</NavDropdown.Item> */}
              <NavLink to={'/admissionForm'} className="navbarlinks" >
            <ListItemText primary="Admission Form" />
            </NavLink>
            <NavLink to={'/teacherList'} className="navbarlinks" >
            <ListItemText primary="Teacher List" />
            </NavLink>
            <NavLink to={'/addStudent'} className="navbarlinks" >
            <ListItemText primary="Student Reigstration" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Class" id="basic-nav-dropdown">
            <NavLink to={'/admissionForm'} className="navbarlinks" >
            <ListItemText primary="Registration" />
            </NavLink>
              
            </NavDropdown>
            <NavDropdown title="Fees" id="basic-nav-dropdown">
            <NavLink to={'/feeStructure'} className="navbarlinks" >
            <ListItemText primary="Fee Structure" />
            </NavLink>
            <NavLink to={'/feeVoucher'} className="navbarlinks" >
            <ListItemText primary="Fee Voucher" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Admission" id="basic-nav-dropdown">
            <NavLink to={'/admissionForm'} className="navbarlinks" >
            <ListItemText primary="Admission Form" />
            </NavLink>
            <NavLink to={'/admissionList'} className="navbarlinks" >
            <ListItemText primary="Admission List" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Exam" id="basic-nav-dropdown">
            <NavLink to={'/examSchedule'} className="navbarlinks" >
            <ListItemText primary="Exam Schedule" />
            </NavLink>
            <NavLink to={'/createPaper'} className="navbarlinks" >
            <ListItemText primary="Create Paper" />
            </NavLink>
            </NavDropdown>
            <NavDropdown title="Subject" id="basic-nav-dropdown">
            <NavLink to={'/subjectList'} className="navbarlinks" >
            <ListItemText primary="Subject List" />
            </NavLink>
            <NavLink to={'/addSubject'} className="navbarlinks" >
            <ListItemText primary="Add Subject" />
            </NavLink>
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