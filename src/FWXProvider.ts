import { BigNumberish, ethers, providers } from 'ethers';
import { ADDRESS, /*PoolAddress,*/ /*TokenSymbols*/ } from './constants';
import {
  IHelperMembershipAndStakePool,
  IHelperMembershipAndStakePool__factory,
  IMembership,
  IMembership__factory,
  // IStakePool,
  // IStakePool__factory,
  StakePoolBase,
  //  CoreBase
} from './generated';

export enum ProviderType {
  WS,
  HTTP
}

export class FWXProvider {
  provider: providers.JsonRpcProvider | providers.WebSocketProvider;
  signer!: ethers.Wallet;

  private membership: IMembership | null = null;
  // private stakePool: IStakePool | null = null;
  private helperMembershipAndStakePool: IHelperMembershipAndStakePool | null = null;

  constructor(url: string, type: ProviderType, provider?: ethers.providers.JsonRpcProvider) {
    switch (type) {
      case ProviderType.HTTP:
        this.provider = new providers.JsonRpcProvider(url);
        break;
      case ProviderType.WS:
        this.provider = new providers.WebSocketProvider(url);
        break;
    }
    if (provider) {
      this.provider = provider;
    }
  }
  /**
   * Set the signer using a private key.
   *
   * This method creates a new signer wallet using the provided private key and sets it as the signer for the current instance.
   *
   * @param {string} privateKey - The private key to use for signing transactions.
   * @returns {void}
   * @throws {Error} Throws an error if the private key is invalid or if there are issues creating the signer.
   * @async
   */
  async setSigner(privateKey: string): Promise<void> {
    this.signer = new ethers.Wallet(privateKey, this.provider);
  }

  /**
   * Get an instance of IMembership.
   *
   * @returns {IMembership} An instance of IMembership.
   * @private
   */
  private _membership(): IMembership {
    if (this.membership) return this.membership;
    return IMembership__factory.connect(ADDRESS.AVAX.MEMBERSHIP, this.provider);
  }

  /**
   * Get an instance of IStakePool.
   *
   * @returns {IStakePool} An instance of IStakePool.
   * @private
   */
  // private _stakePool(): IStakePool {
  //   if (this.stakePool) return this.stakePool;
  //   return IStakePool__factory.connect(ADDRESS.AVAX.STAKEPOOL, this.provider);
  // }

  /**
   * Get an instance of IHelperMembershipAndStakePool.
   *
   * @returns {IHelperMembershipAndStakePool} An instance of IHelperMembershipAndStakePool.
   * @private
   */
  private _helperMembershipAndStakePool(): IHelperMembershipAndStakePool {
    if (this.helperMembershipAndStakePool) return this.helperMembershipAndStakePool;
    return IHelperMembershipAndStakePool__factory.connect(
      ADDRESS.AVAX.HELPER_MEMBERSHIP_AND_STAKEPOOL,
      this.provider
    );
  }

  /**
   * Get the address of a pool for a given token symbol.
   *
   * @param {TokenSymbols} symbol - The token symbol.
   * @returns {string} The address of the pool.
   * @throws {Error} Throws an error if the pool address is not found.
   * @private
   */
  // private _poolAddress(symbol: TokenSymbols): string {
  //   if (!ADDRESS.AVAX.POOL?.[symbol]) throw Error('TODO: add msg');
  //   return ADDRESS.AVAX.POOL[symbol] ?? '';
  // }

  /**
   * Mint a Membership NFT with the given referral.
   *
   * @param referral - The referral as a BigNumberish.
   * @returns An object containing the tokenId as a BigNumberish.
   */
  async mint(
    referral: BigNumberish
  ): Promise<{ txHash: string; result: { tokenId: BigNumberish } }> {
    const membership: IMembership = this._membership();
    const tx = await membership.connect(this.signer).mint(referral);
    const helper = this._helperMembershipAndStakePool();

    const nftList = (await helper.getNFTList(this.signer.address)).nftList;
    return {
      txHash: tx.hash,
      result: {
        tokenId: nftList[nftList.length - 1]
      }
    };
  }

