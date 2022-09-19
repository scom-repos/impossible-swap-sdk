import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossiblePair.json";

export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {spender:string;value:number|BigNumber}
export interface IInitializeParams {token0:string;token1:string;router:string;routerExtension:string}
export interface IMakeXybkParams {newBoost0:number|BigNumber;newBoost1:number|BigNumber}
export interface IPermitParams {owner:string;spender:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;data:string}
export interface ITransferParams {to:string;value:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;value:number|BigNumber}
export interface IUpdateBoostParams {newBoost0:number|BigNumber;newBoost1:number|BigNumber}
export class ImpossiblePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): ImpossiblePair.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ImpossiblePair.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): ImpossiblePair.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): ImpossiblePair.BurnEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseChangeInvariantEvent(receipt: TransactionReceipt): ImpossiblePair.ChangeInvariantEvent[]{
        return this.parseEvents(receipt, "ChangeInvariant").map(e=>this.decodeChangeInvariantEvent(e));
    }
    decodeChangeInvariantEvent(event: Event): ImpossiblePair.ChangeInvariantEvent{
        let result = event.data;
        return {
            _isXybk: result._isXybk,
            _newBoost0: new BigNumber(result._newBoost0),
            _newBoost1: new BigNumber(result._newBoost1),
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): ImpossiblePair.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): ImpossiblePair.MintEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): ImpossiblePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): ImpossiblePair.SwapEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new BigNumber(result.amount0In),
            amount1In: new BigNumber(result.amount1In),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): ImpossiblePair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): ImpossiblePair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ImpossiblePair.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ImpossiblePair.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseUpdatedBoostEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedBoostEvent[]{
        return this.parseEvents(receipt, "UpdatedBoost").map(e=>this.decodeUpdatedBoostEvent(e));
    }
    decodeUpdatedBoostEvent(event: Event): ImpossiblePair.UpdatedBoostEvent{
        let result = event.data;
        return {
            _oldBoost0: new BigNumber(result._oldBoost0),
            _oldBoost1: new BigNumber(result._oldBoost1),
            _newBoost0: new BigNumber(result._newBoost0),
            _newBoost1: new BigNumber(result._newBoost1),
            _start: new BigNumber(result._start),
            _end: new BigNumber(result._end),
            _event: event
        };
    }
    parseUpdatedDelayEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedDelayEvent[]{
        return this.parseEvents(receipt, "UpdatedDelay").map(e=>this.decodeUpdatedDelayEvent(e));
    }
    decodeUpdatedDelayEvent(event: Event): ImpossiblePair.UpdatedDelayEvent{
        let result = event.data;
        return {
            _oldDelay: new BigNumber(result._oldDelay),
            _newDelay: new BigNumber(result._newDelay),
            _event: event
        };
    }
    parseUpdatedTradeFeesEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeFeesEvent[]{
        return this.parseEvents(receipt, "UpdatedTradeFees").map(e=>this.decodeUpdatedTradeFeesEvent(e));
    }
    decodeUpdatedTradeFeesEvent(event: Event): ImpossiblePair.UpdatedTradeFeesEvent{
        let result = event.data;
        return {
            _oldFee: new BigNumber(result._oldFee),
            _newFee: new BigNumber(result._newFee),
            _event: event
        };
    }
    parseUpdatedTradeStateEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeStateEvent[]{
        return this.parseEvents(receipt, "UpdatedTradeState").map(e=>this.decodeUpdatedTradeStateEvent(e));
    }
    decodeUpdatedTradeStateEvent(event: Event): ImpossiblePair.UpdatedTradeStateEvent{
        let result = event.data;
        return {
            _tradeState: new BigNumber(result._tradeState),
            _event: event
        };
    }
    parseUpdatedWithdrawalFeeRatioEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent[]{
        return this.parseEvents(receipt, "UpdatedWithdrawalFeeRatio").map(e=>this.decodeUpdatedWithdrawalFeeRatioEvent(e));
    }
    decodeUpdatedWithdrawalFeeRatioEvent(event: Event): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent{
        let result = event.data;
        return {
            _oldWithdrawalFee: new BigNumber(result._oldWithdrawalFee),
            _newWithdrawalFee: new BigNumber(result._newWithdrawalFee),
            _event: event
        };
    }
    DOMAIN_SEPARATOR: {
        (): Promise<string>;
    }
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    }
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (param1:string): Promise<BigNumber>;
    }
    burn: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    calcBoost: {
        (): Promise<{_boost0:BigNumber,_boost1:BigNumber}>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    delay: {
        (): Promise<BigNumber>;
    }
    endTime: {
        (): Promise<BigNumber>;
    }
    factory: {
        (): Promise<string>;
    }
    getPairSettings: {
        (): Promise<{_tradeFee:BigNumber,_tradeState:BigNumber,_isXybk:boolean}>;
    }
    getReserves: {
        (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber}>;
    }
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    }
    kLast: {
        (): Promise<BigNumber>;
    }
    makeUni: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    makeXybk: {
        (params: IMakeXybkParams): Promise<TransactionReceipt>;
        call: (params: IMakeXybkParams) => Promise<void>;
    }
    mint: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    nonces: {
        (param1:string): Promise<BigNumber>;
    }
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    }
    router: {
        (): Promise<string>;
    }
    routerExtension: {
        (): Promise<string>;
    }
    skim: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    startTime: {
        (): Promise<BigNumber>;
    }
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    }
    symbol: {
        (): Promise<string>;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    token0: {
        (): Promise<string>;
    }
    token1: {
        (): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    updateBoost: {
        (params: IUpdateBoostParams): Promise<TransactionReceipt>;
        call: (params: IUpdateBoostParams) => Promise<void>;
    }
    updateDelay: {
        (newDelay:number|BigNumber): Promise<TransactionReceipt>;
        call: (newDelay:number|BigNumber) => Promise<void>;
    }
    updateTradeFees: {
        (newFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (newFee:number|BigNumber) => Promise<void>;
    }
    updateTradeState: {
        (tradeState:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeState:number|BigNumber) => Promise<void>;
    }
    updateWithdrawalFeeRatio: {
        (newFeeRatio:number|BigNumber): Promise<TransactionReceipt>;
        call: (newFeeRatio:number|BigNumber) => Promise<void>;
    }
    withdrawalFeeRatio: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let DOMAIN_SEPARATOR_call = async (): Promise<string> => {
            let result = await this.call('DOMAIN_SEPARATOR');
            return result;
        }
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call
        let MINIMUM_LIQUIDITY_call = async (): Promise<BigNumber> => {
            let result = await this.call('MINIMUM_LIQUIDITY');
            return new BigNumber(result);
        }
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call
        let PERMIT_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('PERMIT_TYPEHASH');
            return result;
        }
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[param1]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let calcBoost_call = async (): Promise<{_boost0:BigNumber,_boost1:BigNumber}> => {
            let result = await this.call('calcBoost');
            return {
                _boost0: new BigNumber(result._boost0),
                _boost1: new BigNumber(result._boost1)
            };
        }
        this.calcBoost = calcBoost_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let delay_call = async (): Promise<BigNumber> => {
            let result = await this.call('delay');
            return new BigNumber(result);
        }
        this.delay = delay_call
        let endTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('endTime');
            return new BigNumber(result);
        }
        this.endTime = endTime_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getPairSettings_call = async (): Promise<{_tradeFee:BigNumber,_tradeState:BigNumber,_isXybk:boolean}> => {
            let result = await this.call('getPairSettings');
            return {
                _tradeFee: new BigNumber(result._tradeFee),
                _tradeState: new BigNumber(result._tradeState),
                _isXybk: result._isXybk
            };
        }
        this.getPairSettings = getPairSettings_call
        let getReserves_call = async (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber}> => {
            let result = await this.call('getReserves');
            return {
                _reserve0: new BigNumber(result._reserve0),
                _reserve1: new BigNumber(result._reserve1)
            };
        }
        this.getReserves = getReserves_call
        let kLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('kLast');
            return new BigNumber(result);
        }
        this.kLast = kLast_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let nonces_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('nonces',[param1]);
            return new BigNumber(result);
        }
        this.nonces = nonces_call
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
        let startTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('startTime');
            return new BigNumber(result);
        }
        this.startTime = startTime_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let token0_call = async (): Promise<string> => {
            let result = await this.call('token0');
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (): Promise<string> => {
            let result = await this.call('token1');
            return result;
        }
        this.token1 = token1_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let withdrawalFeeRatio_call = async (): Promise<BigNumber> => {
            let result = await this.call('withdrawalFeeRatio');
            return new BigNumber(result);
        }
        this.withdrawalFeeRatio = withdrawalFeeRatio_call
        let approveParams = (params: IApproveParams) => [params.spender,Utils.toString(params.value)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[to]);
            return result;
        }
        let burn_call = async (to:string): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('burn',[to]);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let initializeParams = (params: IInitializeParams) => [params.token0,params.token1,params.router,params.routerExtension];
        let initialize_send = async (params: IInitializeParams): Promise<TransactionReceipt> => {
            let result = await this.send('initialize',initializeParams(params));
            return result;
        }
        let initialize_call = async (params: IInitializeParams): Promise<void> => {
            let result = await this.call('initialize',initializeParams(params));
            return;
        }
        this.initialize = Object.assign(initialize_send, {
            call:initialize_call
        });
        let makeUni_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('makeUni');
            return result;
        }
        let makeUni_call = async (): Promise<void> => {
            let result = await this.call('makeUni');
            return;
        }
        this.makeUni = Object.assign(makeUni_send, {
            call:makeUni_call
        });
        let makeXybkParams = (params: IMakeXybkParams) => [Utils.toString(params.newBoost0),Utils.toString(params.newBoost1)];
        let makeXybk_send = async (params: IMakeXybkParams): Promise<TransactionReceipt> => {
            let result = await this.send('makeXybk',makeXybkParams(params));
            return result;
        }
        let makeXybk_call = async (params: IMakeXybkParams): Promise<void> => {
            let result = await this.call('makeXybk',makeXybkParams(params));
            return;
        }
        this.makeXybk = Object.assign(makeXybk_send, {
            call:makeXybk_call
        });
        let mint_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[to]);
            return result;
        }
        let mint_call = async (to:string): Promise<BigNumber> => {
            let result = await this.call('mint',[to]);
            return new BigNumber(result);
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let permitParams = (params: IPermitParams) => [params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let permit_send = async (params: IPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('permit',permitParams(params));
            return result;
        }
        let permit_call = async (params: IPermitParams): Promise<void> => {
            let result = await this.call('permit',permitParams(params));
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let skim_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('skim',[to]);
            return result;
        }
        let skim_call = async (to:string): Promise<void> => {
            let result = await this.call('skim',[to]);
            return;
        }
        this.skim = Object.assign(skim_send, {
            call:skim_call
        });
        let swapParams = (params: ISwapParams) => [Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,Utils.stringToBytes(params.data)];
        let swap_send = async (params: ISwapParams): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params));
            return result;
        }
        let swap_call = async (params: ISwapParams): Promise<void> => {
            let result = await this.call('swap',swapParams(params));
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('sync');
            return result;
        }
        let sync_call = async (): Promise<void> => {
            let result = await this.call('sync');
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
        });
        let transferParams = (params: ITransferParams) => [params.to,Utils.toString(params.value)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,Utils.toString(params.value)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let updateBoostParams = (params: IUpdateBoostParams) => [Utils.toString(params.newBoost0),Utils.toString(params.newBoost1)];
        let updateBoost_send = async (params: IUpdateBoostParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateBoost',updateBoostParams(params));
            return result;
        }
        let updateBoost_call = async (params: IUpdateBoostParams): Promise<void> => {
            let result = await this.call('updateBoost',updateBoostParams(params));
            return;
        }
        this.updateBoost = Object.assign(updateBoost_send, {
            call:updateBoost_call
        });
        let updateDelay_send = async (newDelay:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('updateDelay',[Utils.toString(newDelay)]);
            return result;
        }
        let updateDelay_call = async (newDelay:number|BigNumber): Promise<void> => {
            let result = await this.call('updateDelay',[Utils.toString(newDelay)]);
            return;
        }
        this.updateDelay = Object.assign(updateDelay_send, {
            call:updateDelay_call
        });
        let updateTradeFees_send = async (newFee:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('updateTradeFees',[Utils.toString(newFee)]);
            return result;
        }
        let updateTradeFees_call = async (newFee:number|BigNumber): Promise<void> => {
            let result = await this.call('updateTradeFees',[Utils.toString(newFee)]);
            return;
        }
        this.updateTradeFees = Object.assign(updateTradeFees_send, {
            call:updateTradeFees_call
        });
        let updateTradeState_send = async (tradeState:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('updateTradeState',[Utils.toString(tradeState)]);
            return result;
        }
        let updateTradeState_call = async (tradeState:number|BigNumber): Promise<void> => {
            let result = await this.call('updateTradeState',[Utils.toString(tradeState)]);
            return;
        }
        this.updateTradeState = Object.assign(updateTradeState_send, {
            call:updateTradeState_call
        });
        let updateWithdrawalFeeRatio_send = async (newFeeRatio:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('updateWithdrawalFeeRatio',[Utils.toString(newFeeRatio)]);
            return result;
        }
        let updateWithdrawalFeeRatio_call = async (newFeeRatio:number|BigNumber): Promise<void> => {
            let result = await this.call('updateWithdrawalFeeRatio',[Utils.toString(newFeeRatio)]);
            return;
        }
        this.updateWithdrawalFeeRatio = Object.assign(updateWithdrawalFeeRatio_send, {
            call:updateWithdrawalFeeRatio_call
        });
    }
}
export module ImpossiblePair{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface BurnEvent {sender:string,amount0:BigNumber,amount1:BigNumber,to:string,_event:Event}
    export interface ChangeInvariantEvent {_isXybk:boolean,_newBoost0:BigNumber,_newBoost1:BigNumber,_event:Event}
    export interface MintEvent {sender:string,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface SwapEvent {sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string,_event:Event}
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
    export interface UpdatedBoostEvent {_oldBoost0:BigNumber,_oldBoost1:BigNumber,_newBoost0:BigNumber,_newBoost1:BigNumber,_start:BigNumber,_end:BigNumber,_event:Event}
    export interface UpdatedDelayEvent {_oldDelay:BigNumber,_newDelay:BigNumber,_event:Event}
    export interface UpdatedTradeFeesEvent {_oldFee:BigNumber,_newFee:BigNumber,_event:Event}
    export interface UpdatedTradeStateEvent {_tradeState:BigNumber,_event:Event}
    export interface UpdatedWithdrawalFeeRatioEvent {_oldWithdrawalFee:BigNumber,_newWithdrawalFee:BigNumber,_event:Event}
}