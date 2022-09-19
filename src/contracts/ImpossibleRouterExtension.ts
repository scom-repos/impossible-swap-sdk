import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossibleRouterExtension.json";

export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountOutParams {amountIn:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;pair:string;amountAMin:number|BigNumber;amountBMin:number|BigNumber}
export interface ISwapParams {amounts:(number|BigNumber)[];path:string[]}
export class ImpossibleRouterExtension extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(factory:string): Promise<string>{
        return this.__deploy([factory]);
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    factory: {
        (): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    }
    swapSupportingFeeOnTransferTokens: {
        (path:string[]): Promise<TransactionReceipt>;
        call: (path:string[]) => Promise<void>;
    }
    private assign(){
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [Utils.toString(params.amountOut),params.tokenIn,params.tokenOut];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [Utils.toString(params.amountIn),params.tokenIn,params.tokenOut];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [Utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [Utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [Utils.toString(params.amountA),Utils.toString(params.reserveA),Utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params));
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,params.pair,Utils.toString(params.amountAMin),Utils.toString(params.amountBMin)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let swapParams = (params: ISwapParams) => [Utils.toString(params.amounts),params.path];
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
        let swapSupportingFeeOnTransferTokens_send = async (path:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('swapSupportingFeeOnTransferTokens',[path]);
            return result;
        }
        let swapSupportingFeeOnTransferTokens_call = async (path:string[]): Promise<void> => {
            let result = await this.call('swapSupportingFeeOnTransferTokens',[path]);
            return;
        }
        this.swapSupportingFeeOnTransferTokens = Object.assign(swapSupportingFeeOnTransferTokens_send, {
            call:swapSupportingFeeOnTransferTokens_call
        });
    }
}