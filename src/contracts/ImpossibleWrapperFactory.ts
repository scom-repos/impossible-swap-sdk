import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossibleWrapperFactory.json";

export interface ICreatePairingParams {underlying:string;ratioNumerator:number|BigNumber;ratioDenominator:number|BigNumber}
export class ImpossibleWrapperFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
    }
    parseWrapCreatedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapCreatedEvent[]{
        return this.parseEvents(receipt, "WrapCreated").map(e=>this.decodeWrapCreatedEvent(e));
    }
    decodeWrapCreatedEvent(event: Event): ImpossibleWrapperFactory.WrapCreatedEvent{
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            param3: new BigNumber(result[2]),
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    parseWrapDeletedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapDeletedEvent[]{
        return this.parseEvents(receipt, "WrapDeleted").map(e=>this.decodeWrapDeletedEvent(e));
    }
    decodeWrapDeletedEvent(event: Event): ImpossibleWrapperFactory.WrapDeletedEvent{
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            _event: event
        };
    }
    createPairing: {
        (params: ICreatePairingParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairingParams) => Promise<string>;
    }
    deletePairing: {
        (wrapper:string): Promise<TransactionReceipt>;
        call: (wrapper:string) => Promise<void>;
    }
    governance: {
        (): Promise<string>;
    }
    setGovernance: {
        (governance:string): Promise<TransactionReceipt>;
        call: (governance:string) => Promise<void>;
    }
    tokensToWrappedTokens: {
        (param1:string): Promise<string>;
    }
    wrappedTokensToTokens: {
        (param1:string): Promise<string>;
    }
    private assign(){
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let tokensToWrappedTokens_call = async (param1:string): Promise<string> => {
            let result = await this.call('tokensToWrappedTokens',[param1]);
            return result;
        }
        this.tokensToWrappedTokens = tokensToWrappedTokens_call
        let wrappedTokensToTokens_call = async (param1:string): Promise<string> => {
            let result = await this.call('wrappedTokensToTokens',[param1]);
            return result;
        }
        this.wrappedTokensToTokens = wrappedTokensToTokens_call
        let createPairingParams = (params: ICreatePairingParams) => [params.underlying,Utils.toString(params.ratioNumerator),Utils.toString(params.ratioDenominator)];
        let createPairing_send = async (params: ICreatePairingParams): Promise<TransactionReceipt> => {
            let result = await this.send('createPairing',createPairingParams(params));
            return result;
        }
        let createPairing_call = async (params: ICreatePairingParams): Promise<string> => {
            let result = await this.call('createPairing',createPairingParams(params));
            return result;
        }
        this.createPairing = Object.assign(createPairing_send, {
            call:createPairing_call
        });
        let deletePairing_send = async (wrapper:string): Promise<TransactionReceipt> => {
            let result = await this.send('deletePairing',[wrapper]);
            return result;
        }
        let deletePairing_call = async (wrapper:string): Promise<void> => {
            let result = await this.call('deletePairing',[wrapper]);
            return;
        }
        this.deletePairing = Object.assign(deletePairing_send, {
            call:deletePairing_call
        });
        let setGovernance_send = async (governance:string): Promise<TransactionReceipt> => {
            let result = await this.send('setGovernance',[governance]);
            return result;
        }
        let setGovernance_call = async (governance:string): Promise<void> => {
            let result = await this.call('setGovernance',[governance]);
            return;
        }
        this.setGovernance = Object.assign(setGovernance_send, {
            call:setGovernance_call
        });
    }
}
export module ImpossibleWrapperFactory{
    export interface WrapCreatedEvent {param1:string,param2:string,param3:BigNumber,param4:BigNumber,_event:Event}
    export interface WrapDeletedEvent {param1:string,param2:string,_event:Event}
}