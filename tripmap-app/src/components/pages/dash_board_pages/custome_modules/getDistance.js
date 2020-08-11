export default function getDistance(data){
    // This module calculates trip distance
    let result = 0
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
           var R = 6371; // Radius of the earth in km
           var dLat = deg2rad(lat2-lat1);  // deg2rad below
           var dLon = deg2rad(lon2-lon1); 
           var a = 
             Math.sin(dLat/2) * Math.sin(dLat/2) +
             Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
             Math.sin(dLon/2) * Math.sin(dLon/2)
             ; 
           var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
           var d = R * c; // Distance in km
           result = result +d;
           
         }
         
         function deg2rad(deg) {
           return deg * (Math.PI/180)
         } 
   
   
   for (let i = 0; i < data.length-1; i++) {
       
        getDistanceFromLatLonInKm(data[i][0],data[i][1],data[i+1][0],data[i+1][1])
     }
   return result.toFixed(3);   
}