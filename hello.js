const axios = require("axios");

function getData(done) {
  axios
    .get("https://jsonplaceholder.cypress.io/users/")
    .then(function (response) {
      done({
        code: 200,
        response: response,
      });
    })
    .catch(function (error) {
      done(error);
    });
}

function show(response) {
  console.log(response);
}

getData(show);
