"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doDisperse = void 0;
const contracts_1 = require("./contracts");
async function doDisperse(wallet, contractAddress, tokenAddress, data) {
    let recipients = data.map(d => d.address);
    let values = data.map(d => d.amount);
    const disperse = new contracts_1.Disperse(wallet, contractAddress);
    let receipt = tokenAddress ? await disperse.disperseToken({ token: tokenAddress, recipients, values }) : await disperse.disperseEther({ recipients, values }, values.reduce((p, n) => p.plus(n)));
    return receipt;
}
exports.doDisperse = doDisperse;
