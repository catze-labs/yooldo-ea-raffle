# Raffle History Folder Explanation

In our raffle system, we meticulously document the results of each raffle round to ensure transparency. This documentation is stored in the `raffleHistory` folder.

## Folder Structure

The `raffleHistory` folder contains the results of raffles, derived from the `usedRaffleTicketHistory` folder. The `usedRaffleTicketHistory` holds the records of each user's raffle participation, while `raffleHistory` documents the outcomes, i.e., who won which place.

Inside the `raffleHistory` directory, there is a sub-folder called `addressAndPlaceWinningHistory`. This folder contains pairs of wallet addresses and their corresponding winning places. Each line in the file represents a single user's raffle result, denoting the wallet address of the user and the place they won in the raffle.

## Wallet Address and Place Example

Here is an example of what the wallet address and place pairs look like:

```
0x775524392647631d7219b3a1e6b328cb4f9e3ac2  149
0x775524392647631d7219b3a1e6b328cb4f9e3ac2  147
0x775524392647631d7219b3a1e6b328cb4f9e3ac2  146
0xa551001916727bb94a48fb12549d5903b056b873  76
0xea775c29965a4f1cf581eace8a2d0595e19b9171  160
```

In this example, the user with the wallet address `0x775524392647631d7219b3a1e6b328cb4f9e3ac2` won the 149th, 147th, and 146th places in this raffle.

## Probability of Winning by Place

The chance of winning a raffle and the winning place is dependent on the predefined probability distribution. Here is an example of the probability distribution by place:

| Place | Probability of Winning |
|-------|------------------------|
| 1-1   | 15.00000%              |
| 2-2   | 7.00000%               |
| 3-3   | 2.00000%               |
| 4-20  | 0.85000%               |
| 21-35 | 0.60000%               |
| 36-50 | 0.50000%               |
| 51-80 | 0.35000%               |
| 81-120| 0.30000%               |
| 121-150| 0.25000%              |
| 151-250| 0.15000%              |
| 251-500| 0.00000%              |

In this distribution, the top place has a 15% chance of being won, the second place has a 7% chance, and so on. The probability diminishes as the place number increases.

This raffle system is built to maintain the fairness and transparency of our raffles, and allow everyone to verify the results.