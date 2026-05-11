const mongoose = require("mongoose");

const orgAdminSchema = new mongoose.Schema({
    adminId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    organizationDomain: { type: String, required: true },
    role: { type: String, required: true },
    orgId: { type: String, required: true },
    inviteCode: { type: String, required: true }
});

module.exports = mongoose.model("OrgAdmin", orgAdminSchema);