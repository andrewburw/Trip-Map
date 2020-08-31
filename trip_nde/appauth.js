const {Router} = require('express');
const router = Router();
const User = require('./db_schemas/users');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

// /api/auth/register
router.post('/register',[
   check('email','Wrong email!').isEmail(),
   check('password','Minimum password length 6 symbols').isLength({max:20, min: 6}),
   check('name','Minimum Name length 6 symbols').isLength({max:20, min: 6}),
   check('about','Min About length 6 symbols, max 150').isLength({max:150, min:6 })
   // need name check

], async (req,res)=>{
   try {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
     return res.status(400).json({
     errors: errors.array(),
     message: 'Entered wrong data!'
     })
   }
    const {email, password,name,about} = req.body; 
    
    const chExistEmail = await User.findOne({email});
      if (chExistEmail) {
          return res.status(500).json({messege: 'User already exists!Check name or Email!',errorStatus:true});
      }

      const chExistName = await User.findOne({name});
      if (chExistName) {
          return res.status(500).json({messege: 'User already exists!Check name or Email!',errorStatus:true});
      }



    const  hashedPassword = await bcrypt.hash(password,12);
    const user = new User({email,password: hashedPassword,name,about});
   
    await user.save();

    res.status(201).json({message: 'User saved!',errorStatus:false})

  

   } catch (error) {
     console.log(error)
     res.status(500).json({messege: 'Register server error',errorStatus:true});

   }

});

//*************************************************************************************************/
// /api/auth/login
router.post('/login',[
  check('email','Wrong email!').isEmail(),
  check('password','Error in password!').isLength({max:20, min: 6})

], async (req,res)=>{

  try {
    const errors = validationResult(req);
 
    if (!errors.isEmpty()) {
      return res.status(400).json({
      loginError: true,
      message: 'Login error.Check Email or Password!'
      })
    }
     
     const {email, password} = req.body; 
     const user = await User.findOne({email})
       if (!user) {
           return res.status(500).json({messege: 'Login error.Check Email or Password!',loginError: true});
       }
     const isMatch = await bcrypt.compare(password, user.password);
 
     if (!isMatch) {
       return res.status(400).json({message: 'Login error.Check Email or Password!',loginError: true})
     }
      const token = jwt.sign(
        {userID: user.id},
        config.get('keycript'),
        {expiresIn: '5h'})
      
        res.json({token, userID: user.name,loginError: false})

    } catch (error) {
      
      res.status(500).json({messege: 'Login error.Check Email or Password!',loginError: true});
 
    }

});

router.post('/check',verifyToken,function(req,res){


  jwt.verify(req.token,config.get('keycript'), (err,authData)=>{

    if (err) {
      res.json({
        status: false,
        error: err
      })

    } else {

      res.json({
        status: true,
        authData

      })
    }
  })
});

// Autorisation : Bearer <acces_token>
function verifyToken(req,res,next){

   const bearerHeader = req.headers['authorization'];
   //check barer for undifened

   if (typeof bearerHeader !== 'undefined') {
   
   const barer = bearerHeader.split(' ')
   const barerToken = barer[1];
    req.token = barerToken;
    next();

   } else {
     res.send("Autorizacion  : error")
   }

}
module.exports = router;
