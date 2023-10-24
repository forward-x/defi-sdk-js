import { ethers, providers, BigNumberish, utils } from "ethers";
import { StakePoolBase } from "./generated/IStakePool";
import { PoolBase, CoreBase } from "./generated/IAPHPool";
export enum ProviderType {
    WS, HTTP
}
export type TokenSymbols = 'BTC' | 'FWX' | 'ETH' | 'USDC' | 'WAVAX';
export type TokenAddress = {
    [key in TokenSymbols]: string;
}

export class FWXHTTPProvider {
    provider: providers.JsonRpcProvider | providers.WebSocketProvider;
    signer: ethers.Wallet;

    constructor(url: string, type: ProviderType) {
        switch (type) {
            case ProviderType.HTTP:
                this.provider = new providers.JsonRpcProvider(url);
            case ProviderType.WS:
                this.provider = new providers.WebSocketProvider(url);
        }
    }

    async setSigner(privateKey: string) {
        this.signer = new ethers.Wallet(privateKey, this.provider);
    }

    // ## Membership

    // ### mint

    // - **Instance**: Membership
    // - **Parameters**
    //     - referral: BigNumberish
    // - **Output**
    //     - tokenId: BigNumberish
    async mint(referral: BigNumberish): Promise<{ tokenId: BigNumberish }> {

    }


    // ### getRank

    // - **Instance**: Membership
    // - **Note**: If `pool` exist we’ll get a rank from that pool, otherwise get from a current pool
    // - **Parameters**
    //     - tokenId: BigNumberish
    //     - pool?: string (address of StakePool)
    // - **Output**:
    //     - rank: BigNumberish
    async getRank(tokenId: BigNumberish, pool?: string): Promise<{ rank: BigNumberish }> {

    }
    // ### ownerOf

    // - **Instance**: Membership
    // - **Parameters**
    //     - target: address
    // - **Output**:
    //     - owner: address
    async ownerOf(target: string): Promise<{ owner: string }> {
    }

    // ### usableToken

    // - **Instance**: Membership
    // - **Note**: We can use `callstatic` to prevent revert from chain and handle error for the users
    // - **Parameters**
    //     - owner: address
    //     - tokenId: BigNumberish
    // - **Output**:
    //     - useableTokenId: BigNumberish
    async usableToken(owner: string, tokenId: BigNumberish): Promise<{ usableTokenId: BigNumberish }> {
    }

    // ## StakePool

    // ### getNextSettleTimestamp

    // - **Instance**: StakePool
    // - **Parameters: none**
    // - **Output**:
    //     - nextSettleTimestamp: BigNumberish
    async getNextSettleTimestamp(): Promise<{ nextSettleTimestamp: BigNumberish }> {
    }

    // ### getNftList

    // - **Instance**: Membership
    // - **Parameters**:
    //     - owner: address
    // - **Output**:
    //     - nftIds: BigNumberish[]
    async getNftList(owner: string): Promise<{ nftIds: BigNumberish[] }> {
    }

    // ### getRankInfos

    // - **Instance**: StakePool
    // - **Parameters**: none
    // - **Output**:
    //     - info: StakePoolBase.RankInfo[] (struct from solidity)
    async getRankInfos(): Promise<{ info: StakePoolBase.RankInfoStruct[] }> {
    }

    // ### getStakeInfo

    // - **Instance**: StakePool
    // - **Parameters**:
    //     - nftId: BigNumberish
    // - **Output**:
    //     - info: StakePoolBase.StakeInfo[] (struct from solidity)
    async getRankInfos(): Promise<{ info: StakePoolBase.StakeInfoStruct[] }> {
    }

    // ## Lending

    // ### deposit

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols → **This function is used to select a pool by name, so users don’t have to worry about a token’s address.**
    //     - nftId: BigNumberish
    //     - depositAmount: BigNumberish
    // - **Output**
    //     - mintedP: BigNumberish
    //     - mintedAtp: BigNumberish
    //     - mintedItp: BigNumberish
    //     - mintedIfp: BigNumberish
    async deposit(pool: TokenSymbols, nftId: BigNumberish, depositAmount: BigNumberish): Promise<{ mintedP: BigNumberish, mintedAtp: BigNumberish, mintedItp: BigNumberish, mintedIfp: BigNumberish }> {
    }


    // ### withdraw

    // - **Instance**: APHPool
    // - **Parameters**
    //     - token: TokenSymbols
    //     - nftId: BigNumberish
    //     - withdrawAmount: BigNumberish
    // - **Output**
    //     - result: WithdrawResult (struct from solidity)
    async withdraw(token: TokenSymbols, nftId: BigNumberish, withdrawAmount: BigNumberish): Promise<{ result: PoolBase.WithdrawResultStruct }> {
    }