  /**
   * Get the rank of a Membership NFT.
   *
   * @param tokenId - The Membership NFT's tokenId as a BigNumberish.
   * @param pool - (Optional) The address of a StakePool as a TokenSymbols.
   * @returns An object containing the rank as a BigNumberish.
   */
  async getRank(tokenId: BigNumberish, stakePoolAddress?: string): Promise<{ rank: BigNumberish }> {
    const membership: IMembership = this._membership();

    if (!stakePoolAddress) {
      return { rank: await membership.connect(this.signer)['getRank(uint256)'](tokenId) };
    }

    const funcSig = 'getRank(address,uint256)';
    return {
      rank: await membership.connect(this.signer)[funcSig](stakePoolAddress, tokenId)
    };
  }

  /**
   * Get the owner of a Membership NFT.
   *
   * @param tokenId - The Membership NFT's tokenId as a BigNumberish.
   * @returns An object containing the owner's address as a string.
   */
  async ownerOf(tokenId: BigNumberish): Promise<{ owner: string }> {
    const membership: IMembership = this._membership();
    return { owner: await membership.connect(this.signer).ownerOf(tokenId) };
  }

  /**
   * Get the usableTokenId of a Membership NFT owned by the given address.
   *
   * @param owner - The owner's address as a string.
   * @param tokenId - The Membership NFT's tokenId as a BigNumberish.
   * @returns An object containing the usableTokenId as a BigNumberish.
   */
  async usableToken(
    owner: string,
    tokenId: BigNumberish
  ): Promise<{ usableTokenId: BigNumberish }> {
    const membership: IMembership = this._membership();
    return { usableTokenId: await membership.connect(this.signer).usableTokenId(owner, tokenId) };
  }

  /**
   * Get the next settle timestamp for the StakePool.
   *
   * @returns An object containing the nextSettleTimestamp as a BigNumberish.
   */
  async getNextSettleTimestamp(): Promise<{
    nextSettleTimestamp: BigNumberish;
  }> {
    const helper = this._helperMembershipAndStakePool();
    return {
      nextSettleTimestamp: await helper.getStakePoolNextSettleTimeStamp(ADDRESS.AVAX.STAKEPOOL)
    };
  }

  /**
   * Get the list of NFTs owned by the specified address.
   *
   * @param owner - The owner's address as a string.
   * @returns An object containing an array of NFT IDs as BigNumberish[].
   */
  async getNftList(owner: string): Promise<{ nftIds: BigNumberish[] }> {
    const helper = this._helperMembershipAndStakePool();
    return { nftIds: (await helper.getNFTList(owner)).nftList };
  }

  /**
   * Get a list of RankInfos from the StakePool.
   *
   * @returns An object containing an array of RankInfoStructs as StakePoolBase.RankInfoStruct[].
   */
  async getRankInfos(): Promise<{ info: StakePoolBase.RankInfoStruct[] }> {
    const helper = this._helperMembershipAndStakePool();
    return { info: await helper.getRankInfoList() };
  }

  /**
   * Get stake information for the specified NFT ID.
   *
   * @param nftId - The NFT ID as a BigNumberish.
   * @returns An object containing stake information as a StakePoolBase.StakeInfoStruct.
   */
  async getStakeInfo(nftId: BigNumberish): Promise<{ info: StakePoolBase.StakeInfoStruct }> {
    const helper = this._helperMembershipAndStakePool();
    return { info: await helper.getStakeInfo(nftId) };
  }

  // // ## Lending

  // // ### deposit
  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols → **This function is used to select a pool by name, so users don’t have to worry about a token’s address.**
  // //     - nftId: BigNumberish
  // //     - depositAmount: BigNumberish
  // // - **Output**
  // //     - mintedP: BigNumberish
  // //     - mintedAtp: BigNumberish
  // //     - mintedItp: BigNumberish
  // //     - mintedIfp: BigNumberish
  // async deposit(pool: TokenSymbols, nftId: BigNumberish, depositAmount: BigNumberish): Promise<{ mintedP: BigNumberish, mintedAtp: BigNumberish, mintedItp: BigNumberish, mintedIfp: BigNumberish }> {
  // }

  // // ### withdraw

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - token: TokenSymbols
  // //     - nftId: BigNumberish
  // //     - withdrawAmount: BigNumberish
  // // - **Output**
  // //     - result: WithdrawResult (struct from solidity)
  // async withdraw(token: TokenSymbols, nftId: BigNumberish, withdrawAmount: BigNumberish): Promise<{ result: PoolBase.WithdrawResultStruct }> {
  // }

