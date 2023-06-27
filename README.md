# YOOLDO-EA-RAFFLE: A Brief Guide

Welcome to the Yooldo Early Access raffle! We're excited to share this opportunity with our community and have made every effort to ensure the process is fair, transparent, and accessible. Below, you'll find a detailed explanation of how the raffle works and the steps we've taken to maintain its integrity.

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

### Contract Address Link

To Be Added (TBA)

|Raffle|Transaction(TX) Link|
|--|--|
|1st|TBA|
|2nd|TBA|
|...|  ...

## Contact Us

If you have any additional questions, feel free to reach out to us through Discord. Your understanding and enjoyment of our events are our top priority.