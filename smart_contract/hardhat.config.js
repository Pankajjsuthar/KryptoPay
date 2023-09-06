require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/699sgXz2-wSTudsiAPllGre1EQTp1BDB",
      chainId: 11155111,
      accounts: [ '887283f641308f960836062135ea92acc27871565ea88d08315d321c95236f28' ]
    }
  }
};