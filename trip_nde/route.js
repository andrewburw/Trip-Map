const express = require('express');
const router = express.Router();
const Trips = require('./db_schemas/tripSchema.js');
const User = require('./db_schemas/users.js');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const profileStats = require('./custome_modules/profileStats.js');

 //res.header("Access-Control-Allow-Origin", "*"); 

 router.post('/newtrip',verifyToken,[
  check('tripName','Minimum Title length 6 symbols').isLength({ min: 6 , max: 20}),

], async (req,res)=>{
  try { 
  const tkn =  jwt.verify(req.token,config.get('keycript')) 
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
    errors: errors.array(),
    message: 'Entered wrong data!'
    })
  }
   const { 
     tripName,
     dateAdded, 
     tripBy,
     tripDescrp,
     tripRate,
     tripDistance,
     tripComents,
     tripRoute,
     tripStops,
     tripStatus,
     tripAuthor,
      tripColor} = req.body; 
 
     let  tripAuthorID = tkn.userID;
   const trip = new Trips({
    tripAuthor,
    tripName,
    tripBy,
    tripDescrp,
    tripRate,
    tripRoute,
    tripDistance, 
    tripComents,
    tripStops,
    dateAdded,
    tripStatus,
    tripColor,
    tripAuthorID});



   let tripID = ''; 


   await trip.save().then((trip) => { tripID = trip._id});
   
 

   await User.findOneAndUpdate({_id: tkn.userID}, {$addToSet: {trips: tripID }},{new: true});
  // throw new Error('sample')

   res.status(201).json({message: 'Trip saved!',errorStatus:false})

 
  
 

  } catch (error) {
   
    res.status(500).json({messege: 'Save trip server error',errorStatus:true});

  }

});



router.get('/trips/:id', async (req, res, next) => {
  // For unrigistred users
  try {
     
    let param = {};
    if (req.params.id !== 'null') {
     
      param = {_id:req.params.id};
     
    } 
   const trip = await Trips.find(param)
   
   res.json(trip);

  } catch (e) {
     
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
    
  }
})

router.get('/usertrips',verifyToken, async (req, res, next) => {
  try {
    const tkn =  jwt.verify(req.token,config.get('keycript')) 
   
    
   const user = await User.find({_id:tkn.userID})
   const tripResults = await Trips.find({_id: user[0].trips})

   res.json(tripResults);

  } catch (e) {
     
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
    next(e) 
  }
})

router.delete('/usertrips/deletetrip',verifyToken, async (req, res, next) => {
  try {
    const tkn =  jwt.verify(req.token,config.get('keycript')) ;
   
     let id = mongoose.Types.ObjectId(req.body.deleteID);
    
  
   await User.findOneAndUpdate({_id: tkn.userID}, {$pull: {trips: id}},{ new: true}); 
   await Trips.findByIdAndDelete({_id: id })      
   res.status(201).json({message: 'Trip deleted!',errorStatus:false});

  } catch (e) {
     
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
    
  }
})

router.get('/userprofile',verifyToken, async (req, res, next) => {
  try {
    const tkn =  jwt.verify(req.token,config.get('keycript')) 
   
    
    const user = await User.find({_id:tkn.userID})
    const tripResults = await Trips.find({_id: user[0].trips})
    const {name,trips,about,registerData} = user[0]
    const {boatCount,otherCount} = profileStats(tripResults) // custome module
    
    
   res.json({
     name: name,
     tripsN: trips.length,
     boatTrips: boatCount, 
     otherTrips: otherCount,
     bio:  about,
     regData: registerData
    });

  } catch (e) {
    
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
    next(e) 
  }
})

router.get('/user/:id', async (req, res, next) => {
  try {
     
    let param = {};
    if (req.params.id !== 'null') {
     
      param = {_id:req.params.id};
     
    } 
     
    const user = await User.find(param)
    const tripResults = await Trips.find({_id: user[0].trips})
    const {name,trips,about,registerData} = user[0]
    const {boatCount,otherCount} = profileStats(tripResults) // custom module
   
    res.json({
      name: name,
      tripsN: trips.length,
      boatTrips: boatCount, 
      otherTrips: otherCount,
      bio:  about,
      regData: registerData,
      tripsData: tripResults
     });

  } catch (e) {
     
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
    
  }
})


router.post('/searchroute',verifyToken, async (req, res) => {
  try {
    const tkn =  jwt.verify(req.token,config.get('keycript')); 
   
    let {searchString} = req.body;
   const searchResult = await Trips.find({tripName:{ "$regex": searchString, "$options": "i" }});
    

   res.json(searchResult);

  } catch (e) {
     console.log(e)
    res.status(500).json({message: "Somthing wrong!",errorStatus:true});
  
  }
})


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
