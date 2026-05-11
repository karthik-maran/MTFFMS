import React from "react";
import { useState } from "react";
import axios from "axios";
import HeroSection from "./HeroSection";

function OrgForms({setToggleForm}){
    const[name,setName] = useState("");
    const[orgDomain,setOrgDomain]=useState("");
    const[toggle,setToggle] = useState(true)
    function handleClick(){
        setToggleForm(false);
    }
   async function handleSubmit(e){
        e.preventDefault();
        try {
            const response =  await axios.post('http://localhost:3000/api/org/add',{organizationName :name,organizationDomain:orgDomain});
            alert(response.data.message);
            setName(" ")
            setToggleForm(false);

        } catch (err) {
            console.error(err);
            alert("failed to submit")
        }
    
    }
    return(
        <>
        <div className="h-fit w-150 rounded-md shadow-md p-5 bg-gray-100">
            <form onSubmit={handleSubmit}>
                <h1 className="flex justify-center font-bold text-xl items-center ">Add organization</h1>
            <div className="flex flex-col w-full gap-2 mt-5">
                <label className="font-bold text-lg">organizations Name:</label>
                <input type="text" placeholder=" organizations name" className="border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>setName(e.target.value)}></input>
            </div>
               <div className="flex flex-col w-full gap-2 mt-5">
                <label className="font-bold text-lg">organizations Domain:</label>
                <input type="text" placeholder=" organizations name" className="border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>setOrgDomain(e.target.value)}></input>
            </div>
            <div className="flex  justify-center items-center mt-5 gap-3">
                <button  type="submit"        className="px-2 py-1 rounded-md font-bold bg-purple-800 text-white  w-30 items-center">Submit</button>
                 <button type="button" className="px-2 py-1 rounded-md font-bold bg-purple-800 text-white  w-30 items-center" onClick={handleClick} >Close</button>
                 
            </div>
            </form>
        </div>
        </>
    )
}

export default OrgForms;