# Explaining the Raffle Data

In our Raffle system, we keep track of each participation of a user in a raffle through records. Each record contains important information about a participation, and is stored in a format called TSV (Tab-separated Values). Let's explain what each piece of data represents:

- `id`: This is a unique identifier for each record. It helps us keep track of every single participation individually.

- `created`: This is the date and time when the participation occurred. The format of this date-time is `YYYY-MM-DD HH:MM:SS.ssssss`, where `YYYY` is the four-digit year, `MM` is the two-digit month, `DD` is the two-digit day, `HH` is the two-digit hour in 24-hour format, `MM` is the two-digit minute, `SS` is the two-digit second, and `ssssss` is the microsecond.

- `userId`: This is the unique identifier of the user who participated in the raffle. Each user has a unique userId.

- `walletAddress`: This is the cryptocurrency wallet address of the user. It's like a bank account number for cryptocurrencies. They are from MetaMask, Venly or FaceWallet etc.

- `usedRaffleCount`: This is the ticket counts the user used for the raffle at `created` date-time. 

For example, consider the following record:

```
1	2023-06-17 01:45:18.813000	22	0xdaB074eA22A4F02FBDa86caDa895E0D7327E4562	6
```

This means that the participation with `id` 1 happened on `2023-06-17` at `01:45:18.813000` by the user with `userId` 22, whose wallet address is `0xdaB074eA22A4F02FBDa86caDa895E0D7327E4562`, and he/she used 6 raffle tickets.

We use these records to maintain the fairness and transparency of our Raffle system, and allow everyone to verify the raffle results.