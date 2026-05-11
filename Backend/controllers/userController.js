const organizationModel = require("../models/organizationModel");
const userModel = require("../models/user");
const featureModel = require("../models/features");
const generateUserToken = require("../utils/userTokenGenerate")


exports.registerUser = async(req,res)=>{
    try{

    const{userName,userEmail,password} = req.body;
    const emailDomain = userEmail.split("@")[1];
    const organization = await organizationModel.findOne({
        organizationDomain:emailDomain
    })
    if(!organization){
        return res.status(400).json({message:"organization not found"})
    }
    const userRegister = await userModel.create({
        userId:"US"+Math.floor(1000+ Math.random()*9000),
        userName,
        userEmail,
        password,
        organizationDomain:organization.organizationDomain,
        role:"Org_User",
        orgId:organization.orgId
        
        
    })

    if(!userRegister){
        return res.status(400).json({message:"unable to register user userRegister empty"})
    }
    await userRegister.save();
    const userToken = generateUserToken(userRegister);
    res.status(200).json({message:"user saved Successfully",userToken})
}catch (error){
    console.error(error);
    res.status(500).json({message:"something went wrong in saving user details"})
}

}

//user login

exports.userLogin = async(req,res)=>{
    try {
        const {userEmail,password} = req.body;
        const emailDomain = userEmail.split("@")[1];
        const user = await userModel.findOne({
            userEmail
        })
        const orgName = await organizationModel.findOne({
             organizationDomain:emailDomain
        })
        if(!orgName){
            return res.status(404).json({message:"orgName not found"})
        }
        if(!user){
            return res.status(404).json({message:"user not found"});

        }

        const userToken = generateUserToken(user);
        res.status(200).json({message:"user logged in successfully",userToken,user,orgName})

    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"something went wrong on user login"})
        
    }
}

//check the feature available or not

exports.checkFeature = async(req,res)=>{
    try {
        const {featureKey,featureName} = req.body;
        const findFeature = await featureModel.findOne({
            orgId:req.user.orgId,
             $or: [
            { featureKey: featureKey },
            { featureName: featureName }
                ]
    
            
        })
        if(!findFeature){
            return res.status(404).json({message:"unable to find the record"})
        }
        res.status(200).json({message:"feature found!!",findFeature});

    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"something went wrong on find the feature"})
        
    }
}

// This api for showing list of feature in user's end for dropdown box


exports.fetchFeature = async(req,res)=>{
    try {
        const allfeatures = await featureModel.find({
            orgId:req.user.orgId
        })
        if(!allfeatures){
            return res.status(404).json({message:"no features are found"})
        }
        res.status(200).json({message:"successfully fetched all the users",allfeatures})
    } catch (error) {
        console.error(error.message);
        res.status(401).json({message:"something went wrong fetchFeature"})
    }
}