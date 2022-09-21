require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('../database/schemas/User')

passport.use(new GoogleStrategy({
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3333/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    try{
        console.log(profile);
        console.log(request);
        const googleUser = await User.findOne({googleId: profile.id})
        if(googleUser){
            return done(null,googleUser)
        }else{
            const newUser = await User.create({googleId: profile.id})
                return done(null,newUser);
        }
    }catch(err){
        console.log(err);
    }
}
));

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser(async (id,done)=>{
    try{
        const user = await User.findById(id);
        if(!user) throw new Error("No such user found")
        else done(null,user);
    }catch(e){
        console.log(e);
        done(e,null)
    }
})