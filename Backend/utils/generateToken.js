const jwt = require("jsonwebtoken");

const generateToken =(admins)=>{

    return jwt.sign({
        adminId:admins.adminId,
        orgId:admins.orgId,
        organizationDomain:admins.organizationDomain,
        role:admins.role
    },process.env.JWT_SECRET,{expiresIn:"1d"})

}

module.exports = generateToken;