# YOOLDO-EA-RAFFLE: A Brief Guide

Welcome to the Yooldo Early Access raffle! We're excited to share this opportunity with our community and have made every effort to ensure the process is fair, transparent, and accessible. Below, you'll find a detailed explanation of how the raffle works and the steps we've taken to maintain its integrity.

## What’s The Raffle of Yooldo’s Early Access?

The Yooldo Early Access raffle is our way of celebrating the launch of our platform. Through this event, we're distributing 10,000 OAS tokens each day to our community. The raffle is executed on the BNB Chain, and the odds have been predetermined and hard-coded into our smart contract.

### Raffle Odds Disclosure

The odds for our raffle are fixed and will be publicly disclosed for full transparency. We've coded these odds directly into the raffle's smart contract.

### Code Release

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

### Pre-Announcement

Prior to the raffle, we will share the spreadsheet link showing the odds and the GitHub link to the source code.

### Raffle Execution

The raffle is executed on the BNB Chain. We will announce the completion of each raffle round and share transaction addresses where the details can be verified.

### Announcement

After each raffle round, we will announce the winners and share the transaction addresses for verification.

## How Do We Ensure Fairness?

Fairness is one of our top priorities for the Yooldo Early Access raffle. As part of this commitment, we have hard-coded the raffle odds into our smart contract and have made this information publicly available. In addition to this, our code release and round-by-round announcements provide a transparent view of the raffle's process and results.

Feel free to reach out if you have any questions, and don't forget to check out our [GitHub page](https://github.com/catze-labs/yooldo-ea-raffle).

## Raffle Ratio

The raffle ratio is determined immediately after the smart contract deployment.

|Place|$%|
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
|251-350|0.00000%|

## Raffle History

### Contract Address Link

To Be Added (TBA)

|Raffle|Transaction(TX) Link|
|--|--|
|1st|TBA|
|2nd|TBA|
|...|  ...