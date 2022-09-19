"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleWrappedToken = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ImpossibleWrappedToken_json_1 = __importDefault(require("./ImpossibleWrappedToken.json"));
class ImpossibleWrappedToken extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleWrappedToken_json_1.default.abi, ImpossibleWrappedToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.underlying, eth_wallet_1.Utils.toString(params.ratioNum), eth_wallet_1.Utils.toString(params.ratioDenom)]);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let allowanceParams = (params) => [params.param1, params.param2];
        let allowance_call = async (params) => {
            let result = await this.call('allowance', allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let amtToUnderlyingAmt_call = async (amt) => {
            let result = await this.call('amtToUnderlyingAmt', [eth_wallet_1.Utils.toString(amt)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.amtToUnderlyingAmt = amtToUnderlyingAmt_call;
        let balanceOf_call = async (param1) => {
            let result = await this.call('balanceOf', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let ratioDenom_call = async () => {
            let result = await this.call('ratioDenom');
            return new eth_wallet_1.BigNumber(result);
        };
        this.ratioDenom = ratioDenom_call;
        let ratioNum_call = async () => {
            let result = await this.call('ratioNum');
            return new eth_wallet_1.BigNumber(result);
        };
        this.ratioNum = ratioNum_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let underlying_call = async () => {
            let result = await this.call('underlying');
            return result;
        };
        this.underlying = underlying_call;
        let underlyingBalance_call = async () => {
            let result = await this.call('underlyingBalance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.underlyingBalance = underlyingBalance_call;
        let approveParams = (params) => [params.guy, eth_wallet_1.Utils.toString(params.wad)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let depositParams = (params) => [params.dst, eth_wallet_1.Utils.toString(params.sendAmt)];
        let deposit_send = async (params) => {
            let result = await this.send('deposit', depositParams(params));
            return result;
        };
        let deposit_call = async (params) => {
            let result = await this.call('deposit', depositParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let transferParams = (params) => [params.dst, eth_wallet_1.Utils.toString(params.wad)];
        let transfer_send = async (params) => {
            let result = await this.send('transfer', transferParams(params));
            return result;
        };
        let transfer_call = async (params) => {
            let result = await this.call('transfer', transferParams(params));
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.src, params.dst, eth_wallet_1.Utils.toString(params.wad)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let withdrawParams = (params) => [params.dst, eth_wallet_1.Utils.toString(params.wad)];
        let withdraw_send = async (params) => {
            let result = await this.send('withdraw', withdrawParams(params));
            return result;
        };
        let withdraw_call = async (params) => {
            let result = await this.call('withdraw', withdrawParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.ImpossibleWrappedToken = ImpossibleWrappedToken;
