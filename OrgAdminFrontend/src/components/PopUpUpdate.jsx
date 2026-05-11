import axios from "axios";
import { useState,useEffect } from "react";
import API_URL from "../../config/config";
function PopupWindow({selectedFeature, handleClosePopup,onUpdateSuccess}) {

const[featureName,setFeatureName] = useState("");
const[desc,setDesc] = useState("");

useEffect(() => {
  if (selectedFeature) {
    setFeatureName(selectedFeature.featureName);
    setDesc(selectedFeature.description);
  }
}, [selectedFeature]);
async function handleSubmit(e,id){
    e.preventDefault();
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(`${API_URL}/api/org/admin/update/feature/${id}`,{
            featureName:featureName,
            description:desc
        },{
            headers:{Authorization:`Bearer ${token}`}
        })
        onUpdateSuccess(response.data.feature);
        handleClosePopup();
        
    } catch (error) {
        console.error(error.message)
        alert("failed to update");
        
    }
}
   
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="h-fit w-150 rounded-md shadow-md p-4 bg-gray-100">
        <h1 className="text-center font-bold text-xl bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
          update a Feature
        </h1>

        <div className="mt-5">
          <form
            className="flex flex-col gap-3 p-2"
            onSubmit={(e)=>handleSubmit(e,selectedFeature.featureKey)}
          >
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold">Feature Name</label>
              <input
                type="text"
                value={featureName}
                placeholder="Dark Mode"
                className="p-2 border-2 border-gray-400 rounded-lg hover:border-purple-300 focus:outline-purple-300"
                onChange={(e) =>
                  setFeatureName(e.target.value)
                }
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label className="font-bold">Description</label>
              <textarea
                value={desc}
                className="p-2 border-2 border-gray-400 rounded-lg hover:border-purple-300 focus:outline-purple-300 h-40"
                onChange={(e) =>
                  setDesc(e.target.value)
                }
              />
            </div>

            <div className="flex justify-center gap-3">
              <button
                type="submit"
                className="font-bold text-white bg-purple-500 rounded-md p-2 hover:bg-purple-800"
              >
                Save
              </button>

              <button
                type="button"
                onClick={handleClosePopup}
                className="font-bold text-white bg-gray-500 rounded-md p-2 hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWindow;