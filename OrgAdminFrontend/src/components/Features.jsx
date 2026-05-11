import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


function Features(){
   const[featureData, setFeatureData] = useState([]);
    useEffect(()=>{
      const loadFeature = async()=>{
        try { 
            const token = localStorage.getItem("token");
            const response = await axios.get('http://localhost:3000/api/org/admin/featureflags',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data);
            setFeatureData(response.data.getFeature)
        } catch (error) {
            console.error(error.message);

            
        }
      }
      loadFeature();
    },[])

    async function handleEnable(key,currentValue){
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(`http://localhost:3000/api/org/admin/feature/toggle/${key}`,{
                enabled:!currentValue
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            setFeatureData((prev)=>{
                return prev.map((feature)=> feature.featureKey==key?{...feature, enabled: response.data.feature.enabled}:feature)
            });
        } catch (error) {
            console.error(error.message);
            alert("Failed to update feature");
        }

    }
    
    return(
        <>
        <div className="flex mt-20">
        {featureData.map((feature)=>(
        <div className="flex flex-row gap-5 p-5 justify-start shadow-xl rounded-md w-100  bg-gray-200 mx-10 hover:outline-2 hover:outline-purple-500" key={feature.featureKey}>
            <div className="flex flex-col p-2  gap-3 ">
                    <div>
                        <h1><span className="font-bold text-lg">Feature Name: </span> {feature.featureName}</h1>
                    </div>
                    <div>
                        <h1 className=" italic "><span className="font-bold text-lg">Description:</span > {feature.description}</h1>
                    </div>
            </div>
            <div className="border border-gray-400 h-full"></div>
            
            <div className="flex justify-center items-center ">
                        
                <label className="inline-flex items-center cursor-pointer font-bold gap-5"> 
                    <input type="checkbox" className="sr-only peer"   checked={feature.enabled}  onChange={()=>handleEnable(feature.featureKey,feature.enabled)}  />
                <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:bg-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform after:duration-300 peer-checked:after:translate-x-5"></div>
                </label>
                            
            </div>
            
        </div>
        ))}
        </div>

        </>
    )
}
export default Features;