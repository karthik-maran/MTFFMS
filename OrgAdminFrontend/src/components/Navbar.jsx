import {useEffect,useState}from "react";
import {Link} from 'react-router-dom'
import axios from "axios"
import { useContext } from "react";
import AuthContext from "../AuthContext";


function Navbar(){
   
        const{organName,setOrganName,admin,setAdmin} = useContext(AuthContext);
       
      
        function handleLogout(){
            localStorage.removeItem("token");
            localStorage.removeItem("Admin");
            localStorage.removeItem("orgName");
            console.log(localStorage.getItem("orgName"));

          
            if(!localStorage.getItem('Admin' && !localStorage.getItem("token"))){
                setAdmin({name:"",isAuth:false})
            }
            setOrganName("")
            alert("logout successfull")
        
         
        }

  


    return(
        <>
        <div className=" relative flex flex-row  bg-purple-500 text-white p-3 text-lg shadow-md">
            <div><Link to="/" className="font-bold ml-5">{organName}</Link></div>
                <nav className="mx-auto flex gap-10  ">
                <Link to="/" className="hover:font-bold">Home</Link>
                <Link to="/admin/features" className="hover:font-bold">Features</Link>
                <Link to="/admin/dashboard" className="hover:font-bold">Dashboard</Link>
                </nav>
            
            <div  >
                <nav className="flex gap-1 ml-auto ">
                
                  {admin.isAuth ? ( <div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"> <Link to="/" onClick={handleLogout}    >Logout</Link></div>):( <div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"><Link to="/admin/login">Login</Link></div>)}
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;