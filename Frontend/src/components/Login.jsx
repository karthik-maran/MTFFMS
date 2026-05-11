import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function LoginCard(){
    const[name,setName] = useState("")
    const[pass,setPass] = useState("")
    const[flag,setFlag] = useState(true);
    const navigate = useNavigate();

    const username = "admin@MTF";
    const password = "admin123";
   
    
    function handleSubmit(e){
        e.preventDefault();
        if(username == name &&  password == pass){
            alert('login success')
            navigate('/')
        }else{
            setFlag(false)
            alert('login failed')
          
        }

    
       
    }
    
    return(
        <>
        <div className="h-fit w-80 rounded-md shadow-md p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent "> Signin</h1>
            <div>
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Username</label>
                        <input type="text" placeholder="johndoe" className="border-2 border-gray-400 rounded-lg p-1 hover:border-orange-300  focus:outline-orange-300 " onChange={(e)=>setName(e.target.value)}></input>
                      {!flag && (<p>Invalid username</p>)}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Password</label>
                        <input type="password" placeholder="*****" className="border-2 border-gray-400 rounded-lg p-1 hover:border-orange-300 focus:outline-orange-300" onChange={(e)=>setPass(e.target.value)}></input>
                        {!flag && (<p>Invalid Password</p>)}
                    </div>
                    <p className="text-sm">Don't you have an account? <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">SignUp</span></p>
                    <div className="flex justify-center">
                    <button className=" font-bold  text-white bg-orange-500 h-fit  w-fit rounded-md p-2 hover:bg-orange-800">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginCard;