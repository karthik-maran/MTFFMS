const orgAdminModel = require("../models/orgAdmin");
const organizationModel = require("../models/organizationModel");
const generateToken = require("../utils/generateToken");
const FeaturesModel= require("../models/features");



exports.orgAdminRegister = async (req,res)=>{
    try {
        const{name,email,password,organizationDomain,orgId} = req.body;
        const orgAdmin = await orgAdminModel.create({adminId:"AD"+Math.floor(1000+Math.random()*9000),
            name,
            email,
            password,
            organizationDomain:req.body.organizationDomain,
            role :"Org_Admin",
            orgId:req.body.orgId,
            inviteCode:req.body.inviteCode});
        
            const org = await organizationModel.findOne(
                {
                    orgId:req.body.orgId,
                    inviteCode:req.body.inviteCode,
                    organizationDomain:req.body.organizationDomain
                }
            )
            console.log(org);
            if(!org){
                res.status(401).json({message:"Access Denied"});
            }
        const token = generateToken(orgAdmin);
        
        res.status(200).json({message:"orgAdmin data saved Successfully",token});


    } catch (error) {
        console.error(error.message);
        return res.status(400).json({message:"failed to store the org admin data"});
        
        
    }
}

// org Admis login logic

exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const admin = await orgAdminModel.findOne({
            email

        })
        const orgName = await organizationModel.findOne({
            orgId:admin.orgId
        })
        if(!admin){
            return res.status(400).json({message:" admin not found"})
        }
        const token = generateToken(admin);
        res.status(200).json({message:"login Successfull",token,adminName: admin.name,orgName:orgName.organizationName});
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({message:"failed to authenticate admin"});
    }
}

//get organization names
 
exports.getOrgName = async(req,res)=>{
    try {
        const orgName = await organizationModel.findOne({
        orgId:req.admins.orgId
    })
    if(!orgName){
        return res.status(404).json({message:"organization name not found"})
    }
    res.status(200).json({organizationName:orgName.organizationName})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"something went wrong"})
        
    }

}

//Create Features

exports.createFeature = async(req,res)=>{
try {
    const{featureName,description,enabled} = req.body;
     const orgIdExist = await organizationModel.findOne({
         orgId:req.admins.orgId
    })
    if(!orgIdExist){
        return res.status(404).json({message:"orgId doesn't exist"})
    }


    const CreateFeatureFlag = await FeaturesModel.create({
    featureKey:"FE"+Math.floor(1000+Math.random()*9000),
    featureName,
    description,
    enabled,
    orgId:req.admins.orgId

 });
   
   res.status(201).json({
            message: "Feature created successfully",
           CreateFeatureFlag
        });

} catch (error) {
    console.error(error.message);
        res.status(500).json({
            message: "Something went wrong"});
    
}
 
}

//get features for orgadmin dashboard

exports.getFeatureFlags = async(req,res)=>{
    try {
        const getFeature = await FeaturesModel.find({
            orgId:req.admins.orgId
        })
        if(!getFeature){
            return res.status(404).json({message:"no features are found that admin created for particular organization"})
        }
        res.status(200).json({message:"features found ",getFeature})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"something went wrong in getFeatureflags"})
    }
}

//toggle dashboard that will reflect 

exports.toggleFeature = async(req,res)=>{
    try {
        const feature = await FeaturesModel.findOne({
            featureKey:req.params.featureKey,
            orgId:req.admins.orgId
        })
         if (!feature) {
            return res.status(404).json({message: "Feature not found"});
         }
        feature.enabled = req.body.enabled;
        await feature.save();
         res.status(200).json({message: "Feature updated successfully",feature});
    
    } catch (error) {
         console.error(error.message);
        res.status(500).json({message: "Something went wrong"});
        
    }

}

//update existing features logix

exports.updateFeatureById = async(req,res)=>{
    try {
         const feature = await FeaturesModel.findOne({
            featureKey:req.params.featureKey,
            orgId:req.admins.orgId
        })
         if (!feature) {
            return res.status(404).json({message: "Feature not found"});
         }
           feature.featureName = req.body.featureName || feature.featureName;
           feature.description =req.body.description || feature.description;

            await feature.save();

         res.status(200).json({message:"feature found",feature})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: "Something went wrong on update Features"});
        
    }
}

//get features by id
exports.getFeatureById = async(req,res)=>{
    try {
         const feature = await FeaturesModel.findOne({
            featureKey:req.params.featureKey,
            orgId:req.admins.orgId
        })
         if (!feature) {
            return res.status(404).json({message: "Feature not found"});
         }
         

         res.status(200).json({message:"feature found",feature})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: "Something went wrong on get Features"});
        
    }
}

//delete the feature
exports.deleteFeatureById = async(req,res)=>{
    try {
       const feature = await FeaturesModel.findOneAndDelete({
        featureKey:req.params.featureKey,
        orgId:req.admins.orgId
       }) 
       if(!feature){
        return res.status(404).json({message:"not found"});
       }
       res.status(200).json({message:"deleted successfully"})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"failed to delete something went wrong"})
    }
}
