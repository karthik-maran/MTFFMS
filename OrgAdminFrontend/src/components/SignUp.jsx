import axios from "axios";
import React from "react";
import { } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignUp(){
    const [username,setUsername] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[orgDomain,setOrgDomain] = useState();
    const[orgId,setOrgId] = useState();
    const[inviteCode,setInviteCode]  = useState();
    const[error,setError]=useState(false);
    const navigate = useNavigate();
    function handleNav(){
        navigate("/admin/login")
    }
    async function handleSubmit(e){
        e.preventDefault();
       
        try {
            const response = await axios.post('http://localhost:3000/api/org/admin/register',{name:username,email:email,password:password,organizationDomain:orgDomain,orgId:orgId,inviteCode:inviteCode})
            alert(response.data.message)

            localStorage.setItem("token",response.data.token);
            navigate('/admin/login');
          
            
        } catch (error) {
            console.error(error.message);
            alert("failed to register admin")
        }
    }
    return(
        <>
        <div className="flex-col justify-center items-center p-5  shadow-md rounded-md bg-gray-200 w-150 h-fit " >
            <h1 className="font-bold text-center text-3xl mb-5">Admin Registration</h1>
            <form onSubmit={handleSubmit}>
            <div className="flex   gap-10">
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-bold text-md">Username</label>
                    <input type="text" placeholder="johndoe " className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 w-full hover:border-purple-300  focus:border-purple-300" onChange={(e)=>{setUsername(e.target.value)}} ></input>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-bold text-md">Email</label>
                    <input type="email" placeholder="johndoe@gmail.com" className="px-2 py-2 border-2 border-gray-400  bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
            </div>
              <div className="flex gap-10 py-3">
                <div className="flex flex-col gap-1 justify-center w-full">
                    <label className="font-bold text-md">Password</label>
                    <input type="password" className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300"  onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-bold text-md">organization Domain</label>
                    <input type="text" className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setOrgDomain(e.target.value)}}></input>
                   
                </div>
            </div>
              <div className="flex gap-10 py-3 ">
                <div className="flex flex-col gap-1 justify-center w-full">
                    <label className="font-bold text-md">OrganizationId</label>
                    <input type="text" placeholder="ORG1234" className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setOrgId(e.target.value)}}></input>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-bold text-md">InviteCode</label>
                    <input type="text" placeholder="XXXXXX" className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setInviteCode(e.target.value)}}></input>
                </div>
            </div>
            <div>                    <p className="text-sm">If you already have an account <span className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={handleNav}>Login</span></p></div>
            <div className="flex justify-center mt-10">
                <button type="submit" className="p-2 rounded-md font-bold bg-purple-800 text-white text-lg w-fit items-center whitespace-nowrap hover:bg-purple-500">submit</button>
            </div>
            </form>
        </div>

     

    
    </>
    )
}
export default SignUp;

