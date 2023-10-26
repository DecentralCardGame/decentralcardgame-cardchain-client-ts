/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var VoteType;
(function (VoteType) {
    VoteType[VoteType["fairEnough"] = 0] = "fairEnough";
    VoteType[VoteType["inappropriate"] = 1] = "inappropriate";
    VoteType[VoteType["overpowered"] = 2] = "overpowered";
    VoteType[VoteType["underpowered"] = 3] = "underpowered";
    VoteType[VoteType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteType || (VoteType = {}));
export function voteTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "fairEnough":
            return VoteType.fairEnough;
        case 1:
        case "inappropriate":
            return VoteType.inappropriate;
        case 2:
        case "overpowered":
            return VoteType.overpowered;
        case 3:
        case "underpowered":
            return VoteType.underpowered;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteType.UNRECOGNIZED;
    }
}
export function voteTypeToJSON(object) {
    switch (object) {
        case VoteType.fairEnough:
            return "fairEnough";
        case VoteType.inappropriate:
            return "inappropriate";
        case VoteType.overpowered:
            return "overpowered";
        case VoteType.underpowered:
            return "underpowered";
        case VoteType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseVotingResults() {
    return {
        totalVotes: 0,
        totalFairEnoughVotes: 0,
        totalOverpoweredVotes: 0,
        totalUnderpoweredVotes: 0,
        totalInappropriateVotes: 0,
        cardResults: [],
        notes: "",
    };
}
export const VotingResults = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalVotes !== 0) {
            writer.uint32(8).uint64(message.totalVotes);
        }
        if (message.totalFairEnoughVotes !== 0) {
            writer.uint32(16).uint64(message.totalFairEnoughVotes);
        }
        if (message.totalOverpoweredVotes !== 0) {
            writer.uint32(24).uint64(message.totalOverpoweredVotes);
        }
        if (message.totalUnderpoweredVotes !== 0) {
            writer.uint32(32).uint64(message.totalUnderpoweredVotes);
        }
        if (message.totalInappropriateVotes !== 0) {
            writer.uint32(40).uint64(message.totalInappropriateVotes);
        }
        for (const v of message.cardResults) {
            VotingResult.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.notes !== "") {
            writer.uint32(58).string(message.notes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingResults();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalVotes = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.totalFairEnoughVotes = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.totalOverpoweredVotes = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.totalUnderpoweredVotes = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.totalInappropriateVotes = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.cardResults.push(VotingResult.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.notes = reader.string();
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
            totalVotes: isSet(object.totalVotes) ? Number(object.totalVotes) : 0,
            totalFairEnoughVotes: isSet(object.totalFairEnoughVotes) ? Number(object.totalFairEnoughVotes) : 0,
            totalOverpoweredVotes: isSet(object.totalOverpoweredVotes) ? Number(object.totalOverpoweredVotes) : 0,
            totalUnderpoweredVotes: isSet(object.totalUnderpoweredVotes) ? Number(object.totalUnderpoweredVotes) : 0,
            totalInappropriateVotes: isSet(object.totalInappropriateVotes) ? Number(object.totalInappropriateVotes) : 0,
            cardResults: Array.isArray(object?.cardResults)
                ? object.cardResults.map((e) => VotingResult.fromJSON(e))
                : [],
            notes: isSet(object.notes) ? String(object.notes) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalVotes !== undefined && (obj.totalVotes = Math.round(message.totalVotes));
        message.totalFairEnoughVotes !== undefined && (obj.totalFairEnoughVotes = Math.round(message.totalFairEnoughVotes));
        message.totalOverpoweredVotes !== undefined
            && (obj.totalOverpoweredVotes = Math.round(message.totalOverpoweredVotes));
        message.totalUnderpoweredVotes !== undefined
            && (obj.totalUnderpoweredVotes = Math.round(message.totalUnderpoweredVotes));
        message.totalInappropriateVotes !== undefined
            && (obj.totalInappropriateVotes = Math.round(message.totalInappropriateVotes));
        if (message.cardResults) {
            obj.cardResults = message.cardResults.map((e) => e ? VotingResult.toJSON(e) : undefined);
        }
        else {
            obj.cardResults = [];
        }
        message.notes !== undefined && (obj.notes = message.notes);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingResults();
        message.totalVotes = object.totalVotes ?? 0;
        message.totalFairEnoughVotes = object.totalFairEnoughVotes ?? 0;
        message.totalOverpoweredVotes = object.totalOverpoweredVotes ?? 0;
        message.totalUnderpoweredVotes = object.totalUnderpoweredVotes ?? 0;
        message.totalInappropriateVotes = object.totalInappropriateVotes ?? 0;
        message.cardResults = object.cardResults?.map((e) => VotingResult.fromPartial(e)) || [];
        message.notes = object.notes ?? "";
        return message;
    },
};
function createBaseVotingResult() {
    return {
        cardId: 0,
        fairEnoughVotes: 0,
        overpoweredVotes: 0,
        underpoweredVotes: 0,
        inappropriateVotes: 0,
        result: "",
    };
}
export const VotingResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        if (message.fairEnoughVotes !== 0) {
            writer.uint32(16).uint64(message.fairEnoughVotes);
        }
        if (message.overpoweredVotes !== 0) {
            writer.uint32(24).uint64(message.overpoweredVotes);
        }
        if (message.underpoweredVotes !== 0) {
            writer.uint32(32).uint64(message.underpoweredVotes);
        }
        if (message.inappropriateVotes !== 0) {
            writer.uint32(40).uint64(message.inappropriateVotes);
        }
        if (message.result !== "") {
            writer.uint32(50).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.fairEnoughVotes = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.overpoweredVotes = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.underpoweredVotes = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.inappropriateVotes = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.result = reader.string();
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
            fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
            overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
            underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
            inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
            result: isSet(object.result) ? String(object.result) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.fairEnoughVotes !== undefined && (obj.fairEnoughVotes = Math.round(message.fairEnoughVotes));
        message.overpoweredVotes !== undefined && (obj.overpoweredVotes = Math.round(message.overpoweredVotes));
        message.underpoweredVotes !== undefined && (obj.underpoweredVotes = Math.round(message.underpoweredVotes));
        message.inappropriateVotes !== undefined && (obj.inappropriateVotes = Math.round(message.inappropriateVotes));
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingResult();
        message.cardId = object.cardId ?? 0;
        message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
        message.overpoweredVotes = object.overpoweredVotes ?? 0;
        message.underpoweredVotes = object.underpoweredVotes ?? 0;
        message.inappropriateVotes = object.inappropriateVotes ?? 0;
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseSingleVote() {
    return { cardId: 0, voteType: 0 };
}
export const SingleVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        if (message.voteType !== 0) {
            writer.uint32(16).int32(message.voteType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingleVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voteType = reader.int32();
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
            voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.voteType !== undefined && (obj.voteType = voteTypeToJSON(message.voteType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSingleVote();
        message.cardId = object.cardId ?? 0;
        message.voteType = object.voteType ?? 0;
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
