require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6QHUUMPzzAE6psBKArL4K5yXKJBHQqP-',
      accounts: [ 'd4d6b481c3d653af0777983bc508d5dc75c50538d7b68a9370a1af2c76efd5b2' ]
    }
  }
}