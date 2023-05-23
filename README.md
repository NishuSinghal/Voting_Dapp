# Voting_Dapp
The Voting dapp is a decentralized application built on the Ethereum blockchain using Solidity smart
contracts. The app allows voters to register and participate in an election for a limited period of time, as
specified by the election commission.
The app is designed to accommodate up to two candidates who can register with their personal information
such as name, age, party affiliation, and gender. Similarly, voters can also register with their name, age, and
gender to be eligible to participate in the election. The app ensures that each voter can vote only once and
only for one candidate.
The election commission, who deploys the smart contract, can start and end the election process by setting
the start time and end time respectively. Once the election ends, the commission can announce the winner
by running the 'result' function, which determines the candidate with the highest number of votes.
The app also has an 'emergency' function that can be called by the election commission to stop the voting
process in case of an emergency.
