/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CommitmentProof } from "../../../../proofs";
export const protobufPackage = "ibc.core.commitment.v1";
function createBaseMerkleRoot() {
    return { hash: new Uint8Array() };
}
export const MerkleRoot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleRoot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined
            && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleRoot();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
};
function createBaseMerklePrefix() {
    return { keyPrefix: new Uint8Array() };
}
export const MerklePrefix = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyPrefix.length !== 0) {
            writer.uint32(10).bytes(message.keyPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePrefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyPrefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { keyPrefix: isSet(object.keyPrefix) ? bytesFromBase64(object.keyPrefix) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.keyPrefix !== undefined
            && (obj.keyPrefix = base64FromBytes(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePrefix();
        message.keyPrefix = object.keyPrefix ?? new Uint8Array();
        return message;
    },
};
function createBaseMerklePath() {
    return { keyPath: [] };
}
export const MerklePath = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keyPath) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePath();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyPath.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { keyPath: Array.isArray(object?.keyPath) ? object.keyPath.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyPath) {
            obj.keyPath = message.keyPath.map((e) => e);
        }
        else {
            obj.keyPath = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.keyPath?.map((e) => e) || [];
        return message;
    },
};
function createBaseMerkleProof() {
    return { proofs: [] };
}
export const MerkleProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proofs) {
            CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => CommitmentProof.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map((e) => e ? CommitmentProof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map((e) => CommitmentProof.fromPartial(e)) || [];
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
function isSet(value) {
    return value !== null && value !== undefined;
}
