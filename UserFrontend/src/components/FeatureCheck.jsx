import { useEffect, useState } from "react";
import axios from "axios"
import FeatureResult from "./FeatureResult";
import API_URL from "../../config/config";
function FeatureCheck(){
     const[featureId,setFeatureId] = useState("");
    const[featureName,setFeatureName] =useState("");
     const[isFeatureName,setIsFeatureName]=useState("");
     const[isEnabled,setIsEnabled] = useState(false);
     const[fetchFeature,setFetchFeature] = useState([]);
     const[data,setData] = useState(null);
    
     async function handleSubmit(e){
        e.preventDefault();
        try {
            
            const userToken = localStorage.getItem("userToken")
            const response = await axios.post(`${API_URL}/api/org/check/feature`,{
                featureKey:featureId,
                featureName:featureName
            },{headers:{Authorization:`Bearer ${userToken}`}})
            setData(response.data.findFeature);
            setIsFeatureName(response.data.findFeature.featureName)
            setIsEnabled(response.data.findFeature.enabled)
         
        } catch (error) {
            console.error(error.message)
            alert('falied to find feature')
        }
     }
     useEffect(()=>{
        const loadAllFeatures = async()=>{
            try {
                const userToken = localStorage.getItem("userToken");
                const response = await axios.get(`${API_URL}/api/org/get/features`,{
                    headers:{Authorization:`Bearer ${userToken}`}
                })
                setFetchFeature(response.data.allfeatures);
               
            } catch (error) {
                console.error(error.message);
            }
        }
        loadAllFeatures();
     },[])
   
    return(
        <>
        <div className="flex flex-col gap-20 ">
        {data && (<FeatureResult isEnabled={isEnabled} isFeatureName={isFeatureName}/>)}
        <div className="h-fit w-120 rounded-md shadow-xl p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent ">check Feature</h1>
            <div className="mt-5">
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit} >
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Feature Id</label>
                        <input type="text" placeholder="XXXXX" className=" p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300 " onChange={(e)=>{setFeatureId(e.target.value); setFeatureName("");}} value={featureId}></input>
                    </div>
                    <div><p className="text-center text-xl">or</p></div>
                   <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Feature Name</label>
                        
                        <select className="p-2 border-2 border-gray-400 rounded-lg hover:border-purple-300 focus:outline-purple-300" value={featureName} onChange={(e) => {setFeatureName(e.target.value); setFeatureId("");}} value={featureName}>
                            <option>Select a Feature</option>
                            {fetchFeature.map((feature)=>(
                                <option key={feature.featureId} value={feature.featureName}>{feature.featureName}</option>
                            ))}
                        </select> 
                    </div>
 
                   
                    <div className="flex justify-center gap-3">
                    
                    <button type="submit" className=" font-bold  text-white bg-purple-500 h-fit  w-30 rounded-md p-2 hover:bg-purple-800">Find</button>
                   
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )

}
export default FeatureCheck;