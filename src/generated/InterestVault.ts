/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface InterestVaultInterface extends utils.Interface {
  contractName: "InterestVault";
  functions: {
    "actualTokenInterestProfit()": FunctionFragment;
    "claimableForwInterest()": FunctionFragment;
    "claimableTokenInterest()": FunctionFragment;
    "cumulativeTokenInterestProfit()": FunctionFragment;
    "forwAddress()": FunctionFragment;
    "getAddressTimelockManager()": FunctionFragment;
    "getConfigTimelockManager()": FunctionFragment;
    "getNoTimelockManager()": FunctionFragment;
    "getTotalForwInterest()": FunctionFragment;
    "getTotalTokenInterest()": FunctionFragment;
    "heldTokenInterest()": FunctionFragment;
    "isPaused(bytes4)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerApprove(address,uint256,uint256)": FunctionFragment;
    "pause(bytes4)": FunctionFragment;
    "protocolAddress()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setForwAddress(address)": FunctionFragment;
    "setProtocolAddress(address)": FunctionFragment;
    "setTokenAddress(address)": FunctionFragment;
    "setTreasuryAddress(address)": FunctionFragment;
    "settleInterest(uint256,uint256,uint256)": FunctionFragment;
    "tokenAddress()": FunctionFragment;
    "transferAddressTimelockManager(address)": FunctionFragment;
    "transferConfigTimelockManager(address)": FunctionFragment;
    "transferNoTimelockManager(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasuryAddress()": FunctionFragment;
    "unPause(bytes4)": FunctionFragment;
    "withdrawActualProfit()": FunctionFragment;
    "withdrawForwInterest(uint256)": FunctionFragment;
    "withdrawTokenInterest(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "actualTokenInterestProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableForwInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableTokenInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeTokenInterestProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forwAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressTimelockManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfigTimelockManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNoTimelockManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalForwInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalTokenInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "heldTokenInterest",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerApprove",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "protocolAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setForwAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "settleInterest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferAddressTimelockManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferConfigTimelockManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferNoTimelockManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unPause", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "withdrawActualProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawForwInterest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokenInterest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "actualTokenInterestProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableForwInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableTokenInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeTokenInterestProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forwAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfigTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNoTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalForwInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalTokenInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "heldTokenInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setForwAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAddressTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferConfigTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferNoTimelockManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawActualProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawForwInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokenInterest",
    data: BytesLike
  ): Result;

  events: {
    "OwnerApprove(address,address,address,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address,bytes4)": EventFragment;
    "SetForwAddress(address,address,address)": EventFragment;
    "SetProtocolAddress(address,address,address)": EventFragment;
    "SetTokenAddress(address,address,address)": EventFragment;
    "SetTreasuryAddress(address,address,address)": EventFragment;
    "SettleInterest(address,uint256,uint256,uint256)": EventFragment;
    "TransferAddressTimelockManager(address,address)": EventFragment;
    "TransferConfigTimelockManager(address,address)": EventFragment;
    "TransferNoTimelockManager(address,address)": EventFragment;
    "Unpaused(address,bytes4)": EventFragment;
    "WithdrawActualProfit(address,address,uint256)": EventFragment;
    "WithdrawForwInterest(address,uint256)": EventFragment;
    "WithdrawTokenInterest(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerApprove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetForwAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetProtocolAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTokenAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTreasuryAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SettleInterest"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferAddressTimelockManager"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferConfigTimelockManager"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferNoTimelockManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawActualProfit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawForwInterest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawTokenInterest"): EventFragment;
}

export type OwnerApproveEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, string],
  {
    sender: string;
    tokenAddress: string;
    forwAddress: string;
    tokenAmount: BigNumber;
    forwAmount: BigNumber;
    pool: string;
  }
>;

export type OwnerApproveEventFilter = TypedEventFilter<OwnerApproveEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<
  [string, string],
  { account: string; functionSelector: string }
>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type SetForwAddressEvent = TypedEvent<
  [string, string, string],
  { sender: string; oldValue: string; newValue: string }
