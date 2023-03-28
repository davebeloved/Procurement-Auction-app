
const hre = require("hardhat");

const main = async () => {

  const Tender = await hre.ethers.getContractFactory("Tender");
  const tender = await Tender.deploy();

  await tender.deployed();

  console.log(
    `Transactions  deployed to ${tender.address}`
  );
}


const runMain = async () => {
  try{
    await main();
    process.exit(0);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
