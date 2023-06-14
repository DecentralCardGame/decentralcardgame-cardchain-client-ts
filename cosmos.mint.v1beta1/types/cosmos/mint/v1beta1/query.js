/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./mint";
export const protobufPackage = "cosmos.mint.v1beta1";
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
function createBaseQueryInflationRequest() {
    return {};
}
export const QueryInflationRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRequest();
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
        const message = createBaseQueryInflationRequest();
        return message;
    },
};
function createBaseQueryInflationResponse() {
    return { inflation: new Uint8Array() };
}
export const QueryInflationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.inflation.length !== 0) {
            writer.uint32(10).bytes(message.inflation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined
            && (obj.inflation = base64FromBytes(message.inflation !== undefined ? message.inflation : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInflationResponse();
        message.inflation = object.inflation ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryAnnualProvisionsRequest() {
    return {};
}
export const QueryAnnualProvisionsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsRequest();
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
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
};
function createBaseQueryAnnualProvisionsResponse() {
    return { annualProvisions: new Uint8Array() };
}
export const QueryAnnualProvisionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.annualProvisions.length !== 0) {
            writer.uint32(10).bytes(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = reader.bytes();
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
            annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.annualProvisions !== undefined
            && (obj.annualProvisions = base64FromBytes(message.annualProvisions !== undefined ? message.annualProvisions : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        message.annualProvisions = object.annualProvisions ?? new Uint8Array();
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Inflation = this.Inflation.bind(this);
        this.AnnualProvisions = this.AnnualProvisions.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    Inflation(request) {
        const data = QueryInflationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
        return promise.then((data) => QueryInflationResponse.decode(new _m0.Reader(data)));
    }
    AnnualProvisions(request) {
        const data = QueryAnnualProvisionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
        return promise.then((data) => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
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
