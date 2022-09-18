import { ethers } from "hardhat";

async function main() {
  const fakePassContract = await ethers.getContractFactory("FakePass");
  const FakePass = await fakePassContract.deploy();

  await FakePass.deployed();
  console.log(`FakePass deployed to ${FakePass.address}`);

  const to = "0x2f38f10e1862752Bc061624cDC6A508C3767032F";
  const tokenId = "1";
  await FakePass.safeMint(to, tokenId);

  console.log(`FakePass w/ id ${tokenId} minted to ${to}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
