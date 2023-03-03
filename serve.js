const express = require('express')
const mongoose =  require('mongoose')
let {userroute,authroutes} = require('./routes')
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors(demoproject))
// app.use(express.urlencoded({extended:true}))
// require('./routes/user')(app)

app.use(userroute,authroutes)

mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gmc40jo.mongodb.net/test',{useNewUrlParser: true,  useUnifiedTopology: true }).then(()=>{
    console.log('connect succesfull')

}).catch((err)=>console.log("errrrrrrrrrrrrr"))
app.get('/v2',(req,res)=>{
    res.send("hellooo=============")
})
const PORT = process.env.PORT || 3500
app.listen(PORT,()=>{  
    console.log(`server runing on port ${PORT}`)
})