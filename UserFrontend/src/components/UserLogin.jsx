import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import UserContext from "../../UserContext";
import API_URL from "../../config/config";

function LoginComponent(){
    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[flag,setFlag] =useState(false);
    const {setOrganizationName} = useContext(UserContext)
    const{setUser} =useContext(UserContext)
    
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/api/org/login`,{
                userEmail:email,password:pass
            })
            localStorage.setItem("userToken",response.data.userToken)
            localStorage.setItem("User",response.data.user.userName);
            localStorage.setItem("orgName",response.data.orgName.organizationName)
            setUser({name:response.data.user.userName,isAuth:true})
            setOrganizationName(response.data.orgName.organizationName)
            alert('login successfull');
            navigate('/');
            
        } catch (error) {
            
            console.error(error.message);
            alert('failed to login');
        }
    }
    function handleNav(){
        navigate('/register')
    }
 
    return(
        <>
          <div className="flex-col justify-center items-center p-5  shadow-md rounded-md bg-gray-200 w-100 h-fit " >
            <h1 className="font-bold text-center text-3xl mb-5">Sign In</h1>
            <form onSubmit={handleSubmit} >
            <div className="flex   gap-10">
            
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-bold text-md">Email</label>
                    <input type="email" placeholder="johndoe@gmail.com" className="px-2 py-2 border-2 border-gray-400  bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300" onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
            </div>
                <div className="flex justify-end mr-30"> {flag && (<p className="text-xs text-red-500 text-ce"> Invalid Email</p>)}</div>
              <div className="flex gap-10 py-3">
                <div className="flex flex-col gap-1 justify-center w-full">
                    <label className="font-bold text-md">Password</label>
                    <input type="password" className="px-2 py-2 border-2 border-gray-400 bg-gray-100 rounded-md ring-black-500 hover:border-purple-300  focus:outline-purple-300"  onChange={(e)=>{setPass(e.target.value)}}></input>
                </div>
              
            </div>
            <div className="flex justify-end mr-30"> {flag && (<p className="text-xs text-red-500 text-ce"> Invalid Password</p>)}</div>
            
            <div className="flex "><p className="text-sm">Don't you have an account? <span className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={handleNav}>Register</span></p></div>
            <div className="flex justify-center mt-10">
                <button type="submit" className="p-2 rounded-md font-bold bg-purple-800 text-white text-lg w-fit items-center whitespace-nowrap hover:bg-purple-500">submit</button>
            </div>
            </form>
        </div>

        </>
    )
}

export default LoginComponent;