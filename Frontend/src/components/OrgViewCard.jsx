import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function OrgCards(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const loadOrgs = async ()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/org/add');
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error.message);
        }
    };
    loadOrgs();
        },[])
    
    
    return(<>
    <div className="flex ">
        {data.map((org)=>( <div className="flex  justify-start shadow-xl rounded-md  w-fit bg-gray-200 mx-10 hover:outline-2 hover:outline-purple-500">
            <div className="flex flex-col gap-3 py-5 px-5 font-bold" key={org._id}>
                <h1 >Org Id: {org.orgId}</h1>
                <h1>Org Name: {org.organizationName}</h1>
                <p>Org Domain: {org.organizationDomain}</p>
            </div>
        </div> ))}
        </div>

         
    </>)
}
export default OrgCards;