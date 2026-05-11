
const mongoose = require("mongoose");


const featureFlagSchema = new  mongoose.Schema({

 
    featureKey: {
        type: String,
        required: true,
        unique: true
    },
        featureName: {
        type: String,
        required: true
    },


    description: {
        type: String
    },

    enabled: {
        type: Boolean,
        default: false
    },

    orgId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("featureFlag",featureFlagSchema);