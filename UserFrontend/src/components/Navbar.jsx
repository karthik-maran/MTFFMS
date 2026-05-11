import React from "react";
import {Link} from 'react-router-dom'


function Navbar(){


    return(
        <>
        <div className=" relative flex flex-row  bg-purple-500 text-white p-3 text-lg shadow-md">
            <div><Link to="/" className="font-bold ml-5"></Link></div>
                <nav className="mx-auto flex gap-10  ">
                <Link to="/" className="hover:text-orange-300">Home</Link>
                
                </nav>
            
            <div >
                <nav className="ml-auto">
                <Link to="/login"className="hover:text-orange-300 ">Login</Link>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;