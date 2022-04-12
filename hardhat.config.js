require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/G7Us3-9wTsFOqj85ENYaYBloNGuCcSyw",
      accounts: ["f5aaad99e50e2237d0ec78cce78f1c163f41ecd60b895600f86f17fc72a299f2"]
    }
  },
};
