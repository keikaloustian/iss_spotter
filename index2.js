const {/* fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,*/ nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(
    passTimes => {
    for (let i of passTimes) {
      const dur = i.duration
      const time = new Date(0);
      time.setUTCSeconds(i.risetime);
      console.log(`Next pass at ${time} for ${dur} seconds!`);
    }}, 
  )
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