  // // ### claimAllInterest

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - nftId: BigNumberish
  // // - **Output**
  // //     - result: WithdrawResult (struct from solidity)
  // async claimAllInterest(pool: TokenSymbols, nftId: BigNumberish): Promise<{ result: PoolBase.WithdrawResultStruct }> {
  // }

  // // ### getLendingInfo

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - nftId: BigNumberish
  // // - **Output**
  // //     - lendingBalance: BigNumberish
  // //     - interestObtained: BigNumberish
  // //     - interestFwxObtained: BigNumberish
  // //     - rank: BigNumberish
  // //     - rankInfo: StakePool.RankInfo (struct from solidity)
  // async getLendingInfo(pool: TokenSymbols, nftId: BigNumberish): Promise<{ lendingBalance: BigNumberish, interestObtained: BigNumberish, interestFwxObtained: BigNumberish, rank: BigNumberish, rankInfo: StakePoolBase.RankInfoStruct }> {
  // }

  // // ### getLendingInfoPlatform

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // // - **Output**
  // //     - atpPrice: BigNumberish
  // //     - itpPrice: BigNumberish
  // //     - ifpPrice: BigNumberish
  // //     - totalSupply: BigNumberish
  // //     - availableSupply: BigNumberish
  // //     - utilizationRate: BigNumberish
  // //     - interestRate: BigNumberish (current rate)
  // //     - interestFwxRate: BigNumberish (current rate)
  // async getLendingInfoPlatform(pool: TokenSymbols, nftId: BigNumberish): Promise<{ atpPrice: BigNumberish, itpPrice: BigNumberish, ifpPrice: BigNumberish, totalSupply: BigNumberish, availableSupply: BigNumberish, utilizationRate: BigNumberish, interestRate: BigNumberish, interestFwxRate: BigNumberish }> {
  // }

  // // ### getInterestRate

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - depositAmount?: BigNumberish
  // // - **Output**
  // //     - interestRate: BigNumberish
  // async getInterestRate(pool: TokenSymbols, depositAmount?: BigNumberish): Promise<{ interestRate: BigNumberish }> {
  // }

  // // ### getFwxInterestRate

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - depositAmount?: BigNumberish
  // // - **Output**
  // //     - fwxInterestRate: BigNumberish
  // async getFwxInterestRate(pool: TokenSymbols, depositAmount?: BigNumberish): Promise<{ fwxInterestRate: BigNumberish }> {
  // }

  // // ## Borrowing

  // // ### borrow

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // //     - borrowAmount: BigNumberish
  // //     - collateralAmount: BigNumberish
  // //     - collateralToken: TokenSymbols
  // // - **Output**
  // //     - result: CoreBase.Loan (struct from solidity)
  // async borrow(pool: TokenSymbols, nftId: BigNumberish, loanId: BigNumberish, borrowAmount: BigNumberish, collateralAmount: BigNumberish, collateralToken: TokenSymbols): Promise<{ result: CoreBase.LoanStruct }> {
  // }

  // // ### repay

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // //     - repayAmount: BigNumberish
  // // - **Output**
  // //     - borrowPaid: BigNumberish
  // //     - interestPaid: BigNumberish
  // async repay(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ borrowPaid: BigNumberish, interestPaid: BigNumberish }> {
  // }

  // // ### repayInterest

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // //     - repayAmount: BigNumberish
  // // - **Output**
  // //     - interestPaid: BigNumberish
  // async repayInterest(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ interestPaid: BigNumberish }> {
  // }

  // // ### addCollateral

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // //     - collateralAmount: BigNumberish
  // // - **Output**
  // //     - result: CoreBase.Loan (struct from solidity)
  // async addCollateral(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ interestPaid: BigNumberish }> {
  // }

  // // ### removeCollateral

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // //     - collateralAmount: BigNumberish
  // // - **Output**
  // //     - result: CoreBase.Loan (struct from solidity)
  // async removeCollateral(nftId: BigNumberish, loanId: BigNumberish, collateralAmount: BigNumberish): Promise<{ result: CoreBase.Loan }> {
  // }

