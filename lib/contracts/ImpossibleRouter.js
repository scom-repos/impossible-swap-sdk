"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleRouter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ImpossibleRouter_json_1 = __importDefault(require("./ImpossibleRouter.json"));
class ImpossibleRouter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleRouter_json_1.default.abi, ImpossibleRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.pairFactory, params.wrapFactory, params.utilitySettingAdmin]);
    }
    assign() {
        let WETH_call = async () => {
            let result = await this.call('WETH');
            return result;
        };
        this.WETH = WETH_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let routerExtension_call = async () => {
            let result = await this.call('routerExtension');
            return result;
        };
        this.routerExtension = routerExtension_call;
        let wrapFactory_call = async () => {
            let result = await this.call('wrapFactory');
            return result;
        };
        this.wrapFactory = wrapFactory_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityETHParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, _value) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), { value: _value });
            return result;
        };
        let addLiquidityETH_call = async (params, _value) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), { value: _value });
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountETH: new eth_wallet_1.BigNumber(result.amountETH),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params) => {
            let result = await this.send('removeLiquidityETH', removeLiquidityETHParams(params));
            return result;
        };
        let removeLiquidityETH_call = async (params) => {
            let result = await this.call('removeLiquidityETH', removeLiquidityETHParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountETH: new eth_wallet_1.BigNumber(result.amountETH)
            };
        };
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call: removeLiquidityETH_call
        });
        let removeLiquidityETHSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityETHSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens', removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityETHSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens', removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityETHSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityETHWithPermitParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityETHWithPermit', removeLiquidityETHWithPermitParams(params));
            return result;
        };
        let removeLiquidityETHWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityETHWithPermit', removeLiquidityETHWithPermitParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountETH: new eth_wallet_1.BigNumber(result.amountETH)
            };
        };
        this.removeLiquidityETHWithPermit = Object.assign(removeLiquidityETHWithPermit_send, {
            call: removeLiquidityETHWithPermit_call
        });
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return result;
        };
        let removeLiquidityWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call
        });
        let setUtilitiesParams = (params) => [params.WETH, params.routerExtension];
        let setUtilities_send = async (params) => {
            let result = await this.send('setUtilities', setUtilitiesParams(params));
            return result;
        };
        let setUtilities_call = async (params) => {
            let result = await this.call('setUtilities', setUtilitiesParams(params));
            return;
        };
        this.setUtilities = Object.assign(setUtilities_send, {
            call: setUtilities_call
        });
        let swapETHForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapETHForExactTokens_send = async (params, _value) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return result;
        };
        let swapETHForExactTokens_call = async (params, _value) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactETHForTokens_send = async (params, _value) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return result;
        };
        let swapExactETHForTokens_call = async (params, _value) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params, _value) => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return result;
        };
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params, _value) => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return;
        };
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactETHForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForETHParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForETH_send = async (params) => {
            let result = await this.send('swapExactTokensForETH', swapExactTokensForETHParams(params));
            return result;
        };
        let swapExactTokensForETH_call = async (params) => {
            let result = await this.call('swapExactTokensForETH', swapExactTokensForETHParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call: swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForETHSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result;
        };
        let swapExactTokensForTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactETHParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactETH_send = async (params) => {
            let result = await this.send('swapTokensForExactETH', swapTokensForExactETHParams(params));
            return result;
        };
        let swapTokensForExactETH_call = async (params) => {
            let result = await this.call('swapTokensForExactETH', swapTokensForExactETHParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call: swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result;
        };
        let swapTokensForExactTokens_call = async (params) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.ImpossibleRouter = ImpossibleRouter;
