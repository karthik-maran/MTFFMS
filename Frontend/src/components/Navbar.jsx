import React from "react";
import {Link} from 'react-router-dom'
import Login from "../components/Login";

function Navbar(){


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
                <Link to="/login"className="hover:font-bold ">Login</Link>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;