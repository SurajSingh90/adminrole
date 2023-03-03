const jwt = require('jsonwebtoken')
const User = require('../model/auth')
const tokenverify = (req,res,next)=>{
    const token = req.headers['x-access-token']
    try{
        if(!token){
            res.send("token is missing")
        }
        jwt.verify(token,"surajsinghh",(err,decode)=>{
            if(err){
                res.status(401).send({message:"Unauthorized!"})
            }
            else{
                req.userId = decode.id;
                next()
            }
        })
    }
    catch(err){
        res.status(401).send({message:" internal error ",err})
        console.log("the Error is ", err)
    }
}

const isadmin = async(req,res,next)=>{ 
    try{
        const finduser = await User.findOne({userId:req.userId})
        // for(let i=0;i<finduser.userstypes;i++){
            if(finduser && finduser.userstypes == "Admin"){
                next()
            }
            else{
                res.send({msg:'admin r ole required'})
            }
        // }
       
    }
    catch(err){
        res.status(401).send({message:" internal error ",err})
        console.log("the Error is ", err)
    }
}

module.exports={
    tokenverify,
    isadmin
}

