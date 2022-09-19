"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleSwapFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ImpossibleSwapFactory_json_1 = __importDefault(require("./ImpossibleSwapFactory.json"));
class ImpossibleSwapFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleSwapFactory_json_1.default.abi, ImpossibleSwapFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this.__deploy([governance]);
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new eth_wallet_1.BigNumber(result[3]),
            _event: event
        };
    }
    parseUpdatedGovernanceEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedGovernance").map(e => this.decodeUpdatedGovernanceEvent(e));
    }
    decodeUpdatedGovernanceEvent(event) {
        let result = event.data;
        return {
            governance: result.governance,
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1) => {
            let result = await this.call('allPairs', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async () => {
            let result = await this.call('allPairsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let approvedTokens_call = async (param1) => {
            let result = await this.call('approvedTokens', [param1]);
            return result;
        };
        this.approvedTokens = approvedTokens_call;
        let feeTo_call = async () => {
            let result = await this.call('feeTo');
            return result;
        };
        this.feeTo = feeTo_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params) => {
            let result = await this.call('getPair', getPairParams(params));
            return result;
        };
        this.getPair = getPair_call;
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let router_call = async () => {
            let result = await this.call('router');
            return result;
        };
        this.router = router_call;
        let routerExtension_call = async () => {
            let result = await this.call('routerExtension');
            return result;
        };
        this.routerExtension = routerExtension_call;
        let whitelist_call = async () => {
            let result = await this.call('whitelist');
            return result;
        };
        this.whitelist = whitelist_call;
        let changeTokenAccessParams = (params) => [params.token, params.allowed];
        let changeTokenAccess_send = async (params) => {
            let result = await this.send('changeTokenAccess', changeTokenAccessParams(params));
            return result;
        };
        let changeTokenAccess_call = async (params) => {
            let result = await this.call('changeTokenAccess', changeTokenAccessParams(params));
            return;
        };
        this.changeTokenAccess = Object.assign(changeTokenAccess_send, {
            call: changeTokenAccess_call
        });
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params) => {
            let result = await this.send('createPair', createPairParams(params));
            return result;
        };
        let createPair_call = async (params) => {
            let result = await this.call('createPair', createPairParams(params));
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call
        });
        let setFeeTo_send = async (feeTo) => {
            let result = await this.send('setFeeTo', [feeTo]);
            return result;
        };
        let setFeeTo_call = async (feeTo) => {
            let result = await this.call('setFeeTo', [feeTo]);
            return;
        };
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call: setFeeTo_call
        });
        let setGovernance_send = async (governance) => {
            let result = await this.send('setGovernance', [governance]);
            return result;
        };
        let setGovernance_call = async (governance) => {
            let result = await this.call('setGovernance', [governance]);
            return;
        };
        this.setGovernance = Object.assign(setGovernance_send, {
            call: setGovernance_call
        });
        let setRouterAndExtensionParams = (params) => [params.router, params.routerExtension];
        let setRouterAndExtension_send = async (params) => {
            let result = await this.send('setRouterAndExtension', setRouterAndExtensionParams(params));
            return result;
        };
        let setRouterAndExtension_call = async (params) => {
            let result = await this.call('setRouterAndExtension', setRouterAndExtensionParams(params));
            return;
        };
        this.setRouterAndExtension = Object.assign(setRouterAndExtension_send, {
            call: setRouterAndExtension_call
        });
        let setWhitelist_send = async (b) => {
            let result = await this.send('setWhitelist', [b]);
            return result;
        };
        let setWhitelist_call = async (b) => {
            let result = await this.call('setWhitelist', [b]);
            return;
        };
        this.setWhitelist = Object.assign(setWhitelist_send, {
            call: setWhitelist_call
        });
    }
}
exports.ImpossibleSwapFactory = ImpossibleSwapFactory;
