import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossibleWrappedToken.json";

export interface IDeployParams {underlying:string;ratioNum:number|BigNumber;ratioDenom:number|BigNumber}
export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {guy:string;wad:number|BigNumber}
export interface IDepositParams {dst:string;sendAmt:number|BigNumber}
export interface ITransferParams {dst:string;wad:number|BigNumber}
export interface ITransferFromParams {src:string;dst:string;wad:number|BigNumber}
export interface IWithdrawParams {dst:string;wad:number|BigNumber}
export class ImpossibleWrappedToken extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.underlying,Utils.toString(params.ratioNum),Utils.toString(params.ratioDenom)]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ImpossibleWrappedToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ImpossibleWrappedToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    amtToUnderlyingAmt: {
        (amt:number|BigNumber): Promise<BigNumber>;
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
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    ratioDenom: {
        (): Promise<BigNumber>;
    }
    ratioNum: {
        (): Promise<BigNumber>;
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
    underlying: {
        (): Promise<string>;
    }
    underlyingBalance: {
        (): Promise<BigNumber>;
    }
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<BigNumber>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let amtToUnderlyingAmt_call = async (amt:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('amtToUnderlyingAmt',[Utils.toString(amt)]);
            return new BigNumber(result);
        }
        this.amtToUnderlyingAmt = amtToUnderlyingAmt_call
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
        let ratioDenom_call = async (): Promise<BigNumber> => {
            let result = await this.call('ratioDenom');
            return new BigNumber(result);
        }
        this.ratioDenom = ratioDenom_call
        let ratioNum_call = async (): Promise<BigNumber> => {
            let result = await this.call('ratioNum');
            return new BigNumber(result);
        }
        this.ratioNum = ratioNum_call
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
        let underlying_call = async (): Promise<string> => {
            let result = await this.call('underlying');
            return result;
        }
        this.underlying = underlying_call
        let underlyingBalance_call = async (): Promise<BigNumber> => {
            let result = await this.call('underlyingBalance');
            return new BigNumber(result);
        }
        this.underlyingBalance = underlyingBalance_call
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
        let depositParams = (params: IDepositParams) => [params.dst,Utils.toString(params.sendAmt)];
        let deposit_send = async (params: IDepositParams): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params));
            return result;
        }
        let deposit_call = async (params: IDepositParams): Promise<BigNumber> => {
            let result = await this.call('deposit',depositParams(params));
            return new BigNumber(result);
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
        let withdrawParams = (params: IWithdrawParams) => [params.dst,Utils.toString(params.wad)];
        let withdraw_send = async (params: IWithdrawParams): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params));
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams): Promise<BigNumber> => {
            let result = await this.call('withdraw',withdrawParams(params));
            return new BigNumber(result);
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module ImpossibleWrappedToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}