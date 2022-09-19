import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./WETH9.json";

export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {guy:string;wad:number|BigNumber}
export interface ITransferParams {dst:string;wad:number|BigNumber}
export interface ITransferFromParams {src:string;dst:string;wad:number|BigNumber}
export class WETH9 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): WETH9.ApprovalEvent{
        let result = event.data;
        return {
            src: result.src,
            guy: result.guy,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): WETH9.DepositEvent{
        let result = event.data;
        return {
            dst: result.dst,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): WETH9.TransferEvent{
        let result = event.data;
        return {
            src: result.src,
            dst: result.dst,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[]{
        return this.parseEvents(receipt, "Withdrawal").map(e=>this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event: Event): WETH9.WithdrawalEvent{
        let result = event.data;
        return {
            src: result.src,
            wad: new BigNumber(result.wad),
            _event: event
        };
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
    decimals: {
        (): Promise<BigNumber>;
    }
    deposit: {
        (_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (_value:number|BigNumber) => Promise<void>;
    }
    name: {
        (): Promise<string>;
    }
    symbol: {
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
    withdraw: {
        (wad:number|BigNumber): Promise<TransactionReceipt>;
        call: (wad:number|BigNumber) => Promise<void>;
    }
    private assign(){
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
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.guy,Utils.toString(params.wad)];
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
        let deposit_send = async (_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('deposit', [], {value:_value});
            return result;
        }
        let deposit_call = async (_value:number|BigNumber): Promise<void> => {
            let result = await this.call('deposit', [], {value:_value});
            return;
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
        });
        let transferParams = (params: ITransferParams) => [params.dst,Utils.toString(params.wad)];
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
        let transferFromParams = (params: ITransferFromParams) => [params.src,params.dst,Utils.toString(params.wad)];
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
        let withdraw_send = async (wad:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',[Utils.toString(wad)]);
            return result;
        }
        let withdraw_call = async (wad:number|BigNumber): Promise<void> => {
            let result = await this.call('withdraw',[Utils.toString(wad)]);
            return;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module WETH9{
    export interface ApprovalEvent {src:string,guy:string,wad:BigNumber,_event:Event}
    export interface DepositEvent {dst:string,wad:BigNumber,_event:Event}
    export interface TransferEvent {src:string,dst:string,wad:BigNumber,_event:Event}
    export interface WithdrawalEvent {src:string,wad:BigNumber,_event:Event}
}