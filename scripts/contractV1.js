const { ethers, upgrades } = require("hardhat");

async function main() {
  const V1contract = await ethers.getContractFactory("V1");
  console.log("Deploying V1contract...");

  const deploymentOptions = {
    initializer: "initialValue",
    overrides: {
      gasLimit: 12400000,
      gasPrice: 1110000000,
    },
  };

  const v1contract = await upgrades.deployProxy(V1contract, [10], deploymentOptions);

  console.log("Deploying V1contract...Deployed");

  const a = await v1contract.waitForDeployment();
  // console.log("V1 Contract:", a);

  const address = a.target;
  console.log("V1 Contract deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
