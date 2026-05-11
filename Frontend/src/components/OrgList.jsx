import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API_URL from "../../config/config";

function OrgList(){
    const[data, setData] = useState([]);
    async function handleDelete(id){
        try {
            const response = await axios.delete(`${API_URL}/api/org/delete/${id}`);
                setData(data.filter((org) => org.orgId !== id));
            alert(response.data.message)

        } catch (error) {
            console.error(error.message);
            alert('failed to delete')
            
        }
    }

  useEffect(()=>{
    const loadOrg = async ()=>{
        try {
            const response = await  axios.get(`${API_URL}/api/org/add`);
            setData(response.data);
        } catch (error) {
            console.error(error.message);
            alert('failed to fetch ')
        }
    };
    loadOrg();
  },[])
    return(
    <>
    <div className="flex flex-col justify-center ">
        <h1 className="flex justify-center font-bold text-3xl mt-5 ">Dashboard of List of Organizations</h1>
        <div className="flex justify-center">
            <div className=" p-10 h-fit w-fit  shadow-md rounded-md m-10 bg-gray-100 ">
                 <table className="border ">
                         <thead >

                                <tr className="bg-gray-200  " >

                                        <th className="border border-gray-400 py-5 px-10 w-50 ">
                                             Org ID
                                        </th>

                                        <th className="border border-gray-400 p-5 w-150 ">
                                             Organization Name
                                        </th>
                                        <th className="border border-gray-400 p-5 w-150">
                                            organization Domain
                                        </th>
                                        <th className="border border-gray-400 p-5 w-100">
                                            Invite Code
                                        </th>
                                        <th className="border border-gray-400 p-5 w-100">
                                             Actions
                                        </th>

                                </tr>
                                 </thead>
                                <tbody>
                                    {
                                        data.map((org)=>(
                                            <tr key={org._id}>
                                                <td className="border border-gray-400 p-5 text-center text-lg">{org.orgId}</td>
                                                <td className="border border-gray-400 p-5  text-center text-lg">{org.organizationName}</td>
                                                 <td className="border border-gray-400 p-5  text-center text-lg">{org.organizationDomain}</td>
                                                <td className="border border-gray-400 p-5  text-center text-lg">{org.inviteCode}</td>
                                                <td className="border border-gray-400 p-5 text-center">
                                                    <button className="px-2 py-1 rounded-md font-bold bg-purple-800 text-white  w-30 items-center" onClick={()=>handleDelete(org.orgId)}>delete</button>
                                                </td>
                                            </tr>
                                            
                                        ))
                                    }
                                </tbody>
                  

                           
                    </table>
            </div>
        </div>
    </div>
    </>)
}

export default OrgList;