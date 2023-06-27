# Understanding the `initialize.ts` script, core of Raffle Process

(other 2 files are simple, only for start and reset.)

This script is meant to set up our Raffle system, prepare the raffle tickets, shuffle them, and distribute them among the participants. Here's an easy-to-understand overview of what the script does:

1.  **Establishing a connection**: The script first connects to the mainnet (the main network where our cryptocurrencies are transacted) using a specific URL.
    
2.  **Contract compilation**: It then compiles a contract. A contract in this context is a set of rules that governs the transactions in the network.
    
3.  **Preparing the raffle tickets**: The script then reads a file that contains data about each participation in the raffles (each line represents a raffle entry made by a user). It transforms this data into a list of wallet addresses, each repeated as many times as the user has participated in the raffles. This ensures that those who participate more have a higher chance of winning.
    
4.  **Interacting with the contract**: The script then interacts with a deployed contract on the mainnet. If there are fewer than 100 tickets, it submits all of them at once to the contract. If there are more, it submits them in groups of 100. It also sets a pool (the total number of possible winners) and a seed number (a starting point for generating random numbers).
    
5.  **Shuffling the tickets**: Using a seed number from the contract, the script shuffles the list of tickets and a list of places (which represents the positions of the tickets). The shuffling ensures that the allocation of the tickets is fair and random.
    
6.  **Submitting the shuffled tickets and places**: The script submits the shuffled tickets and places to the contract, again in groups of 100 if there are more than 100.
    
7.  **Generating a results file**: Finally, the script generates a TSV (Tab-separated Values) file that lists each shuffled ticket along with its corresponding ratio (which represents its proportion of the total pool). This file can be used to verify the results of the raffle.
    

This script is run using Hardhat, a development environment for Ethereum. The comments at the end of the script show how to run it using various networks (testnets and the mainnet).

Remember, all these actions are taken to ensure that the Raffle system is fair and transparent, and to allow everyone to verify the raffle results.