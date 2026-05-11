

function FeatureResult({isEnabled,isFeatureName}){
    return(
        <>
        <div className=" flex justify-center items-center w-120 h-20 bg-gray-100 shadow-xl rounded-xl  ">
            {isEnabled ? (<p className="text-center italic text-3xl text-green-500 font-bold">{isFeatureName} is Enabled</p>):(<p className="text-center font-bold italic text-3xl text-red-500">{isFeatureName} is not enabled</p>)}
            
        </div>
        </>
    )
}

export default FeatureResult;