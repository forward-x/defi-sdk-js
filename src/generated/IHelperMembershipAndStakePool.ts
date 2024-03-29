/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace StakePoolBase {
  export type RankInfoStruct = {
    interestBonusLending: BigNumberish;
    forwardBonusLending: BigNumberish;
    minimumStakeAmount: BigNumberish;
    maxLTVBonus: BigNumberish;
    tradingFee: BigNumberish;
    tradingBonus: BigNumberish;
  };

  export type RankInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    interestBonusLending: BigNumber;
    forwardBonusLending: BigNumber;
    minimumStakeAmount: BigNumber;
    maxLTVBonus: BigNumber;
    tradingFee: BigNumber;
    tradingBonus: BigNumber;
  };

  export type StakeInfoStruct = {
    stakeBalance: BigNumberish;
    claimableAmount: BigNumberish;
    startTimestamp: BigNumberish;
    endTimestamp: BigNumberish;
    lastSettleTimestamp: BigNumberish;
    payPattern: BigNumberish[];
  };

  export type StakeInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[]
  ] & {
    stakeBalance: BigNumber;
    claimableAmount: BigNumber;
    startTimestamp: BigNumber;
    endTimestamp: BigNumber;
    lastSettleTimestamp: BigNumber;
    payPattern: BigNumber[];
  };
}

export interface IHelperMembershipAndStakePoolInterface
  extends utils.Interface {
  contractName: "IHelperMembershipAndStakePool";
  functions: {
    "getNFTList(address)": FunctionFragment;
    "getRankInfoList()": FunctionFragment;
    "getStakeInfo(uint256)": FunctionFragment;
    "getStakePoolNextSettleTimeStamp(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getNFTList", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRankInfoList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakePoolNextSettleTimeStamp",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "getNFTList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRankInfoList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakePoolNextSettleTimeStamp",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IHelperMembershipAndStakePool extends BaseContract {
  contractName: "IHelperMembershipAndStakePool";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHelperMembershipAndStakePoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getNFTList(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { count: BigNumber; nftList: BigNumber[] }
    >;

    getRankInfoList(
      overrides?: CallOverrides
    ): Promise<
      [StakePoolBase.RankInfoStructOutput[]] & {
        rankInfos: StakePoolBase.RankInfoStructOutput[];
      }
    >;

    getStakeInfo(
      nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [StakePoolBase.StakeInfoStructOutput] & {
        stakeInfo: StakePoolBase.StakeInfoStructOutput;
      }
    >;

    getStakePoolNextSettleTimeStamp(
      stakePoolAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getNFTList(
    owner: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[]] & { count: BigNumber; nftList: BigNumber[] }
  >;

  getRankInfoList(
    overrides?: CallOverrides
  ): Promise<StakePoolBase.RankInfoStructOutput[]>;

  getStakeInfo(
    nftId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<StakePoolBase.StakeInfoStructOutput>;

  getStakePoolNextSettleTimeStamp(
    stakePoolAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getNFTList(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { count: BigNumber; nftList: BigNumber[] }
    >;

    getRankInfoList(
      overrides?: CallOverrides
    ): Promise<StakePoolBase.RankInfoStructOutput[]>;

    getStakeInfo(
      nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<StakePoolBase.StakeInfoStructOutput>;

    getStakePoolNextSettleTimeStamp(
      stakePoolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getNFTList(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRankInfoList(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeInfo(
      nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakePoolNextSettleTimeStamp(
      stakePoolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNFTList(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRankInfoList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakeInfo(
      nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakePoolNextSettleTimeStamp(
      stakePoolAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
