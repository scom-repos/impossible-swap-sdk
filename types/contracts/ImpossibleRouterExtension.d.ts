import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    amountADesired: number | BigNumber;
    amountBDesired: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
}
export interface IGetAmountInParams {
    amountOut: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
}
export interface IGetAmountOutParams {
    amountIn: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
}
export interface IQuoteParams {
    amountA: number | BigNumber;
    reserveA: number | BigNumber;
    reserveB: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    pair: string;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
}
export interface ISwapParams {
    amounts: (number | BigNumber)[];
    path: string[];
}
export declare class ImpossibleRouterExtension extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(factory: string): Promise<string>;
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    factory: {
        (): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    };
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    };
    swapSupportingFeeOnTransferTokens: {
        (path: string[]): Promise<TransactionReceipt>;
        call: (path: string[]) => Promise<void>;
    };
    private assign;
}