  // // ### rollover

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // // - **Output**
  // //     - delayInterest: BigNumberish
  // //     - bountyReward: BigNumberish
  // async rollover(nftId: BigNumberish, loanId: BigNumberish): Promise<{ delayInterest: BigNumberish, bountyReward: BigNumberish }> {
  // }

  // // ### getLoanInfo

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - loanId: BigNumberish
  // // - **Output**
  // //     - active: bool
  // //     - startTimestamp: BigNumberish
  // //     - borrowToken: address
  // //     - collateralToken: address
  // //     - lastSettleTimestamp: BigNumberish
  // //     - rolloverTimestamp: BigNumberish
  // //     - borrowAmount: BigNumberish
  // //     - collateralAmount: BigNumberish
  // //     - owedPerDay: BigNumberish
  // //     - minInterest: BigNumberish
  // //     - interestOwed: BigNumberish
  // //     - interestPaid: BigNumberish
  // async rollover(nftId: BigNumberish, loanId: BigNumberish): Promise<{ active: bool, startTimestamp: BigNumberish, borrowToken: address, collateralToken: address, lastSettleTimestamp: BigNumberish, rolloverTimestamp: BigNumberish, borrowAmount: BigNumberish, collateralAmount: BigNumberish, owedPerDay: BigNumberish, minInterest: BigNumberish, interestOwed: BigNumberish, interestPaid: BigNumberish }> {
  // }

  // // ### getBorrowingInterestRate

  // // - **Instance**: APHPool
  // // - **Parameters**
  // //     - pool: TokenSymbols
  // //     - borrowAmount?: BigNumberish
  // // - **Output**
  // //     - interestRate: BigNumberish
  // //     - interestOwedPerDay: BigNumberish
  // async getBorrowingInterestRate(pool: TokenSymbols, borrowAmount?: BigNumberish): Promise<{ interestRate: BigNumberish, interestOwedPerDay: BigNumberish }> {
  // }

  // // ## Trading

  // // ### openPosition

  // // - **Instance**: APHPool
  // // - **Note**: The user doesn’t have to know borrow token and swap token, just choose collateral and underlying then trade.
  // // - **Parameters**
  // //     - isLong: boolean
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // //     - nftId: BigNumberish
  // //     - entryPrice: BigNumberish
  // //     - contracSize: BigNumberish
  // //     - leverage: BigNumberish
  // //     - slippage: BigNumberish
  // // - **Output**
  // //     - result: CoreBase.Position (struct from solidity)
  // async openPosition(isLong: boolean, collateral: TokenSymbols, underlying: TokenSymbols, nftId: BigNumberish, entryPrice: BigNumberish, contracSize: BigNumberish, leverage: BigNumberish, slippage: BigNumberish): Promise<{ result: CoreBase.PositionStruct }> {
  // }

  // // ### closePosition

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - posId: BigNumberish
  // //     - closingSize: BigNumberish
  // // - **Output**
  // //     - result: CoreBase.Position (struct from solidity)
  // async closePosition(nftId: BigNumberish, posId: BigNumberish, closingSize: BigNumberish): Promise<{ result: CoreBase.PositionStruct }> {
  // }

  // // ### depositCollateral

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // //     - nftId: BigNumberish
  // //     - amount: BigNumberish
  // // - **Output**
  // //     - balance: BigNumberish
  // async depositCollateral(nftId: BigNumberish, posId: BigNumberish, closingSize: BigNumberish): Promise<{ balance: BigNumberish }> {
  // }

  // // ### withdrawCollateral

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // //     - nftId: BigNumberish
  // //     - amount: BigNumberish
  // // - **Output**
  // //     - balance: BigNumberish
  // async withdrawCollateral(collateral: TokenSymbols, underlying: TokenSymbols, nftId: BigNumberish, amount: BigNumberish): Promise<{ balance: BigNumberish }> {
  // }

