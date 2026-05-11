

import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import AuthContext from "../AuthContext";


function DashboardPage(){
    const{admin} = useContext(AuthContext);

    return(
        <>
        <div>
           <Dashboard/>
           
        </div>
        </>
    )
}

export default DashboardPage;