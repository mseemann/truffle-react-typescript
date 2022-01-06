const SampleContract = artifacts.require("SampleContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SampleContract", function (/* accounts */) {
  it("should assert true", async function () {
    await SampleContract.deployed();
    return assert.isTrue(true);
  });
});
