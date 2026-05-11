import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperContext from "../../SuperContext";



function LoginCard(){
    const[name,setName] = useState("")
    const[pass,setPass] = useState("")
    const[flag,setFlag] = useState(true);
    const navigate = useNavigate();
    const {setSuperAdmin}= useContext(SuperContext);
    const username = "admin";
    const password = "admin@MTS";
   
    
    function handleSubmit(e){
        e.preventDefault();
        if(username == name &&  password == pass){
            alert('login success')
            localStorage.setItem("super_Admin",username)
            setSuperAdmin({name:localStorage.getItem("super_Admin"),isAuth:true})
            navigate('/')
        }else{
            setFlag(false)
            alert('login failed')
          
        }

    
       
    }
    
    return(
        <>
        <div className="h-fit w-120 rounded-md shadow-md p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent "> Admin Sigin</h1>
            <div>
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Username</label>
                        <input type="text" placeholder="johndoe" className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300 " onChange={(e)=>setName(e.target.value)}></input>
                      {!flag && (<p>Invalid username</p>)}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Password</label>
                        <input type="password" placeholder="*****" className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300 focus:outline-purple-300" onChange={(e)=>setPass(e.target.value)}></input>
                        {!flag && (<p>Invalid Password</p>)}
                    </div>
                    <p className="text-sm">Don't you have an account? <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent cursor-pointer">SignUp</span></p>
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