const getoauth_url_controller = (req,res)=>{
return res.status(200).json({
    success : true,
    link : `http://localhost:8800/auth/google`
})
}

module.exports = {getoauth_url_controller}