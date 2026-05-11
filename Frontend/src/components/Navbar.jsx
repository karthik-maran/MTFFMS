import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import Login from "../components/Login";
import SuperContext from "../../SuperContext";

function Navbar(){
    const{superAdmin,setSuperAdmin}=useContext(SuperContext);
    function handleLogout(){
        localStorage.removeItem("super_Admin");
        setSuperAdmin({name:"",isAuth:false})
        alert('logout successfully')
    }

    return(
        <>
        <div className=" relative flex flex-row  bg-purple-500 text-white p-3 text-lg shadow-md">
            <div className="font-bold"><Link to="/" className="font-bold ml-5"></Link>MTFFMS</div>
                <nav className="mx-auto flex gap-10  ">
                <Link to="/" className="hover:font-bold">Home</Link>
                <Link to="/Dashboard" className="hover:font-bold">Dashboard</Link>
                </nav>
            
            <div >
                <nav className="ml-auto">
                {superAdmin.isAuth ? (<div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500" onClick={handleLogout}><Link>Logout</Link></div>) :(<div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"> <Link to="/login">Login</Link></div>)}
               
                </nav>
            </div>
        </div>
        </>     
    )
}

export default Navbar;