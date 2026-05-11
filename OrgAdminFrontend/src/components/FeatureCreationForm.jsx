import { useState } from "react";
import API_URL from "../../config/config";

import { useFormState } from "react-dom";
import axios from "axios"
function FeatureCreation({setToggleForm}){
    const[featureName,setFeatureName] = useState();
    const[desc,setDesc] = useState();
    const[enable,setEnable] = useState(false);
    function handleClose(){
        setToggleForm(false)
    }
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${API_URL}/api/org/admin/feature/create`,{
                featureName,
                description:desc,
                enabled:enable

            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            alert(response.data.message);
            console.log(response.data.createFeatureFlag);
             setFeatureName("");
             setDesc("");
            setEnable(false);
            setToggleForm(false);
        } catch (error) {
            console.error(error.message);
            alert("Failed to create feature");
        }

    }
    

    return(
        <>
        <div className="h-fit w-150 rounded-md shadow-md p-2 bg-gray-100">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent ">create a new features</h1>
            <div className="mt-5">
                <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit} >
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Feature Name</label>
                        <input type="text" placeholder="johndoe" className=" p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300  focus:outline-purple-300 " onChange={(e)=>setFeatureName(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-bold">Description</label>
                        <textarea className="p-2 border-2 border-gray-400 rounded-lg p-1 hover:border-purple-300 focus:outline-purple-300 h-40" onChange={(e)=>setDesc(e.target.value)}></textarea>
                      
                    </div>
                    <div>
                        <h1 className="italic text-lg mb-3 mt-2">Do you like to enable this feature?</h1>
                        
                       <label className="inline-flex items-center cursor-pointer font-bold gap-2"> Enable
                            <input type="checkbox" className="sr-only peer"      checked={enable} onChange={(e) => setEnable(e.target.checked)}  />
                            <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:bg-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform after:duration-300 peer-checked:after:translate-x-5"></div>
                            </label>
                            
                    </div>
 
                   
                    <div className="flex justify-center gap-3">
                    
                    <button type="submit" className=" font-bold  text-white bg-purple-500 h-fit  w-fit rounded-md p-2 hover:bg-purple-800">submit</button>
                    <button type="button" className="font-bold  text-white bg-purple-500 h-fit  w-fit rounded-md p-2 hover:bg-purple-800" onClick={handleClose}>close</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default FeatureCreation;