/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const protobufPackage = "cosmos.evidence.v1beta1";
function createBaseMsgSubmitEvidence() {
    return { submitter: "", evidence: undefined };
}
export const MsgSubmitEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.submitter = reader.string();
                    break;
                case 2:
                    message.evidence = Any.decode(reader, reader.uint32());
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
            submitter: isSet(object.submitter) ? String(object.submitter) : "",
            evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.submitter !== undefined && (obj.submitter = message.submitter);
        message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidence();
        message.submitter = object.submitter ?? "";
        message.evidence = (object.evidence !== undefined && object.evidence !== null)
            ? Any.fromPartial(object.evidence)
            : undefined;
        return message;
    },
};
function createBaseMsgSubmitEvidenceResponse() {
    return { hash: new Uint8Array() };
}
export const MsgSubmitEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
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
        const message = createBaseMsgSubmitEvidenceResponse();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SubmitEvidence = this.SubmitEvidence.bind(this);
    }
    SubmitEvidence(request) {
        const data = MsgSubmitEvidence.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
        return promise.then((data) => MsgSubmitEvidenceResponse.decode(new _m0.Reader(data)));
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
