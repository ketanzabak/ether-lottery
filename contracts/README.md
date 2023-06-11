# Lottery Smart Contract

## Prerequisites

- Solidity version: ^0.8.19

## Contract Details

### Contract Address

The contract has been successfully deployed to the Sepolia test network. The contract address where it is deployed is 0x9Eac26529c89F59ed0f134726ddb316E812a0819. This address serves as a unique identifier for the deployed contract on the Sepolia network.

### Contract Owner (Manager)

The contract owner (manager) is the address that deployed the contract.

## Contract Functions

### `enter()`

Allows a player to enter the lottery by sending a minimum amount of Ether (0.01 Ether).

### `random()`

Generates a random number based on the current block difficulty, timestamp, and player addresses.

### `pickWinner()`

Picks a random winner among the registered players and transfers the contract balance to their address. This function can only be called by the contract manager.

### `getPlayers()`

Retrieves the list of players who have entered the lottery.
