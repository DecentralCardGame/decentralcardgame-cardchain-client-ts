/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Flag } from "./flag";
import { Params } from "./params";
export const protobufPackage = "DecentralCardGame.cardchain.featureflag";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryQFlagRequest() {
    return { module: "", name: "" };
}
export const QueryQFlagRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQFlagRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQFlagRequest();
        message.module = object.module ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryQFlagResponse() {
    return { flag: undefined };
}
export const QueryQFlagResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.flag !== undefined) {
            Flag.encode(message.flag, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQFlagResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.flag = Flag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { flag: isSet(object.flag) ? Flag.fromJSON(object.flag) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.flag !== undefined && (obj.flag = message.flag ? Flag.toJSON(message.flag) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQFlagResponse();
        message.flag = (object.flag !== undefined && object.flag !== null) ? Flag.fromPartial(object.flag) : undefined;
        return message;
    },
};
function createBaseQueryQFlagsRequest() {
    return {};
}
export const QueryQFlagsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQFlagsRequest();
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
        const message = createBaseQueryQFlagsRequest();
        return message;
    },
};
function createBaseQueryQFlagsResponse() {
    return { flags: [] };
}
export const QueryQFlagsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.flags) {
            Flag.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQFlagsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.flags.push(Flag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { flags: Array.isArray(object?.flags) ? object.flags.map((e) => Flag.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.flags) {
            obj.flags = message.flags.map((e) => e ? Flag.toJSON(e) : undefined);
        }
        else {
            obj.flags = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQFlagsResponse();
        message.flags = object.flags?.map((e) => Flag.fromPartial(e)) || [];
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QFlag = this.QFlag.bind(this);
        this.QFlags = this.QFlags.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.featureflag.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QFlag(request) {
        const data = QueryQFlagRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.featureflag.Query", "QFlag", data);
        return promise.then((data) => QueryQFlagResponse.decode(new _m0.Reader(data)));
    }
    QFlags(request) {
        const data = QueryQFlagsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.featureflag.Query", "QFlags", data);
        return promise.then((data) => QueryQFlagsResponse.decode(new _m0.Reader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
