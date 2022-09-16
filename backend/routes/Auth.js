const {Router} = require('express')

const router = Router();
const passport = require('passport')
require('../stratergies/google')

router.use(passport.session())

const isLoggedIn = (req,res,next)=>{
    req.user ? next() : res.sendStatus(401);
}

router.get("/google",
    passport.authenticate('google',{scope:['email','profile']})
)

router.get("/google/callback",
    passport.authenticate('google',{successRedirect:'/auth/protected',failureRedirect:'/auth/login'})
)

router.get("/protected",isLoggedIn,(req,res)=>{
    res.send(`Successful <br> <a href="/auth/logout">Logout</a> Hello ${req.user.displayName}`)

})

router.get("/logout",(req,res)=>{
    req.logout();
    req.session.destroy();
    res.send('Logged out')

})

router.get("/login",(req,res)=>{
    res.send('<a href="/auth/google">Authenticate using google</a>')
    // res.send("Successful")
})


module.exports = router;