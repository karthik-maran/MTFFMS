import {useEffect,useState}from "react";
import {Link} from 'react-router-dom'
import axios from "axios"
import { useContext } from "react";
import AuthContext from "../AuthContext";


function Navbar(){
        const[orgName,setOrgName] = useState();
   
        const{organName,setOrganName} = useContext(AuthContext);
        const{admin,setAdmin} = useContext(AuthContext);
        
      
        function handleLogout(){
            localStorage.removeItem("token");
            localStorage.removeItem("Admin");
            alert("logout successfull")
            if(!localStorage.getItem('Admin' && !localStorage.getItem("token"))){
                setAdmin({name:"",isAuth:false})
            }
            setAdmin({name:"",isAuth:false})
            setOrganName("")

        
         
        }

  


    return(
        <>
        <div className=" relative flex flex-row  bg-purple-500 text-white p-3 text-lg shadow-md">
            <div><Link to="/" className="font-bold ml-5">{organName}</Link></div>
                <nav className="mx-auto flex gap-10  ">
                <Link to="/" className="hover:text-orange-300">Home</Link>
                <Link to="/admin/features" className="hover:text-orange-300">Features</Link>
                <Link to="/admin/dashboard" className="hover:text-orange-300">Dashboard</Link>
                </nav>
            
            <div  >
                <nav className="flex gap-1 ml-auto ">
                
                  {admin.isAuth ? ( <div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"> <Link to="/" onClick={handleLogout}    >Logout</Link></div>):( <Link to="/admin/login" className="hover:text-orange-500">Login</Link>)}
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;