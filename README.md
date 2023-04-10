# defi-sdk-js

# Usage

## Deposit Collateral

```js
const { ethers } = require("ethers");
var FORWARD_SDK = require("defi-sdk-js");

var provider = new ethers.providers.JsonRpcProvider(HOST);
var signer = new ethers.Wallet(PRIVATE_KEY, provider);

var IAPHCore = FORWARD_SDK.IAPHCore__factory.connect(CORE_ADDRESS, signer);
var IMembership = FORWARD_SDK.IMembership__factory.connect(
  MEMBERSHIP_ADDRESS,
  provider
);

let nftId = await IMembership.getDefaultMembership(signer.address);
let amount = ethers.BigNumber.from("100000");
await IAPHCore.depositCollateral(
  nftId,
  TOKEN_ADDRESS.USDT,
  TOKEN_ADDRESS.ETH,
  amount
);
```

## Withdraw Collateral

```js
const { ethers } = require("ethers");
var FORWARD_SDK = require("defi-sdk-js");

var provider = new ethers.providers.JsonRpcProvider(HOST);
var signer = new ethers.Wallet(PRIVATE_KEY, provider);

var IAPHCore = FORWARD_SDK.IAPHCore__factory.connect(CORE_ADDRESS, signer);
var IMembership = FORWARD_SDK.IMembership__factory.connect(
  MEMBERSHIP_ADDRESS,
  provider
);

let nftId = await IMembership.getDefaultMembership(signer.address);
let amount = ethers.BigNumber.from("100000");
await IAPHCore.withdrawCollateral(
  nftId,
  TOKEN_ADDRESS.USDT,
  TOKEN_ADDRESS.ETH,
  amount
);
```
