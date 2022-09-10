# OzPassDAO: How It Works
OzPassDAO is dedicated to enabling a secondary round of users to access services provided by OzDao through community ownership of an OzDao Pass.

Don't mid-curve this anon.

Ape with conviction.

Or, if you don't know how to read, SEDN ETH

The OzPassDAO operates on a first come, first serve basis. If the required amount to purchase an OzDao Pass is exactly 30 ETH, and you contribute the 31st ETH, you will not get access to the pass and will be refunded your ETH.

We will do this in 4 phases.

## The 4 Phases: TITS (who doesn't love them?)

#### 1. Timed Crowdfunding
In the first phase, those who want community ownership of an OzDao Pass contribute 1 ETH to the trustless TimedCrowdfunding smart contract.

In parallel, I will deploy a Gnosis Safe (OzPassDAO), which will handle the purchasing of the OzDao Pass if the crowdfunding goal is met.

The crowdfunding phase will be active for 1 week.

At the end of this week, there are 2 possibilities:

1. If the amount of ETH is not enough to buy an OzDao pass from the midpoint of all listings on OpenSea (scraped at initialization of contract and hardcoded, say 30 ETH for argument's sake), everyones' ETH can be claimed.

2. If the amount of ETH _is_ enough to buy an OzDao pass (again, let's say 30 ETH), the ETH raised by the contract will be made available to the OzPassDAO to claim. This begins phase 2.

> NOTE: While I, 0xTARC, have deployed this contract, I do not have ownership of contributed funds. Check the code if you dun blv.

#### 2. Initiation of Purchase
In the 2nd phase, I will provide gas to the DAO contract to call `initiateCrowdfundPurchase`. This function will execute multiple transactions:

1. `claim` the ETH in the TimedCrowdfunding contract.

2. Buy an OzDao Pass

3. Set the Owners of the Safe to those whose funds were used to purchase the pass. If 30 ETH was the price at purchase, the first 30 contributors will becomes owners of the Safe. If the 30.5 ETH was the price, because the 31st contributor's ETH was used to purchase, the 31st contributor will also become an owner of the Safe. Also, set the required signatures for transactions to require a majority (> 50%) of Owners to consent.

4. Refund unused ETH to the respective users.

> NOTE: There is soft rug risk here. You are trusting me to call the `initiateCrowdfundPurchase` method. That's because the method has the `onlyDeployer` modifier, which ensures only I can call it. I will not rug you. I am a developer at @fiatdao and would be fired if I rugged a bunch of ETH. I also have shit opsec and would easily be tracked down by various 3 letter agencies. I like to bend rules but not break them. You should also know this risk is temporary - the `initiateCrowdfundPurchase` method also has an `onlyOnce` modifier to ensure that once a purchase is successful, this permissioned method can never be called again.

#### 3. Telegram Access & Governance
The pass is now in the hands of the OZPassDAO's Gnosis Safe. There are now 2 things that contributors can do

1. Use the OzDao Pass. Thanks to the [Zodiac Scope Guard](https://github.com/gnosis/zodiac-guard-scope), any Owner will be allowed to sign CollabLand transactions on behalf of the safe, allowing every member to access OzDao resources, such as Telegram.
    > NOTE: This might not work. Thankfully, CollabLand has [native support for Gnosis Safe](https://medium.com/@anjaliyoung/collab-land-support-for-gnosis-safe-c52f2c48c534), with the caveat that only one Owner can access CollabLand-gated resources for 24-hours at a time.
    > TODO: update this note after trying the first way on testnet

2. Initiate new actions. Members can propose arbitrary transactions (such as purchasing another OzDao Pass, buying `OZPassDAO.eth`, max-bidding a random shitcoin, etc.). Of course, these transactions cannot be executed without a majority vote (see Phase 2, Item 3).


#### 4. Success

??? Profit


## Postscript
I, 0xTARC (and the broader Terrence Andrews Research Center) will not be a one-hit wonder. I am dedicated to becoming a high reputation, pseudonymous, sovereign individual. I have plans for `#ozto100k` and wish to be a net gain to the Oz community (i have extensive development experience in multiple fields including scraping and machine learning).

I also have many plans for future projects. Participation in this project, even if you are refunded, _may_ be rewarded by whitelist access to future work. 

This doesn't have to be a one and done project if you don't want it to be.

(quote tweet about market manipulation DAO)
