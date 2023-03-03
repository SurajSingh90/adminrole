const User = require('../model/user')

exports.createuser = async(req,res)=>{
    const obj ={
        name:req.body.name,
        lastname:req.body.lastname,
        phone:req.body.phone,
        gmail:req.body.gmail
    }
    try{
        const result = await User.create(obj)
        res.status(200).send({msg:"User create Successfull",result:result})
    }
    catch(err){
        console.log(err.message)
    }
  
}


exports.updatesuser = async(req,res)=>{
    try{
        console.log(req.body);
        const finduser = await User.findById({_id:req.params.id})
        if(!finduser){
            res.send("user not founds")
        }
        finduser.name = req.body.name?req.body.name:finduser.name;
        finduser.phone = req.body.phone?req.body.phone:finduser.phone;
        finduser.gmail = req.body.gmail?req.body.gmail:finduser.gmail;
        finduser.lastname = req.body.lastname?req.body.lastname:finduser.lastname

        // console.log(finduser);
        const updateusers = await finduser.save()
        res.status(200).send({msg:"Users Updates succesfull",updateusers:updateusers})
    }
    catch(err){
        console.log(err.message)
    }
}

exports.deletuser = async(req,res)=>{
    const deletbyid = await User.findByIdAndDelete({_id:req.params.id})
   
    res.status(200).send({msg:`Successfully delete user ${req.params.id}`,deletbyid})

}
exports.alluser = async(req,res)=>{
    const getalluser = await User.find()
    res.send(getalluser)
}
