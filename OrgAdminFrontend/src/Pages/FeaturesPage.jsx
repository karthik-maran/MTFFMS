import React from "react";
import Features from "../components/Features";
import {useContext} from "react"
import AuthContext from "../AuthContext";

function FeaturesPage(){
    const{admin} = useContext(AuthContext)
    return (
        <>
        {admin.isAuth ? (  <div className="mt-10"> 
            <h1 className="font-bold text-center mb-5 text-3xl">Dashboard of List of Features</h1>
            <Features/>
         </div>) :(<div className="flex justify-center h-screen items-center text-5xl font-bold"><p>login to continue...</p></div>)}
       
       
        </>
    )
}
export default FeaturesPage;