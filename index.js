const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('207.6.12.65', (error, coords) => {
//    if (error) {
//     return console.log("Error: " , error);
//   }
//   console.log('Coordinates: ' , coords);
// })

// fetchISSFlyOverTimes({ latitude: 49.1665898, longitude: -123.133569 }, (error, flyTimes) => {
//   if (error) {
//     return console.log("Error: " , error);
//   }
//   console.log('Flyover times: ' , flyTimes);
// });

