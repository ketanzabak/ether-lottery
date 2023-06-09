pragma solidity ^0.8.19;

//SPDX-License-Identifier: UNLICENSED

contract Lottery{
    address public manager;
    address[] public players;

    constructor(){
        manager = msg.sender;
    }

    /**
     * Allows a player to enter the lottery by sending a minimum amount of ether.
     * Minimum amout of ether to enter is 0.01 
     */
    function enter() public payable{
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }

    /**
     * Generates a random number based on the current block difficulty, timestamp, and player addresses.
     * @return A random number.
     */
    function random() private view returns(uint){
        return uint256(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    /**
     * Picks a random winner among the registered players and transfers the contract balance to their address.
     * Can only be called by the contract manager.
     */
    function pickWinner() public restricted{
        uint index  = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }

    /**
     * Modifier that restricts a function to be called only by the contract manager.
     */
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    /**
     * Retrieves the list of players who have entered the lottery.
     * @return An array of player addresses.
     */
    function getPlayers() public view returns (address[] memory){
        return players;
    }
}