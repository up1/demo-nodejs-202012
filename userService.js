const userGateway = require("./userGateway");

const inquiryUser = async () => {
  return await userGateway.getData();
};

module.exports = { inquiryUser };
