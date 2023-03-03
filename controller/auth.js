const Auth = require('../model/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.createsignup = async(req,res)=>{
    const objauth = {
        name:req.body.name,
        password:bcrypt.hashSync(req.body.password,8),
        gmail:req.body.gmail,
        userstypes:req.body.userstypes
    }
    const result = await Auth.create(objauth)
    res.send(result)
}

exports.loginpage = async(req,res)=>{
    try{
        const finduser = await Auth.findOne({name:req.body.name})
        if(!finduser){
            res.send("user not founds")
            return
        }
        const validpassword = bcrypt.compareSync(req.body.password,finduser.password)
        if(!validpassword){
            res.status(401).send({msg:"password is wrong"})
            return
        }
        const token  = jwt.sign({id:finduser.name},"surajsinghh",{
            expiresIn:7100
        })
        res.send({
            name:finduser.name,
            acesstoken:token
        })
           
    }
    catch(err){
        res.send(err.messages)
    }
}

