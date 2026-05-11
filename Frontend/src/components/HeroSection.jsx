import React from "react";
import { useState } from "react";
import OrgForms from "./OrganizationForm";
import OrgCards from "./OrgViewCard";

function HeroSection(){
    const[toggleForm,setToggleForm] = useState(false);
    function handleClick(e){
        e.preventDefault();
        setToggleForm(true);
    }
    return(
        <>
        <div>
        <h1 className="text-5xl font-bold p-5 text-center">Multi-Tenant Feature Flag Management System</h1>
        <p className="text-xl text-gray-500 text-center">A Software as a Service Application</p>
        </div>
        
        <div className=" flex  justify-center items-center mt-20">
            {toggleForm?(<OrgForms setToggleForm={setToggleForm} />): ( <button className="p-4 rounded-md font-bold bg-purple-800 text-white text-lg w-fit items-center whitespace-nowrap hover:bg-purple-500" onClick={handleClick}> Add Organisation</button>)}
           </div>
          <div className="mb-10">
            
            <p className="text-start p-5 text-xl font-bold">List of organizations:</p>
            <div className="mt-10">
                <OrgCards/>
            </div>

        </div>
        </>
    )
}

export default HeroSection;