  // // ### getPositionInfo

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // // - **Output**
  // //     - id: BigNumberish
  // //     - entryPrice: BigNumberish
  // //     - contractSize: BigNumberish
  // //     - borrowAmount: BigNumberish
  // //     - collateralUsed: BigNumberish (collateral swapped)
  // //     - interestOwed: BigNumberish
  // //     - interestOwedPerDay: BigNumberish
  // //     - lastSettleTimstamp: BigNumberish
  // async getPositionInfo(nftId: BigNumberish,  collateral: TokenSymbols,  underlying: TokenSymbols): Promise<{id: BigNumberish,  entryPrice: BigNumberish,  contractSize: BigNumberish,  borrowAmount: BigNumberish,  collateralUsed: BigNumberish (collateral swapped),  interestOwed: BigNumberish,  interestOwedPerDay: BigNumberish,  lastSettleTimstamp: BigNumberish}>{}

  // // ### getAllActivePosition

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - pairs: Array of object {collateral: TokenSymbols, underlying: TokenSymbols}
  // // - **Output**
  // //     - **Array** of Positions
  // //         - id: BigNumberish
  // //         - entryPrice: BigNumberish
  // //         - contractSize: BigNumberish
  // //         - borrowAmount: BigNumberish
  // //         - collateralUsed: BigNumberish (collateral swapped)
  // //         - interestOwed: BigNumberish
  // //         - interestOwedPerDay: BigNumberish
  // //         - lastSettleTimstamp: BigNumberish
  // async getAllActivePosition(nftId: BigNumberish,  pairs: {collateral: TokenSymbols, underlying: TokenSymbols}[]) : Promise<{id: BigNumberish,  entryPrice: BigNumberish,  contractSize: BigNumberish,  borrowAmount: BigNumberish,  collateralUsed: BigNumberish (collateral swapped),  interestOwed: BigNumberish,  interestOwedPerDay: BigNumberish,  lastSettleTimstamp: BigNumberish}[]>{}

  // // ### getPositionStateInfo

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - posId: BigNumberish
  // // - **Output**
  // //     - active: boolean
  // //     - isLong: boolean
  // //     - PNL: BigNumberish
  // //     - averateEntryProce: BigNumberish
  // //     - startTimstamp: BigNumberish
  // //     - interestPaid: BigNumberish
  // //     - totalSwapFeePaid: BigNumberish
  // //     - totalTradingFeePaid: BigNumberish
  // async getPositionStateInfo(nftId: BigNumberish,  posId: BigNumberish):Promise<{active: boolean,  isLong: boolean,  PNL: BigNumberish,  averateEntryProce: BigNumberish,  startTimstamp: BigNumberish,  interestPaid: BigNumberish,  totalSwapFeePaid: BigNumberish,  totalTradingFeePaid: BigNumberish}>{}

  // // ### getCurrentMargin

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // // - **Output**
  // //     - PNL: BigNumberish
  // //     - margin: BigNumberish
  // async getCurrentMargin(nftId: BigNumberish,  collateral: TokenSymbols,  underlying: TokenSymbols):Promise<{PNL: BigNumberish,  margin: BigNumberish}>{}

  // // ### getAvailableCollateral

  // // - **Instance**: APHCore
  // // - **Parameters**
  // //     - nftId: BigNumberish
  // //     - collateral: TokenSymbols
  // //     - underlying: TokenSymbols
  // // - **Output**
  // //     - freeBalance: BigNumberish
  // //     - usedBalance: BigNumberish
  // //     - totalBalance: BigNumberish
  // async getAvailableCollateral(nftId: BigNumberish,  collateral: TokenSymbols,  underlying: TokenSymbols):Promise<{freeBalance: BigNumberish,  usedBalance: BigNumberish,  totalBalance: BigNumberish}>{}

  // // ## Utils

  // // ### approve

  // // - **Instance**: ERC20
  // // - **Parameters**
  // //     - spender: 'CORE' | PoolAddress
  // //     - amount: BigNumberish
  // // - **Output**
  // //     - allowance: BigNumberish
  // async approve(spender: 'CORE' | PoolAddress,amount: BigNumberish):Promise<{allowance: BigNumberish}>{}
  // // ### getProtocolAllowance

  // // - **Instance**: ERC20
  // // - **Parameters**
  // //     - spender: “POOL” or “CORE”
  // //     - token: TokenSymbols
  // //     - amount: BigNumberish
  // // - **Output**
  // //     - allowance: BigNumberish
  // async getProtocolAllowance(spender: 'CORE' | PoolAddress,  token: TokenSymbols,  amount: BigNumberish):Promise<{allowance: BigNumberish}>{}
}
