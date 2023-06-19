# YOOLDO-EA-RAFFLE: A Brief Guide

Welcome to the Yooldo Early Access raffle! We're excited to share this opportunity with our community and have made every effort to ensure the process is fair, transparent, and accessible. Below, you'll find a detailed explanation of how the raffle works and the steps we've taken to maintain its integrity.

## What’s The Raffle of Yooldo’s Early Access?

The Yooldo Early Access raffle is our way of celebrating the launch of our platform. Through this event, we're distributing 10,000 OAS tokens each day to our community. The raffle is executed on the BNB Chain, and the odds have been predetermined and hard-coded into our smart contract.

### Raffle Odds Disclosure

The odds for our raffle are fixed and will be publicly disclosed for full transparency. We've coded these odds directly into the raffle's smart contract.

### Code Release

The source code for our raffle smart contract is publicly available on our [GitHub page](https://github.com/catze-labs/yooldo-ea-raffle). This allows anyone to review the mechanisms of the raffle, providing a level of transparency that holds us accountable to our community.

    ratio = new  uint256[](500);
	totalRatio = 0;

	// Set the ratio array according to the conditions
	for(uint i = 0; i < ratio.length; i++
		if(i == 0){
			ratio[i] = 150000; // 15.00000%
		} else  if(i < 2){
			ratio[i] = 70000; // 7.00000%
		} else  if(i < 18){
			ratio[i] = 8500; // 0.85000%
		} else  if(i < 34){
			ratio[i] = 6000; // 0.60000%
		} else  if(i < 50){
			ratio[i] = 5000; // 0.50000%
		} else  if(i < 100){
			ratio[i] = 3500; // 0.35000%
		} else  if(i < 150){
			ratio[i] = 3000; // 0.30000%
		} else  if(i < 200){
			ratio[i] = 2500; // 0.25000%
		} else  if(i < 250){
			ratio[i] = 1500; // 0.15000%
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

The raffle ratio is determined immediately after the smart contract deployment. The code detailing the ratio can be found in our GitHub repository at the following link: [Raffle Ratio Code](https://chat.openai.com/c/42b27712-a6c1-4066-8858-051f6e04d8ab#) (Link To Be Added)

## Raffle History

### Contract Address Link

To Be Added (TBA)

|Raffle|Transaction(TX) Link|
|--|--|
|1st|TBA|
|2nd|TBA|
|...|  ...