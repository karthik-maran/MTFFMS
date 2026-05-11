import { useState } from "react";
import axios from "axios"
import FeatureResult from "./FeatureResult";

function FeatureCheck(){
     const[featureId,setFeatureId] = useState("");
     const[isFeatureName,setIsFeatureName]=useState("");
     const[isEnabled,setIsEnabled] = useState(false);
     const[data,setData] = useState(null);
     async function handleSubmit(e){
        e.preventDefault();
        try {
            const userToken = localStorage.getItem("userToken")
            const response = await axios.post('http://localhost:3000/api/org/check/feature',{
                featureKey:featureId
            },{headers:{Authorization:`Bearer ${userToken}`}})
            setData(response.data.findFeature);
            setIsFeatureName(response.data.findFeature.featureName)
            setIsEnabled(response.data.findFeature.enabled)
            alert('feature found!')
        } catch (error) {
            console.error(error.message)
            alert('falied to find feature')
        }
     }
    return(
        <>
        <div className="flex flex-col gap-20 ">
        {data && (<FeatureResult isEnabled={isEnabled} isFeatureName={isFeatureName}/>)}
        <div className="h-fit w-150 rounded-md shadow-md p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent ">checkFeature</h1>
            <div className="mt-5">
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit} >
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Feature Id</label>
                        <input type="text" placeholder="johndoe" className=" p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300 " onChange={(e)=>setFeatureId(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Feature Name</label>
                        <input className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300 focus:outline-purple-300 " ></input>
                      
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