import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossibleSwapFactory.json";

export interface IChangeTokenAccessParams {token:string;allowed:boolean}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetRouterAndExtensionParams {router:string;routerExtension:string}
export class ImpossibleSwapFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): ImpossibleSwapFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    parseUpdatedGovernanceEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.UpdatedGovernanceEvent[]{
        return this.parseEvents(receipt, "UpdatedGovernance").map(e=>this.decodeUpdatedGovernanceEvent(e));
    }
    decodeUpdatedGovernanceEvent(event: Event): ImpossibleSwapFactory.UpdatedGovernanceEvent{
        let result = event.data;
        return {
            governance: result.governance,
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber): Promise<string>;
    }
    allPairsLength: {
        (): Promise<BigNumber>;
    }
    approvedTokens: {
        (param1:string): Promise<boolean>;
    }
    changeTokenAccess: {
        (params: IChangeTokenAccessParams): Promise<TransactionReceipt>;
        call: (params: IChangeTokenAccessParams) => Promise<void>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    feeTo: {
        (): Promise<string>;
    }
    getPair: {
        (params: IGetPairParams): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    router: {
        (): Promise<string>;
    }
    routerExtension: {
        (): Promise<string>;
    }
    setFeeTo: {
        (feeTo:string): Promise<TransactionReceipt>;
        call: (feeTo:string) => Promise<void>;
    }
    setGovernance: {
        (governance:string): Promise<TransactionReceipt>;
        call: (governance:string) => Promise<void>;
    }
    setRouterAndExtension: {
        (params: ISetRouterAndExtensionParams): Promise<TransactionReceipt>;
        call: (params: ISetRouterAndExtensionParams) => Promise<void>;
    }
    setWhitelist: {
        (b:boolean): Promise<TransactionReceipt>;
        call: (b:boolean) => Promise<void>;
    }
    whitelist: {
        (): Promise<boolean>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('allPairs',[Utils.toString(param1)]);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('allPairsLength');
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let approvedTokens_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('approvedTokens',[param1]);
            return result;
        }
        this.approvedTokens = approvedTokens_call
        let feeTo_call = async (): Promise<string> => {
            let result = await this.call('feeTo');
            return result;
        }
        this.feeTo = feeTo_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params));
            return result;
        }
        this.getPair = getPair_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let router_call = async (): Promise<string> => {
            let result = await this.call('router');
            return result;
        }
        this.router = router_call
        let routerExtension_call = async (): Promise<string> => {
            let result = await this.call('routerExtension');
            return result;
        }
        this.routerExtension = routerExtension_call
        let whitelist_call = async (): Promise<boolean> => {
            let result = await this.call('whitelist');
            return result;
        }
        this.whitelist = whitelist_call
        let changeTokenAccessParams = (params: IChangeTokenAccessParams) => [params.token,params.allowed];
        let changeTokenAccess_send = async (params: IChangeTokenAccessParams): Promise<TransactionReceipt> => {
            let result = await this.send('changeTokenAccess',changeTokenAccessParams(params));
            return result;
        }
        let changeTokenAccess_call = async (params: IChangeTokenAccessParams): Promise<void> => {
            let result = await this.call('changeTokenAccess',changeTokenAccessParams(params));
            return;
        }
        this.changeTokenAccess = Object.assign(changeTokenAccess_send, {
            call:changeTokenAccess_call
        });
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params));
            return result;
        }
        let createPair_call = async (params: ICreatePairParams): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params));
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let setFeeTo_send = async (feeTo:string): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeTo',[feeTo]);
            return result;
        }
        let setFeeTo_call = async (feeTo:string): Promise<void> => {
            let result = await this.call('setFeeTo',[feeTo]);
            return;
        }
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call:setFeeTo_call
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
        let setRouterAndExtensionParams = (params: ISetRouterAndExtensionParams) => [params.router,params.routerExtension];
        let setRouterAndExtension_send = async (params: ISetRouterAndExtensionParams): Promise<TransactionReceipt> => {
            let result = await this.send('setRouterAndExtension',setRouterAndExtensionParams(params));
            return result;
        }
        let setRouterAndExtension_call = async (params: ISetRouterAndExtensionParams): Promise<void> => {
            let result = await this.call('setRouterAndExtension',setRouterAndExtensionParams(params));
            return;
        }
        this.setRouterAndExtension = Object.assign(setRouterAndExtension_send, {
            call:setRouterAndExtension_call
        });
        let setWhitelist_send = async (b:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('setWhitelist',[b]);
            return result;
        }
        let setWhitelist_call = async (b:boolean): Promise<void> => {
            let result = await this.call('setWhitelist',[b]);
            return;
        }
        this.setWhitelist = Object.assign(setWhitelist_send, {
            call:setWhitelist_call
        });
    }
}
export module ImpossibleSwapFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,param4:BigNumber,_event:Event}
    export interface UpdatedGovernanceEvent {governance:string,_event:Event}
}