const SampleContract = artifacts.require("SampleContract");

module.exports = function (deployer) {
    deployer.deploy(SampleContract);
}as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
