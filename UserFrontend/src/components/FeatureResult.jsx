

function FeatureResult({isEnabled,isFeatureName}){
    return(
        <>
        <div className=" flex justify-center items-center w-120 h-20  rounded-xl  ">
            {isEnabled ? (<p className="text-center italic text-3xl text-green-500 font-semibold drop-shadow-2xl">{isFeatureName} is currently enabled</p>):(<p className="text-center font-bold italic text-3xl text-red-500">{isFeatureName} is currently disabled!</p>)}
            
        </div>
        </>
    )
}

export default FeatureResult;