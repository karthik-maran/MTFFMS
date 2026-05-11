import { useState,useEffect } from "react"
import API_URL from "../../config/config";

import axios from "axios"
import PopupWindow from "./PopUpUpdate";
function Dashboard(){
    const[openPopup,setOpenpop] = useState(false);
    const[selectedFeature,setSelectedFeature] = useState();
    const[allFeatureData,setAllFeatureData] = useState([]);
   useEffect(()=>{
      const loadFeature = async()=>{
        try { 
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_URL}/api/org/admin/featureflags`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data);
            setAllFeatureData(response.data.getFeature)
         
        } catch (error) {
            console.error(error.message);

            
        }
      }
      loadFeature();
    },[])

    async function getInfo(id){
    
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_URL}/api/org/admin/get/feature/${id}`,{headers:{Authorization:`Bearer ${token}`}})
            setSelectedFeature(response.data.feature);
      
        } catch (error) {
            console.error(error);
            
        }
    }
    async function handleDelete(id){
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`${API_URL}/api/org/admin/delete/feature/${id}`,{headers:{Authorization:`Bearer ${token}`}})
            console.log(response);
             setAllFeatureData((prev) =>prev.filter((feature) => feature.featureKey !== id));
            alert("deleted successfully")
        } catch (error) {
            console.error(error.message);
            alert('failed to delete')
        }
    }
    function handlePopup(){
       
        setOpenpop(true);
    }
    function handleClosePopup(){
        setOpenpop(false);
    }
   
    return(
        <>
        {openPopup && selectedFeature && (<PopupWindow handleClosePopup={handleClosePopup} selectedFeature={selectedFeature}  
         onUpdateSuccess={(updatedFeature) => {setAllFeatureData((prev)=>prev.map((feature)=>feature.featureKey === updatedFeature.featureKey ? updatedFeature:feature))}}/>)}
         <div className="flex flex-col justify-center ">
        <h1 className="flex justify-center font-bold text-3xl mt-5 ">Dashboard of List of Organizations</h1>
        <div className="flex justify-center">
            <div className=" p-10 h-fit w-fit  shadow-md rounded-md m-10 bg-gray-100 ">
                 <table className="border ">
                         <thead >

                                <tr className="bg-gray-200  " >

                                        <th className="border border-gray-400 py-5 px-10 w-50 ">
                                            Feature Id
                                        </th>

                                        <th className="border border-gray-400 p-5 w-100 ">
                                             Feature Name
                                        </th>
                                        <th className="border border-gray-400 p-5 w-150">
                                            Feature Description
                                        </th>
                                        <th className="border border-gray-400 p-5 w-80">
                                             Actions
                                        </th>

                                </tr>
                                 </thead>
                                <tbody>
                                    {
                                        allFeatureData.map((feature)=>(
                                            <tr key={feature._id}>
                                                <td className="border border-gray-400 p-5 text-center text-lg">{feature.featureKey}</td>
                                                <td className="border border-gray-400 p-5  text-center text-lg">{feature.featureName}</td>
                                                <td className="border border-gray-400 p-5  text-center text-lg">{feature.description}</td>
                                                <td className="border border-gray-400 p-5 text-center">
                                                    <div className="flex gap-3">
                                                    <button className="px-2 py-1 rounded-md font-bold bg-purple-800 text-white  w-30 items-center hover:bg-purple-500 cursor-pointer" onClick={async()=>{await getInfo(feature.featureKey);handlePopup();}}>Update</button>
                                                    <button className="px-2 py-1 rounded-md font-bold bg-purple-800 text-white  w-30 items-center hover:bg-purple-500" onClick={()=>handleDelete(feature.featureKey)} >delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        ))
                                    }
                                </tbody>
                  

                           
                    </table>
            </div>
        </div>
    </div>
        </>
    )
}
export default Dashboard;