/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "cosmos.authz.v1beta1";
function createBaseGenericAuthorization() {
    return { msg: "" };
}
export const GenericAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { msg: isSet(object.msg) ? String(object.msg) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
};
function createBaseGrant() {
    return { authorization: undefined, expiration: undefined };
}
export const Grant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorization !== undefined
            && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = (object.authorization !== undefined && object.authorization !== null)
            ? Any.fromPartial(object.authorization)
            : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
};
function createBaseGrantAuthorization() {
    return { granter: "", grantee: "", authorization: undefined, expiration: undefined };
}
export const GrantAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.authorization = Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.authorization !== undefined
            && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = (object.authorization !== undefined && object.authorization !== null)
            ? Any.fromPartial(object.authorization)
            : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
};
function createBaseGrantQueueItem() {
    return { msgTypeUrls: [] };
}
export const GrantQueueItem = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.msgTypeUrls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msgTypeUrls = message.msgTypeUrls.map((e) => e);
        }
        else {
            obj.msgTypeUrls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
