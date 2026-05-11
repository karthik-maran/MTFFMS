import React from "react";
import { Route,Routes } from "react-router-dom";
import LoginCard from "./components/Login";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import OrgForms from "./components/OrganizationForm";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>

    </>
  )
}

export default App;