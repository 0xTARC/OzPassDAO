/// A script for trasnferring tokens from whales into your own account
/// when running a local mainnet fork with ganache.
/// Requires a impersonating the whale accounts with `ganache --wallet.unlockedAccounts="<address_to_impersonate>"`
/// See example of unlocking multiple accounts in the `run-testnet.sh` script

const ethers = require("ethers");
const fs = require("fs");

(async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  try {
    // Steal ETH From Binance wallet
    const ethBalBefore = await provider.getBalance("<your_address>")
    console.log('eth bal before: ', ethBalBefore.toString())

    // steal eth from binance
    const binanceSigner = provider.getSigner(
      "0x28C6c06298d514Db089934071355E5743bf21d60"
    );
    await binanceSigner.sendTransaction({
      to: "<your_address>",
      value: ethers.utils.parseEther("100.0")
    });
    const ethBalAfter = await provider.getBalance("<your_address>")
    console.log('eth bal after: ', ethBalAfter.toString())

    // Steal oz pass
    // tokenid 145 https://etherscan.io/token/0x0599699bbfc3a92589ad249607f7265c08a1fb61?a=145
    // held by 0x2F5...b60
    const ozHolderSigner = provider.getSigner(
      "0x2F5B5F7771aCdc698Bce5FEb53C40084939D7b60"
    );
    const mainnetOzPassAddress = "0x0599699BBFC3a92589AD249607f7265c08A1FB61";
    const ozAbi = JSON.parse(fs.readFileSync("./src/abis/Oz.json"));
    const oz = new ethers.Contract(mainnetOzPassAddress, ozAbi, ozHolderSigner);
    // const from = ozHolderSigner.address;
    const to = "<your_address>";
    const tokenId = 145;
    const amount = 1;
    try {
      const tx = await oz._safeTransferFrom(
        // from,
        to,
        tokenId,
        amount,
      );
      const txResult = await tx.wait(1)
      // console.log('tx result: ', txResult)

      const balance = await oz.balanceOfBatch(['<your_address>'], [145])
      console.log('your balance of oz nft id 145:', balance.toString())
    } catch (e) {
      console.error("\nERROR:\n");
      console.error(e);
      console.error("\nERROR:\n");
    }

    // await stealWhaleTokens(usdcWhaleSigner, toAddress, usdcToken, 10000)
  } catch (e) {
    console.error("Error stealing tokens", e);
  }
})();
