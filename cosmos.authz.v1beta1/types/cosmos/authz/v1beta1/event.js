/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.authz.v1beta1";
function createBaseEventGrant() {
    return { msgTypeUrl: "", granter: "", grantee: "" };
}
export const EventGrant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventGrant();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
};
function createBaseEventRevoke() {
    return { msgTypeUrl: "", granter: "", grantee: "" };
}
export const EventRevoke = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRevoke();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
