const axios = require("axios");

function getData() {
  return axios
    .get("https://jsonplaceholder.cypress.io/users/1")
    .then(function (response) {
      return {
        id: response.data.id,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
      };
    })
    .catch(function (error) {
      return {
        code: 500,
        response: error,
      };
    });
}

async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.cypress.io/users/1"
    );
    return {
      id: response.data.id,
      name: response.data.name,
      username: response.data.username,
      email: response.data.email,
    };
  } catch (error) {
    return {
      code: 500,
      response: error,
    };
  }
}

module.exports = { getData, getUser };
