const {get_user_details} = require('../../models/features/userdetails');
const {get_status_code} = require('../../services/common-service');

const getuserdetail_controller = async(req,res)=>{
const {id} = req.user;
try{
   const {user} = await get_user_details(id);

   return res.status(200).json({
    success : true,
    user : user
   })
}
catch(err){
    return res.status(get_status_code(err)).json({
        success : false,
        message : err
    })
}
}
module.exports = {getuserdetail_controller}