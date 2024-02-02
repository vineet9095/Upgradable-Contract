require('@nomicfoundation/hardhat-toolbox')
require('@openzeppelin/hardhat-upgrades');
// require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "AP5CG4w1SQ6kQFVK9ThWSqpiDXWWwWw7";
const SEPOLIA_PRIVATE_KEY = "948c583bbd2a74607ba43085c4c73608d7889065829bc2218458e87980a3b7ab";
const API_KEY = "JMU4U3N84HWDXG6FE25E431PFM3SX6AYJZ";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
