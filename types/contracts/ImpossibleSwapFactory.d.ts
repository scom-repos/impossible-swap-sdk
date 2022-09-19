import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IChangeTokenAccessParams {
    token: string;
    allowed: boolean;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export interface ISetRouterAndExtensionParams {
    router: string;
    routerExtension: string;
}
export declare class ImpossibleSwapFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): ImpossibleSwapFactory.PairCreatedEvent;
    parseUpdatedGovernanceEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.UpdatedGovernanceEvent[];
    decodeUpdatedGovernanceEvent(event: Event): ImpossibleSwapFactory.UpdatedGovernanceEvent;
    allPairs: {
        (param1: number | BigNumber): Promise<string>;
    };
    allPairsLength: {
        (): Promise<BigNumber>;
    };
    approvedTokens: {
        (param1: string): Promise<boolean>;
    };
    changeTokenAccess: {
        (params: IChangeTokenAccessParams): Promise<TransactionReceipt>;
        call: (params: IChangeTokenAccessParams) => Promise<void>;
    };
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    feeTo: {
        (): Promise<string>;
    };
    getPair: {
        (params: IGetPairParams): Promise<string>;
    };
    governance: {
        (): Promise<string>;
    };
    router: {
        (): Promise<string>;
    };
    routerExtension: {
        (): Promise<string>;
    };
    setFeeTo: {
        (feeTo: string): Promise<TransactionReceipt>;
        call: (feeTo: string) => Promise<void>;
    };
    setGovernance: {
        (governance: string): Promise<TransactionReceipt>;
        call: (governance: string) => Promise<void>;
    };
    setRouterAndExtension: {
        (params: ISetRouterAndExtensionParams): Promise<TransactionReceipt>;
        call: (params: ISetRouterAndExtensionParams) => Promise<void>;
    };
    setWhitelist: {
        (b: boolean): Promise<TransactionReceipt>;
        call: (b: boolean) => Promise<void>;
    };
    whitelist: {
        (): Promise<boolean>;
    };
    private assign;
}
export declare module ImpossibleSwapFactory {
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        param4: BigNumber;
        _event: Event;
    }
    interface UpdatedGovernanceEvent {
        governance: string;
        _event: Event;
    }
}
