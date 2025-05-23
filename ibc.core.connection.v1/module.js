// Generated by Ignite ignite.com/cli
import { Registry, } from "@cosmjs/proto-signing";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { ConnectionEnd as typeConnectionEnd } from "./types";
import { IdentifiedConnection as typeIdentifiedConnection } from "./types";
import { Counterparty as typeCounterparty } from "./types";
import { ClientPaths as typeClientPaths } from "./types";
import { ConnectionPaths as typeConnectionPaths } from "./types";
import { Version as typeVersion } from "./types";
import { Params as typeParams } from "./types";
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = {
    addr: "http://localhost:26657",
    prefix: "cosmos",
}) => {
    return {};
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {
            ConnectionEnd: getStructure(typeConnectionEnd.fromPartial({})),
            IdentifiedConnection: getStructure(typeIdentifiedConnection.fromPartial({})),
            Counterparty: getStructure(typeCounterparty.fromPartial({})),
            ClientPaths: getStructure(typeClientPaths.fromPartial({})),
            ConnectionPaths: getStructure(typeConnectionPaths.fromPartial({})),
            Version: getStructure(typeVersion.fromPartial({})),
            Params: getStructure(typeParams.fromPartial({})),
        };
        client.on("signer-changed", (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
const Module = (test) => {
    return {
        module: {
            IbcCoreConnectionV1: new SDKModule(test),
        },
        registry: msgTypes,
    };
};
export default Module;
