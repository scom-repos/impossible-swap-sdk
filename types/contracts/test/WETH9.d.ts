import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    guy: string;
    wad: number | BigNumber;
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
export declare class WETH9 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[];
    decodeApprovalEvent(event: Event): WETH9.ApprovalEvent;
    parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[];
    decodeDepositEvent(event: Event): WETH9.DepositEvent;
    parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[];
    decodeTransferEvent(event: Event): WETH9.TransferEvent;
    parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[];
    decodeWithdrawalEvent(event: Event): WETH9.WithdrawalEvent;
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
    decimals: {
        (): Promise<BigNumber>;
    };
    deposit: {
        (_value: number | BigNumber): Promise<TransactionReceipt>;
        call: (_value: number | BigNumber) => Promise<void>;
    };
    name: {
        (): Promise<string>;
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
    withdraw: {
        (wad: number | BigNumber): Promise<TransactionReceipt>;
        call: (wad: number | BigNumber) => Promise<void>;
    };
    private assign;
}
export declare module WETH9 {
    interface ApprovalEvent {
        src: string;
        guy: string;
        wad: BigNumber;
        _event: Event;
    }
    interface DepositEvent {
        dst: string;
        wad: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        src: string;
        dst: string;
        wad: BigNumber;
        _event: Event;
    }
    interface WithdrawalEvent {
        src: string;
        wad: BigNumber;
        _event: Event;
    }
}
