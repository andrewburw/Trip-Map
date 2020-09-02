function getProfileStats(data){
    // This module calculates user stats
    let boatResult =   data.filter(x => x.tripBy ==='by boats').length;
    let  otherResult =   data.filter(x => x.tripBy !=='by boats').length;



   return {boatCount: boatResult,otherCount: otherResult};   
}

module.exports = getProfileStats;