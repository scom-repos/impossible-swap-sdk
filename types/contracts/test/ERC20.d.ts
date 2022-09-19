import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
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
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class ERC20 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(totalSupply: number | BigNumber): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
    decodeTransferEvent(event: Event): ERC20.TransferEvent;
    DOMAIN_SEPARATOR: {
        (): Promise<string>;
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
    decimals: {
        (): Promise<BigNumber>;
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
    private assign;
}
export declare module ERC20 {
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
