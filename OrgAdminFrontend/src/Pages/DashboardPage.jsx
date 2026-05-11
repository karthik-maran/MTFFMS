

import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import AuthContext from "../AuthContext";


function DashboardPage(){
    const{admin} = useContext(AuthContext);

    return(
        <>
        <div>
            {admin.isAuth ? (  <Dashboard/>) :(<div className="flex justify-center h-screen items-center text-5xl font-bold"><p>login to continue...</p></div>) }
       
           
        </div>
        </>
    )
}

export default DashboardPage;