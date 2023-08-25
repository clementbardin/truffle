const mariage = artifacts.require("mariage");

module.exports = function (deployer) {
  deployer.deploy(mariage);
};
