import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import LoginCard from './components/SignIn'
import SignUp from './components/SignUp'
import SignUpPage from './Pages/SignUpPage'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import FeaturesPage from './Pages/FeaturesPage'
import { useContext } from 'react'
import AuthContext from './AuthContext'
import DashboardPage from './Pages/DashboardPage'

function App() {
  const[organName,setOrganName] = useState(localStorage.getItem("orgName"));
  const[admin,setAdmin]=useState({name:localStorage.getItem("Admin"),isAuth:true})




  return (
    <>
   <AuthContext.Provider value={{organName,setOrganName,admin,setAdmin}}>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/admin/login' element={<LoginPage/>}></Route>
      <Route path='/admin/signup' element={<SignUpPage/>}/>
      <Route path='/admin/features' element={<FeaturesPage/>}/>
      <Route path='/admin/dashboard' element={<DashboardPage/>}/>
     </Routes>
     </AuthContext.Provider>
    </>
  )
}

export default App
