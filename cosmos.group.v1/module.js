// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { EventCreateGroup as typeEventCreateGroup } from "./types";
import { EventUpdateGroup as typeEventUpdateGroup } from "./types";
import { EventCreateGroupPolicy as typeEventCreateGroupPolicy } from "./types";
import { EventUpdateGroupPolicy as typeEventUpdateGroupPolicy } from "./types";
import { EventSubmitProposal as typeEventSubmitProposal } from "./types";
import { EventWithdrawProposal as typeEventWithdrawProposal } from "./types";
import { EventVote as typeEventVote } from "./types";
import { EventExec as typeEventExec } from "./types";
import { EventLeaveGroup as typeEventLeaveGroup } from "./types";
import { EventProposalPruned as typeEventProposalPruned } from "./types";
import { Member as typeMember } from "./types";
import { MemberRequest as typeMemberRequest } from "./types";
import { ThresholdDecisionPolicy as typeThresholdDecisionPolicy } from "./types";
import { PercentageDecisionPolicy as typePercentageDecisionPolicy } from "./types";
import { DecisionPolicyWindows as typeDecisionPolicyWindows } from "./types";
import { GroupInfo as typeGroupInfo } from "./types";
import { GroupMember as typeGroupMember } from "./types";
import { GroupPolicyInfo as typeGroupPolicyInfo } from "./types";
import { Proposal as typeProposal } from "./types";
import { TallyResult as typeTallyResult } from "./types";
import { Vote as typeVote } from "./types";
export { MsgUpdateGroupPolicyAdmin, MsgVote, MsgWithdrawProposal, MsgSubmitProposal, MsgUpdateGroupAdmin, MsgExec, MsgCreateGroupPolicy, MsgLeaveGroup, MsgUpdateGroupMembers, MsgCreateGroup, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupMetadata };
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
        async sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupPolicyAdmin({ value: MsgUpdateGroupPolicyAdmin.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgVote({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgVote({ value: MsgVote.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgWithdrawProposal({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgWithdrawProposal: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgWithdrawProposal({ value: MsgWithdrawProposal.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgWithdrawProposal: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSubmitProposal({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateGroupAdmin({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupAdmin: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupAdmin({ value: MsgUpdateGroupAdmin.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupAdmin: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgExec({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgExec: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgExec({ value: MsgExec.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgExec: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreateGroupPolicy({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreateGroupPolicy: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreateGroupPolicy({ value: MsgCreateGroupPolicy.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreateGroupPolicy: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgLeaveGroup({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgLeaveGroup: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgLeaveGroup({ value: MsgLeaveGroup.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgLeaveGroup: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateGroupMembers({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupMembers: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupMembers({ value: MsgUpdateGroupMembers.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupMembers: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreateGroup({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreateGroup: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreateGroup({ value: MsgCreateGroup.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreateGroup: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCreateGroupWithPolicy({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgCreateGroupWithPolicy({ value: MsgCreateGroupWithPolicy.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupPolicyMetadata({ value: MsgUpdateGroupPolicyMetadata.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupPolicyDecisionPolicy({ value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateGroupMetadata({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateGroupMetadata: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
                let msg = this.msgUpdateGroupMetadata({ value: MsgUpdateGroupMetadata.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateGroupMetadata: Could not broadcast Tx: ' + e.message);
            }
        },
        msgUpdateGroupPolicyAdmin({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", value: MsgUpdateGroupPolicyAdmin.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupPolicyAdmin: Could not create message: ' + e.message);
            }
        },
        msgVote({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgVote", value: MsgVote.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgVote: Could not create message: ' + e.message);
            }
        },
        msgWithdrawProposal({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgWithdrawProposal", value: MsgWithdrawProposal.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgWithdrawProposal: Could not create message: ' + e.message);
            }
        },
        msgSubmitProposal({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message);
            }
        },
        msgUpdateGroupAdmin({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin", value: MsgUpdateGroupAdmin.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupAdmin: Could not create message: ' + e.message);
            }
        },
        msgExec({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgExec", value: MsgExec.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgExec: Could not create message: ' + e.message);
            }
        },
        msgCreateGroupPolicy({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy", value: MsgCreateGroupPolicy.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreateGroupPolicy: Could not create message: ' + e.message);
            }
        },
        msgLeaveGroup({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgLeaveGroup", value: MsgLeaveGroup.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgLeaveGroup: Could not create message: ' + e.message);
            }
        },
        msgUpdateGroupMembers({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers", value: MsgUpdateGroupMembers.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupMembers: Could not create message: ' + e.message);
            }
        },
        msgCreateGroup({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgCreateGroup", value: MsgCreateGroup.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreateGroup: Could not create message: ' + e.message);
            }
        },
        msgCreateGroupWithPolicy({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy", value: MsgCreateGroupWithPolicy.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCreateGroupWithPolicy: Could not create message: ' + e.message);
            }
        },
        msgUpdateGroupPolicyMetadata({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", value: MsgUpdateGroupPolicyMetadata.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupPolicyMetadata: Could not create message: ' + e.message);
            }
        },
        msgUpdateGroupPolicyDecisionPolicy({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy: Could not create message: ' + e.message);
            }
        },
        msgUpdateGroupMetadata({ value }) {
            try {
                return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata", value: MsgUpdateGroupMetadata.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateGroupMetadata: Could not create message: ' + e.message);
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
            EventCreateGroup: getStructure(typeEventCreateGroup.fromPartial({})),
            EventUpdateGroup: getStructure(typeEventUpdateGroup.fromPartial({})),
            EventCreateGroupPolicy: getStructure(typeEventCreateGroupPolicy.fromPartial({})),
            EventUpdateGroupPolicy: getStructure(typeEventUpdateGroupPolicy.fromPartial({})),
            EventSubmitProposal: getStructure(typeEventSubmitProposal.fromPartial({})),
            EventWithdrawProposal: getStructure(typeEventWithdrawProposal.fromPartial({})),
            EventVote: getStructure(typeEventVote.fromPartial({})),
            EventExec: getStructure(typeEventExec.fromPartial({})),
            EventLeaveGroup: getStructure(typeEventLeaveGroup.fromPartial({})),
            EventProposalPruned: getStructure(typeEventProposalPruned.fromPartial({})),
            Member: getStructure(typeMember.fromPartial({})),
            MemberRequest: getStructure(typeMemberRequest.fromPartial({})),
            ThresholdDecisionPolicy: getStructure(typeThresholdDecisionPolicy.fromPartial({})),
            PercentageDecisionPolicy: getStructure(typePercentageDecisionPolicy.fromPartial({})),
            DecisionPolicyWindows: getStructure(typeDecisionPolicyWindows.fromPartial({})),
            GroupInfo: getStructure(typeGroupInfo.fromPartial({})),
            GroupMember: getStructure(typeGroupMember.fromPartial({})),
            GroupPolicyInfo: getStructure(typeGroupPolicyInfo.fromPartial({})),
            Proposal: getStructure(typeProposal.fromPartial({})),
            TallyResult: getStructure(typeTallyResult.fromPartial({})),
            Vote: getStructure(typeVote.fromPartial({})),
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
            CosmosGroupV1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default Module;
