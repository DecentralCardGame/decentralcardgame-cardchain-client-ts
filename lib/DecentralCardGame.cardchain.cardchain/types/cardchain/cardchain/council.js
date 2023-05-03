/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var Response;
(function (Response) {
    Response[Response["Yes"] = 0] = "Yes";
    Response[Response["No"] = 1] = "No";
    Response[Response["Suggestion"] = 2] = "Suggestion";
    Response[Response["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Response || (Response = {}));
export function responseFromJSON(object) {
    switch (object) {
        case 0:
        case "Yes":
            return Response.Yes;
        case 1:
        case "No":
            return Response.No;
        case 2:
        case "Suggestion":
            return Response.Suggestion;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Response.UNRECOGNIZED;
    }
}
export function responseToJSON(object) {
    switch (object) {
        case Response.Yes:
            return "Yes";
        case Response.No:
            return "No";
        case Response.Suggestion:
            return "Suggestion";
        case Response.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var CouncelingStatus;
(function (CouncelingStatus) {
    CouncelingStatus[CouncelingStatus["councilDoesNotExist"] = 0] = "councilDoesNotExist";
    CouncelingStatus[CouncelingStatus["councilOpen"] = 1] = "councilOpen";
    CouncelingStatus[CouncelingStatus["councilCreated"] = 2] = "councilCreated";
    CouncelingStatus[CouncelingStatus["councilClosed"] = 3] = "councilClosed";
    CouncelingStatus[CouncelingStatus["commited"] = 4] = "commited";
    CouncelingStatus[CouncelingStatus["revealed"] = 5] = "revealed";
    CouncelingStatus[CouncelingStatus["suggestionsMade"] = 6] = "suggestionsMade";
    CouncelingStatus[CouncelingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CouncelingStatus || (CouncelingStatus = {}));
export function councelingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "councilDoesNotExist":
            return CouncelingStatus.councilDoesNotExist;
        case 1:
        case "councilOpen":
            return CouncelingStatus.councilOpen;
        case 2:
        case "councilCreated":
            return CouncelingStatus.councilCreated;
        case 3:
        case "councilClosed":
            return CouncelingStatus.councilClosed;
        case 4:
        case "commited":
            return CouncelingStatus.commited;
        case 5:
        case "revealed":
            return CouncelingStatus.revealed;
        case 6:
        case "suggestionsMade":
            return CouncelingStatus.suggestionsMade;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CouncelingStatus.UNRECOGNIZED;
    }
}
export function councelingStatusToJSON(object) {
    switch (object) {
        case CouncelingStatus.councilDoesNotExist:
            return "councilDoesNotExist";
        case CouncelingStatus.councilOpen:
            return "councilOpen";
        case CouncelingStatus.councilCreated:
            return "councilCreated";
        case CouncelingStatus.councilClosed:
            return "councilClosed";
        case CouncelingStatus.commited:
            return "commited";
        case CouncelingStatus.revealed:
            return "revealed";
        case CouncelingStatus.suggestionsMade:
            return "suggestionsMade";
        case CouncelingStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseCouncil() {
    return { cardId: 0, voters: [], hashResponses: [], clearResponses: [], treasury: "", status: 0, trialStart: 0 };
}
export const Council = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        for (const v of message.voters) {
            writer.uint32(18).string(v);
        }
        for (const v of message.hashResponses) {
            WrapHashResponse.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.clearResponses) {
            WrapClearResponse.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.treasury !== "") {
            writer.uint32(42).string(message.treasury);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.trialStart !== 0) {
            writer.uint32(56).uint64(message.trialStart);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCouncil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voters.push(reader.string());
                    break;
                case 3:
                    message.hashResponses.push(WrapHashResponse.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.clearResponses.push(WrapClearResponse.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.treasury = reader.string();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.trialStart = longToNumber(reader.uint64());
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
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            voters: Array.isArray(object?.voters) ? object.voters.map((e) => String(e)) : [],
            hashResponses: Array.isArray(object?.hashResponses)
                ? object.hashResponses.map((e) => WrapHashResponse.fromJSON(e))
                : [],
            clearResponses: Array.isArray(object?.clearResponses)
                ? object.clearResponses.map((e) => WrapClearResponse.fromJSON(e))
                : [],
            treasury: isSet(object.treasury) ? String(object.treasury) : "",
            status: isSet(object.status) ? councelingStatusFromJSON(object.status) : 0,
            trialStart: isSet(object.trialStart) ? Number(object.trialStart) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        if (message.voters) {
            obj.voters = message.voters.map((e) => e);
        }
        else {
            obj.voters = [];
        }
        if (message.hashResponses) {
            obj.hashResponses = message.hashResponses.map((e) => e ? WrapHashResponse.toJSON(e) : undefined);
        }
        else {
            obj.hashResponses = [];
        }
        if (message.clearResponses) {
            obj.clearResponses = message.clearResponses.map((e) => e ? WrapClearResponse.toJSON(e) : undefined);
        }
        else {
            obj.clearResponses = [];
        }
        message.treasury !== undefined && (obj.treasury = message.treasury);
        message.status !== undefined && (obj.status = councelingStatusToJSON(message.status));
        message.trialStart !== undefined && (obj.trialStart = Math.round(message.trialStart));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCouncil();
        message.cardId = object.cardId ?? 0;
        message.voters = object.voters?.map((e) => e) || [];
        message.hashResponses = object.hashResponses?.map((e) => WrapHashResponse.fromPartial(e)) || [];
        message.clearResponses = object.clearResponses?.map((e) => WrapClearResponse.fromPartial(e)) || [];
        message.treasury = object.treasury ?? "";
        message.status = object.status ?? 0;
        message.trialStart = object.trialStart ?? 0;
        return message;
    },
};
function createBaseWrapClearResponse() {
    return { user: "", response: 0, suggestion: "" };
}
export const WrapClearResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        if (message.response !== 0) {
            writer.uint32(16).int32(message.response);
        }
        if (message.suggestion !== "") {
            writer.uint32(26).string(message.suggestion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrapClearResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.response = reader.int32();
                    break;
                case 3:
                    message.suggestion = reader.string();
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
            user: isSet(object.user) ? String(object.user) : "",
            response: isSet(object.response) ? responseFromJSON(object.response) : 0,
            suggestion: isSet(object.suggestion) ? String(object.suggestion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user);
        message.response !== undefined && (obj.response = responseToJSON(message.response));
        message.suggestion !== undefined && (obj.suggestion = message.suggestion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWrapClearResponse();
        message.user = object.user ?? "";
        message.response = object.response ?? 0;
        message.suggestion = object.suggestion ?? "";
        return message;
    },
};
function createBaseWrapHashResponse() {
    return { user: "", hash: "" };
}
export const WrapHashResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        if (message.hash !== "") {
            writer.uint32(18).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrapHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { user: isSet(object.user) ? String(object.user) : "", hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user);
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWrapHashResponse();
        message.user = object.user ?? "";
        message.hash = object.hash ?? "";
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
