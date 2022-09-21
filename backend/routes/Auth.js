const {Router} = require('express')

const router = Router();
const passport = require('passport')
require('../stratergies/google')

router.use(passport.session())

const isLoggedIn = (req,res,next)=>{
    req.user ? next() : res.sendStatus(401);
}

// Google Login Routes

router.get("/google",
    passport.authenticate('google',{scope:['email','profile']})
)

router.get("/google/callback",
    passport.authenticate('google',{successRedirect:'/auth/protected',failureRedirect:'/auth/login'})
)

router.get("/protected",isLoggedIn,(req,res)=>{
    res.redirect('/')

})

// Login/Logout Routes

router.get("/logout",(req,res,next)=>{
    req.session.destroy();
    res.redirect('/')

})

router.get("/login",(req,res)=>{
    res.send('<a href="/auth/google">Authenticate using google</a>')
    // res.send("Successful")
})


module.exports = router;