>;

export type SetForwAddressEventFilter = TypedEventFilter<SetForwAddressEvent>;

export type SetProtocolAddressEvent = TypedEvent<
  [string, string, string],
  { sender: string; oldValue: string; newValue: string }
>;

export type SetProtocolAddressEventFilter =
  TypedEventFilter<SetProtocolAddressEvent>;

export type SetTokenAddressEvent = TypedEvent<
  [string, string, string],
  { sender: string; oldValue: string; newValue: string }
>;

export type SetTokenAddressEventFilter = TypedEventFilter<SetTokenAddressEvent>;

export type SetTreasuryAddressEvent = TypedEvent<
  [string, string, string],
  { sender: string; oldValue: string; newValue: string }
>;

export type SetTreasuryAddressEventFilter =
  TypedEventFilter<SetTreasuryAddressEvent>;

export type SettleInterestEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    claimableTokenInterest: BigNumber;
    heldTokenInterest: BigNumber;
    claimableForwInterest: BigNumber;
  }
>;

export type SettleInterestEventFilter = TypedEventFilter<SettleInterestEvent>;

export type TransferAddressTimelockManagerEvent = TypedEvent<
  [string, string],
  { arg0: string; arg1: string }
>;

export type TransferAddressTimelockManagerEventFilter =
  TypedEventFilter<TransferAddressTimelockManagerEvent>;

export type TransferConfigTimelockManagerEvent = TypedEvent<
  [string, string],
  { arg0: string; arg1: string }
>;

export type TransferConfigTimelockManagerEventFilter =
  TypedEventFilter<TransferConfigTimelockManagerEvent>;

export type TransferNoTimelockManagerEvent = TypedEvent<
  [string, string],
  { arg0: string; arg1: string }
>;

export type TransferNoTimelockManagerEventFilter =
  TypedEventFilter<TransferNoTimelockManagerEvent>;

export type UnpausedEvent = TypedEvent<
  [string, string],
  { account: string; functionSelector: string }
>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawActualProfitEvent = TypedEvent<
  [string, string, BigNumber],
  { sender: string; to: string; profitWithdraw: BigNumber }
>;

export type WithdrawActualProfitEventFilter =
  TypedEventFilter<WithdrawActualProfitEvent>;

export type WithdrawForwInterestEvent = TypedEvent<
  [string, BigNumber],
  { sender: string; claimable: BigNumber }
>;

export type WithdrawForwInterestEventFilter =
  TypedEventFilter<WithdrawForwInterestEvent>;

export type WithdrawTokenInterestEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; claimable: BigNumber; bonus: BigNumber; profit: BigNumber }
>;

export type WithdrawTokenInterestEventFilter =
  TypedEventFilter<WithdrawTokenInterestEvent>;