    // ### claimAllInterest

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - nftId: BigNumberish
    // - **Output**
    //     - result: WithdrawResult (struct from solidity)
    async claimAllInterest(pool: TokenSymbols, nftId: BigNumberish): Promise<{ result: PoolBase.WithdrawResultStruct }> {
    }

    // ### getLendingInfo

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - nftId: BigNumberish
    // - **Output**
    //     - lendingBalance: BigNumberish
    //     - interestObtained: BigNumberish
    //     - interestFwxObtained: BigNumberish
    //     - rank: BigNumberish
    //     - rankInfo: StakePool.RankInfo (struct from solidity)
    async getLendingInfo(pool: TokenSymbols, nftId: BigNumberish): Promise<{ lendingBalance: BigNumberish, interestObtained: BigNumberish, interestFwxObtained: BigNumberish, rank: BigNumberish, rankInfo: StakePoolBase.RankInfoStruct }> {
    }

    // ### getLendingInfoPlatform ??? What is this for

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    // - **Output**
    //     - atpPrice: BigNumberish
    //     - itpPrice: BigNumberish
    //     - ifpPrice: BigNumberish
    //     - totalSupply: BigNumberish
    //     - availableSupply: BigNumberish
    //     - utilizationRate: BigNumberish
    //     - interestRate: BigNumberish (current rate)
    //     - interestFwxRate: BigNumberish (current rate)
    async getLendingInfoPlatform(pool: TokenSymbols, nftId: BigNumberish): Promise<{ atpPrice: BigNumberish, itpPrice: BigNumberish, ifpPrice: BigNumberish, totalSupply: BigNumberish, availableSupply: BigNumberish, utilizationRate: BigNumberish, interestRate: BigNumberish, interestFwxRate: BigNumberish }> {
    }

    // ### getInterestRate

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - depositAmount?: BigNumberish
    // - **Output**
    //     - interestRate: BigNumberish
    async getInterestRate(pool: TokenSymbols, depositAmount?: BigNumberish): Promise<{ interestRate: BigNumberish }> {
    }

    // ### getFwxInterestRate

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - depositAmount?: BigNumberish
    // - **Output**
    //     - fwxInterestRate: BigNumberish
    async getFwxInterestRate(pool: TokenSymbols, depositAmount?: BigNumberish): Promise<{ fwxInterestRate: BigNumberish }> {
    }

    // ## Borrowing

    // ### borrow

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    //     - borrowAmount: BigNumberish
    //     - collateralAmount: BigNumberish
    //     - collateralToken: TokenSymbols
    // - **Output**
    //     - result: CoreBase.Loan (struct from solidity)
    async borrow(pool: TokenSymbols, nftId: BigNumberish, loanId: BigNumberish, borrowAmount: BigNumberish, collateralAmount: BigNumberish, collateralToken: TokenSymbols): Promise<{ result: CoreBase.LoanStruct }> {
    }

    // ### repay

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    //     - repayAmount: BigNumberish
    // - **Output**
    //     - borrowPaid: BigNumberish
    //     - interestPaid: BigNumberish
    async repay(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ borrowPaid: BigNumberish, interestPaid: BigNumberish }> {
    }

    // ### repayInterest

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    //     - repayAmount: BigNumberish
    // - **Output**
    //     - interestPaid: BigNumberish
    async repayInterest(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ interestPaid: BigNumberish }> {
    }

    // ### addCollateral

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    //     - collateralAmount: BigNumberish
    // - **Output**
    //     - result: CoreBase.Loan (struct from solidity)
    async addCollateral(nftId: BigNumberish, loanId: BigNumberish, repayAmount: BigNumberish): Promise<{ interestPaid: BigNumberish }> {
    }

    // ### removeCollateral

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    //     - collateralAmount: BigNumberish
    // - **Output**
    //     - result: CoreBase.Loan (struct from solidity)
    async removeCollateral(nftId: BigNumberish, loanId: BigNumberish, collateralAmount: BigNumberish): Promise<{ result: CoreBase.Loan }> {
    }

    // ### rollover

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    // - **Output**
    //     - delayInterest: BigNumberish
    //     - bountyReward: BigNumberish
    async rollover(nftId: BigNumberish, loanId: BigNumberish): Promise<{ delayInterest: BigNumberish, bountyReward: BigNumberish }> {
    }

    // ### getLoanInfo

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - loanId: BigNumberish
    // - **Output**
    //     - active: bool
    //     - startTimestamp: BigNumberish
    //     - borrowToken: address
    //     - collateralToken: address
    //     - lastSettleTimestamp: BigNumberish
    //     - rolloverTimestamp: BigNumberish
    //     - borrowAmount: BigNumberish
    //     - collateralAmount: BigNumberish
    //     - owedPerDay: BigNumberish
    //     - minInterest: BigNumberish
    //     - interestOwed: BigNumberish
    //     - interestPaid: BigNumberish
    async rollover(nftId: BigNumberish, loanId: BigNumberish): Promise<{ active: bool, startTimestamp: BigNumberish, borrowToken: address, collateralToken: address, lastSettleTimestamp: BigNumberish, rolloverTimestamp: BigNumberish, borrowAmount: BigNumberish, collateralAmount: BigNumberish, owedPerDay: BigNumberish, minInterest: BigNumberish, interestOwed: BigNumberish, interestPaid: BigNumberish }> {
    }

