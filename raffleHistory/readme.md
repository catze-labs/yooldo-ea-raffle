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

This means that the owner of the wallet address `0x775524392647631d7219b3a1e6b328cb4f9e3ac2` won the 146th, 147th, and 149th places. According to the probability table, the winning probability for places 121-150 is 0.25%. Since this user won three times in this range, they get 0.25% * 3 = 0.75% of the daily raffle pool. For a pool of 10,000, that equals 75.

## Why Participate in the Raffle?

Our game is not just about battling and levelling up; it's also about participating in events, including our thrilling raffles! Participating in these raffles offers an exciting opportunity to win big, and the transparent nature of the process ensures that every player has a fair chance. Moreover, the raffle also serves as a fun break from the regular game routine.

Participating in the raffle could win you substantial in-game rewards, thereby enhancing your overall gaming experience. So why wait? Get your game face on, collect raffle tickets, and increase your chances of winning!

## Have Fun and Good Luck!

We encourage everyone to join our events and games. Your participation not only adds to the fun and excitement, but it also contributes to the rich, dynamic environment of our gaming community. And remember, every raffle offers new opportunities, so keep playing, keep participating, and most importantly, keep having fun. Good luck with your next raffle!

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