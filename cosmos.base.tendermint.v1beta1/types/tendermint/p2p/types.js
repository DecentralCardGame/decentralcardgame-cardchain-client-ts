/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "tendermint.p2p";
function createBaseNetAddress() {
    return { id: "", ip: "", port: 0 };
}
export const NetAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNetAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.uint32();
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
            id: isSet(object.id) ? String(object.id) : "",
            ip: isSet(object.ip) ? String(object.ip) : "",
            port: isSet(object.port) ? Number(object.port) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNetAddress();
        message.id = object.id ?? "";
        message.ip = object.ip ?? "";
        message.port = object.port ?? 0;
        return message;
    },
};
function createBaseProtocolVersion() {
    return { p2p: 0, block: 0, app: 0 };
}
export const ProtocolVersion = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.p2p !== 0) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== 0) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== 0) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.block = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.app = longToNumber(reader.uint64());
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
            p2p: isSet(object.p2p) ? Number(object.p2p) : 0,
            block: isSet(object.block) ? Number(object.block) : 0,
            app: isSet(object.app) ? Number(object.app) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = Math.round(message.p2p));
        message.block !== undefined && (obj.block = Math.round(message.block));
        message.app !== undefined && (obj.app = Math.round(message.app));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p ?? 0;
        message.block = object.block ?? 0;
        message.app = object.app ?? 0;
        return message;
    },
};
function createBaseDefaultNodeInfo() {
    return {
        protocolVersion: undefined,
        defaultNodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: undefined,
    };
}
export const DefaultNodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocolVersion !== undefined) {
            ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultNodeId !== "") {
            writer.uint32(18).string(message.defaultNodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.defaultNodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
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
            protocolVersion: isSet(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
            defaultNodeId: isSet(object.defaultNodeId) ? String(object.defaultNodeId) : "",
            listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocolVersion !== undefined
            && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
        message.defaultNodeId !== undefined && (obj.defaultNodeId = message.defaultNodeId);
        message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined
            && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfo();
        message.protocolVersion = (object.protocolVersion !== undefined && object.protocolVersion !== null)
            ? ProtocolVersion.fromPartial(object.protocolVersion)
            : undefined;
        message.defaultNodeId = object.defaultNodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = (object.other !== undefined && object.other !== null)
            ? DefaultNodeInfoOther.fromPartial(object.other)
            : undefined;
        return message;
    },
};
function createBaseDefaultNodeInfoOther() {
    return { txIndex: "", rpcAddress: "" };
}
export const DefaultNodeInfoOther = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
            txIndex: isSet(object.txIndex) ? String(object.txIndex) : "",
            rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.txIndex !== undefined && (obj.txIndex = message.txIndex);
        message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
};
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
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
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
