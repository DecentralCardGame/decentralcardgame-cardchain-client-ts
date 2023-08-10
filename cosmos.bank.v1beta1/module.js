// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { SendAuthorization as typeSendAuthorization } from "./types";
import { Params as typeParams } from "./types";
import { SendEnabled as typeSendEnabled } from "./types";
import { Input as typeInput } from "./types";
import { Output as typeOutput } from "./types";
import { Supply as typeSupply } from "./types";
import { DenomUnit as typeDenomUnit } from "./types";
import { Metadata as typeMetadata } from "./types";
import { Balance as typeBalance } from "./types";
import { DenomOwner as typeDenomOwner } from "./types";
export { MsgMultiSend, MsgSend };
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
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgMultiSend({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgMultiSend({ value: MsgMultiSend.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgMultiSend: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSend({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgSend({ value: MsgSend.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: ' + e.message);
            }
        },
        msgMultiSend({ value }) {
            try {
                return { typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend", value: MsgMultiSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgMultiSend: Could not create message: ' + e.message);
            }
        },
        msgSend({ value }) {
            try {
                return { typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: MsgSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSend: Could not create message: ' + e.message);
            }
        },
    };
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
            SendAuthorization: getStructure(typeSendAuthorization.fromPartial({})),
            Params: getStructure(typeParams.fromPartial({})),
            SendEnabled: getStructure(typeSendEnabled.fromPartial({})),
            Input: getStructure(typeInput.fromPartial({})),
            Output: getStructure(typeOutput.fromPartial({})),
            Supply: getStructure(typeSupply.fromPartial({})),
            DenomUnit: getStructure(typeDenomUnit.fromPartial({})),
            Metadata: getStructure(typeMetadata.fromPartial({})),
            Balance: getStructure(typeBalance.fromPartial({})),
            DenomOwner: getStructure(typeDenomOwner.fromPartial({})),
        };
        client.on('signer-changed', (signer) => {
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
;
const Module = (test) => {
    return {
        module: {
            CosmosBankV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default Module;
