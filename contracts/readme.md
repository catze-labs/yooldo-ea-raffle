
# Understanding the `Raffle.sol` contract

`Raffle.sol` is a smart contract designed to manage a raffle system. Here's an easy-to-understand breakdown of its purpose and functions:

## What it does

This contract manages a raffle where each participant buys tickets to win prizes. The prizes are calculated based on a ratio assigned to each place in the raffle (1st place, 2nd place, etc.). Participants are randomly assigned to these places, so their prize will be a percentage of the total prize pool.

## Key components

### Variables

1.  **ratio**: An array storing the ratio (or percentage) each place in the raffle receives from the total prize pool.
2.  **totalRatio**: The sum of all the ratios, used to calculate each place's prize.
3.  **pool**: The total prize pool.
4.  **seedNumber**: A random number used to shuffle the tickets and places.
5.  **tickets**: The list of all participants' addresses (an address is essentially a participant's ID).
6.  **shuffledTickets & shuffledPlaces**: The lists of shuffled tickets and places.
7.  **placeByAddress**: A mapping from each participant's address to their place in the raffle.
8.  **pastRaffles**: A list of all past raffles, each storing its own seed number, ticket list, shuffled places, shuffled tickets, and prize pool.

### Structs

1.  **RaffleResult**: Represents a past raffle result, storing its own seed number, ticket list, shuffled places, shuffled tickets, and prize pool.

### Events

Events like `seedNumberSet`, `AddedTickets`, `AddedShuffledTickets`, `PoolAmount`, and `RaffledPlaces` are emitted when specific actions take place in the contract. They're used to notify users or other smart contracts when these actions occur.

### Functions

There are several functions that perform different tasks, such as:

    ~ByAddress functions are not used from multiple tickets from ONE wallet address.
    
    Also don't use getPrize function. We'll provide details at Yooldo after this event, just like 2nd CBT event.

1.  **addTickets**: Allows the contract owner to add participants to the raffle.
2.  **setPool**: Sets the total prize pool.
3.  **setSeedNumber**: Sets a random seed number.
4.  **addShuffledTickets & addShuffledPlaces**: Allow the contract owner to set the shuffled tickets and places.
5.  ~~**setPlaceByAddress**: Assigns a place to each participant's address.~~
6.  ~~**getPlaceByAddress & getRatioByAddress**: Allow anyone to check a participant's place and their place's ratio.~~
7.  ~~**getPrize**: Returns a participant's prize based on their place's ratio and the total prize pool.~~
8.  **storeRaffleResult**: Stores the current raffle's result and resets all the current raffle data.
9.  **getPastRaffleResult**: Allows anyone to check a past raffle's result.

This smart contract is designed to ensure that the raffle is fair and transparent, and all the results can be verified by anyone.