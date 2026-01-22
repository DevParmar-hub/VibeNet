const jwt=require("jsonwebtoken")

module.exports = (req,res,next)=>{
    try{
        const authHeader= req.headers.authorization

        if(!authHeader){
            return res.status(400).json({error:"No token provided"})
        }

        const token=authHeader.split(" ")[1]
        const decoded=jwt.verify(token, process.env.JWT_SECRET)

        req.user=decoded

        next()
    }
    catch(err){
        res.status(400).json({ error: "Invalid or expired token" });
    }
}