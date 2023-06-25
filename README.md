# Ethereum Lottery DApp
The Ethereum Lottery DApp is a decentralized lottery system built on the Ethereum blockchain. It allows individuals to participate in a transparent and secure lottery, where the winner is randomly selected among the registered players. The winning prize is automatically transferred to the winner's account. The lottery process can only be initiated by the manager of the contract, who is the creator of the lottery.

## Features
<li> 
    <b>Decentralized:</b> The lottery system is built on the Ethereum blockchain, ensuring transparency, fairness, and trust through the use of smart contracts.
</li>
<li>
    <b>Participant Enrollment:</b> Multiple players can enroll in the lottery by interacting with the smart contract, providing their necessary details for participation.
</li>
<li>
    <b>Random Winner Selection:</b> The manager of the contract initiates the process to select a random winner among all registered players. The selection process is fair and unbiased, leveraging the inherent security and randomness of blockchain.
</li>
<li>
    <b>Automatic Prize Transfer:</b> Once a winner is selected, the smart contract automatically transfers the winning prize to the winner's Ethereum wallet address securely and instantly.
</li>
<li>
    <b>Manager Privileges:</b> The manager of the contract has the authority to initiate the winner selection process, ensuring the integrity of the lottery.
</li>

## Getting Started
To get started with the Ethereum Lottery DApp, follow these steps:

<ul>
    <li>Clone the repository: git clone https://github.com/ketanzabak/ethereum-lottery-dapp.git</li>
    <li>Install the necessary dependencies: npm install</li>
</ul>

## Compile & Test Smart Contract
<ul>
    <li>Make sure you have the necessary dependencies installed by running command "npm install"</li>
    <li>Compile the smart contract by running the command: truffle compile
    </li>
    <li>Run the test cases by executing the command: truffle test
    </li>
</ul>

## Deploy Smart Contract on Test Network
<ul>
    <li>Create .env file in the root folder where truffle-config.js file is present</li>
    <li> Add MNEMONIC, PROJECT_ID & API_SECRET in .env file. Mnemonic is the twelve word phrase the wallet uses to generate public/private key pairs. PROJECT_ID & API_SECRET are configured from Infura's project setup.
    </li>
    <li>Run command : truffle migrate --network sepolia </li> 
</ul>

## Start server
<ul>
    <li>Change directory to client</li>
    <li>Run command: npm start </li>
    <li>Go to browser and hit url : http://localhost:3000 </li>
</ul>


## Disclaimer
Please note that this project is only for study purpose.