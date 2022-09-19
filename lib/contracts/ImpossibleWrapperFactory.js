"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleWrapperFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ImpossibleWrapperFactory_json_1 = __importDefault(require("./ImpossibleWrapperFactory.json"));
class ImpossibleWrapperFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleWrapperFactory_json_1.default.abi, ImpossibleWrapperFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this.__deploy([governance]);
    }
    parseWrapCreatedEvent(receipt) {
        return this.parseEvents(receipt, "WrapCreated").map(e => this.decodeWrapCreatedEvent(e));
    }
    decodeWrapCreatedEvent(event) {
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            param3: new eth_wallet_1.BigNumber(result[2]),
            param4: new eth_wallet_1.BigNumber(result[3]),
            _event: event
        };
    }
    parseWrapDeletedEvent(receipt) {
        return this.parseEvents(receipt, "WrapDeleted").map(e => this.decodeWrapDeletedEvent(e));
    }
    decodeWrapDeletedEvent(event) {
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            _event: event
        };
    }
    assign() {
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let tokensToWrappedTokens_call = async (param1) => {
            let result = await this.call('tokensToWrappedTokens', [param1]);
            return result;
        };
        this.tokensToWrappedTokens = tokensToWrappedTokens_call;
        let wrappedTokensToTokens_call = async (param1) => {
            let result = await this.call('wrappedTokensToTokens', [param1]);
            return result;
        };
        this.wrappedTokensToTokens = wrappedTokensToTokens_call;
        let createPairingParams = (params) => [params.underlying, eth_wallet_1.Utils.toString(params.ratioNumerator), eth_wallet_1.Utils.toString(params.ratioDenominator)];
        let createPairing_send = async (params) => {
            let result = await this.send('createPairing', createPairingParams(params));
            return result;
        };
        let createPairing_call = async (params) => {
            let result = await this.call('createPairing', createPairingParams(params));
            return result;
        };
        this.createPairing = Object.assign(createPairing_send, {
            call: createPairing_call
        });
        let deletePairing_send = async (wrapper) => {
            let result = await this.send('deletePairing', [wrapper]);
            return result;
        };
        let deletePairing_call = async (wrapper) => {
            let result = await this.call('deletePairing', [wrapper]);
            return;
        };
        this.deletePairing = Object.assign(deletePairing_send, {
            call: deletePairing_call
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
    }
}
exports.ImpossibleWrapperFactory = ImpossibleWrapperFactory;
