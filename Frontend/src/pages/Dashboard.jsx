import React, { useContext } from "react";
import OrgList from "../components/OrgList";
import SuperContext from "../../SuperContext";



function Dashboard(){
    const {superAdmin} = useContext(SuperContext)
    return(
        <>
         {superAdmin.isAuth ? (<div>  <OrgList/></div>) : (<div className="flex justify-center items-center h-screen font-bold text-5xl"><p>Please login to Create  Organization</p></div>)}
       
        </>
    )
}

export default Dashboard;