    // ### getBorrowingInterestRate

    // - **Instance**: APHPool
    // - **Parameters**
    //     - pool: TokenSymbols
    //     - borrowAmount?: BigNumberish
    // - **Output**
    //     - interestRate: BigNumberish
    //     - interestOwedPerDay: BigNumberish
    async getBorrowingInterestRate(pool: TokenSymbols, borrowAmount?: BigNumberish): Promise<{ interestRate: BigNumberish, interestOwedPerDay: BigNumberish }> {
    }

    // ## Trading

    // ### openPosition

    // - **Instance**: APHPool
    // - **Note**: The user doesn’t have to know borrow token and swap token, just choose collateral and underlying then trade.
    // - **Parameters**
    //     - isLong: boolean
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    //     - nftId: BigNumberish
    //     - entryPrice: BigNumberish
    //     - contracSize: BigNumberish
    //     - leverage: BigNumberish
    //     - slippage: BigNumberish
    // - **Output**
    //     - result: CoreBase.Position (struct from solidity)
    async openPosition(isLong: boolean, collateral: TokenSymbols, underlying: TokenSymbols, nftId: BigNumberish, entryPrice: BigNumberish, contracSize: BigNumberish, leverage: BigNumberish, slippage: BigNumberish): Promise<{ interestRate: BigNumberish, interestOwedPerDay: BigNumberish }> {
    }

    // ### closePosition

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - posId: BigNumberish
    //     - closingSize: BigNumberish
    // - **Output**
    //     - result: CoreBase.Position (struct from solidity)

    // ### depositCollateral

    // - **Instance**: APHCore
    // - **Parameters**
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    //     - nftId: BigNumberish
    //     - amount: BigNumberish
    // - **Output**
    //     - balance: BigNumberish

    // ### withdrawCollateral

    // - **Instance**: APHCore
    // - **Parameters**
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    //     - nftId: BigNumberish
    //     - amount: BigNumberish
    // - **Output**
    //     - balance: BigNumberish

    // ### getPositionInfo

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    // - **Output**
    //     - id: BigNumberish
    //     - entryPrice: BigNumberish
    //     - contractSize: BigNumberish
    //     - borrowAmount: BigNumberish
    //     - collateralUsed: BigNumberish (collateral swapped)
    //     - interestOwed: BigNumberish
    //     - interestOwedPerDay: BigNumberish
    //     - lastSettleTimstamp: BigNumberish

    // ### getAllActivePosition

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - pairs: Array of object {collateral: TokenSymbols, underlying: TokenSymbols}
    // - **Output**
    //     - **Array** of Positions
    //         - id: BigNumberish
    //         - entryPrice: BigNumberish
    //         - contractSize: BigNumberish
    //         - borrowAmount: BigNumberish
    //         - collateralUsed: BigNumberish (collateral swapped)
    //         - interestOwed: BigNumberish
    //         - interestOwedPerDay: BigNumberish
    //         - lastSettleTimstamp: BigNumberish

    // ### getPositionStateInfo

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - posId: BigNumberish
    // - **Output**
    //     - active: boolean
    //     - isLong: boolean
    //     - PNL: BigNumberish
    //     - averateEntryProce: BigNumberish
    //     - startTimstamp: BigNumberish
    //     - interestPaid: BigNumberish
    //     - totalSwapFeePaid: BigNumberish
    //     - totalTradingFeePaid: BigNumberish

    // ### getCurrentMargin

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    // - **Output**
    //     - PNL: BigNumberish (optional, can be separated to another function)
    //     - margin: BigNumberish

    // ### getAvailableCollateral

    // - **Instance**: APHCore
    // - **Parameters**
    //     - nftId: BigNumberish
    //     - collateral: TokenSymbols
    //     - underlying: TokenSymbols
    // - **Output**
    //     - freeBalance: BigNumberish
    //     - usedBalance: BigNumberish
    //     - totalBalance: BigNumberish

    // ## Utils

    // ### approve

    // - **Instance**: ERC20
    // - **Parameters**
    //     - spender: ?? We should define some enum to help user access our protocol contracts without knowing addresses, e.g., “core”, “pool”
    //     - amount: BigNumberish
    // - **Output**
    //     - allowance: BigNumberish

    // ### getProtocolAllowance

    // - **Instance**: ERC20
    // - **Parameters**
    //     - spender: “POOL” or “CORE”
    //     - token: TokenSymbols
    //     - amount: BigNumberish
    // - **Output**
    //     - allowance: BigNumberish
}
