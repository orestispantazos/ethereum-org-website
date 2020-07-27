---
title: Eth2 roadmap
description: The path to Eth2 explained
lang: en
sidebar: true
---

# Eth2 roadmap

<Subtitle>The road to Eth2 is long and winding but there are some important checkpoints along the way. </Subtitle>

## Where we are

Currently, teams are building out Eth2 clients and in the process of testing them. A client is a piece of software that serves as a "node" in the Ethereum network, helping to read and validate transactions.

There are many different types of clients because Ethereum encourages a multi-client world. As Danny Ryan puts it, "Ethereum is the abstract set of rules that makes up the protocol rather than any specific implementation of those set of rules".

And they're being tested across different testnets so that teams can iron out any bugs.

[More info on teams building Eth2](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth2.0-teams/teams-building-eth2.0/) _– ETHHub_

Testing is public so you can check it out here:

- [eth2stats](https://eth2stats.io/onyx-testnet)
- [beaconcha.in](https://beaconcha.in/)
- [Etherscan](https://beaconscan.com/)

### Join testing {#join-testing}

If you want to play a part in Eth2, help test the different clients.

<Button to="/eth2/get-involved#go-bug-hunting">Start testing</Button>

## Phase 0: the beacon chain

Expected: 2020

In Eth2 there will be lots of parallel chains (or [shards](/eth2/shard-chains/) with their own validators processing transactions.

<InfoBanner emoji=":thinking_face:">
    <b>What's a validator?</b> An actor who proposes and confirms the state of new blocks on the network.
 </InfoBanner>

Shards are where the additional scalability and throughput will come from. However all the shards will need consensus for the network to remain safe.

**The beacon chain is a new blockchain at the core of Ethereum that will provides consensus**

The beacon chain at first will be responsible for registering validator [stakes](/eth2/proof-of-stake/). However, at first a smart contract on mainnet will actually accept the stake.

In other words, once the beacon chain is live, you'll be able to stake your ETH.

[Get started with staking](/eth2-get-involved/)

<Warning emoji=":warning:">
    You won't be able to withdraw your ETH until the shard chains are available in Phase 1
</Warning>

The beacon chain will also store hashes of the current state of a given shard. Shard validators will report a hash to the beacon chain whenever data changes on their shard. The hash is stored on the beacon chain as proof.

For more on the Beacon Chain read this fantastic article: [Two Point Oh: The Beacon Chain](https://our.status.im/two-point-oh-the-beacon-chain/)

## Phase 1: the shard chains

Expected: 2021

Phase 1 is where we'll see the creation of the shard chains. These are chains that are delegated a portion of Ethereum's transactions and account data. However in Phase 1 it's just the structure that will be put into place. Shards won't support accounts or smart contracts yet.

Shard chains will be [proof-of-stake chains](/eth2/proof-of-stake/). This means their validators are stakers, not miners like today.

We expect to start Phase 1 with 64 shards.

## Phase 1.5: integration with mainnet

Expected: 2021

Up until Phase 1.5, mainnet will continue as a proof-of-work blockchain. This means transactions are processed via miners. But in Phase 1.5, mainnet will officially become a shard and transition to [proof-of-stake](/eth2/proof-of-stake/).

For end users and dapps, this change should be seamless.

## Phase 2: fully formed shards

Expected: 2021+

In phase 2, shards should be fully functional chains. Shards will be able to communicate with each other more freely and developers may even be able to design shards in their own ways.

<InfoBanner emoji=":right-pointing_magnifying_glass:">
    Phase 2 is still very much in the research phase.
 </InfoBanner>

## Learn more

If you'd like to read up on the key components of Eth2, we've got you covered.

- [Proof-of-stake](/eth2/proof-of-stake/)
- [Shard chains](/eth2/shard-chains/)
