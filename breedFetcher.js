const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      callback(error, null);
    } else if (data[0] === undefined) {
      return 'error: Breed not found';
    }
    
    callback(null, data[0]);
   
  });
};







module.exports = {
  fetchBreedDescription
};