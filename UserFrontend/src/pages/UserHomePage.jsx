import { useContext } from "react";
import FeatureCheck from "../components/FeatureCheck";
import UserContext from "../../UserContext";



function UserHomePage(){
    const {organizationName} = useContext(UserContext);
    const{user}=useContext(UserContext)
    console.log(organizationName)
    return(
        <>
        {user.isAuth && 
        <div className="flex flex-col gap-10  justify-center items-center mb-30 mt-10">  
            <h1 className="font-bold text-5xl ">{organizationName}</h1>
            <p className="italic text-xl">Welcome, <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">{user.name}</span></p>
         </div>}
        <div className="flex  justify-center items-center h-100% ">  
          {user.isAuth ? ( <FeatureCheck/>):(<div className="flex justify-center items-center h-screen"><p className="text-5xl italic">login to continue....</p></div>)}
        </div>
     
        </>
    )
}

export default UserHomePage;