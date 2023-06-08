const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(apiUrl, (error, resp, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found.");
      return;
    }
    const breedDescription = data[0].description;
    callback(null, breedDescription);
  });
};
module.exports = { fetchBreedDescription };
