const request = require('request');
let breed = process.argv[2];

request(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (response.statusCode !== 200) {
    console.log('Error: ', response.statusCode, 'Response: ', response.body);
  } else if (data[0] === undefined) {
    console.log('error: Breed not found');
    return;
  }
  
  console.log(data[0]);
 
});

