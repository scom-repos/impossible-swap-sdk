"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH9 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const WETH9_json_1 = __importDefault(require("./WETH9.json"));
class WETH9 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, WETH9_json_1.default.abi, WETH9_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            src: result.src,
            guy: result.guy,
            wad: new eth_wallet_1.BigNumber(result.wad),
            _event: event
        };
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            dst: result.dst,
            wad: new eth_wallet_1.BigNumber(result.wad),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            src: result.src,
            dst: result.dst,
            wad: new eth_wallet_1.BigNumber(result.wad),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt) {
        return this.parseEvents(receipt, "Withdrawal").map(e => this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event) {
        let result = event.data;
        return {
            src: result.src,
            wad: new eth_wallet_1.BigNumber(result.wad),
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
        let deposit_send = async (_value) => {
            let result = await this.send('deposit', [], { value: _value });
            return result;
        };
        let deposit_call = async (_value) => {
            let result = await this.call('deposit', [], { value: _value });
            return;
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
        let withdraw_send = async (wad) => {
            let result = await this.send('withdraw', [eth_wallet_1.Utils.toString(wad)]);
            return result;
        };
        let withdraw_call = async (wad) => {
            let result = await this.call('withdraw', [eth_wallet_1.Utils.toString(wad)]);
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.WETH9 = WETH9;
