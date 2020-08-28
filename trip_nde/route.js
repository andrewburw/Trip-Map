const express = require('express');
const router = express.Router();
const Trips = require('./db_schemas/tripSchema.js');
const User = require('./db_schemas/users.js');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
//const checkAntiSpamDate = require('./custome_modules/dateChecker.js');

 //res.header("Access-Control-Allow-Origin", "*"); 

 router.post('/newtrip',[
  check('tripName','Minimum Title length 6 symbols').isLength({ min: 6 , max: 20}),

], async (req,res)=>{
  try {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
    errors: errors.array(),
    message: 'Entered wrong data!'
    })
  }
   const {tripName,dateAdded, tripBy,tripDescrp,tripRate,tripDistance,tripComents,tripRoute,tripStops} = req.body; 
   const tripAuthor = 'Andrew'
   const trip = new Trips({tripName, tripBy,tripDescrp,tripRate,tripRoute,tripDistance, tripComents,tripStops,dateAdded,tripAuthor});
    
   await trip.save();
   
  // throw new Error('sample')
   res.status(201).json({message: 'User saved!',errorStatus:false})


  
 

  } catch (error) {
    console.log(error)
    res.status(500).json({messege: 'Save trip server error',errorStatus:true});

  }

});



router.get('/trips/:id', async (req, res, next) => {
  try {
     
    let param = {};
    if (req.params.id !== 'null') {
     
      param = {_id:req.params.id};
     
    } 
   const trip = await Trips.find(param)
   
   res.json(trip);

  } catch (e) {
      console.log(e)
    res.status(500).json({message: "Somthing wrong!"});
    next(e) 
  }
})














 /*
const confitoken = 'drive faster then you'
router.get('/tanks', async (req, res, next) => {
  try {
    const tanks = await Tanks.find( { })
   
    res.json(tanks);
   
  } catch (e) {
          
    res.status(500).json({message: "Somthing wrong!"});
    next(e) 
  }
})

router.put("/modyfytank",verifyToken , async(req, res) => { 
   
  
   
  try {
    const tkn =  jwt.verify(req.token,confitoken) 
    
     
    const {id,dataToChange} = req.body;
  
    let user = await User.findOne({_id: tkn.userID});
    let postPermission = checkAntiSpamDate.checkDate({posts: user.postsInOneDay,date: user.postDay},10,false);
   
    if (postPermission.postAllow) {
       if(postPermission.newDay){
         // if date changed set counter to 0
        await User.findOneAndUpdate({_id: tkn.userID}, {$set: {postsInOneDay: 0 }},{new: true});

       }
         await User.findOneAndUpdate({_id: tkn.userID}, { $inc: {postsInOneDay: 1 },
        $set:{postDay:checkAntiSpamDate.checkDate({posts: user.postsInOneDay,date: user.postDay},10,true)}} // checkDate argument set to true (return date string)
        ,{new: true})
        let data = await Tanks.findOneAndUpdate({"id": id}, {$set: dataToChange},{new: true})

        res.json({ message: 'Tank updated!' })

    } else {
     
     throw new Error('Sorry only 10 posts per day from one user!');
    

    }
       
  
   } catch (err) {
   
    res.status(500).json({ message: err.toString(),errorStatus:true});
    
   } 
});


router.post('/newtank',verifyToken , async (req, res) => {
  
  try {
    const tkn =  jwt.verify(req.token,confitoken) 
    
    if (tkn.userID === '5ebc45179868a925dcd3bcbe') {
      const tanks = new Tanks(req.body);

      await tanks.save()
      res.json({message: "New tank saved!"});
    } else {
    
      throw new Error("Sorry you don't have access!");
    }
  
   
  } catch (err) {
          
    res.status(500).json({ message: err.toString(),errorStatus:true});
    
  }
});



router.put("/addfavorites",verifyToken , async(req, res) => { 
  const {id} = req.body;
 
  
  try {
    const tkn =  jwt.verify(req.token,confitoken) 
    
    await User.findOneAndUpdate({_id: tkn.userID}, {$addToSet: {favoriteTank: id }},{new: true});
       
  

    res.json({ message: 'Added  to favorites!' })


   } catch (err) {
    
    res.status(500).json({ message: err.toString(),errorStatus:true});
    
   }
});

router.get("/favorites",verifyToken , async(req, res) => { 
  const {id} = req.body;
 // the first idea was to make favorites in localstorage, but I decided to make a function on the 
 // server by trying to add/teach new functionality through the server
  
  try {
    const tkn =  jwt.verify(req.token,confitoken) 
    const favorites =  await User.findById({_id: tkn.userID});  
      
  
    res.json({ message: 'Done!' ,favorites:favorites.favoriteTank})


   } catch (err) {
     
    res.status(500).json({ message: err.toString(),errorStatus:true});
    
   }
});

router.put("/removefavorites",verifyToken , async(req, res) => { 
  const {id} = req.body;
 

  try {
    
    const tkn =  jwt.verify(req.token,confitoken) 
    
    await User.findOneAndUpdate({_id: tkn.userID}, {$pull: {favoriteTank: id }},{new: true});
       
  

    res.json({ message: 'Removed from favorites!' })


   } catch (err) {
    
    res.status(500).json({ message: err.toString(),errorStatus:true});
    
   }
});
 */

function verifyToken(req,res,next){

  const bearerHeader = req.headers['authorization'];
  //check barer for undifened
 
  if (typeof bearerHeader !== 'undefined') {
  
  const barer = bearerHeader.split(' ')
  const barerToken = barer[1];
   req.token = barerToken;
   next();

  } else {
    res.send("AUTORIZACIJA : error")
  }

}
module.exports = router;
