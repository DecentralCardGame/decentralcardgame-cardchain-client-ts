/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { voteOptionFromJSON, voteOptionToJSON, WeightedVoteOption } from "./gov";
export const protobufPackage = "cosmos.gov.v1beta1";
function createBaseMsgSubmitProposal() {
    return { content: undefined, initialDeposit: [], proposer: "" };
}
export const MsgSubmitProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            initialDeposit: Array.isArray(object?.initialDeposit)
                ? object.initialDeposit.map((e) => Coin.fromJSON(e))
                : [],
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        if (message.initialDeposit) {
            obj.initialDeposit = message.initialDeposit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.initialDeposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.content = (object.content !== undefined && object.content !== null)
            ? Any.fromPartial(object.content)
            : undefined;
        message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return { proposalId: 0 };
}
export const MsgSubmitProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId ?? 0;
        return message;
    },
};
function createBaseMsgVote() {
    return { proposalId: 0, voter: "", option: 0 };
}
export const MsgVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId ?? 0;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        return message;
    },
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
};
function createBaseMsgVoteWeighted() {
    return { proposalId: 0, voter: "", options: [] };
}
export const MsgVoteWeighted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            voter: isSet(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId ?? 0;
        message.voter = object.voter ?? "";
        message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
export const MsgVoteWeightedResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
};
function createBaseMsgDeposit() {
    return { proposalId: 0, depositor: "", amount: [] };
}
export const MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId ?? 0;
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.VoteWeighted = this.VoteWeighted.bind(this);
        this.Deposit = this.Deposit.bind(this);
    }
    SubmitProposal(request) {
        const data = MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
        return promise.then((data) => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
    }
    Vote(request) {
        const data = MsgVote.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
        return promise.then((data) => MsgVoteResponse.decode(new _m0.Reader(data)));
    }
    VoteWeighted(request) {
        const data = MsgVoteWeighted.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
        return promise.then((data) => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
    }
    Deposit(request) {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
        return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
