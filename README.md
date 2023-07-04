# YOOLDO-EA-RAFFLE: A Brief Guide

Hello and welcome to the Yooldo Early Access raffle! We're thrilled to offer this unique opportunity to our vibrant community. The key to winning? The more you play, the higher your chances of winning. So, roll up your sleeves, step into the world of Yooldo, and start increasing your odds of taking home the grand prize!

We're excited to share this opportunity with our community and have made every effort to ensure the process is fair, transparent, and accessible. Below, you'll find a detailed explanation of how the raffle works and the steps we've taken to maintain its integrity.

Now, without further ado, let's dive into it!

- [Explaining the Raffle Data](https://github.com/catze-labs/yooldo-ea-raffle/tree/main/usedRaffleTicketHistory)
- [Diving Into the Raffle History](https://github.com/catze-labs/yooldo-ea-raffle/tree/main/raffleHistory)
- [Understanding the  `Raffle.sol`  contract](https://github.com/catze-labs/yooldo-ea-raffle/tree/main/contracts)
- [Understanding the  `initialize.ts`  script, core of Raffle Process](https://github.com/catze-labs/yooldo-ea-raffle/tree/main/scripts)

## Questions

### 1. What is the Yooldo Early Access Raffle?

The Yooldo Early Access raffle is a special event to celebrate the launch of our platform. We're giving away OAS tokens each day to our community. The event is carried out on the BNB Chain and the odds are preset and coded into the smart contract to ensure fairness.

### 2. How does the raffle work?

In the raffle, participants have an opportunity to win OAS tokens based on preset odds. These odds are hard-coded into the smart contract, which means they cannot be altered after the event starts. Winners are chosen randomly by the smart contract.

### 3. How are the odds set for the raffle?

The odds are determined and hardcoded into the smart contract upon its creation. You can find a detailed breakdown of the odds in the raffle documentation under the section titled 'Raffle Ratio'.

### 4. How do I know if I won?

After each round of the raffle, we will announce the winners and share transaction addresses for verification. If you're among the winners, your address will be included in the announcement.
Hard to read? Don't worry. We'll provide details at event page of Yooldo, just like 2nd CBT event.

### 5. What are OAS tokens?

OAS tokens are the native currency for the Oasys. Oasys and Yooldo have a connection through Yooldo Verse, one of verse-layer participants.

### 6. How do I participate in the raffle?

In order to participate in the raffle, you will need to follow the specific instructions provided in the raffle announcement from discord.

### 7. How can I check the result of past raffles?

Past raffles results can be checked under the 'Raffle History' section of the documentation. Here, we provide the contract address link and the transaction link for each raffle.

### 8. How can I be sure this raffle is fair?

We strive for the highest degree of transparency and fairness in our raffle. The odds are set and hard-coded into the smart contract, which anyone can review on our GitHub page. Additionally, we make public announcements about the raffle's process and results.

### 9. Can I participate in the raffle more than once?

Yes, you are allowed to participate in each round of the raffle till using all raffle tickets from playing TroublePunk.

### 10. What happens if I win? How do I claim my OAS tokens?

If you win, the OAS tokens will be transferred to your associated wallet connected to Yooldo. You don't need to manually claim them. However, you may need to add the OAS token contract to your wallet to view your OAS tokens.

### 11. I’ve won but my OAS tokens aren’t showing in my wallet, what should I do?

Firstly, ensure that you have added the OAS token contract to your wallet. If your tokens still do not appear, contact us through Discord and provide your wallet address. We will investigate and resolve the issue as quickly as possible.

### 12. How many OAS tokens could I potentially win?

The number of OAS tokens you can win depends on the prize pool for a particular round and the predefined odds set for the raffle. The precise distribution can be found in the 'Raffle Ratio' section of our documentation.

### 13. Can I sell my OAS tokens?

Yes, OAS tokens can be traded or sold in Central Exchange or Defi.

### 14. What if I still have unanswered questions?

If you have any additional questions or concerns, don't hesitate to reach out to us through Discord. We are here to help ensure your experience with the Yooldo Early Access raffle is a positive one.

## Code Release

The source code for our raffle smart contract is publicly available on our [GitHub page](https://github.com/catze-labs/yooldo-ea-raffle). This allows anyone to review the mechanisms of the raffle, providing a level of transparency that holds us accountable to our community.

 	ratio = new uint256[](500);
 	totalRatio = 0;

 	// Set the ratio array according to the conditions
	for(uint i = 0; i < ratio.length; i++){
		if(i < 1){
			ratio[i] = 1500; // 15.00000%
		} else if(i < 2){
			ratio[i] = 700; // 7.00000%
		} else if(i < 3){
			ratio[i] = 200; // 2.00000%
		} else if(i < 20){
			ratio[i] = 85; // 0.85000%
		} else if(i < 35){
			ratio[i] = 60; // 0.60000%
		} else if(i < 50){
			ratio[i] = 50; // 0.50000%
		} else if(i < 80){
			ratio[i] = 35; // 0.35000%
		} else if(i < 120){
			ratio[i] = 30; // 0.30000%
		} else if(i < 150){
			ratio[i] = 25; // 0.25000%
		} else if(i < 250){
			ratio[i] = 15; // 0.15000%
		} else {
			ratio[i] = 0; // 0%
		}
		totalRatio = totalRatio.add(ratio[i]);
	}

## Raffle Ratio

The raffle ratio is determined immediately after the smart contract deployment.

|Place|Probability of winning|
|--|--|
|1-1|15.00000%|
|2-2|7.00000%|
|3-3|2.00000%|
|4-20|0.85000%|
|21-35|0.60000%|
|36-50|0.50000%|
|51-80|0.35000%|
|81-120|0.30000%|
|121-150|0.25000%|
|151-250|0.15000%|
|251-500|0.00000%|

## Raffle History

### Smart Contract

[https://bscscan.com/address/0x8005f37A291F3C965FeC1A77C99393ea6581C142](https://bscscan.com/address/0x8005f37A291F3C965FeC1A77C99393ea6581C142)

### Details

| Raffle | `Add Tickets` TX Links and Logs | `Set Pool` TX Link and Log | `Set Seed Number` TX Link and Log | `Add Shuffled Tickets` TX Links and Logs | `Add Shuffled Places` TX Links and Logs | `Store Raffle Result` TX Link |
|--------|-------------------------------|-------------------------|---------------------------------|---------------------------------------|-------------------------------------|------------------------------------|
| 1st    | [TxA](https://bscscan.com/tx/0xaa0af691fd33bb5cbeeca0f5a3becdd3d8ee6486eb5dde6ea7091260508c1174) [TxB](https://bscscan.com/tx/0xee7afe613c408aa240e6916a38e18266cd703b660a907af77f17dd96bd57ea21) [TxC](https://bscscan.com/tx/0xb976606b8baca72f7c11e329f08c9343ddde88b5558597a56c2acee1af6b715a) / [LogA](https://bscscan.com/tx/0xaa0af691fd33bb5cbeeca0f5a3becdd3d8ee6486eb5dde6ea7091260508c1174#eventlog) [LogB](https://bscscan.com/tx/0xee7afe613c408aa240e6916a38e18266cd703b660a907af77f17dd96bd57ea21#eventlog) [LogC](https://bscscan.com/tx/0xb976606b8baca72f7c11e329f08c9343ddde88b5558597a56c2acee1af6b715a#eventlog)            | [Tx](https://bscscan.com/tx/0xa0a880ccddef0f007414a3203a42ffba845ca140ac78bba8722c27e77fbf7ba8) / [Log](https://bscscan.com/tx/0xa0a880ccddef0f007414a3203a42ffba845ca140ac78bba8722c27e77fbf7ba8#eventlog)      | [Tx](https://bscscan.com/tx/0x5c9fe2287f221766a9ba413782d04a38e63693ca6ec48bc67f1c2d1514107228) / [Log](https://bscscan.com/tx/0x5c9fe2287f221766a9ba413782d04a38e63693ca6ec48bc67f1c2d1514107228#eventlog)              | [TxA](https://bscscan.com/tx/0xefae4908acedda7d5b775288bfd703bf28be4468a4bb2704894a39c9acd8eac7) [TxB](https://bscscan.com/tx/0xe3dbee48bd57e3cda4d636c9c93f2b15e69bfd7b9c631b047862fce980eb6a7e) [TxC](https://bscscan.com/tx/0xd6fb15097a2bb2183564b49db2b57b106c87f9656ae04dcb3ddf85af8a53510e) / [LogA](https://bscscan.com/tx/0xefae4908acedda7d5b775288bfd703bf28be4468a4bb2704894a39c9acd8eac7#eventlog) [LogB](https://bscscan.com/tx/0xe3dbee48bd57e3cda4d636c9c93f2b15e69bfd7b9c631b047862fce980eb6a7e#eventlog) [LogC](https://bscscan.com/tx/0xd6fb15097a2bb2183564b49db2b57b106c87f9656ae04dcb3ddf85af8a53510e#eventlog)                    | [TxA](https://bscscan.com/tx/0x45b3797dddfab091c2aaaf0eb82ecaf7bb44f03ec10e81b0986ea70e3deb00f7) [TxB](https://bscscan.com/tx/0xee7afe613c408aa240e6916a38e18266cd703b660a907af77f17dd96bd57ea21) [TxC](https://bscscan.com/tx/0xc94e58d3ab461b95a773b20b3518d5978c6b2db85733a7281833c33fe10f59b5) / [LogA](https://bscscan.com/tx/0x9a6d40abf93d2955a640bc08ffb332f6f480521d73b0f56bf05498e2ed85584d#eventlog) [LogB](https://bscscan.com/tx/0x45b3797dddfab091c2aaaf0eb82ecaf7bb44f03ec10e81b0986ea70e3deb00f7#eventlog) [LogC](https://bscscan.com/tx/0xc94e58d3ab461b95a773b20b3518d5978c6b2db85733a7281833c33fe10f59b5#eventlog)                  | [Tx](https://bscscan.com/tx/0x45bc31e3e0751f7203b4b1a1a2c83456838f1011225a9b72b0ba1f2e1c1ada57)                                |
|...     |...                            |...                      |...                               |...                                   |...                                 |...                                 |

## Contact Us

If you have any additional questions, feel free to reach out to us through Discord. Your understanding and enjoyment of our events are our top priority.

## Let's Start Gaming!

Remember, the more you play, the higher your chances of winning! So let's dive into this thrilling world of gaming, raffles, and rewards. Don't forget to stay connected on our Discord channel for all updates and announcements.

Get ready to embark on this exciting journey! Happy gaming, and may the odds be ever in your favor!