export interface InterestVault extends BaseContract {
  contractName: "InterestVault";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterestVaultInterface;

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
    actualTokenInterestProfit(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimableForwInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimableTokenInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    cumulativeTokenInterestProfit(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    forwAddress(overrides?: CallOverrides): Promise<[string]>;

    getAddressTimelockManager(overrides?: CallOverrides): Promise<[string]>;

    getConfigTimelockManager(overrides?: CallOverrides): Promise<[string]>;

    getNoTimelockManager(overrides?: CallOverrides): Promise<[string]>;

    getTotalForwInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalTokenInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    heldTokenInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    isPaused(_func: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerApprove(
      _pool: string,
      tokenApproveAmount: BigNumberish,
      forwApproveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    protocolAddress(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setForwAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProtocolAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleInterest(
      _claimableTokenInterest: BigNumberish,
      _heldTokenInterest: BigNumberish,
      _claimableForwInterest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<[string]>;

    transferAddressTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferConfigTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferNoTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<[string]>;

    unPause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawActualProfit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawForwInterest(
      claimAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokenInterest(
      claimable: BigNumberish,
      bonus: BigNumberish,
      profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  actualTokenInterestProfit(overrides?: CallOverrides): Promise<BigNumber>;

  claimableForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

  claimableTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

  cumulativeTokenInterestProfit(overrides?: CallOverrides): Promise<BigNumber>;

  forwAddress(overrides?: CallOverrides): Promise<string>;

  getAddressTimelockManager(overrides?: CallOverrides): Promise<string>;

  getConfigTimelockManager(overrides?: CallOverrides): Promise<string>;

  getNoTimelockManager(overrides?: CallOverrides): Promise<string>;

  getTotalForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

  heldTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

  isPaused(_func: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerApprove(
    _pool: string,
    tokenApproveAmount: BigNumberish,
    forwApproveAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    _func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  protocolAddress(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setForwAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProtocolAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleInterest(
    _claimableTokenInterest: BigNumberish,
    _heldTokenInterest: BigNumberish,
    _claimableForwInterest: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  transferAddressTimelockManager(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferConfigTimelockManager(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferNoTimelockManager(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasuryAddress(overrides?: CallOverrides): Promise<string>;

  unPause(
    _func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawActualProfit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawForwInterest(
    claimAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokenInterest(
    claimable: BigNumberish,
    bonus: BigNumberish,
    profit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    actualTokenInterestProfit(overrides?: CallOverrides): Promise<BigNumber>;

    claimableForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

    claimableTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    cumulativeTokenInterestProfit(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forwAddress(overrides?: CallOverrides): Promise<string>;

    getAddressTimelockManager(overrides?: CallOverrides): Promise<string>;

    getConfigTimelockManager(overrides?: CallOverrides): Promise<string>;

    getNoTimelockManager(overrides?: CallOverrides): Promise<string>;

    getTotalForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    heldTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(_func: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerApprove(
      _pool: string,
      tokenApproveAmount: BigNumberish,
      forwApproveAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(_func: BytesLike, overrides?: CallOverrides): Promise<void>;

    protocolAddress(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setForwAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    setProtocolAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    setTreasuryAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    settleInterest(
      _claimableTokenInterest: BigNumberish,
      _heldTokenInterest: BigNumberish,
      _claimableForwInterest: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;

    transferAddressTimelockManager(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferConfigTimelockManager(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferNoTimelockManager(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasuryAddress(overrides?: CallOverrides): Promise<string>;

    unPause(_func: BytesLike, overrides?: CallOverrides): Promise<void>;

    withdrawActualProfit(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawForwInterest(
      claimAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokenInterest(
      claimable: BigNumberish,
      bonus: BigNumberish,
      profit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnerApprove(address,address,address,uint256,uint256,address)"(
      sender?: string | null,
      tokenAddress?: null,
      forwAddress?: null,
      tokenAmount?: null,
      forwAmount?: null,
      pool?: null
    ): OwnerApproveEventFilter;
    OwnerApprove(
      sender?: string | null,
      tokenAddress?: null,
      forwAddress?: null,
      tokenAmount?: null,
      forwAmount?: null,
      pool?: null
    ): OwnerApproveEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address,bytes4)"(
      account?: null,
      functionSelector?: null
    ): PausedEventFilter;
    Paused(account?: null, functionSelector?: null): PausedEventFilter;

    "SetForwAddress(address,address,address)"(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetForwAddressEventFilter;
    SetForwAddress(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetForwAddressEventFilter;

    "SetProtocolAddress(address,address,address)"(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetProtocolAddressEventFilter;
    SetProtocolAddress(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetProtocolAddressEventFilter;

    "SetTokenAddress(address,address,address)"(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetTokenAddressEventFilter;
    SetTokenAddress(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetTokenAddressEventFilter;

    "SetTreasuryAddress(address,address,address)"(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetTreasuryAddressEventFilter;
    SetTreasuryAddress(
      sender?: string | null,
      oldValue?: null,
      newValue?: null
    ): SetTreasuryAddressEventFilter;

    "SettleInterest(address,uint256,uint256,uint256)"(
      sender?: string | null,
      claimableTokenInterest?: null,
      heldTokenInterest?: null,
      claimableForwInterest?: null
    ): SettleInterestEventFilter;
    SettleInterest(
      sender?: string | null,
      claimableTokenInterest?: null,
      heldTokenInterest?: null,
      claimableForwInterest?: null
    ): SettleInterestEventFilter;

    "TransferAddressTimelockManager(address,address)"(
      arg0?: null,
      arg1?: null
    ): TransferAddressTimelockManagerEventFilter;
    TransferAddressTimelockManager(
      arg0?: null,
      arg1?: null
    ): TransferAddressTimelockManagerEventFilter;

    "TransferConfigTimelockManager(address,address)"(
      arg0?: null,
      arg1?: null
    ): TransferConfigTimelockManagerEventFilter;
    TransferConfigTimelockManager(
      arg0?: null,
      arg1?: null
    ): TransferConfigTimelockManagerEventFilter;

    "TransferNoTimelockManager(address,address)"(
      arg0?: null,
      arg1?: null
    ): TransferNoTimelockManagerEventFilter;
    TransferNoTimelockManager(
      arg0?: null,
      arg1?: null
    ): TransferNoTimelockManagerEventFilter;

    "Unpaused(address,bytes4)"(
      account?: null,
      functionSelector?: null
    ): UnpausedEventFilter;
    Unpaused(account?: null, functionSelector?: null): UnpausedEventFilter;

    "WithdrawActualProfit(address,address,uint256)"(
      sender?: string | null,
      to?: null,
      profitWithdraw?: null
    ): WithdrawActualProfitEventFilter;
    WithdrawActualProfit(
      sender?: string | null,
      to?: null,
      profitWithdraw?: null
    ): WithdrawActualProfitEventFilter;

    "WithdrawForwInterest(address,uint256)"(
      sender?: string | null,
      claimable?: null
    ): WithdrawForwInterestEventFilter;
    WithdrawForwInterest(
      sender?: string | null,
      claimable?: null
    ): WithdrawForwInterestEventFilter;

    "WithdrawTokenInterest(address,uint256,uint256,uint256)"(
      sender?: string | null,
      claimable?: null,
      bonus?: null,
      profit?: null
    ): WithdrawTokenInterestEventFilter;
    WithdrawTokenInterest(
      sender?: string | null,
      claimable?: null,
      bonus?: null,
      profit?: null
    ): WithdrawTokenInterestEventFilter;
  };

  estimateGas: {
    actualTokenInterestProfit(overrides?: CallOverrides): Promise<BigNumber>;

    claimableForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

    claimableTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    cumulativeTokenInterestProfit(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forwAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getAddressTimelockManager(overrides?: CallOverrides): Promise<BigNumber>;

    getConfigTimelockManager(overrides?: CallOverrides): Promise<BigNumber>;

    getNoTimelockManager(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalForwInterest(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    heldTokenInterest(overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(_func: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerApprove(
      _pool: string,
      tokenApproveAmount: BigNumberish,
      forwApproveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    protocolAddress(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setForwAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProtocolAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleInterest(
      _claimableTokenInterest: BigNumberish,
      _heldTokenInterest: BigNumberish,
      _claimableForwInterest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    transferAddressTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferConfigTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferNoTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    unPause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawActualProfit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawForwInterest(
      claimAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokenInterest(
      claimable: BigNumberish,
      bonus: BigNumberish,
      profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    actualTokenInterestProfit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimableForwInterest(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimableTokenInterest(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeTokenInterestProfit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forwAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAddressTimelockManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfigTimelockManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNoTimelockManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalForwInterest(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalTokenInterest(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    heldTokenInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPaused(
      _func: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerApprove(
      _pool: string,
      tokenApproveAmount: BigNumberish,
      forwApproveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    protocolAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setForwAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleInterest(
      _claimableTokenInterest: BigNumberish,
      _heldTokenInterest: BigNumberish,
      _claimableForwInterest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferAddressTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferConfigTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferNoTimelockManager(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unPause(
      _func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawActualProfit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawForwInterest(
      claimAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokenInterest(
      claimable: BigNumberish,
      bonus: BigNumberish,
      profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
