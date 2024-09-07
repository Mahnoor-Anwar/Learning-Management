import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup'
import Dashboard from './Screens/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './Screens/Student/StudentList'
import AddStudent from './Screens/Student/AddStudent'
import TeacherList from './Screens/Teacher/TeacherList'
import AddTeacher from './Screens/Teacher/AddTeacher'
import AdmissionForm from './Screens/School/AdmissionForm'
import FeeStructure from './Screens/Fee/FeeStructure'
import FeeVoucher from './Screens/Fee/FeeVoucher'
import SubjectList from './Screens/Subjects/SubjectsList'
import AddSubject from './Screens/Subjects/AddSubject'
import SyllabusList from './Screens/Syllabus/SyllabusList'
import AddSyllabus from './Screens/Syllabus/AddSyllabus'
import ExamSchedule from './Screens/Exam/Schedule'
import CreatePaper from './Screens/Exam/CreatePaper'
import EditStudent from './Screens/Student/EditStudent'
import EditTeacher from './Screens/Teacher/EditTeacher'
import EditSyllabus from './Screens/Syllabus/EditSyllabus'
import ClassList from './Screens/Class/ClassList'
import EditClass from './Screens/Class/EditClass'
import EditSubject from './Screens/Subjects/EditSubject'
import Home from './Screens/Dashboard/Home'
import AuthRoute from './Screens/Routes/AuthRoutes'
import ProtectedRoute from './Screens/Routes/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    <Routes>
      <Route element={<AuthRoute />}>
      <Route index element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      </Route>
      <Route element={<ProtectedRoute />}>
      
      <Route path="/dashboard" element={<Home />} />
      <Route path='/studentList' element={<StudentList />} />
      <Route path='/addStudent' element={<AddStudent />} />
      <Route path='/editStudent/:id' element={<EditStudent />} />
      <Route path='/teacherList' element={<TeacherList />} />
      <Route path='/addTeacher' element={<AddTeacher />} />
      <Route path='/editTeacher/:id' element={<EditTeacher />} />
      <Route path='/admissionForm' element={<AdmissionForm />} />
      <Route path='/admissionList' element={<ClassList />} />
      <Route path='/editClass/:id' element={<EditClass />} />
      <Route path='/feeStructure' element={<FeeStructure />} />
      <Route path='/feeVoucher' element={<FeeVoucher />} />
      <Route path='/subjectList' element={<SubjectList />} />
      <Route path='/addSubject' element={<AddSubject />} />
      <Route path='/syllabusList' element={<SyllabusList />} />
      <Route path='/editSubject/:id' element={<EditSubject />} />
      <Route path='/addSyllabus' element={<AddSyllabus />} />
      <Route path='/editSyllabus/:id' element={<EditSyllabus />} />
      <Route path='/examSchedule' element={<ExamSchedule />} />
      <Route path='/CreatePaper' element={<CreatePaper />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
