const jwt = require('jsonwebtoken');



const authMiddleware = (req,res,next)=>{
    try {
        const header = req.headers.authorization;
        if(!header){
            return res.status(401).json({message:"no token provided"});
        }
        const token = header.split(" ")[1];
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.admins = decode;
        next();

    } catch (error) {
        return res.status(401).json({message:"invalid token"})
        
    }
}

module.exports = authMiddleware;