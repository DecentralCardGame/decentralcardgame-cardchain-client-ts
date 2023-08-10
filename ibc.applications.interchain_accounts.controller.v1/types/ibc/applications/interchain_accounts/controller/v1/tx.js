/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InterchainAccountPacketData } from "../../v1/packet";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseMsgRegisterInterchainAccount() {
    return { owner: "", connectionId: "", version: "" };
}
export const MsgRegisterInterchainAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseMsgRegisterInterchainAccountResponse() {
    return { channelId: "", portId: "" };
}
export const MsgRegisterInterchainAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        return message;
    },
};
function createBaseMsgSendTx() {
    return { owner: "", connectionId: "", packetData: undefined, relativeTimeout: 0 };
}
export const MsgSendTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.packetData !== undefined) {
            InterchainAccountPacketData.encode(message.packetData, writer.uint32(26).fork()).ldelim();
        }
        if (message.relativeTimeout !== 0) {
            writer.uint32(32).uint64(message.relativeTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.packetData = InterchainAccountPacketData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.relativeTimeout = longToNumber(reader.uint64());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            packetData: isSet(object.packetData) ? InterchainAccountPacketData.fromJSON(object.packetData) : undefined,
            relativeTimeout: isSet(object.relativeTimeout) ? Number(object.relativeTimeout) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.packetData !== undefined
            && (obj.packetData = message.packetData ? InterchainAccountPacketData.toJSON(message.packetData) : undefined);
        message.relativeTimeout !== undefined && (obj.relativeTimeout = Math.round(message.relativeTimeout));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.packetData = (object.packetData !== undefined && object.packetData !== null)
            ? InterchainAccountPacketData.fromPartial(object.packetData)
            : undefined;
        message.relativeTimeout = object.relativeTimeout ?? 0;
        return message;
    },
};
function createBaseMsgSendTxResponse() {
    return { sequence: 0 };
}
export const MsgSendTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== 0) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { sequence: isSet(object.sequence) ? Number(object.sequence) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTxResponse();
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterInterchainAccount = this.RegisterInterchainAccount.bind(this);
        this.SendTx = this.SendTx.bind(this);
    }
    RegisterInterchainAccount(request) {
        const data = MsgRegisterInterchainAccount.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "RegisterInterchainAccount", data);
        return promise.then((data) => MsgRegisterInterchainAccountResponse.decode(new _m0.Reader(data)));
    }
    SendTx(request) {
        const data = MsgSendTx.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "SendTx", data);
        return promise.then((data) => MsgSendTxResponse.decode(new _m0.Reader(data)));
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
