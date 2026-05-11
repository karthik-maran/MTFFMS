import React, { useContext } from "react";
import {Link} from 'react-router-dom'

import UserContext from "../../UserContext";


function Navbar(){
    const{user,setUser} = useContext(UserContext)
    const{organizationName,setOrganizationName}=useContext(UserContext)
    function handleLogout(){
       localStorage.removeItem("userToken");
       localStorage.removeItem("User")
       localStorage.removeItem("orgName");
        setUser({name:"",isAuth:false})
        setOrganizationName("");
        alert('logout successfully')

    }
    console.log(user)


    return(
        <>
        <div className=" relative flex flex-row  bg-purple-500 text-white p-3 text-lg shadow-md">
            <div><Link to="/" className="font-bold ml-5">{organizationName}</Link></div>
                <nav className="mx-auto flex gap-10  ">
               
                </nav>
            
            <div >
                <nav className="ml-auto ">
                    {user.isAuth ? (  <div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"><Link to="/" onClick={handleLogout}>Logout</Link></div>):( <div className="outline-2 p-1 rounded-md hover:bg-white hover:text-purple-500 hover:outline-purple-500"> <Link to="/login">Login</Link></div>)}
              
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;