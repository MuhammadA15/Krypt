require('@nomiclabs/hardhat-waffle');

const { ROPSTEN_URL, METAMASK_PRIVATE_KEY } = require("./SecretVariables.js")

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: ROPSTEN_URL,
      accounts: [ METAMASK_PRIVATE_KEY ]
    }
  }
}