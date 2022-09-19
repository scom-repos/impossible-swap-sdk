"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleRouterExtension = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ImpossibleRouterExtension_json_1 = __importDefault(require("./ImpossibleRouterExtension.json"));
class ImpossibleRouterExtension extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleRouterExtension_json_1.default.abi, ImpossibleRouterExtension_json_1.default.bytecode);
        this.assign();
    }
    deploy(factory) {
        return this.__deploy([factory]);
    }
    assign() {
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut];
        let getAmountIn_call = async (params) => {
            let result = await this.call('getAmountIn', getAmountInParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut];
        let getAmountOut_call = async (params) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [eth_wallet_1.Utils.toString(params.amountA), eth_wallet_1.Utils.toString(params.reserveA), eth_wallet_1.Utils.toString(params.reserveB)];
        let quote_call = async (params) => {
            let result = await this.call('quote', quoteParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.quote = quote_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.pair, eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let swapParams = (params) => [eth_wallet_1.Utils.toString(params.amounts), params.path];
        let swap_send = async (params) => {
            let result = await this.send('swap', swapParams(params));
            return result;
        };
        let swap_call = async (params) => {
            let result = await this.call('swap', swapParams(params));
            return;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let swapSupportingFeeOnTransferTokens_send = async (path) => {
            let result = await this.send('swapSupportingFeeOnTransferTokens', [path]);
            return result;
        };
        let swapSupportingFeeOnTransferTokens_call = async (path) => {
            let result = await this.call('swapSupportingFeeOnTransferTokens', [path]);
            return;
        };
        this.swapSupportingFeeOnTransferTokens = Object.assign(swapSupportingFeeOnTransferTokens_send, {
            call: swapSupportingFeeOnTransferTokens_call
        });
    }
}
exports.ImpossibleRouterExtension = ImpossibleRouterExtension;
