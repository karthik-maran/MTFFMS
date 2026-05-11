import React from "react";
import HeroSection from "../components/HeroSection";
import { useContext } from "react";
import AuthContext from "../AuthContext";


function HomePage(){
const{admin} = useContext(AuthContext);

    return(
        <>
        <div>
            {admin.isAuth ?( <HeroSection/>):(<p className="flex justify-center h-screen items-center text-5xl font-bold">login to continue....</p>)}
          
          
        </div>
        </>
    )
};

export default HomePage;