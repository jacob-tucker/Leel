# Overview

[![dummy photo](https://media.discordapp.net/attachments/749647287667523604/750071226969358356/leel_logo_together.png)](https://play.onflow.org/0d507a56-cf87-4232-a5dd-bcc585b64551)

Leel is a decentralized application developed on the [Flow](https://docs.onflow.org/docs/introduction) blockchain using a resource-oriented language, [Cadence](https://docs.onflow.org/docs/cadence).

## Purpose

To create an equitable system where consumers can capitalize on their unique customer value to receive individualized rewards and foster opportunities for social good.

## Problem

Consumers have limited opportunity to leverage their unique customer value.
They are passive participants, not owners of their data. 

## My Dapp

This project is for the blockchain application My Dapp. It contains code for the Smart Contract, web-based dapp and NodeJS server.

# Pre-requisites

In order to develop and build "My Dapp," the following pre-requisites must be installed:

* [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing Javascript)
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))
* [Flow CLI](https://docs.onflow.org/docs/cli) (https://docs.onflow.org/docs/cli) (after installation run `flow cadence install-vscode-extension` to enable code highlighting for Cadence source files)

# Installation

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn` This will fetch all required dependencies. The process will take 1-3 minutes and while it is in progress you can move on to the next step.

# Build, Deploy and Test

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn start` This will run all the dev scripts in each project package.json.

To view your dapp, open your browser to http://localhost:5000

We ♥️ developers and want you to have an awesome experience. You should be experiencing Dappiness at this point. If not, let us know and we will help. Visit [https://support.trycrypto.com](https://support.trycrypto.com) or hit us up on Twitter @TryCrypto.


## Smart Contract

`lerna run deploy --scope=@trycrypto/dappstarter-dapplib --stream` to compile contracts/*.sol files, deploy them to the blockchain. 

## Dapp

Run the dapp in a separate terminal. You *must* have run `npm run deploy` for the dapp to see most recent smart contract changes.

`lerna run dev --scope=@trycrypto/dappstarter-client --stream` runs the dapp on http://localhost:5001 using webpack dev server

## Server

Run the server in a separate terminal. You *must* have run `npm run deploy` for the dapp to see most recent smart contract changes.

`lerna run dev --scope=@trycrypto/dappstarter-server --stream` runs NodeJS server app on port 5002 with NestJS

## Production Builds

DappStarter currently does not provide blockchain migration scripts to be used in production. However, here are the scripts for generating production builds:

`lerna run build:prod` generates dapp bundle for production.

## [Playground](https://play.onflow.org/0d507a56-cf87-4232-a5dd-bcc585b64551)

### Notes

At the root of the project, we have three contracts for FungibleToken, NonFungibleToken, and Rewards respectively.

The FungibleToken contract is a sample implementation of a fungible token on Flow. Fungible tokens behave like everyday currencies -- they can be minted, transferred or traded for digital goods.

NFTs exist to represent assets that are unique and indivisible. The NFT contract allows users to withdraw and deposit NFTs. It also enables admins to mint new NFTs.

The Rewards contract provides a definition for the list of reward items of each retailer. It enables a retailer to create or destroy a new reward item, and to declare its cost.

**1. customer set up**

Run transaction 1, signed by the customer account. This transaction sets up a new user for the marketplace by publishing a Vault reference, so that retailers can deposit points into the user's account. It also creates an empty NFT Collection for the
user so they can eventually receive NFTs from the retailer after certain thresh-holds. 

**2. retailer set up**

Run transaction 2, signed by the retailer account. This transaction sets up the retailer for the marketplace by giving them the ability to mint fungible and nonfungible tokens, so that they can then transfer them to the customer. Note that both the fungible and nonfungible minting methods take in a recipient, so these are just definitions for the retailer to be able to deposit
tokens into a customer's account.

**3. earning points**

Run transaction 3, signed by the retailer. This transaction deposits fungible tokens (points) into the customer's account. It also updates the user's unique-customer-value for making a purchase at the store.

**4. creating a reward item**

Run transaction 4, signed by the retailer. This transaction creates a reward item (in this case, a water bottle) along with its price.

**5. redeem points**

Run transaction 5, signed by the customer. This transaction allows the customer  to spend tokens on an item registered on the retailer's rewards list. If the customer has enough FTs in his account, then it will be deducted accordingly. In a successful transaction, the reward item will be deposited to the customer's NFT receiver.

**6. removing a reward item**

This transaction allows a retailer to remove a reward item from his/her list.

**7. trade NFTs**

This transaction trades an NFT for a certain amount of fungible tokens. One user receives an NFT and one user receives a certain amount of fungible tokens. It is to be signed by the person owning and selling the NFT.

**8. instagram Ad**

This transaction, signed by retailer, is triggered when a user posts on instagram promoting the retailer. They will earn points and receive an updated UCV value for their good deeds (less than what they would get for purchasing at the retailer, though).