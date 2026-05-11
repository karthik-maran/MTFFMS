const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({

    orgId:{type:String, required:true, unique:true},
    organizationName : {type : String, required :true},
    organizationDomain:{type:String,required:true},
    inviteCode:{type:String,required:true,unique:true}
    
},{
    timestamps:true
})

module.exports = mongoose.model("organization",organizationSchema)