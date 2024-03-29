/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IHelperMembershipAndStakePool,
  IHelperMembershipAndStakePoolInterface,
} from "../IHelperMembershipAndStakePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getNFTList",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "nftList",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRankInfoList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "interestBonusLending",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "forwardBonusLending",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumStakeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLTVBonus",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingBonus",
            type: "uint256",
          },
        ],
        internalType: "struct StakePoolBase.RankInfo[]",
        name: "rankInfos",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "getStakeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakeBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimableAmount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "endTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastSettleTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint256[]",
            name: "payPattern",
            type: "uint256[]",
          },
        ],
        internalType: "struct StakePoolBase.StakeInfo",
        name: "stakeInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakePoolAddress",
        type: "address",
      },
    ],
    name: "getStakePoolNextSettleTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IHelperMembershipAndStakePool__factory {
  static readonly abi = _abi;
  static createInterface(): IHelperMembershipAndStakePoolInterface {
    return new utils.Interface(_abi) as IHelperMembershipAndStakePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHelperMembershipAndStakePool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IHelperMembershipAndStakePool;
  }
}
