import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import FeatureCreation from "./FeatureCreationForm";
import { useContext } from "react";
import AuthContext from "../AuthContext";
import API_URL from "../../config/config";

function HeroSection(){
    
    const[toggleForm,setToggleForm] = useState(false);
    const{organName,setOrganName}= useContext(AuthContext);
    const{admin} = useContext(AuthContext);
    console.log(admin);
    console.log(organName);
    function handleToggle(e){
        e.preventDefault();
        setToggleForm(true)
    }

    return(
        <>
        
        <div>
        
        <h1 className="text-5xl font-bold p-5 text-center">{organName}</h1>
        <p className="text-xl text-gray-500 text-center">Hi, <span className=" font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">{admin.name}</span> welcome to {organName}</p>

        <div className="flex justify-center mt-10">
           {toggleForm ? (<FeatureCreation setToggleForm={setToggleForm}/>):(  <button className="p-4 rounded-md font-bold bg-purple-800 text-white text-lg w-fit items-center whitespace-nowrap hover:bg-purple-500" onClick={handleToggle}>Add features</button>)}
          
        </div>
        </div>
        
     
        </>
    )
}

export default HeroSection;