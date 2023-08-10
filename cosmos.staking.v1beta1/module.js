// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { StakeAuthorization as typeStakeAuthorization } from "./types";
import { StakeAuthorization_Validators as typeStakeAuthorization_Validators } from "./types";
import { LastValidatorPower as typeLastValidatorPower } from "./types";
import { HistoricalInfo as typeHistoricalInfo } from "./types";
import { CommissionRates as typeCommissionRates } from "./types";
import { Commission as typeCommission } from "./types";
import { Description as typeDescription } from "./types";
import { Validator as typeValidator } from "./types";
import { ValAddresses as typeValAddresses } from "./types";
import { DVPair as typeDVPair } from "./types";
import { DVPairs as typeDVPairs } from "./types";
import { DVVTriplet as typeDVVTriplet } from "./types";
import { DVVTriplets as typeDVVTriplets } from "./types";
import { Delegation as typeDelegation } from "./types";
import { UnbondingDelegation as typeUnbondingDelegation } from "./types";
import { UnbondingDelegationEntry as typeUnbondingDelegationEntry } from "./types";
import { RedelegationEntry as typeRedelegationEntry } from "./types";
import { Redelegation as typeRedelegation } from "./types";
import { Params as typeParams } from "./types";
import { DelegationResponse as typeDelegationResponse } from "./types";
import { RedelegationEntryResponse as typeRedelegationEntryResponse } from "./types";
import { RedelegationResponse as typeRedelegationResponse } from "./types";
import { Pool as typePool } from "./types";
import { ValidatorUpdates as typeValidatorUpdates } from "./types";
export { MsgUndelegate, MsgCancelUnbondingDelegation, MsgEditValidator, MsgBeginRedelegate, MsgCreateValidator, MsgDelegate };
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
        async sendMsgUndelegate({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUndelegate: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUndelegate: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCancelUnbondingDelegation({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCancelUnbondingDelegation({ value: MsgCancelUnbondingDelegation.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgEditValidator({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgEditValidator: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgEditValidator({ value: MsgEditValidator.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgEditValidator: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgBeginRedelegate({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgBeginRedelegate({ value: MsgBeginRedelegate.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgBeginRedelegate: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreateValidator({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreateValidator: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreateValidator({ value: MsgCreateValidator.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreateValidator: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgDelegate({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgDelegate: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgDelegate: Could not broadcast Tx: ' + e.message);
            }
        },
        msgUndelegate({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate", value: MsgUndelegate.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUndelegate: Could not create message: ' + e.message);
            }
        },
        msgCancelUnbondingDelegation({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", value: MsgCancelUnbondingDelegation.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCancelUnbondingDelegation: Could not create message: ' + e.message);
            }
        },
        msgEditValidator({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator", value: MsgEditValidator.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgEditValidator: Could not create message: ' + e.message);
            }
        },
        msgBeginRedelegate({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate", value: MsgBeginRedelegate.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgBeginRedelegate: Could not create message: ' + e.message);
            }
        },
        msgCreateValidator({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator", value: MsgCreateValidator.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreateValidator: Could not create message: ' + e.message);
            }
        },
        msgDelegate({ value }) {
            try {
                return { typeUrl: "/cosmos.staking.v1beta1.MsgDelegate", value: MsgDelegate.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgDelegate: Could not create message: ' + e.message);
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
            StakeAuthorization: getStructure(typeStakeAuthorization.fromPartial({})),
            StakeAuthorization_Validators: getStructure(typeStakeAuthorization_Validators.fromPartial({})),
            LastValidatorPower: getStructure(typeLastValidatorPower.fromPartial({})),
            HistoricalInfo: getStructure(typeHistoricalInfo.fromPartial({})),
            CommissionRates: getStructure(typeCommissionRates.fromPartial({})),
            Commission: getStructure(typeCommission.fromPartial({})),
            Description: getStructure(typeDescription.fromPartial({})),
            Validator: getStructure(typeValidator.fromPartial({})),
            ValAddresses: getStructure(typeValAddresses.fromPartial({})),
            DVPair: getStructure(typeDVPair.fromPartial({})),
            DVPairs: getStructure(typeDVPairs.fromPartial({})),
            DVVTriplet: getStructure(typeDVVTriplet.fromPartial({})),
            DVVTriplets: getStructure(typeDVVTriplets.fromPartial({})),
            Delegation: getStructure(typeDelegation.fromPartial({})),
            UnbondingDelegation: getStructure(typeUnbondingDelegation.fromPartial({})),
            UnbondingDelegationEntry: getStructure(typeUnbondingDelegationEntry.fromPartial({})),
            RedelegationEntry: getStructure(typeRedelegationEntry.fromPartial({})),
            Redelegation: getStructure(typeRedelegation.fromPartial({})),
            Params: getStructure(typeParams.fromPartial({})),
            DelegationResponse: getStructure(typeDelegationResponse.fromPartial({})),
            RedelegationEntryResponse: getStructure(typeRedelegationEntryResponse.fromPartial({})),
            RedelegationResponse: getStructure(typeRedelegationResponse.fromPartial({})),
            Pool: getStructure(typePool.fromPartial({})),
            ValidatorUpdates: getStructure(typeValidatorUpdates.fromPartial({})),
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
            CosmosStakingV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default Module;
