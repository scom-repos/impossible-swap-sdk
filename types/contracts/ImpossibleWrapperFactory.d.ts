import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface ICreatePairingParams {
    underlying: string;
    ratioNumerator: number | BigNumber;
    ratioDenominator: number | BigNumber;
}
export declare class ImpossibleWrapperFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseWrapCreatedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapCreatedEvent[];
    decodeWrapCreatedEvent(event: Event): ImpossibleWrapperFactory.WrapCreatedEvent;
    parseWrapDeletedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapDeletedEvent[];
    decodeWrapDeletedEvent(event: Event): ImpossibleWrapperFactory.WrapDeletedEvent;
    createPairing: {
        (params: ICreatePairingParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairingParams) => Promise<string>;
    };
    deletePairing: {
        (wrapper: string): Promise<TransactionReceipt>;
        call: (wrapper: string) => Promise<void>;
    };
    governance: {
        (): Promise<string>;
    };
    setGovernance: {
        (governance: string): Promise<TransactionReceipt>;
        call: (governance: string) => Promise<void>;
    };
    tokensToWrappedTokens: {
        (param1: string): Promise<string>;
    };
    wrappedTokensToTokens: {
        (param1: string): Promise<string>;
    };
    private assign;
}
export declare module ImpossibleWrapperFactory {
    interface WrapCreatedEvent {
        param1: string;
        param2: string;
        param3: BigNumber;
        param4: BigNumber;
        _event: Event;
    }
    interface WrapDeletedEvent {
        param1: string;
        param2: string;
        _event: Event;
    }
}
