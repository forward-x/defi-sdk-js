# defi-sdk-js

# Prerequire

```bash
npm i ethers@^5.7.2
```

# Install

```bash
npm i https://github.com/forward-x/defi-sdk-js
```

# Usage

## Deposit Collateral

```js
const { ethers } = require("ethers");
let FORWARD_SDK = require("defi-sdk-js");

let provider = new ethers.providers.JsonRpcProvider(HOST);
let signer = new ethers.Wallet(PRIVATE_KEY, provider);

let IAPHCore = FORWARD_SDK.IAPHCore__factory.connect(FORWARD_SDK.ADDRESS.AVAX.CORE, provider);
let IMembership = FORWARD_SDK.IMembership__factory.connect(
  FORWARD_SDK.ADDRESS.AVAX.MEMBERSHIP,
  provider
);

let nftId = await IMembership.getDefaultMembership(signer.address);
let amount = ethers.BigNumber.from("100000");
await IAPHCore.connect(signer).depositCollateral(
  nftId,
  FORWARD_SDK.ADDRESS.AVAX.TOKEN.USDC,
  FORWARD_SDK.ADDRESS.AVAX.TOKEN.ETH,
  amount
);
```

## Withdraw Collateral

```js
const { ethers } = require("ethers");
var FORWARD_SDK = require("defi-sdk-js");

var provider = new ethers.providers.JsonRpcProvider(HOST);
var signer = new ethers.Wallet(PRIVATE_KEY, provider);

let IAPHCore = FORWARD_SDK.IAPHCore__factory.connect(FORWARD_SDK.ADDRESS.AVAX.CORE, provider);
let IMembership = FORWARD_SDK.IMembership__factory.connect(
  FORWARD_SDK.ADDRESS.AVAX.MEMBERSHIP,
  provider
);

let nftId = await IMembership.getDefaultMembership(signer.address);
let amount = ethers.BigNumber.from("100000");
await IAPHCore.connect(signer).depositCollateral(
  nftId,
  FORWARD_SDK.ADDRESS.AVAX.TOKEN.USDC,
  FORWARD_SDK.ADDRESS.AVAX.TOKEN.ETH,
  amount
);
```
