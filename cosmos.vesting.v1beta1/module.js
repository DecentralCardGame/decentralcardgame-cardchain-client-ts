// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { BaseVestingAccount as typeBaseVestingAccount } from "./types";
import { ContinuousVestingAccount as typeContinuousVestingAccount } from "./types";
import { DelayedVestingAccount as typeDelayedVestingAccount } from "./types";
import { Period as typePeriod } from "./types";
import { PeriodicVestingAccount as typePeriodicVestingAccount } from "./types";
import { PermanentLockedAccount as typePermanentLockedAccount } from "./types";
export { MsgCreatePeriodicVestingAccount, MsgCreateVestingAccount, MsgCreatePermanentLockedAccount };
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
        async sendMsgCreatePeriodicVestingAccount({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreatePeriodicVestingAccount: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreatePeriodicVestingAccount({ value: MsgCreatePeriodicVestingAccount.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreatePeriodicVestingAccount: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreateVestingAccount({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreateVestingAccount({ value: MsgCreateVestingAccount.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreateVestingAccount: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreatePermanentLockedAccount({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreatePermanentLockedAccount: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreatePermanentLockedAccount({ value: MsgCreatePermanentLockedAccount.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreatePermanentLockedAccount: Could not broadcast Tx: ' + e.message);
            }
        },
        msgCreatePeriodicVestingAccount({ value }) {
            try {
                return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", value: MsgCreatePeriodicVestingAccount.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreatePeriodicVestingAccount: Could not create message: ' + e.message);
            }
        },
        msgCreateVestingAccount({ value }) {
            try {
                return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", value: MsgCreateVestingAccount.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreateVestingAccount: Could not create message: ' + e.message);
            }
        },
        msgCreatePermanentLockedAccount({ value }) {
            try {
                return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", value: MsgCreatePermanentLockedAccount.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreatePermanentLockedAccount: Could not create message: ' + e.message);
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
            BaseVestingAccount: getStructure(typeBaseVestingAccount.fromPartial({})),
            ContinuousVestingAccount: getStructure(typeContinuousVestingAccount.fromPartial({})),
            DelayedVestingAccount: getStructure(typeDelayedVestingAccount.fromPartial({})),
            Period: getStructure(typePeriod.fromPartial({})),
            PeriodicVestingAccount: getStructure(typePeriodicVestingAccount.fromPartial({})),
            PermanentLockedAccount: getStructure(typePermanentLockedAccount.fromPartial({})),
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
            CosmosVestingV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default Module;
