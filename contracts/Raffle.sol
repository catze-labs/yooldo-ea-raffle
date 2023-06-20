// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Raffle is Ownable {
    uint256[] public ratio;
    uint256 public totalRatio;
    uint256 public pool;
    uint256 public seedNumber;
    address[] private tickets;
    address[] private shuffledTickets;
    uint256[] private shuffledPlaces;
    mapping(address => uint256) private placeByAddress;

    struct RaffleResult {
        uint256 seedNumber;
        address[] tickets;
        uint256[] shuffledPlaces;
        address[] shuffledTickets;
        uint256 pool;
    }

    RaffleResult[] public pastRaffles;

    event seedNumberSet(uint256 seedNumber);
    event AddedTickets(address[] tickets);
    event AddedShuffledTickets(address[] tickets);
    event PoolAmount(uint256 pool);
    event RaffledPlaces(uint256[] place);

    constructor() {
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
            totalRatio = totalRatio + ratio[i];
        }
    }

    function addTickets(address[] memory _tickets) public onlyOwner {
        tickets = _tickets;
        emit AddedTickets(_tickets);
    }

    function setPool(uint256 _pool) public onlyOwner {
        pool = _pool;
        emit PoolAmount(_pool);
    }

    function setSeedNumber() public onlyOwner returns (uint256) {
        seedNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)));
        emit seedNumberSet(seedNumber);
        return seedNumber;
    }

    function addShuffledTickets(address[] memory _tickets) public onlyOwner {
        shuffledTickets = _tickets;
        emit AddedShuffledTickets(shuffledTickets);
    }

    function addShuffledPlaces(uint256[] memory _shuffledPlaces) public onlyOwner {
        shuffledPlaces = _shuffledPlaces;
        emit RaffledPlaces(_shuffledPlaces);
    }

    function setPlaceByAddress() public onlyOwner {
        for (uint256 i = 0; i < tickets.length; i++) {
            placeByAddress[tickets[i]] = shuffledPlaces[i];
        }
    }

    function getPlaceByAddress(address addr) public view returns (uint256) {
        return placeByAddress[addr];
    }

    function getRatioByAddress(address addr) public view returns (uint256) {
        return ratio[placeByAddress[addr]];
    }

    function getPrize(address addr) public view returns (uint256) {
        return pool * ratio[placeByAddress[addr]] / totalRatio;
    }

    function storeRaffleResult() public onlyOwner {
        RaffleResult memory newRaffleResult;
        newRaffleResult.seedNumber = seedNumber;
        newRaffleResult.tickets = tickets;
        newRaffleResult.shuffledPlaces = shuffledPlaces;
        newRaffleResult.shuffledTickets = shuffledTickets;
        newRaffleResult.pool = pool;
        pastRaffles.push(newRaffleResult);

        // Reset current raffle data
        seedNumber = 0;
        tickets = new address[](0);
        shuffledPlaces = new uint256[](0);
        shuffledTickets = new address[](0);
        pool = 0;
    }

    function getPastRaffleResult(uint256 index) public view returns (RaffleResult memory) {
        require(index < pastRaffles.length, "Raffle: No raffle at this index");
        return pastRaffles[index];
    }

}
