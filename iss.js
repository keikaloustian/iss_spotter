/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }
    
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    return callback(error, ip);

  });

};

const fetchCoordsByIP = function(ip, callback) {

  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }

    const parsed = JSON.parse(body);
    if (!parsed.success) {
      return callback(`Mission failed. We'll get 'em next time (Success = ${parsed.success}, ${parsed.message})`, null);
    }
    
    const { latitude, longitude } = parsed;
    callback(error, {latitude, longitude});
  });

};

module.exports = { fetchMyIP, fetchCoordsByIP };

