import React, { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";
import LoginCard from "./components/Login";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import OrgForms from "./components/OrganizationForm";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SuperContext from "../SuperContext";

function App(){
  const[superAdmin,setSuperAdmin]=useState({name:"",isAuth:false})
  useEffect(()=>{
    setSuperAdmin({
      name:localStorage.getItem("super_Admin"),
      isAuth:true
    })
  },[])
  return(
    <>
    <SuperContext.Provider value={{superAdmin,setSuperAdmin}}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     
    </Routes>
    </SuperContext.Provider>

    </>
  )
}

export default App;