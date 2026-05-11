import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useContext } from "react";
import AuthContext from "../AuthContext";
import API_URL from "../../config/config";

function LoginCard(){
    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")
    const[flag,setFlag] = useState(true);
    const{admin,setAdmin} = useContext(AuthContext);
    const{setOrganName}= useContext(AuthContext);
    const navigate = useNavigate();
    function handleNav(){
        navigate("/admin/signup")
    }
    
   
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${API_URL}/api/org/admin/login`,{email,password:pass});
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("Admin",response.data.adminName)
            localStorage.setItem("orgName",response.data.orgName)
            setAdmin({name:localStorage.getItem("Admin"),isAuth:true})
            
            setOrganName(localStorage.getItem("orgName"));
            alert('login successfull')
            navigate('/')
        } catch (error) {
            console.error(error.message);
            setFlag(false);
            alert("login failed")
            
        }
        
       
    }
    
    
    return(
        <>
        <div className="h-fit w-100 h-100 rounded-md shadow-md p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent "> Signin</h1>
            <div>
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Email</label>
                        <input type="text" placeholder="johndoe" className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300 " onChange={(e)=>setEmail(e.target.value)}></input>
                      {!flag && (<p>Invalid username</p>)}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Password</label>
                        <input type="password" placeholder="*****" className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300 focus:outline-purple-300" onChange={(e)=>setPass(e.target.value)}></input>
                        {!flag && (<p>Invalid Password</p>)}
                    </div>
                    <p className="text-sm">Don't you have an account? <span className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={handleNav}>SignUp</span></p>
                    <div className="flex justify-center">
                    <button className=" font-bold  text-white bg-purple-500 h-fit  w-fit rounded-md p-2 hover:bg-purple-800">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginCard;