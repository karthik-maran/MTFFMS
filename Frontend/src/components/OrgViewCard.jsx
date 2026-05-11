import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import API_URL from "../../config/config";
function OrgCards(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const loadOrgs = async ()=>{
        try {
            const response = await axios.get(`${API_URL}/api/org/add`);
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
            <div className="flex flex-col gap-3 py-5 px-5 " key={org.OrgId}>
                <div className="flex gap-2 font"> <span className="font-bold">OrgId:</span> <h1 className="" > {org.orgId}</h1></div>
                <div className="flex gap-2"><span className="font-bold">Org Name:</span> <h1>{org.organizationName}</h1></div>
               <div className="flex gap-2"><span className="font-bold">Org Domain:</span> <p> {org.organizationDomain}</p></div>
            </div>
        </div> ))}
        </div>

         
    </>)
}
export default OrgCards;