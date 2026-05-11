const jwt = require('jsonwebtoken')


const authUserMiddleware = async(req,res,next)=>{
try {
    const header = req.headers.authorization;
    if(!header){
    res.status(404).json({message:"no token provided"})
    }
    const token = header.split(" ")[1];
    const decode = jwt.verify(token,process.env.JWT_USER_SECRET)
    req.user = decode;
    next();

} catch (error) {
    console.error(error.message);
    res.status(401).json({message:"Invalid Token"})
}


}

module.exports = authUserMiddleware;
