import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ImpossibleRouter.json";

export interface IDeployParams {pairFactory:string;wrapFactory:string;utilitySettingAdmin:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityETHParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISetUtilitiesParams {WETH:string;routerExtension:string}
export interface ISwapETHForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactETHForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForETHParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactETHParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class ImpossibleRouter extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.pairFactory,params.wrapFactory,params.utilitySettingAdmin]);
    }
    WETH: {
        (): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    addLiquidityETH: {
        (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams,_value:number|BigNumber) => Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}>;
    }
    factory: {
        (): Promise<string>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityETHWithPermit: {
        (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    routerExtension: {
        (): Promise<string>;
    }
    setUtilities: {
        (params: ISetUtilitiesParams): Promise<TransactionReceipt>;
        call: (params: ISetUtilitiesParams) => Promise<void>;
    }
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber) => Promise<void>;
    }
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    }
    wrapFactory: {
        (): Promise<string>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let routerExtension_call = async (): Promise<string> => {
            let result = await this.call('routerExtension');
            return result;
        }
        this.routerExtension = routerExtension_call
        let wrapFactory_call = async (): Promise<string> => {
            let result = await this.call('wrapFactory');
            return result;
        }
        this.wrapFactory = wrapFactory_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityETHParams = (params: IAddLiquidityETHParams) => [params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return result;
        }
        let addLiquidityETH_call = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call:addLiquidityETH_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params: IRemoveLiquidityETHParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETH',removeLiquidityETHParams(params));
            return result;
        }
        let removeLiquidityETH_call = async (params: IRemoveLiquidityETHParams): Promise<{amountToken:BigNumber,amountETH:BigNumber}> => {
            let result = await this.call('removeLiquidityETH',removeLiquidityETHParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH)
            };
        }
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call:removeLiquidityETH_call
        });
        let removeLiquidityETHSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityETHSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens',removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityETHSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens',removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityETHSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityETHWithPermitParams = (params: IRemoveLiquidityETHWithPermitParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermit_send = async (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHWithPermit',removeLiquidityETHWithPermitParams(params));
            return result;
        }
        let removeLiquidityETHWithPermit_call = async (params: IRemoveLiquidityETHWithPermitParams): Promise<{amountToken:BigNumber,amountETH:BigNumber}> => {
            let result = await this.call('removeLiquidityETHWithPermit',removeLiquidityETHWithPermitParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH)
            };
        }
        this.removeLiquidityETHWithPermit = Object.assign(removeLiquidityETHWithPermit_send, {
            call:removeLiquidityETHWithPermit_call
        });
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
        });
        let setUtilitiesParams = (params: ISetUtilitiesParams) => [params.WETH,params.routerExtension];
        let setUtilities_send = async (params: ISetUtilitiesParams): Promise<TransactionReceipt> => {
            let result = await this.send('setUtilities',setUtilitiesParams(params));
            return result;
        }
        let setUtilities_call = async (params: ISetUtilitiesParams): Promise<void> => {
            let result = await this.call('setUtilities',setUtilitiesParams(params));
            return;
        }
        this.setUtilities = Object.assign(setUtilities_send, {
            call:setUtilities_call
        });
        let swapETHForExactTokensParams = (params: ISwapETHForExactTokensParams) => [Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline)];
        let swapETHForExactTokens_send = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapETHForExactTokens_call = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call:swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params: ISwapExactETHForTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactETHForTokens_send = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokens_call = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call:swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens',swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<void> => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens',swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return;
        }
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactETHForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForETHParams = (params: ISwapExactTokensForETHParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForETH_send = async (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return result;
        }
        let swapExactTokensForETH_call = async (params: ISwapExactTokensForETHParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call:swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens',swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens',swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForETHSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactETHParams = (params: ISwapTokensForExactETHParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactETH_send = async (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return result;
        }
        let swapTokensForExactETH_call = async (params: ISwapTokensForExactETHParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call:swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}