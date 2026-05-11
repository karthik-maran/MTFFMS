import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import SuperContext from "../../SuperContext";

function HomePage(){
    const{superAdmin} = useContext(SuperContext);
    return(
        <>
        {superAdmin.isAuth ? (<div> <HeroSection/></div>) : (<div className="flex justify-center items-center h-screen font-bold text-5xl"><p>Please login to Create  Organization</p></div>)}
       
        </>
    )
}

export default HomePage;