/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { responseFromJSON, responseToJSON } from "./council";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var Outcome;
(function (Outcome) {
    Outcome[Outcome["AWon"] = 0] = "AWon";
    Outcome[Outcome["BWon"] = 1] = "BWon";
    Outcome[Outcome["Draw"] = 2] = "Draw";
    Outcome[Outcome["Aborted"] = 3] = "Aborted";
    Outcome[Outcome["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Outcome || (Outcome = {}));
export function outcomeFromJSON(object) {
    switch (object) {
        case 0:
        case "AWon":
            return Outcome.AWon;
        case 1:
        case "BWon":
            return Outcome.BWon;
        case 2:
        case "Draw":
            return Outcome.Draw;
        case 3:
        case "Aborted":
            return Outcome.Aborted;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Outcome.UNRECOGNIZED;
    }
}
export function outcomeToJSON(object) {
    switch (object) {
        case Outcome.AWon:
            return "AWon";
        case Outcome.BWon:
            return "BWon";
        case Outcome.Draw:
            return "Draw";
        case Outcome.Aborted:
            return "Aborted";
        case Outcome.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateuser() {
    return { creator: "", newUser: "", alias: "" };
}
export const MsgCreateuser = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.newUser !== "") {
            writer.uint32(18).string(message.newUser);
        }
        if (message.alias !== "") {
            writer.uint32(26).string(message.alias);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateuser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.newUser = reader.string();
                    break;
                case 3:
                    message.alias = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            newUser: isSet(object.newUser) ? String(object.newUser) : "",
            alias: isSet(object.alias) ? String(object.alias) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.newUser !== undefined && (obj.newUser = message.newUser);
        message.alias !== undefined && (obj.alias = message.alias);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateuser();
        message.creator = object.creator ?? "";
        message.newUser = object.newUser ?? "";
        message.alias = object.alias ?? "";
        return message;
    },
};
function createBaseMsgCreateuserResponse() {
    return {};
}
export const MsgCreateuserResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateuserResponse();
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
        const message = createBaseMsgCreateuserResponse();
        return message;
    },
};
function createBaseMsgBuyCardScheme() {
    return { creator: "", bid: "" };
}
export const MsgBuyCardScheme = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.bid !== "") {
            writer.uint32(18).string(message.bid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCardScheme();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.bid = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            bid: isSet(object.bid) ? String(object.bid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.bid !== undefined && (obj.bid = message.bid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCardScheme();
        message.creator = object.creator ?? "";
        message.bid = object.bid ?? "";
        return message;
    },
};
function createBaseMsgBuyCardSchemeResponse() {
    return {};
}
export const MsgBuyCardSchemeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCardSchemeResponse();
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
        const message = createBaseMsgBuyCardSchemeResponse();
        return message;
    },
};
function createBaseMsgVoteCard() {
    return { creator: "", cardId: 0, voteType: "" };
}
export const MsgVoteCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.voteType !== "") {
            writer.uint32(26).string(message.voteType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.voteType = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            voteType: isSet(object.voteType) ? String(object.voteType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.voteType !== undefined && (obj.voteType = message.voteType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteCard();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.voteType = object.voteType ?? "";
        return message;
    },
};
function createBaseMsgVoteCardResponse() {
    return { airdropClaimed: false };
}
export const MsgVoteCardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropClaimed === true) {
            writer.uint32(8).bool(message.airdropClaimed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteCardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropClaimed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
    },
    toJSON(message) {
        const obj = {};
        message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteCardResponse();
        message.airdropClaimed = object.airdropClaimed ?? false;
        return message;
    },
};
function createBaseMsgSaveCardContent() {
    return { creator: "", cardId: 0, content: new Uint8Array(), notes: "", artist: "" };
}
export const MsgSaveCardContent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.content.length !== 0) {
            writer.uint32(26).bytes(message.content);
        }
        if (message.notes !== "") {
            writer.uint32(34).string(message.notes);
        }
        if (message.artist !== "") {
            writer.uint32(42).string(message.artist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSaveCardContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.content = reader.bytes();
                    break;
                case 4:
                    message.notes = reader.string();
                    break;
                case 5:
                    message.artist = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(),
            notes: isSet(object.notes) ? String(object.notes) : "",
            artist: isSet(object.artist) ? String(object.artist) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.content !== undefined
            && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
        message.notes !== undefined && (obj.notes = message.notes);
        message.artist !== undefined && (obj.artist = message.artist);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSaveCardContent();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.content = object.content ?? new Uint8Array();
        message.notes = object.notes ?? "";
        message.artist = object.artist ?? "";
        return message;
    },
};
function createBaseMsgSaveCardContentResponse() {
    return { airdropClaimed: false };
}
export const MsgSaveCardContentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropClaimed === true) {
            writer.uint32(8).bool(message.airdropClaimed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSaveCardContentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropClaimed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
    },
    toJSON(message) {
        const obj = {};
        message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSaveCardContentResponse();
        message.airdropClaimed = object.airdropClaimed ?? false;
        return message;
    },
};
function createBaseMsgTransferCard() {
    return { creator: "", cardId: 0, receiver: "" };
}
export const MsgTransferCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.receiver = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferCard();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.receiver = object.receiver ?? "";
        return message;
    },
};
function createBaseMsgTransferCardResponse() {
    return {};
}
export const MsgTransferCardResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferCardResponse();
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
        const message = createBaseMsgTransferCardResponse();
        return message;
    },
};
function createBaseMsgDonateToCard() {
    return { creator: "", cardId: 0, amount: "" };
}
export const MsgDonateToCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDonateToCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.amount = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDonateToCard();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.amount = object.amount ?? "";
        return message;
    },
};
function createBaseMsgDonateToCardResponse() {
    return {};
}
export const MsgDonateToCardResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDonateToCardResponse();
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
        const message = createBaseMsgDonateToCardResponse();
        return message;
    },
};
function createBaseMsgAddArtwork() {
    return { creator: "", cardId: 0, image: new Uint8Array(), fullArt: false };
}
export const MsgAddArtwork = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.image.length !== 0) {
            writer.uint32(26).bytes(message.image);
        }
        if (message.fullArt === true) {
            writer.uint32(32).bool(message.fullArt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtwork();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.image = reader.bytes();
                    break;
                case 4:
                    message.fullArt = reader.bool();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
            fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.image !== undefined
            && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
        message.fullArt !== undefined && (obj.fullArt = message.fullArt);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddArtwork();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.image = object.image ?? new Uint8Array();
        message.fullArt = object.fullArt ?? false;
        return message;
    },
};
function createBaseMsgAddArtworkResponse() {
    return {};
}
export const MsgAddArtworkResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtworkResponse();
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
        const message = createBaseMsgAddArtworkResponse();
        return message;
    },
};
function createBaseMsgSubmitCopyrightProposal() {
    return { creator: "", cardId: 0, description: "", link: "" };
}
export const MsgSubmitCopyrightProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.link !== "") {
            writer.uint32(34).string(message.link);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCopyrightProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.link = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            link: isSet(object.link) ? String(object.link) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.description !== undefined && (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitCopyrightProposal();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.description = object.description ?? "";
        message.link = object.link ?? "";
        return message;
    },
};
function createBaseMsgSubmitCopyrightProposalResponse() {
    return {};
}
export const MsgSubmitCopyrightProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCopyrightProposalResponse();
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
        const message = createBaseMsgSubmitCopyrightProposalResponse();
        return message;
    },
};
function createBaseMsgChangeArtist() {
    return { creator: "", cardID: 0, artist: "" };
}
export const MsgChangeArtist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardID !== 0) {
            writer.uint32(16).uint64(message.cardID);
        }
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeArtist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardID = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.artist = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardID: isSet(object.cardID) ? Number(object.cardID) : 0,
            artist: isSet(object.artist) ? String(object.artist) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardID !== undefined && (obj.cardID = Math.round(message.cardID));
        message.artist !== undefined && (obj.artist = message.artist);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeArtist();
        message.creator = object.creator ?? "";
        message.cardID = object.cardID ?? 0;
        message.artist = object.artist ?? "";
        return message;
    },
};
function createBaseMsgChangeArtistResponse() {
    return {};
}
export const MsgChangeArtistResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeArtistResponse();
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
        const message = createBaseMsgChangeArtistResponse();
        return message;
    },
};
function createBaseMsgRegisterForCouncil() {
    return { creator: "" };
}
export const MsgRegisterForCouncil = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterForCouncil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { creator: isSet(object.creator) ? String(object.creator) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterForCouncil();
        message.creator = object.creator ?? "";
        return message;
    },
};
function createBaseMsgRegisterForCouncilResponse() {
    return {};
}
export const MsgRegisterForCouncilResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterForCouncilResponse();
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
        const message = createBaseMsgRegisterForCouncilResponse();
        return message;
    },
};
function createBaseMsgReportMatch() {
    return { creator: "", playerA: "", playerB: "", cardsA: [], cardsB: [], outcome: 0 };
}
export const MsgReportMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.playerA !== "") {
            writer.uint32(18).string(message.playerA);
        }
        if (message.playerB !== "") {
            writer.uint32(26).string(message.playerB);
        }
        writer.uint32(42).fork();
        for (const v of message.cardsA) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(50).fork();
        for (const v of message.cardsB) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.outcome !== 0) {
            writer.uint32(56).int32(message.outcome);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReportMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.playerA = reader.string();
                    break;
                case 3:
                    message.playerB = reader.string();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsA.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsA.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsB.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsB.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 7:
                    message.outcome = reader.int32();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            playerA: isSet(object.playerA) ? String(object.playerA) : "",
            playerB: isSet(object.playerB) ? String(object.playerB) : "",
            cardsA: Array.isArray(object?.cardsA) ? object.cardsA.map((e) => Number(e)) : [],
            cardsB: Array.isArray(object?.cardsB) ? object.cardsB.map((e) => Number(e)) : [],
            outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.playerA !== undefined && (obj.playerA = message.playerA);
        message.playerB !== undefined && (obj.playerB = message.playerB);
        if (message.cardsA) {
            obj.cardsA = message.cardsA.map((e) => Math.round(e));
        }
        else {
            obj.cardsA = [];
        }
        if (message.cardsB) {
            obj.cardsB = message.cardsB.map((e) => Math.round(e));
        }
        else {
            obj.cardsB = [];
        }
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgReportMatch();
        message.creator = object.creator ?? "";
        message.playerA = object.playerA ?? "";
        message.playerB = object.playerB ?? "";
        message.cardsA = object.cardsA?.map((e) => e) || [];
        message.cardsB = object.cardsB?.map((e) => e) || [];
        message.outcome = object.outcome ?? 0;
        return message;
    },
};
function createBaseMsgReportMatchResponse() {
    return { matchId: 0 };
}
export const MsgReportMatchResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.matchId !== 0) {
            writer.uint32(8).uint64(message.matchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReportMatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { matchId: isSet(object.matchId) ? Number(object.matchId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgReportMatchResponse();
        message.matchId = object.matchId ?? 0;
        return message;
    },
};
function createBaseMsgSubmitMatchReporterProposal() {
    return { creator: "", reporter: "", deposit: "", description: "" };
}
export const MsgSubmitMatchReporterProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        if (message.deposit !== "") {
            writer.uint32(26).string(message.deposit);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMatchReporterProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
                    break;
                case 3:
                    message.deposit = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitMatchReporterProposal();
        message.creator = object.creator ?? "";
        message.reporter = object.reporter ?? "";
        message.deposit = object.deposit ?? "";
        message.description = object.description ?? "";
        return message;
    },
};
function createBaseMsgSubmitMatchReporterProposalResponse() {
    return {};
}
export const MsgSubmitMatchReporterProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMatchReporterProposalResponse();
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
        const message = createBaseMsgSubmitMatchReporterProposalResponse();
        return message;
    },
};
function createBaseMsgApointMatchReporter() {
    return { creator: "", reporter: "" };
}
export const MsgApointMatchReporter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgApointMatchReporter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgApointMatchReporter();
        message.creator = object.creator ?? "";
        message.reporter = object.reporter ?? "";
        return message;
    },
};
function createBaseMsgApointMatchReporterResponse() {
    return {};
}
export const MsgApointMatchReporterResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgApointMatchReporterResponse();
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
        const message = createBaseMsgApointMatchReporterResponse();
        return message;
    },
};
function createBaseMsgCreateCollection() {
    return { creator: "", name: "", artist: "", storyWriter: "", contributors: [] };
}
export const MsgCreateCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        if (message.storyWriter !== "") {
            writer.uint32(34).string(message.storyWriter);
        }
        for (const v of message.contributors) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.artist = reader.string();
                    break;
                case 4:
                    message.storyWriter = reader.string();
                    break;
                case 5:
                    message.contributors.push(reader.string());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            name: isSet(object.name) ? String(object.name) : "",
            artist: isSet(object.artist) ? String(object.artist) : "",
            storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
            contributors: Array.isArray(object?.contributors) ? object.contributors.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.artist !== undefined && (obj.artist = message.artist);
        message.storyWriter !== undefined && (obj.storyWriter = message.storyWriter);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e);
        }
        else {
            obj.contributors = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCollection();
        message.creator = object.creator ?? "";
        message.name = object.name ?? "";
        message.artist = object.artist ?? "";
        message.storyWriter = object.storyWriter ?? "";
        message.contributors = object.contributors?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgCreateCollectionResponse() {
    return {};
}
export const MsgCreateCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCollectionResponse();
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
        const message = createBaseMsgCreateCollectionResponse();
        return message;
    },
};
function createBaseMsgAddCardToCollection() {
    return { creator: "", collectionId: 0, cardId: 0 };
}
export const MsgAddCardToCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.cardId !== 0) {
            writer.uint32(24).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCardToCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.cardId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddCardToCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgAddCardToCollectionResponse() {
    return {};
}
export const MsgAddCardToCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCardToCollectionResponse();
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
        const message = createBaseMsgAddCardToCollectionResponse();
        return message;
    },
};
function createBaseMsgFinalizeCollection() {
    return { creator: "", collectionId: 0 };
}
export const MsgFinalizeCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFinalizeCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFinalizeCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        return message;
    },
};
function createBaseMsgFinalizeCollectionResponse() {
    return {};
}
export const MsgFinalizeCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFinalizeCollectionResponse();
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
        const message = createBaseMsgFinalizeCollectionResponse();
        return message;
    },
};
function createBaseMsgBuyCollection() {
    return { creator: "", collectionId: 0 };
}
export const MsgBuyCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        return message;
    },
};
function createBaseMsgBuyCollectionResponse() {
    return { airdropClaimed: false };
}
export const MsgBuyCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropClaimed === true) {
            writer.uint32(8).bool(message.airdropClaimed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropClaimed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
    },
    toJSON(message) {
        const obj = {};
        message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCollectionResponse();
        message.airdropClaimed = object.airdropClaimed ?? false;
        return message;
    },
};
function createBaseMsgRemoveCardFromCollection() {
    return { creator: "", collectionId: 0, cardId: 0 };
}
export const MsgRemoveCardFromCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.cardId !== 0) {
            writer.uint32(24).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCardFromCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.cardId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveCardFromCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgRemoveCardFromCollectionResponse() {
    return {};
}
export const MsgRemoveCardFromCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCardFromCollectionResponse();
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
        const message = createBaseMsgRemoveCardFromCollectionResponse();
        return message;
    },
};
function createBaseMsgRemoveContributorFromCollection() {
    return { creator: "", collectionId: 0, user: "" };
}
export const MsgRemoveContributorFromCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveContributorFromCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.user = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            user: isSet(object.user) ? String(object.user) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.user !== undefined && (obj.user = message.user);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveContributorFromCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.user = object.user ?? "";
        return message;
    },
};
function createBaseMsgRemoveContributorFromCollectionResponse() {
    return {};
}
export const MsgRemoveContributorFromCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveContributorFromCollectionResponse();
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
        const message = createBaseMsgRemoveContributorFromCollectionResponse();
        return message;
    },
};
function createBaseMsgAddContributorToCollection() {
    return { creator: "", collectionId: 0, user: "" };
}
export const MsgAddContributorToCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddContributorToCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.user = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            user: isSet(object.user) ? String(object.user) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.user !== undefined && (obj.user = message.user);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddContributorToCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.user = object.user ?? "";
        return message;
    },
};
function createBaseMsgAddContributorToCollectionResponse() {
    return {};
}
export const MsgAddContributorToCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddContributorToCollectionResponse();
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
        const message = createBaseMsgAddContributorToCollectionResponse();
        return message;
    },
};
function createBaseMsgSubmitCollectionProposal() {
    return { creator: "", collectionId: 0 };
}
export const MsgSubmitCollectionProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCollectionProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitCollectionProposal();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        return message;
    },
};
function createBaseMsgSubmitCollectionProposalResponse() {
    return {};
}
export const MsgSubmitCollectionProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCollectionProposalResponse();
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
        const message = createBaseMsgSubmitCollectionProposalResponse();
        return message;
    },
};
function createBaseMsgCreateSellOffer() {
    return { creator: "", card: 0, price: "" };
}
export const MsgCreateSellOffer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.card !== 0) {
            writer.uint32(16).uint64(message.card);
        }
        if (message.price !== "") {
            writer.uint32(26).string(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSellOffer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.card = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.price = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            card: isSet(object.card) ? Number(object.card) : 0,
            price: isSet(object.price) ? String(object.price) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.card !== undefined && (obj.card = Math.round(message.card));
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSellOffer();
        message.creator = object.creator ?? "";
        message.card = object.card ?? 0;
        message.price = object.price ?? "";
        return message;
    },
};
function createBaseMsgCreateSellOfferResponse() {
    return {};
}
export const MsgCreateSellOfferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSellOfferResponse();
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
        const message = createBaseMsgCreateSellOfferResponse();
        return message;
    },
};
function createBaseMsgBuyCard() {
    return { creator: "", sellOfferId: 0 };
}
export const MsgBuyCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.sellOfferId !== 0) {
            writer.uint32(16).uint64(message.sellOfferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sellOfferId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCard();
        message.creator = object.creator ?? "";
        message.sellOfferId = object.sellOfferId ?? 0;
        return message;
    },
};
function createBaseMsgBuyCardResponse() {
    return {};
}
export const MsgBuyCardResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCardResponse();
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
        const message = createBaseMsgBuyCardResponse();
        return message;
    },
};
function createBaseMsgRemoveSellOffer() {
    return { creator: "", sellOfferId: 0 };
}
export const MsgRemoveSellOffer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.sellOfferId !== 0) {
            writer.uint32(16).uint64(message.sellOfferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveSellOffer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sellOfferId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveSellOffer();
        message.creator = object.creator ?? "";
        message.sellOfferId = object.sellOfferId ?? 0;
        return message;
    },
};
function createBaseMsgRemoveSellOfferResponse() {
    return {};
}
export const MsgRemoveSellOfferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveSellOfferResponse();
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
        const message = createBaseMsgRemoveSellOfferResponse();
        return message;
    },
};
function createBaseMsgAddArtworkToCollection() {
    return { creator: "", collectionId: 0, image: new Uint8Array() };
}
export const MsgAddArtworkToCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.image.length !== 0) {
            writer.uint32(26).bytes(message.image);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtworkToCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.image = reader.bytes();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.image !== undefined
            && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddArtworkToCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.image = object.image ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgAddArtworkToCollectionResponse() {
    return {};
}
export const MsgAddArtworkToCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtworkToCollectionResponse();
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
        const message = createBaseMsgAddArtworkToCollectionResponse();
        return message;
    },
};
function createBaseMsgAddStoryToCollection() {
    return { creator: "", collectionId: 0, story: "" };
}
export const MsgAddStoryToCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.story !== "") {
            writer.uint32(26).string(message.story);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddStoryToCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.story = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            story: isSet(object.story) ? String(object.story) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.story !== undefined && (obj.story = message.story);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddStoryToCollection();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.story = object.story ?? "";
        return message;
    },
};
function createBaseMsgAddStoryToCollectionResponse() {
    return {};
}
export const MsgAddStoryToCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddStoryToCollectionResponse();
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
        const message = createBaseMsgAddStoryToCollectionResponse();
        return message;
    },
};
function createBaseMsgSetCardRarity() {
    return { creator: "", cardId: 0, collectionId: 0, rarity: "" };
}
export const MsgSetCardRarity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.collectionId !== 0) {
            writer.uint32(24).uint64(message.collectionId);
        }
        if (message.rarity !== "") {
            writer.uint32(34).string(message.rarity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCardRarity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.rarity = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            rarity: isSet(object.rarity) ? String(object.rarity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.rarity !== undefined && (obj.rarity = message.rarity);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetCardRarity();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.collectionId = object.collectionId ?? 0;
        message.rarity = object.rarity ?? "";
        return message;
    },
};
function createBaseMsgSetCardRarityResponse() {
    return {};
}
export const MsgSetCardRarityResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCardRarityResponse();
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
        const message = createBaseMsgSetCardRarityResponse();
        return message;
    },
};
function createBaseMsgCreateCouncil() {
    return { creator: "", cardId: 0 };
}
export const MsgCreateCouncil = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCouncil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCouncil();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgCreateCouncilResponse() {
    return {};
}
export const MsgCreateCouncilResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCouncilResponse();
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
        const message = createBaseMsgCreateCouncilResponse();
        return message;
    },
};
function createBaseMsgCommitCouncilResponse() {
    return { creator: "", response: "", councilId: 0, suggestion: "" };
}
export const MsgCommitCouncilResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.response !== "") {
            writer.uint32(18).string(message.response);
        }
        if (message.councilId !== 0) {
            writer.uint32(24).uint64(message.councilId);
        }
        if (message.suggestion !== "") {
            writer.uint32(34).string(message.suggestion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommitCouncilResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.response = reader.string();
                    break;
                case 3:
                    message.councilId = longToNumber(reader.uint64());
                    break;
                case 4:
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            response: isSet(object.response) ? String(object.response) : "",
            councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
            suggestion: isSet(object.suggestion) ? String(object.suggestion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.response !== undefined && (obj.response = message.response);
        message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
        message.suggestion !== undefined && (obj.suggestion = message.suggestion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCommitCouncilResponse();
        message.creator = object.creator ?? "";
        message.response = object.response ?? "";
        message.councilId = object.councilId ?? 0;
        message.suggestion = object.suggestion ?? "";
        return message;
    },
};
function createBaseMsgCommitCouncilResponseResponse() {
    return {};
}
export const MsgCommitCouncilResponseResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommitCouncilResponseResponse();
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
        const message = createBaseMsgCommitCouncilResponseResponse();
        return message;
    },
};
function createBaseMsgRevealCouncilResponse() {
    return { creator: "", response: 0, secret: "", councilId: 0 };
}
export const MsgRevealCouncilResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.response !== 0) {
            writer.uint32(16).int32(message.response);
        }
        if (message.secret !== "") {
            writer.uint32(26).string(message.secret);
        }
        if (message.councilId !== 0) {
            writer.uint32(32).uint64(message.councilId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevealCouncilResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.response = reader.int32();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                case 4:
                    message.councilId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            response: isSet(object.response) ? responseFromJSON(object.response) : 0,
            secret: isSet(object.secret) ? String(object.secret) : "",
            councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.response !== undefined && (obj.response = responseToJSON(message.response));
        message.secret !== undefined && (obj.secret = message.secret);
        message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevealCouncilResponse();
        message.creator = object.creator ?? "";
        message.response = object.response ?? 0;
        message.secret = object.secret ?? "";
        message.councilId = object.councilId ?? 0;
        return message;
    },
};
function createBaseMsgRevealCouncilResponseResponse() {
    return {};
}
export const MsgRevealCouncilResponseResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevealCouncilResponseResponse();
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
        const message = createBaseMsgRevealCouncilResponseResponse();
        return message;
    },
};
function createBaseMsgRestartCouncil() {
    return { creator: "", councilId: 0 };
}
export const MsgRestartCouncil = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.councilId !== 0) {
            writer.uint32(16).uint64(message.councilId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestartCouncil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.councilId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRestartCouncil();
        message.creator = object.creator ?? "";
        message.councilId = object.councilId ?? 0;
        return message;
    },
};
function createBaseMsgRestartCouncilResponse() {
    return {};
}
export const MsgRestartCouncilResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestartCouncilResponse();
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
        const message = createBaseMsgRestartCouncilResponse();
        return message;
    },
};
function createBaseMsgRewokeCouncilRegistration() {
    return { creator: "" };
}
export const MsgRewokeCouncilRegistration = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewokeCouncilRegistration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { creator: isSet(object.creator) ? String(object.creator) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRewokeCouncilRegistration();
        message.creator = object.creator ?? "";
        return message;
    },
};
function createBaseMsgRewokeCouncilRegistrationResponse() {
    return {};
}
export const MsgRewokeCouncilRegistrationResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewokeCouncilRegistrationResponse();
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
        const message = createBaseMsgRewokeCouncilRegistrationResponse();
        return message;
    },
};
function createBaseMsgConfirmMatch() {
    return { creator: "", matchId: 0, outcome: 0 };
}
export const MsgConfirmMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.matchId !== 0) {
            writer.uint32(16).uint64(message.matchId);
        }
        if (message.outcome !== 0) {
            writer.uint32(24).int32(message.outcome);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.matchId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.outcome = reader.int32();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            matchId: isSet(object.matchId) ? Number(object.matchId) : 0,
            outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConfirmMatch();
        message.creator = object.creator ?? "";
        message.matchId = object.matchId ?? 0;
        message.outcome = object.outcome ?? 0;
        return message;
    },
};
function createBaseMsgConfirmMatchResponse() {
    return {};
}
export const MsgConfirmMatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmMatchResponse();
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
        const message = createBaseMsgConfirmMatchResponse();
        return message;
    },
};
function createBaseMsgSetProfileCard() {
    return { creator: "", cardId: 0 };
}
export const MsgSetProfileCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetProfileCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cardId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetProfileCard();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgSetProfileCardResponse() {
    return {};
}
export const MsgSetProfileCardResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetProfileCardResponse();
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
        const message = createBaseMsgSetProfileCardResponse();
        return message;
    },
};
function createBaseMsgOpenBoosterPack() {
    return { creator: "", boosterPackId: 0 };
}
export const MsgOpenBoosterPack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.boosterPackId !== 0) {
            writer.uint32(16).uint64(message.boosterPackId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBoosterPack();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.boosterPackId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            boosterPackId: isSet(object.boosterPackId) ? Number(object.boosterPackId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.boosterPackId !== undefined && (obj.boosterPackId = Math.round(message.boosterPackId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgOpenBoosterPack();
        message.creator = object.creator ?? "";
        message.boosterPackId = object.boosterPackId ?? 0;
        return message;
    },
};
function createBaseMsgOpenBoosterPackResponse() {
    return {};
}
export const MsgOpenBoosterPackResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBoosterPackResponse();
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
        const message = createBaseMsgOpenBoosterPackResponse();
        return message;
    },
};
function createBaseMsgTransferBoosterPack() {
    return { creator: "", boosterPackId: 0, receiver: "" };
}
export const MsgTransferBoosterPack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.boosterPackId !== 0) {
            writer.uint32(16).uint64(message.boosterPackId);
        }
        if (message.receiver !== "") {
            writer.uint32(26).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferBoosterPack();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.boosterPackId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.receiver = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            boosterPackId: isSet(object.boosterPackId) ? Number(object.boosterPackId) : 0,
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.boosterPackId !== undefined && (obj.boosterPackId = Math.round(message.boosterPackId));
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferBoosterPack();
        message.creator = object.creator ?? "";
        message.boosterPackId = object.boosterPackId ?? 0;
        message.receiver = object.receiver ?? "";
        return message;
    },
};
function createBaseMsgTransferBoosterPackResponse() {
    return {};
}
export const MsgTransferBoosterPackResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferBoosterPackResponse();
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
        const message = createBaseMsgTransferBoosterPackResponse();
        return message;
    },
};
function createBaseMsgSetCollectionStoryWriter() {
    return { creator: "", collectionId: 0, storyWriter: "" };
}
export const MsgSetCollectionStoryWriter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.storyWriter !== "") {
            writer.uint32(26).string(message.storyWriter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCollectionStoryWriter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.storyWriter = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.storyWriter !== undefined && (obj.storyWriter = message.storyWriter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetCollectionStoryWriter();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.storyWriter = object.storyWriter ?? "";
        return message;
    },
};
function createBaseMsgSetCollectionStoryWriterResponse() {
    return {};
}
export const MsgSetCollectionStoryWriterResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCollectionStoryWriterResponse();
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
        const message = createBaseMsgSetCollectionStoryWriterResponse();
        return message;
    },
};
function createBaseMsgSetCollectionArtist() {
    return { creator: "", collectionId: 0, artist: "" };
}
export const MsgSetCollectionArtist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== 0) {
            writer.uint32(16).uint64(message.collectionId);
        }
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCollectionArtist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.artist = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            collectionId: isSet(object.collectionId) ? Number(object.collectionId) : 0,
            artist: isSet(object.artist) ? String(object.artist) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined && (obj.collectionId = Math.round(message.collectionId));
        message.artist !== undefined && (obj.artist = message.artist);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetCollectionArtist();
        message.creator = object.creator ?? "";
        message.collectionId = object.collectionId ?? 0;
        message.artist = object.artist ?? "";
        return message;
    },
};
function createBaseMsgSetCollectionArtistResponse() {
    return {};
}
export const MsgSetCollectionArtistResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetCollectionArtistResponse();
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
        const message = createBaseMsgSetCollectionArtistResponse();
        return message;
    },
};
function createBaseMsgSetUserWebsite() {
    return { creator: "", website: "" };
}
export const MsgSetUserWebsite = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetUserWebsite();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.website = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            website: isSet(object.website) ? String(object.website) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.website !== undefined && (obj.website = message.website);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetUserWebsite();
        message.creator = object.creator ?? "";
        message.website = object.website ?? "";
        return message;
    },
};
function createBaseMsgSetUserWebsiteResponse() {
    return {};
}
export const MsgSetUserWebsiteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetUserWebsiteResponse();
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
        const message = createBaseMsgSetUserWebsiteResponse();
        return message;
    },
};
function createBaseMsgSetUserBiography() {
    return { creator: "", biography: "" };
}
export const MsgSetUserBiography = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.biography !== "") {
            writer.uint32(18).string(message.biography);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetUserBiography();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.biography = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            biography: isSet(object.biography) ? String(object.biography) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.biography !== undefined && (obj.biography = message.biography);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetUserBiography();
        message.creator = object.creator ?? "";
        message.biography = object.biography ?? "";
        return message;
    },
};
function createBaseMsgSetUserBiographyResponse() {
    return {};
}
export const MsgSetUserBiographyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetUserBiographyResponse();
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
        const message = createBaseMsgSetUserBiographyResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Createuser = this.Createuser.bind(this);
        this.BuyCardScheme = this.BuyCardScheme.bind(this);
        this.VoteCard = this.VoteCard.bind(this);
        this.SaveCardContent = this.SaveCardContent.bind(this);
        this.TransferCard = this.TransferCard.bind(this);
        this.DonateToCard = this.DonateToCard.bind(this);
        this.AddArtwork = this.AddArtwork.bind(this);
        this.SubmitCopyrightProposal = this.SubmitCopyrightProposal.bind(this);
        this.ChangeArtist = this.ChangeArtist.bind(this);
        this.RegisterForCouncil = this.RegisterForCouncil.bind(this);
        this.ReportMatch = this.ReportMatch.bind(this);
        this.SubmitMatchReporterProposal = this.SubmitMatchReporterProposal.bind(this);
        this.ApointMatchReporter = this.ApointMatchReporter.bind(this);
        this.CreateCollection = this.CreateCollection.bind(this);
        this.AddCardToCollection = this.AddCardToCollection.bind(this);
        this.FinalizeCollection = this.FinalizeCollection.bind(this);
        this.BuyCollection = this.BuyCollection.bind(this);
        this.RemoveCardFromCollection = this.RemoveCardFromCollection.bind(this);
        this.RemoveContributorFromCollection = this.RemoveContributorFromCollection.bind(this);
        this.AddContributorToCollection = this.AddContributorToCollection.bind(this);
        this.SubmitCollectionProposal = this.SubmitCollectionProposal.bind(this);
        this.CreateSellOffer = this.CreateSellOffer.bind(this);
        this.BuyCard = this.BuyCard.bind(this);
        this.RemoveSellOffer = this.RemoveSellOffer.bind(this);
        this.AddArtworkToCollection = this.AddArtworkToCollection.bind(this);
        this.AddStoryToCollection = this.AddStoryToCollection.bind(this);
        this.SetCardRarity = this.SetCardRarity.bind(this);
        this.CreateCouncil = this.CreateCouncil.bind(this);
        this.CommitCouncilResponse = this.CommitCouncilResponse.bind(this);
        this.RevealCouncilResponse = this.RevealCouncilResponse.bind(this);
        this.RestartCouncil = this.RestartCouncil.bind(this);
        this.RewokeCouncilRegistration = this.RewokeCouncilRegistration.bind(this);
        this.ConfirmMatch = this.ConfirmMatch.bind(this);
        this.SetProfileCard = this.SetProfileCard.bind(this);
        this.OpenBoosterPack = this.OpenBoosterPack.bind(this);
        this.TransferBoosterPack = this.TransferBoosterPack.bind(this);
        this.SetCollectionStoryWriter = this.SetCollectionStoryWriter.bind(this);
        this.SetCollectionArtist = this.SetCollectionArtist.bind(this);
        this.SetUserWebsite = this.SetUserWebsite.bind(this);
        this.SetUserBiography = this.SetUserBiography.bind(this);
    }
    Createuser(request) {
        const data = MsgCreateuser.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "Createuser", data);
        return promise.then((data) => MsgCreateuserResponse.decode(new _m0.Reader(data)));
    }
    BuyCardScheme(request) {
        const data = MsgBuyCardScheme.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyCardScheme", data);
        return promise.then((data) => MsgBuyCardSchemeResponse.decode(new _m0.Reader(data)));
    }
    VoteCard(request) {
        const data = MsgVoteCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "VoteCard", data);
        return promise.then((data) => MsgVoteCardResponse.decode(new _m0.Reader(data)));
    }
    SaveCardContent(request) {
        const data = MsgSaveCardContent.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SaveCardContent", data);
        return promise.then((data) => MsgSaveCardContentResponse.decode(new _m0.Reader(data)));
    }
    TransferCard(request) {
        const data = MsgTransferCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "TransferCard", data);
        return promise.then((data) => MsgTransferCardResponse.decode(new _m0.Reader(data)));
    }
    DonateToCard(request) {
        const data = MsgDonateToCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "DonateToCard", data);
        return promise.then((data) => MsgDonateToCardResponse.decode(new _m0.Reader(data)));
    }
    AddArtwork(request) {
        const data = MsgAddArtwork.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddArtwork", data);
        return promise.then((data) => MsgAddArtworkResponse.decode(new _m0.Reader(data)));
    }
    SubmitCopyrightProposal(request) {
        const data = MsgSubmitCopyrightProposal.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SubmitCopyrightProposal", data);
        return promise.then((data) => MsgSubmitCopyrightProposalResponse.decode(new _m0.Reader(data)));
    }
    ChangeArtist(request) {
        const data = MsgChangeArtist.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ChangeArtist", data);
        return promise.then((data) => MsgChangeArtistResponse.decode(new _m0.Reader(data)));
    }
    RegisterForCouncil(request) {
        const data = MsgRegisterForCouncil.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RegisterForCouncil", data);
        return promise.then((data) => MsgRegisterForCouncilResponse.decode(new _m0.Reader(data)));
    }
    ReportMatch(request) {
        const data = MsgReportMatch.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ReportMatch", data);
        return promise.then((data) => MsgReportMatchResponse.decode(new _m0.Reader(data)));
    }
    SubmitMatchReporterProposal(request) {
        const data = MsgSubmitMatchReporterProposal.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SubmitMatchReporterProposal", data);
        return promise.then((data) => MsgSubmitMatchReporterProposalResponse.decode(new _m0.Reader(data)));
    }
    ApointMatchReporter(request) {
        const data = MsgApointMatchReporter.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ApointMatchReporter", data);
        return promise.then((data) => MsgApointMatchReporterResponse.decode(new _m0.Reader(data)));
    }
    CreateCollection(request) {
        const data = MsgCreateCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateCollection", data);
        return promise.then((data) => MsgCreateCollectionResponse.decode(new _m0.Reader(data)));
    }
    AddCardToCollection(request) {
        const data = MsgAddCardToCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddCardToCollection", data);
        return promise.then((data) => MsgAddCardToCollectionResponse.decode(new _m0.Reader(data)));
    }
    FinalizeCollection(request) {
        const data = MsgFinalizeCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "FinalizeCollection", data);
        return promise.then((data) => MsgFinalizeCollectionResponse.decode(new _m0.Reader(data)));
    }
    BuyCollection(request) {
        const data = MsgBuyCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyCollection", data);
        return promise.then((data) => MsgBuyCollectionResponse.decode(new _m0.Reader(data)));
    }
    RemoveCardFromCollection(request) {
        const data = MsgRemoveCardFromCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveCardFromCollection", data);
        return promise.then((data) => MsgRemoveCardFromCollectionResponse.decode(new _m0.Reader(data)));
    }
    RemoveContributorFromCollection(request) {
        const data = MsgRemoveContributorFromCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveContributorFromCollection", data);
        return promise.then((data) => MsgRemoveContributorFromCollectionResponse.decode(new _m0.Reader(data)));
    }
    AddContributorToCollection(request) {
        const data = MsgAddContributorToCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddContributorToCollection", data);
        return promise.then((data) => MsgAddContributorToCollectionResponse.decode(new _m0.Reader(data)));
    }
    SubmitCollectionProposal(request) {
        const data = MsgSubmitCollectionProposal.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SubmitCollectionProposal", data);
        return promise.then((data) => MsgSubmitCollectionProposalResponse.decode(new _m0.Reader(data)));
    }
    CreateSellOffer(request) {
        const data = MsgCreateSellOffer.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateSellOffer", data);
        return promise.then((data) => MsgCreateSellOfferResponse.decode(new _m0.Reader(data)));
    }
    BuyCard(request) {
        const data = MsgBuyCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyCard", data);
        return promise.then((data) => MsgBuyCardResponse.decode(new _m0.Reader(data)));
    }
    RemoveSellOffer(request) {
        const data = MsgRemoveSellOffer.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveSellOffer", data);
        return promise.then((data) => MsgRemoveSellOfferResponse.decode(new _m0.Reader(data)));
    }
    AddArtworkToCollection(request) {
        const data = MsgAddArtworkToCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddArtworkToCollection", data);
        return promise.then((data) => MsgAddArtworkToCollectionResponse.decode(new _m0.Reader(data)));
    }
    AddStoryToCollection(request) {
        const data = MsgAddStoryToCollection.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddStoryToCollection", data);
        return promise.then((data) => MsgAddStoryToCollectionResponse.decode(new _m0.Reader(data)));
    }
    SetCardRarity(request) {
        const data = MsgSetCardRarity.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetCardRarity", data);
        return promise.then((data) => MsgSetCardRarityResponse.decode(new _m0.Reader(data)));
    }
    CreateCouncil(request) {
        const data = MsgCreateCouncil.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateCouncil", data);
        return promise.then((data) => MsgCreateCouncilResponse.decode(new _m0.Reader(data)));
    }
    CommitCouncilResponse(request) {
        const data = MsgCommitCouncilResponse.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CommitCouncilResponse", data);
        return promise.then((data) => MsgCommitCouncilResponseResponse.decode(new _m0.Reader(data)));
    }
    RevealCouncilResponse(request) {
        const data = MsgRevealCouncilResponse.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RevealCouncilResponse", data);
        return promise.then((data) => MsgRevealCouncilResponseResponse.decode(new _m0.Reader(data)));
    }
    RestartCouncil(request) {
        const data = MsgRestartCouncil.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RestartCouncil", data);
        return promise.then((data) => MsgRestartCouncilResponse.decode(new _m0.Reader(data)));
    }
    RewokeCouncilRegistration(request) {
        const data = MsgRewokeCouncilRegistration.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RewokeCouncilRegistration", data);
        return promise.then((data) => MsgRewokeCouncilRegistrationResponse.decode(new _m0.Reader(data)));
    }
    ConfirmMatch(request) {
        const data = MsgConfirmMatch.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ConfirmMatch", data);
        return promise.then((data) => MsgConfirmMatchResponse.decode(new _m0.Reader(data)));
    }
    SetProfileCard(request) {
        const data = MsgSetProfileCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetProfileCard", data);
        return promise.then((data) => MsgSetProfileCardResponse.decode(new _m0.Reader(data)));
    }
    OpenBoosterPack(request) {
        const data = MsgOpenBoosterPack.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "OpenBoosterPack", data);
        return promise.then((data) => MsgOpenBoosterPackResponse.decode(new _m0.Reader(data)));
    }
    TransferBoosterPack(request) {
        const data = MsgTransferBoosterPack.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "TransferBoosterPack", data);
        return promise.then((data) => MsgTransferBoosterPackResponse.decode(new _m0.Reader(data)));
    }
    SetCollectionStoryWriter(request) {
        const data = MsgSetCollectionStoryWriter.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetCollectionStoryWriter", data);
        return promise.then((data) => MsgSetCollectionStoryWriterResponse.decode(new _m0.Reader(data)));
    }
    SetCollectionArtist(request) {
        const data = MsgSetCollectionArtist.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetCollectionArtist", data);
        return promise.then((data) => MsgSetCollectionArtistResponse.decode(new _m0.Reader(data)));
    }
    SetUserWebsite(request) {
        const data = MsgSetUserWebsite.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetUserWebsite", data);
        return promise.then((data) => MsgSetUserWebsiteResponse.decode(new _m0.Reader(data)));
    }
    SetUserBiography(request) {
        const data = MsgSetUserBiography.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetUserBiography", data);
        return promise.then((data) => MsgSetUserBiographyResponse.decode(new _m0.Reader(data)));
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
