const jwt = require('jsonwebtoken')

const generateUserToken = (user)=>{

    return jwt.sign({
        userId:user.userId,
        orgId:user.orgId,
        organizationDomain:user.organizationDomain,
        role:user.role


    },process.env.JWT_USER_SECRET,{expiresIn:"1d"})
}

module.exports = generateUserToken;