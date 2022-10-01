const request = require('request-promise-native');


const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(ipData) {
  return request(`http://ipwho.is/${JSON.parse(ipData).ip}`);
};

const fetchISSFlyOverTimes = function(locData) {
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${JSON.parse(locData).latitude}&lon=${JSON.parse(locData).longitude}`)
  
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(flyData => JSON.parse(flyData).response)
};

module.exports = { /*fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,*/ nextISSTimesForMyLocation };

