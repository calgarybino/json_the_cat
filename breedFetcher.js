const request = require("request");
console.log(process.argv[2]);
const breedName = process.argv[2];

const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
console.log(apiUrl);
request(apiUrl, (error, resp, body) => {
  const data = JSON.parse(body);
  //console.log(typeof body);
  console.log(data);
  console.log(typeof data);
  if (data.length === 0) {
    console.log("Breed not found.");
    return;
  }
});
