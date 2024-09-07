import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Profile from '../../assets/profile.png'
import { PiStudent } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { PiMoneyFill } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { PiExamBold } from "react-icons/pi";
import { FaList } from "react-icons/fa6";
import '../../App.css'

const Sidebar = () => {

  const [open, setOpen] =useState(false);
  const [openTeacher, setOpenTeacher] =useState(false);
  const [openSylabus, setOpenSyllabus] =useState(false);
  const [openSchool, setOpenSchool] =useState(false);
  const [openClass, setOpenClass] =useState(false);
  const [openAdmission, setOpenAdmission] =useState(false);
  const [openFee, setOpenFee] =useState(false);
  const [openSub, setOpenSub] =useState(false);
  const [openExam, setOpenExam] =useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickTeacher = () => {
    setOpenTeacher(!openTeacher);

  };const handleClickSchool = () => {
    setOpenSchool(!openSchool);

  };const handleClickClass = () => {
    setOpenClass(!openClass);

  };const handleClickAdmission = () => {
    setOpenAdmission(!openAdmission);

  };const handleClickFee = () => {
    setOpenFee(!openFee);

  };const handleClickExam = () => {
    setOpenExam(!openExam);

  };
  const handleClickSub = () => {
    setOpenSub(!openSub);
  };

  const handleClickSyllabus = () => {
    setOpenSyllabus(!openSylabus);
  };

  return (
    <div>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className='d-flex justify-content-center my-3'>
          <img src={Profile} />
        </ListSubheader>
      }
    >
     
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PiStudent width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Students" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/studentList'} className="navlink" >
            <ListItemText primary="Student List" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/addStudent'} className="navlink">
            <ListItemText primary="Student Registration" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickTeacher}>
        <ListItemIcon>
          <FaChalkboardTeacher width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Teacher" />
        {openTeacher ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openTeacher} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/teacherList'} className="navlink">
            <ListItemText primary="Teacher List" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/addTeacher'} className="navlink">
            <ListItemText primary="Teacher Registration" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSyllabus}>
        <ListItemIcon>
          <FaList width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Syllabus" />
        {openSylabus ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSylabus} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/syllabusList'} className="navlink">
            <ListItemText primary="Syllabus List" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/addSyllabus'} className="navlink">
            <ListItemText primary="Add Syllabus" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSchool}>
        <ListItemIcon>
          <FaSchool width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="School" />
        {openSchool ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSchool} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/admissionForm'} className="navlink">
              <ListItemText primary="Admission" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/studentList'} className="navlink">
              <ListItemText primary="Student List" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/teacherList'} className="navlink">
              <ListItemText primary="Teacher List" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickClass}>
        <ListItemIcon>
          <SiGoogleclassroom width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Class" />
        {openClass ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openClass} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/admissionForm'} className="navlink">
              <ListItemText primary="Registration" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickFee}>
        <ListItemIcon>
          <PiMoneyFill width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Fees" />
        {openFee ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFee} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/feeStructure'} className="navlink">
              <ListItemText primary="Fee Structure" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/feeVoucher'} className="navlink">
              <ListItemText primary="Fee Voucher" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickAdmission}>
        <ListItemIcon>
          <IoMdPersonAdd width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Admission" />
        {openAdmission ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAdmission} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/admissionForm'} className="navlink">
            <ListItemText primary="Addmission Form" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickExam}>
        <ListItemIcon>
          <PiExamBold width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Exam" />
        {openExam ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openExam} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/examSchedule'} className="navlink">
            <ListItemText primary="Schedule" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/createPaper'} className="navlink">
            <ListItemText primary="Create Paper" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub}>
        <ListItemIcon>
          <FaBookOpen width={200} height={300}/>
        </ListItemIcon>
        <ListItemText primary="Subjects" />
        {openSub ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/subjectList'} className="navlink">
            <ListItemText primary="Subject List" />
            </NavLink>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <NavLink to={'/addSubject'} className="navlink">
            <ListItemText primary="Add Subject" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      </List>
    </div>
  )
}

export default Sidebar
