import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import API_URL from "../../config/config";
import axios from "axios"

function Register(){
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    const[confPass,setConfPass] = useState("");
    const[flag,setFlag] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        try {
            if(password !== confPass){
                setFlag(true)
                alert('confirm password should match the password')
                return;
            }
            const response = await axios.post(`${API_URL}/api/org/signup`,{
                userName:username,
                userEmail:email,
                password:password
            })
            localStorage.setItem("userToken",response.data.userToken)
            alert('Register user successfully')

            navigate('/login')
            
        } catch (error) {
            
            console.error(error.message);
            alert('failed to register')
        }
    }
    function handleNav(){
        navigate('/login')
    }

    return(
        <>
         <div className="flex-col justify-center items-center p-5  shadow-md rounded-md bg-gray-200 w-150 h-fit " >
            <h1 className="font-bold text-center text-3xl mb-5">Registration</h1>
            <form onSubmit={handleSubmit} >
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
                    <label className="font-bold text-md">Confirm Password</label>
                    <input type="password"  className="px-2 py-2 border-2 border-gray-400  bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setConfPass(e.target.value)}} ></input>
                </div>
            </div>
            <div className="flex justify-end mr-30"> {flag && (<p className="text-xs text-red-500 text-ce"> password should be same</p>)}</div>
            
            <div className="flex "><p className="text-sm">If you already have an account <span className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"  onClick={handleNav}>Login</span></p></div>
            <div className="flex justify-center mt-10">
                <button type="submit" className="p-2 rounded-md font-bold bg-purple-800 text-white text-lg w-fit items-center whitespace-nowrap hover:bg-purple-500">submit</button>
            </div>
            </form>
        </div>

        </>
    )
}
export default Register