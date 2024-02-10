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
    CouncelingStatus[CouncelingStatus["councilOpen"] = 0] = "councilOpen";
    CouncelingStatus[CouncelingStatus["councilCreated"] = 1] = "councilCreated";
    CouncelingStatus[CouncelingStatus["councilClosed"] = 2] = "councilClosed";
    CouncelingStatus[CouncelingStatus["commited"] = 3] = "commited";
    CouncelingStatus[CouncelingStatus["revealed"] = 4] = "revealed";
    CouncelingStatus[CouncelingStatus["suggestionsMade"] = 5] = "suggestionsMade";
    CouncelingStatus[CouncelingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CouncelingStatus || (CouncelingStatus = {}));
export function councelingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "councilOpen":
            return CouncelingStatus.councilOpen;
        case 1:
        case "councilCreated":
            return CouncelingStatus.councilCreated;
        case 2:
        case "councilClosed":
            return CouncelingStatus.councilClosed;
        case 3:
        case "commited":
            return CouncelingStatus.commited;
        case 4:
        case "revealed":
            return CouncelingStatus.revealed;
        case 5:
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCouncil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.cardId = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.voters.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hashResponses.push(WrapHashResponse.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clearResponses.push(WrapClearResponse.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.treasury = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.trialStart = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        if (message.cardId !== 0) {
            obj.cardId = Math.round(message.cardId);
        }
        if (message.voters?.length) {
            obj.voters = message.voters;
        }
        if (message.hashResponses?.length) {
            obj.hashResponses = message.hashResponses.map((e) => WrapHashResponse.toJSON(e));
        }
        if (message.clearResponses?.length) {
            obj.clearResponses = message.clearResponses.map((e) => WrapClearResponse.toJSON(e));
        }
        if (message.treasury !== "") {
            obj.treasury = message.treasury;
        }
        if (message.status !== 0) {
            obj.status = councelingStatusToJSON(message.status);
        }
        if (message.trialStart !== 0) {
            obj.trialStart = Math.round(message.trialStart);
        }
        return obj;
    },
    create(base) {
        return Council.fromPartial(base ?? {});
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrapClearResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.response = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.suggestion = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        if (message.user !== "") {
            obj.user = message.user;
        }
        if (message.response !== 0) {
            obj.response = responseToJSON(message.response);
        }
        if (message.suggestion !== "") {
            obj.suggestion = message.suggestion;
        }
        return obj;
    },
    create(base) {
        return WrapClearResponse.fromPartial(base ?? {});
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrapHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { user: isSet(object.user) ? String(object.user) : "", hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== "") {
            obj.user = message.user;
        }
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        return obj;
    },
    create(base) {
        return WrapHashResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWrapHashResponse();
        message.user = object.user ?? "";
        message.hash = object.hash ?? "";
        return message;
    },
};
const tsProtoGlobalThis = (() => {
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
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
