/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var CouncilStatus;
(function (CouncilStatus) {
    CouncilStatus[CouncilStatus["available"] = 0] = "available";
    CouncilStatus[CouncilStatus["unavailable"] = 1] = "unavailable";
    CouncilStatus[CouncilStatus["openCouncil"] = 2] = "openCouncil";
    CouncilStatus[CouncilStatus["startedCouncil"] = 3] = "startedCouncil";
    CouncilStatus[CouncilStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CouncilStatus || (CouncilStatus = {}));
export function councilStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "available":
            return CouncilStatus.available;
        case 1:
        case "unavailable":
            return CouncilStatus.unavailable;
        case 2:
        case "openCouncil":
            return CouncilStatus.openCouncil;
        case 3:
        case "startedCouncil":
            return CouncilStatus.startedCouncil;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CouncilStatus.UNRECOGNIZED;
    }
}
export function councilStatusToJSON(object) {
    switch (object) {
        case CouncilStatus.available:
            return "available";
        case CouncilStatus.unavailable:
            return "unavailable";
        case CouncilStatus.openCouncil:
            return "openCouncil";
        case CouncilStatus.startedCouncil:
            return "startedCouncil";
        case CouncilStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var AirDrop;
(function (AirDrop) {
    AirDrop[AirDrop["play"] = 0] = "play";
    AirDrop[AirDrop["vote"] = 1] = "vote";
    AirDrop[AirDrop["create"] = 2] = "create";
    AirDrop[AirDrop["buy"] = 3] = "buy";
    AirDrop[AirDrop["user"] = 4] = "user";
    AirDrop[AirDrop["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AirDrop || (AirDrop = {}));
export function airDropFromJSON(object) {
    switch (object) {
        case 0:
        case "play":
            return AirDrop.play;
        case 1:
        case "vote":
            return AirDrop.vote;
        case 2:
        case "create":
            return AirDrop.create;
        case 3:
        case "buy":
            return AirDrop.buy;
        case 4:
        case "user":
            return AirDrop.user;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AirDrop.UNRECOGNIZED;
    }
}
export function airDropToJSON(object) {
    switch (object) {
        case AirDrop.play:
            return "play";
        case AirDrop.vote:
            return "vote";
        case AirDrop.create:
            return "create";
        case AirDrop.buy:
            return "buy";
        case AirDrop.user:
            return "user";
        case AirDrop.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseUser() {
    return {
        alias: "",
        ownedCardSchemes: [],
        ownedPrototypes: [],
        cards: [],
        CouncilStatus: 0,
        ReportMatches: false,
        profileCard: 0,
        airDrops: undefined,
        boosterPacks: [],
        website: "",
        biography: "",
        votableCards: [],
        votedCards: [],
        earlyAccess: undefined,
        OpenEncounters: [],
        WonEncounters: [],
    };
}
export const User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alias !== "") {
            writer.uint32(10).string(message.alias);
        }
        writer.uint32(18).fork();
        for (const v of message.ownedCardSchemes) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.ownedPrototypes) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.cards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.CouncilStatus !== 0) {
            writer.uint32(48).int32(message.CouncilStatus);
        }
        if (message.ReportMatches === true) {
            writer.uint32(56).bool(message.ReportMatches);
        }
        if (message.profileCard !== 0) {
            writer.uint32(64).uint64(message.profileCard);
        }
        if (message.airDrops !== undefined) {
            AirDrops.encode(message.airDrops, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.boosterPacks) {
            BoosterPack.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.website !== "") {
            writer.uint32(90).string(message.website);
        }
        if (message.biography !== "") {
            writer.uint32(98).string(message.biography);
        }
        writer.uint32(106).fork();
        for (const v of message.votableCards) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(114).fork();
        for (const v of message.votedCards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.earlyAccess !== undefined) {
            EarlyAccess.encode(message.earlyAccess, writer.uint32(122).fork()).ldelim();
        }
        writer.uint32(130).fork();
        for (const v of message.OpenEncounters) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(138).fork();
        for (const v of message.WonEncounters) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ownedCardSchemes.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.ownedCardSchemes.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ownedPrototypes.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.ownedPrototypes.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cards.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cards.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 6:
                    message.CouncilStatus = reader.int32();
                    break;
                case 7:
                    message.ReportMatches = reader.bool();
                    break;
                case 8:
                    message.profileCard = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.airDrops = AirDrops.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.boosterPacks.push(BoosterPack.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.website = reader.string();
                    break;
                case 12:
                    message.biography = reader.string();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.votableCards.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.votableCards.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 14:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.votedCards.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.votedCards.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 15:
                    message.earlyAccess = EarlyAccess.decode(reader, reader.uint32());
                    break;
                case 16:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.OpenEncounters.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.OpenEncounters.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 17:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.WonEncounters.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.WonEncounters.push(longToNumber(reader.uint64()));
                    }
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
            alias: isSet(object.alias) ? String(object.alias) : "",
            ownedCardSchemes: Array.isArray(object?.ownedCardSchemes)
                ? object.ownedCardSchemes.map((e) => Number(e))
                : [],
            ownedPrototypes: Array.isArray(object?.ownedPrototypes) ? object.ownedPrototypes.map((e) => Number(e)) : [],
            cards: Array.isArray(object?.cards) ? object.cards.map((e) => Number(e)) : [],
            CouncilStatus: isSet(object.CouncilStatus) ? councilStatusFromJSON(object.CouncilStatus) : 0,
            ReportMatches: isSet(object.ReportMatches) ? Boolean(object.ReportMatches) : false,
            profileCard: isSet(object.profileCard) ? Number(object.profileCard) : 0,
            airDrops: isSet(object.airDrops) ? AirDrops.fromJSON(object.airDrops) : undefined,
            boosterPacks: Array.isArray(object?.boosterPacks)
                ? object.boosterPacks.map((e) => BoosterPack.fromJSON(e))
                : [],
            website: isSet(object.website) ? String(object.website) : "",
            biography: isSet(object.biography) ? String(object.biography) : "",
            votableCards: Array.isArray(object?.votableCards) ? object.votableCards.map((e) => Number(e)) : [],
            votedCards: Array.isArray(object?.votedCards) ? object.votedCards.map((e) => Number(e)) : [],
            earlyAccess: isSet(object.earlyAccess) ? EarlyAccess.fromJSON(object.earlyAccess) : undefined,
            OpenEncounters: Array.isArray(object?.OpenEncounters) ? object.OpenEncounters.map((e) => Number(e)) : [],
            WonEncounters: Array.isArray(object?.WonEncounters) ? object.WonEncounters.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.alias !== undefined && (obj.alias = message.alias);
        if (message.ownedCardSchemes) {
            obj.ownedCardSchemes = message.ownedCardSchemes.map((e) => Math.round(e));
        }
        else {
            obj.ownedCardSchemes = [];
        }
        if (message.ownedPrototypes) {
            obj.ownedPrototypes = message.ownedPrototypes.map((e) => Math.round(e));
        }
        else {
            obj.ownedPrototypes = [];
        }
        if (message.cards) {
            obj.cards = message.cards.map((e) => Math.round(e));
        }
        else {
            obj.cards = [];
        }
        message.CouncilStatus !== undefined && (obj.CouncilStatus = councilStatusToJSON(message.CouncilStatus));
        message.ReportMatches !== undefined && (obj.ReportMatches = message.ReportMatches);
        message.profileCard !== undefined && (obj.profileCard = Math.round(message.profileCard));
        message.airDrops !== undefined && (obj.airDrops = message.airDrops ? AirDrops.toJSON(message.airDrops) : undefined);
        if (message.boosterPacks) {
            obj.boosterPacks = message.boosterPacks.map((e) => e ? BoosterPack.toJSON(e) : undefined);
        }
        else {
            obj.boosterPacks = [];
        }
        message.website !== undefined && (obj.website = message.website);
        message.biography !== undefined && (obj.biography = message.biography);
        if (message.votableCards) {
            obj.votableCards = message.votableCards.map((e) => Math.round(e));
        }
        else {
            obj.votableCards = [];
        }
        if (message.votedCards) {
            obj.votedCards = message.votedCards.map((e) => Math.round(e));
        }
        else {
            obj.votedCards = [];
        }
        message.earlyAccess !== undefined
            && (obj.earlyAccess = message.earlyAccess ? EarlyAccess.toJSON(message.earlyAccess) : undefined);
        if (message.OpenEncounters) {
            obj.OpenEncounters = message.OpenEncounters.map((e) => Math.round(e));
        }
        else {
            obj.OpenEncounters = [];
        }
        if (message.WonEncounters) {
            obj.WonEncounters = message.WonEncounters.map((e) => Math.round(e));
        }
        else {
            obj.WonEncounters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUser();
        message.alias = object.alias ?? "";
        message.ownedCardSchemes = object.ownedCardSchemes?.map((e) => e) || [];
        message.ownedPrototypes = object.ownedPrototypes?.map((e) => e) || [];
        message.cards = object.cards?.map((e) => e) || [];
        message.CouncilStatus = object.CouncilStatus ?? 0;
        message.ReportMatches = object.ReportMatches ?? false;
        message.profileCard = object.profileCard ?? 0;
        message.airDrops = (object.airDrops !== undefined && object.airDrops !== null)
            ? AirDrops.fromPartial(object.airDrops)
            : undefined;
        message.boosterPacks = object.boosterPacks?.map((e) => BoosterPack.fromPartial(e)) || [];
        message.website = object.website ?? "";
        message.biography = object.biography ?? "";
        message.votableCards = object.votableCards?.map((e) => e) || [];
        message.votedCards = object.votedCards?.map((e) => e) || [];
        message.earlyAccess = (object.earlyAccess !== undefined && object.earlyAccess !== null)
            ? EarlyAccess.fromPartial(object.earlyAccess)
            : undefined;
        message.OpenEncounters = object.OpenEncounters?.map((e) => e) || [];
        message.WonEncounters = object.WonEncounters?.map((e) => e) || [];
        return message;
    },
};
function createBaseEarlyAccess() {
    return { active: false, invitedByUser: "", invitedUser: "" };
}
export const EarlyAccess = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.active === true) {
            writer.uint32(8).bool(message.active);
        }
        if (message.invitedByUser !== "") {
            writer.uint32(18).string(message.invitedByUser);
        }
        if (message.invitedUser !== "") {
            writer.uint32(26).string(message.invitedUser);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEarlyAccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.active = reader.bool();
                    break;
                case 2:
                    message.invitedByUser = reader.string();
                    break;
                case 3:
                    message.invitedUser = reader.string();
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
            active: isSet(object.active) ? Boolean(object.active) : false,
            invitedByUser: isSet(object.invitedByUser) ? String(object.invitedByUser) : "",
            invitedUser: isSet(object.invitedUser) ? String(object.invitedUser) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.active !== undefined && (obj.active = message.active);
        message.invitedByUser !== undefined && (obj.invitedByUser = message.invitedByUser);
        message.invitedUser !== undefined && (obj.invitedUser = message.invitedUser);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEarlyAccess();
        message.active = object.active ?? false;
        message.invitedByUser = object.invitedByUser ?? "";
        message.invitedUser = object.invitedUser ?? "";
        return message;
    },
};
function createBaseBoosterPack() {
    return { setId: 0, timeStamp: 0, raritiesPerPack: [], dropRatiosPerPack: [] };
}
export const BoosterPack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.setId !== 0) {
            writer.uint32(8).uint64(message.setId);
        }
        if (message.timeStamp !== 0) {
            writer.uint32(16).int64(message.timeStamp);
        }
        writer.uint32(26).fork();
        for (const v of message.raritiesPerPack) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.dropRatiosPerPack) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoosterPack();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.setId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.timeStamp = longToNumber(reader.int64());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.raritiesPerPack.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.raritiesPerPack.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.dropRatiosPerPack.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.dropRatiosPerPack.push(longToNumber(reader.uint64()));
                    }
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0,
            raritiesPerPack: Array.isArray(object?.raritiesPerPack) ? object.raritiesPerPack.map((e) => Number(e)) : [],
            dropRatiosPerPack: Array.isArray(object?.dropRatiosPerPack)
                ? object.dropRatiosPerPack.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.timeStamp !== undefined && (obj.timeStamp = Math.round(message.timeStamp));
        if (message.raritiesPerPack) {
            obj.raritiesPerPack = message.raritiesPerPack.map((e) => Math.round(e));
        }
        else {
            obj.raritiesPerPack = [];
        }
        if (message.dropRatiosPerPack) {
            obj.dropRatiosPerPack = message.dropRatiosPerPack.map((e) => Math.round(e));
        }
        else {
            obj.dropRatiosPerPack = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBoosterPack();
        message.setId = object.setId ?? 0;
        message.timeStamp = object.timeStamp ?? 0;
        message.raritiesPerPack = object.raritiesPerPack?.map((e) => e) || [];
        message.dropRatiosPerPack = object.dropRatiosPerPack?.map((e) => e) || [];
        return message;
    },
};
function createBaseAirDrops() {
    return { vote: false, create: false, buy: false, play: false, user: false };
}
export const AirDrops = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote === true) {
            writer.uint32(8).bool(message.vote);
        }
        if (message.create === true) {
            writer.uint32(16).bool(message.create);
        }
        if (message.buy === true) {
            writer.uint32(24).bool(message.buy);
        }
        if (message.play === true) {
            writer.uint32(32).bool(message.play);
        }
        if (message.user === true) {
            writer.uint32(40).bool(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAirDrops();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = reader.bool();
                    break;
                case 2:
                    message.create = reader.bool();
                    break;
                case 3:
                    message.buy = reader.bool();
                    break;
                case 4:
                    message.play = reader.bool();
                    break;
                case 5:
                    message.user = reader.bool();
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
            vote: isSet(object.vote) ? Boolean(object.vote) : false,
            create: isSet(object.create) ? Boolean(object.create) : false,
            buy: isSet(object.buy) ? Boolean(object.buy) : false,
            play: isSet(object.play) ? Boolean(object.play) : false,
            user: isSet(object.user) ? Boolean(object.user) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote);
        message.create !== undefined && (obj.create = message.create);
        message.buy !== undefined && (obj.buy = message.buy);
        message.play !== undefined && (obj.play = message.play);
        message.user !== undefined && (obj.user = message.user);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAirDrops();
        message.vote = object.vote ?? false;
        message.create = object.create ?? false;
        message.buy = object.buy ?? false;
        message.play = object.play ?? false;
        message.user = object.user ?? false;
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
