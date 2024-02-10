/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var CStatus;
(function (CStatus) {
    CStatus[CStatus["design"] = 0] = "design";
    CStatus[CStatus["finalized"] = 1] = "finalized";
    CStatus[CStatus["active"] = 2] = "active";
    CStatus[CStatus["archived"] = 3] = "archived";
    CStatus[CStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CStatus || (CStatus = {}));
export function cStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "design":
            return CStatus.design;
        case 1:
        case "finalized":
            return CStatus.finalized;
        case 2:
        case "active":
            return CStatus.active;
        case 3:
        case "archived":
            return CStatus.archived;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CStatus.UNRECOGNIZED;
    }
}
export function cStatusToJSON(object) {
    switch (object) {
        case CStatus.design:
            return "design";
        case CStatus.finalized:
            return "finalized";
        case CStatus.active:
            return "active";
        case CStatus.archived:
            return "archived";
        case CStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSet() {
    return {
        name: "",
        cards: [],
        artist: "",
        storyWriter: "",
        contributors: [],
        story: "",
        artworkId: 0,
        status: 0,
        timeStamp: 0,
    };
}
export const Set = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        writer.uint32(18).fork();
        for (const v of message.cards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        if (message.storyWriter !== "") {
            writer.uint32(34).string(message.storyWriter);
        }
        for (const v of message.contributors) {
            writer.uint32(42).string(v);
        }
        if (message.story !== "") {
            writer.uint32(50).string(message.story);
        }
        if (message.artworkId !== 0) {
            writer.uint32(56).uint64(message.artworkId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.timeStamp !== 0) {
            writer.uint32(72).int64(message.timeStamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag === 16) {
                        message.cards.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cards.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.artist = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.storyWriter = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.contributors.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.story = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.artworkId = longToNumber(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.timeStamp = longToNumber(reader.int64());
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
            name: isSet(object.name) ? String(object.name) : "",
            cards: Array.isArray(object?.cards) ? object.cards.map((e) => Number(e)) : [],
            artist: isSet(object.artist) ? String(object.artist) : "",
            storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
            contributors: Array.isArray(object?.contributors) ? object.contributors.map((e) => String(e)) : [],
            story: isSet(object.story) ? String(object.story) : "",
            artworkId: isSet(object.artworkId) ? Number(object.artworkId) : 0,
            status: isSet(object.status) ? cStatusFromJSON(object.status) : 0,
            timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.cards?.length) {
            obj.cards = message.cards.map((e) => Math.round(e));
        }
        if (message.artist !== "") {
            obj.artist = message.artist;
        }
        if (message.storyWriter !== "") {
            obj.storyWriter = message.storyWriter;
        }
        if (message.contributors?.length) {
            obj.contributors = message.contributors;
        }
        if (message.story !== "") {
            obj.story = message.story;
        }
        if (message.artworkId !== 0) {
            obj.artworkId = Math.round(message.artworkId);
        }
        if (message.status !== 0) {
            obj.status = cStatusToJSON(message.status);
        }
        if (message.timeStamp !== 0) {
            obj.timeStamp = Math.round(message.timeStamp);
        }
        return obj;
    },
    create(base) {
        return Set.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSet();
        message.name = object.name ?? "";
        message.cards = object.cards?.map((e) => e) || [];
        message.artist = object.artist ?? "";
        message.storyWriter = object.storyWriter ?? "";
        message.contributors = object.contributors?.map((e) => e) || [];
        message.story = object.story ?? "";
        message.artworkId = object.artworkId ?? 0;
        message.status = object.status ?? 0;
        message.timeStamp = object.timeStamp ?? 0;
        return message;
    },
};
function createBaseOutpSet() {
    return {
        name: "",
        cards: [],
        artist: "",
        storyWriter: "",
        contributors: [],
        story: "",
        artwork: "",
        status: 0,
        timeStamp: 0,
    };
}
export const OutpSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        writer.uint32(18).fork();
        for (const v of message.cards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        if (message.storyWriter !== "") {
            writer.uint32(34).string(message.storyWriter);
        }
        for (const v of message.contributors) {
            writer.uint32(42).string(v);
        }
        if (message.story !== "") {
            writer.uint32(50).string(message.story);
        }
        if (message.artwork !== "") {
            writer.uint32(58).string(message.artwork);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.timeStamp !== 0) {
            writer.uint32(72).int64(message.timeStamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutpSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag === 16) {
                        message.cards.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cards.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.artist = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.storyWriter = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.contributors.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.story = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.artwork = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.timeStamp = longToNumber(reader.int64());
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
            name: isSet(object.name) ? String(object.name) : "",
            cards: Array.isArray(object?.cards) ? object.cards.map((e) => Number(e)) : [],
            artist: isSet(object.artist) ? String(object.artist) : "",
            storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
            contributors: Array.isArray(object?.contributors) ? object.contributors.map((e) => String(e)) : [],
            story: isSet(object.story) ? String(object.story) : "",
            artwork: isSet(object.artwork) ? String(object.artwork) : "",
            status: isSet(object.status) ? cStatusFromJSON(object.status) : 0,
            timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.cards?.length) {
            obj.cards = message.cards.map((e) => Math.round(e));
        }
        if (message.artist !== "") {
            obj.artist = message.artist;
        }
        if (message.storyWriter !== "") {
            obj.storyWriter = message.storyWriter;
        }
        if (message.contributors?.length) {
            obj.contributors = message.contributors;
        }
        if (message.story !== "") {
            obj.story = message.story;
        }
        if (message.artwork !== "") {
            obj.artwork = message.artwork;
        }
        if (message.status !== 0) {
            obj.status = cStatusToJSON(message.status);
        }
        if (message.timeStamp !== 0) {
            obj.timeStamp = Math.round(message.timeStamp);
        }
        return obj;
    },
    create(base) {
        return OutpSet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOutpSet();
        message.name = object.name ?? "";
        message.cards = object.cards?.map((e) => e) || [];
        message.artist = object.artist ?? "";
        message.storyWriter = object.storyWriter ?? "";
        message.contributors = object.contributors?.map((e) => e) || [];
        message.story = object.story ?? "";
        message.artwork = object.artwork ?? "";
        message.status = object.status ?? 0;
        message.timeStamp = object.timeStamp ?? 0;
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
