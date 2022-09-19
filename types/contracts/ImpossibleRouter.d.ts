import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    pairFactory: string;
    wrapFactory: string;
    utilitySettingAdmin: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    amountADesired: number | BigNumber;
    amountBDesired: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IAddLiquidityETHParams {
    token: string;
    amountTokenDesired: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHWithPermitParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityWithPermitParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISetUtilitiesParams {
    WETH: string;
    routerExtension: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export declare class ImpossibleRouter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    factory: {
        (): Promise<string>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityETHWithPermit: {
        (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitParams) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    routerExtension: {
        (): Promise<string>;
    };
    setUtilities: {
        (params: ISetUtilitiesParams): Promise<TransactionReceipt>;
        call: (params: ISetUtilitiesParams) => Promise<void>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    };
    wrapFactory: {
        (): Promise<string>;
    };
    private assign;
}
