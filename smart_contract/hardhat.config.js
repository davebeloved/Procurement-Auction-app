require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/B9cyQ-SJojbI_HZ91MdeE7xM_YCwYDuV",
      accounts: ["e947d639347b7c57776b8c7d9a5b4891b5678c5d53dd69cc015c4c198a9aa680"]
    }
  }
};



