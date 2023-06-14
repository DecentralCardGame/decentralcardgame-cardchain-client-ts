/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.slashing.v1beta1";
function createBaseMsgUnjail() {
    return { validatorAddr: "" };
}
export const MsgUnjail = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnjail();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
};
function createBaseMsgUnjailResponse() {
    return {};
}
export const MsgUnjailResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjailResponse();
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
        const message = createBaseMsgUnjailResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Unjail = this.Unjail.bind(this);
    }
    Unjail(request) {
        const data = MsgUnjail.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
        return promise.then((data) => MsgUnjailResponse.decode(new _m0.Reader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
