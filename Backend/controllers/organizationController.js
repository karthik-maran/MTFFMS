const { response } = require("express");
const organizationModel = require("../models/organizationModel")
const orgAdmin = require("../models/orgAdmin")
const features = require("../models/features");


//register post logic
exports.register = async(req,res)=>{

    try{
    const {organizationName,organizationDomain } = req.body;
    organization = new organizationModel({orgId:"ORG"+Math.floor(1000+Math.random()*9000 ),organizationName,organizationDomain,inviteCode:"INV"+Math.floor(1000+Math.random()*9000)})
    await organization.save();
    res.status(201).json({message :"organizationName Register Successfully"})
    }catch(error){
       res.status(500).json({message:"internal server error"});
    }


}
//register get logic
exports.getRegister = async(req,res)=>{
    try {
        const organization = await organizationModel.find();
        res.status(200).json(organization);
     
    } catch (error) {
        res.status(404).json({message:"not found"})
        
    }
}

//register delete logic

exports.delRegister = async (req, res) => {
    try {
        const { orgId } = req.params;

        console.log("Deleting orgId:", orgId);

        const organization = await organizationModel.findOneAndDelete({ orgId });

        if (!organization) {
            return res.status(404).json({ message: "not found" });
        }

        const adminResult = await orgAdmin.deleteMany({ orgId });
        const featureResult = await features.deleteMany({ orgId });

        console.log("Admins deleted:", adminResult.deletedCount);
        console.log("Features deleted:", featureResult.deletedCount);

        return res.status(200).json({
            message: "deleted Successfully"
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "internal server error"
        });
    }
};

//User register its for sample collections