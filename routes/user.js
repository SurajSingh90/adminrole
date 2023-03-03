const express = require('express')
const routes = express()
const {createuser, updatesuser,deletuser,alluser} = require('../controller/user')
const {tokenverify,isadmin}= require('../midlleware/auth')
routes.post('/v1',[tokenverify],createuser)
routes.post('/upateuser/api/:id', updatesuser)
routes.post('/d1/:id',deletuser)
routes.get('/alluser',[tokenverify,isadmin],alluser)
// module.exports = (app)=>{
//     app.post('/v1',usercontroller.createuser)
//     app.post('/u1/:id',usercontroller.updateuser)
// }
module.exports = {
    userroute:routes
}