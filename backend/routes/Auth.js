const {Router} = require('express')

const router = Router();

router.use("/login",(req,res)=>{
    res.send("Login route")
})

module.exports = router;