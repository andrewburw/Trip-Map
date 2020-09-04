let mongoose = require('mongoose');


let tripSchema = new mongoose.Schema({
          tripAuthor: String,
          tripDate: String,
          tripName: String,
          tripBy: String,
          tripDescrp: String,
          tripRate: Number,
          tripStatus: String,
          tripRoute: [Array],
          tripDistance: Number,
          tripComents: [{
              coordinates: Array,
              comment: String}],
          tripStops: [{
            coordinates: Array,
            comment: String,
            raiting: String,
            title: String
          }],
          dateAdded: String,
          tripColor: String,
          tripAuthorID: String
          
         


},{collection: 'trip'});


module.exports = mongoose.model('trip',tripSchema);
