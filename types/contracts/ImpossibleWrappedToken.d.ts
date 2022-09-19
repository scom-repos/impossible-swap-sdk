import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    underlying: string;
    ratioNum: number | BigNumber;
    ratioDenom: number | BigNumber;
}
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    guy: string;
    wad: number | BigNumber;
}
export interface IDepositParams {
    dst: string;
    sendAmt: number | BigNumber;
}
export interface ITransferParams {
    dst: string;
    wad: number | BigNumber;
}
export interface ITransferFromParams {
    src: string;
    dst: string;
    wad: number | BigNumber;
}
export interface IWithdrawParams {
    dst: string;
    wad: number | BigNumber;
}
export declare class ImpossibleWrappedToken extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ImpossibleWrappedToken.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.TransferEvent[];
    decodeTransferEvent(event: Event): ImpossibleWrappedToken.TransferEvent;
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    amtToUnderlyingAmt: {
        (amt: number | BigNumber): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string): Promise<BigNumber>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    deposit: {
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    ratioDenom: {
        (): Promise<BigNumber>;
    };
    ratioNum: {
        (): Promise<BigNumber>;
    };
    symbol: {
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
    underlying: {
        (): Promise<string>;
    };
    underlyingBalance: {
        (): Promise<BigNumber>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<BigNumber>;
    };
    private assign;
}
export declare module ImpossibleWrappedToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
