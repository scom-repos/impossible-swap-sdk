import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
    router: string;
    routerExtension: string;
}
export interface IMakeXybkParams {
    newBoost0: number | BigNumber;
    newBoost1: number | BigNumber;
}
export interface IPermitParams {
    owner: string;
    spender: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export interface IUpdateBoostParams {
    newBoost0: number | BigNumber;
    newBoost1: number | BigNumber;
}
export declare class ImpossiblePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ImpossiblePair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ImpossiblePair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): ImpossiblePair.BurnEvent[];
    decodeBurnEvent(event: Event): ImpossiblePair.BurnEvent;
    parseChangeInvariantEvent(receipt: TransactionReceipt): ImpossiblePair.ChangeInvariantEvent[];
    decodeChangeInvariantEvent(event: Event): ImpossiblePair.ChangeInvariantEvent;
    parseMintEvent(receipt: TransactionReceipt): ImpossiblePair.MintEvent[];
    decodeMintEvent(event: Event): ImpossiblePair.MintEvent;
    parseSwapEvent(receipt: TransactionReceipt): ImpossiblePair.SwapEvent[];
    decodeSwapEvent(event: Event): ImpossiblePair.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): ImpossiblePair.SyncEvent[];
    decodeSyncEvent(event: Event): ImpossiblePair.SyncEvent;
    parseTransferEvent(receipt: TransactionReceipt): ImpossiblePair.TransferEvent[];
    decodeTransferEvent(event: Event): ImpossiblePair.TransferEvent;
    parseUpdatedBoostEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedBoostEvent[];
    decodeUpdatedBoostEvent(event: Event): ImpossiblePair.UpdatedBoostEvent;
    parseUpdatedDelayEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedDelayEvent[];
    decodeUpdatedDelayEvent(event: Event): ImpossiblePair.UpdatedDelayEvent;
    parseUpdatedTradeFeesEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeFeesEvent[];
    decodeUpdatedTradeFeesEvent(event: Event): ImpossiblePair.UpdatedTradeFeesEvent;
    parseUpdatedTradeStateEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeStateEvent[];
    decodeUpdatedTradeStateEvent(event: Event): ImpossiblePair.UpdatedTradeStateEvent;
    parseUpdatedWithdrawalFeeRatioEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent[];
    decodeUpdatedWithdrawalFeeRatioEvent(event: Event): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent;
    DOMAIN_SEPARATOR: {
        (): Promise<string>;
    };
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    };
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string): Promise<BigNumber>;
    };
    burn: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    calcBoost: {
        (): Promise<{
            _boost0: BigNumber;
            _boost1: BigNumber;
        }>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    delay: {
        (): Promise<BigNumber>;
    };
    endTime: {
        (): Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    getPairSettings: {
        (): Promise<{
            _tradeFee: BigNumber;
            _tradeState: BigNumber;
            _isXybk: boolean;
        }>;
    };
    getReserves: {
        (): Promise<{
            _reserve0: BigNumber;
            _reserve1: BigNumber;
        }>;
    };
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    };
    kLast: {
        (): Promise<BigNumber>;
    };
    makeUni: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    makeXybk: {
        (params: IMakeXybkParams): Promise<TransactionReceipt>;
        call: (params: IMakeXybkParams) => Promise<void>;
    };
    mint: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    nonces: {
        (param1: string): Promise<BigNumber>;
    };
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    };
    router: {
        (): Promise<string>;
    };
    routerExtension: {
        (): Promise<string>;
    };
    skim: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    startTime: {
        (): Promise<BigNumber>;
    };
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    };
    symbol: {
        (): Promise<string>;
    };
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0: {
        (): Promise<string>;
    };
    token1: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    updateBoost: {
        (params: IUpdateBoostParams): Promise<TransactionReceipt>;
        call: (params: IUpdateBoostParams) => Promise<void>;
    };
    updateDelay: {
        (newDelay: number | BigNumber): Promise<TransactionReceipt>;
        call: (newDelay: number | BigNumber) => Promise<void>;
    };
    updateTradeFees: {
        (newFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (newFee: number | BigNumber) => Promise<void>;
    };
    updateTradeState: {
        (tradeState: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeState: number | BigNumber) => Promise<void>;
    };
    updateWithdrawalFeeRatio: {
        (newFeeRatio: number | BigNumber): Promise<TransactionReceipt>;
        call: (newFeeRatio: number | BigNumber) => Promise<void>;
    };
    withdrawalFeeRatio: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module ImpossiblePair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface ChangeInvariantEvent {
        _isXybk: boolean;
        _newBoost0: BigNumber;
        _newBoost1: BigNumber;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface SyncEvent {
        reserve0: BigNumber;
        reserve1: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
    interface UpdatedBoostEvent {
        _oldBoost0: BigNumber;
        _oldBoost1: BigNumber;
        _newBoost0: BigNumber;
        _newBoost1: BigNumber;
        _start: BigNumber;
        _end: BigNumber;
        _event: Event;
    }
    interface UpdatedDelayEvent {
        _oldDelay: BigNumber;
        _newDelay: BigNumber;
        _event: Event;
    }
    interface UpdatedTradeFeesEvent {
        _oldFee: BigNumber;
        _newFee: BigNumber;
        _event: Event;
    }
    interface UpdatedTradeStateEvent {
        _tradeState: BigNumber;
        _event: Event;
    }
    interface UpdatedWithdrawalFeeRatioEvent {
        _oldWithdrawalFee: BigNumber;
        _newWithdrawalFee: BigNumber;
        _event: Event;
    }
}
