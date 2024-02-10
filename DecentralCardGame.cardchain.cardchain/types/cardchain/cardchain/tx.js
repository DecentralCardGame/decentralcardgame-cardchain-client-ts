/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { cardRarityFromJSON, cardRarityToJSON } from "./card";
import { responseFromJSON, responseToJSON } from "./council";
import { outcomeFromJSON, outcomeToJSON } from "./match";
import { SingleVote, voteTypeFromJSON, voteTypeToJSON } from "./voting";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
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
    return { creator: "", bid: undefined };
}
export const MsgBuyCardScheme = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.bid !== undefined) {
            Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
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
                    message.bid = Coin.decode(reader, reader.uint32());
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
            bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.bid !== undefined && (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCardScheme();
        message.creator = object.creator ?? "";
        message.bid = (object.bid !== undefined && object.bid !== null) ? Coin.fromPartial(object.bid) : undefined;
        return message;
    },
};
function createBaseMsgBuyCardSchemeResponse() {
    return { cardId: 0 };
}
export const MsgBuyCardSchemeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyCardSchemeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { cardId: isSet(object.cardId) ? Number(object.cardId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyCardSchemeResponse();
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgVoteCard() {
    return { creator: "", cardId: 0, voteType: 0 };
}
export const MsgVoteCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.voteType !== 0) {
            writer.uint32(24).int32(message.voteType);
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.voteType !== undefined && (obj.voteType = voteTypeToJSON(message.voteType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteCard();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.voteType = object.voteType ?? 0;
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
    return { creator: "", cardId: 0, content: new Uint8Array(), notes: "", artist: "", balanceAnchor: false };
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
        if (message.balanceAnchor === true) {
            writer.uint32(48).bool(message.balanceAnchor);
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
                case 6:
                    message.balanceAnchor = reader.bool();
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
            balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
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
        message.balanceAnchor !== undefined && (obj.balanceAnchor = message.balanceAnchor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSaveCardContent();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.content = object.content ?? new Uint8Array();
        message.notes = object.notes ?? "";
        message.artist = object.artist ?? "";
        message.balanceAnchor = object.balanceAnchor ?? false;
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
    return { creator: "", matchId: 0, playedCardsA: [], playedCardsB: [], outcome: 0 };
}
export const MsgReportMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.matchId !== 0) {
            writer.uint32(16).uint64(message.matchId);
        }
        writer.uint32(26).fork();
        for (const v of message.playedCardsA) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.playedCardsB) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.outcome !== 0) {
            writer.uint32(40).int32(message.outcome);
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
                    message.matchId = longToNumber(reader.uint64());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.playedCardsA.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.playedCardsA.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.playedCardsB.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.playedCardsB.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 5:
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
            playedCardsA: Array.isArray(object?.playedCardsA) ? object.playedCardsA.map((e) => Number(e)) : [],
            playedCardsB: Array.isArray(object?.playedCardsB) ? object.playedCardsB.map((e) => Number(e)) : [],
            outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
        if (message.playedCardsA) {
            obj.playedCardsA = message.playedCardsA.map((e) => Math.round(e));
        }
        else {
            obj.playedCardsA = [];
        }
        if (message.playedCardsB) {
            obj.playedCardsB = message.playedCardsB.map((e) => Math.round(e));
        }
        else {
            obj.playedCardsB = [];
        }
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgReportMatch();
        message.creator = object.creator ?? "";
        message.matchId = object.matchId ?? 0;
        message.playedCardsA = object.playedCardsA?.map((e) => e) || [];
        message.playedCardsB = object.playedCardsB?.map((e) => e) || [];
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
function createBaseMsgCreateSet() {
    return { creator: "", name: "", artist: "", storyWriter: "", contributors: [] };
}
export const MsgCreateSet = {
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
        const message = createBaseMsgCreateSet();
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
        const message = createBaseMsgCreateSet();
        message.creator = object.creator ?? "";
        message.name = object.name ?? "";
        message.artist = object.artist ?? "";
        message.storyWriter = object.storyWriter ?? "";
        message.contributors = object.contributors?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgCreateSetResponse() {
    return {};
}
export const MsgCreateSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSetResponse();
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
        const message = createBaseMsgCreateSetResponse();
        return message;
    },
};
function createBaseMsgAddCardToSet() {
    return { creator: "", setId: 0, cardId: 0 };
}
export const MsgAddCardToSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.cardId !== 0) {
            writer.uint32(24).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCardToSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddCardToSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgAddCardToSetResponse() {
    return {};
}
export const MsgAddCardToSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCardToSetResponse();
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
        const message = createBaseMsgAddCardToSetResponse();
        return message;
    },
};
function createBaseMsgFinalizeSet() {
    return { creator: "", setId: 0 };
}
export const MsgFinalizeSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFinalizeSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFinalizeSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseMsgFinalizeSetResponse() {
    return {};
}
export const MsgFinalizeSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFinalizeSetResponse();
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
        const message = createBaseMsgFinalizeSetResponse();
        return message;
    },
};
function createBaseMsgBuyBoosterPack() {
    return { creator: "", setId: 0 };
}
export const MsgBuyBoosterPack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyBoosterPack();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyBoosterPack();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseMsgBuyBoosterPackResponse() {
    return { airdropClaimed: false };
}
export const MsgBuyBoosterPackResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropClaimed === true) {
            writer.uint32(8).bool(message.airdropClaimed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyBoosterPackResponse();
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
        const message = createBaseMsgBuyBoosterPackResponse();
        message.airdropClaimed = object.airdropClaimed ?? false;
        return message;
    },
};
function createBaseMsgRemoveCardFromSet() {
    return { creator: "", setId: 0, cardId: 0 };
}
export const MsgRemoveCardFromSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.cardId !== 0) {
            writer.uint32(24).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCardFromSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveCardFromSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseMsgRemoveCardFromSetResponse() {
    return {};
}
export const MsgRemoveCardFromSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCardFromSetResponse();
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
        const message = createBaseMsgRemoveCardFromSetResponse();
        return message;
    },
};
function createBaseMsgRemoveContributorFromSet() {
    return { creator: "", setId: 0, user: "" };
}
export const MsgRemoveContributorFromSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveContributorFromSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            user: isSet(object.user) ? String(object.user) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.user !== undefined && (obj.user = message.user);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveContributorFromSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.user = object.user ?? "";
        return message;
    },
};
function createBaseMsgRemoveContributorFromSetResponse() {
    return {};
}
export const MsgRemoveContributorFromSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveContributorFromSetResponse();
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
        const message = createBaseMsgRemoveContributorFromSetResponse();
        return message;
    },
};
function createBaseMsgAddContributorToSet() {
    return { creator: "", setId: 0, user: "" };
}
export const MsgAddContributorToSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddContributorToSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            user: isSet(object.user) ? String(object.user) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.user !== undefined && (obj.user = message.user);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddContributorToSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.user = object.user ?? "";
        return message;
    },
};
function createBaseMsgAddContributorToSetResponse() {
    return {};
}
export const MsgAddContributorToSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddContributorToSetResponse();
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
        const message = createBaseMsgAddContributorToSetResponse();
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
function createBaseMsgAddArtworkToSet() {
    return { creator: "", setId: 0, image: new Uint8Array() };
}
export const MsgAddArtworkToSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.image.length !== 0) {
            writer.uint32(26).bytes(message.image);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtworkToSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.image !== undefined
            && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddArtworkToSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.image = object.image ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgAddArtworkToSetResponse() {
    return {};
}
export const MsgAddArtworkToSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddArtworkToSetResponse();
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
        const message = createBaseMsgAddArtworkToSetResponse();
        return message;
    },
};
function createBaseMsgAddStoryToSet() {
    return { creator: "", setId: 0, story: "" };
}
export const MsgAddStoryToSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.story !== "") {
            writer.uint32(26).string(message.story);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddStoryToSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            story: isSet(object.story) ? String(object.story) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.story !== undefined && (obj.story = message.story);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddStoryToSet();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.story = object.story ?? "";
        return message;
    },
};
function createBaseMsgAddStoryToSetResponse() {
    return {};
}
export const MsgAddStoryToSetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddStoryToSetResponse();
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
        const message = createBaseMsgAddStoryToSetResponse();
        return message;
    },
};
function createBaseMsgSetCardRarity() {
    return { creator: "", cardId: 0, setId: 0, rarity: 0 };
}
export const MsgSetCardRarity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.cardId !== 0) {
            writer.uint32(16).uint64(message.cardId);
        }
        if (message.setId !== 0) {
            writer.uint32(24).uint64(message.setId);
        }
        if (message.rarity !== 0) {
            writer.uint32(32).int32(message.rarity);
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
                    message.setId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.rarity = reader.int32();
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.rarity !== undefined && (obj.rarity = cardRarityToJSON(message.rarity));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetCardRarity();
        message.creator = object.creator ?? "";
        message.cardId = object.cardId ?? 0;
        message.setId = object.setId ?? 0;
        message.rarity = object.rarity ?? 0;
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
    return { creator: "", matchId: 0, outcome: 0, votedCards: [] };
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
        for (const v of message.votedCards) {
            SingleVote.encode(v, writer.uint32(34).fork()).ldelim();
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
                case 4:
                    message.votedCards.push(SingleVote.decode(reader, reader.uint32()));
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
            votedCards: Array.isArray(object?.votedCards) ? object.votedCards.map((e) => SingleVote.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        if (message.votedCards) {
            obj.votedCards = message.votedCards.map((e) => e ? SingleVote.toJSON(e) : undefined);
        }
        else {
            obj.votedCards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConfirmMatch();
        message.creator = object.creator ?? "";
        message.matchId = object.matchId ?? 0;
        message.outcome = object.outcome ?? 0;
        message.votedCards = object.votedCards?.map((e) => SingleVote.fromPartial(e)) || [];
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
    return { cardIds: [] };
}
export const MsgOpenBoosterPackResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.cardIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBoosterPackResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardIds.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardIds.push(longToNumber(reader.uint64()));
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
        return { cardIds: Array.isArray(object?.cardIds) ? object.cardIds.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.cardIds) {
            obj.cardIds = message.cardIds.map((e) => Math.round(e));
        }
        else {
            obj.cardIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgOpenBoosterPackResponse();
        message.cardIds = object.cardIds?.map((e) => e) || [];
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
function createBaseMsgSetSetStoryWriter() {
    return { creator: "", setId: 0, storyWriter: "" };
}
export const MsgSetSetStoryWriter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.storyWriter !== "") {
            writer.uint32(26).string(message.storyWriter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetStoryWriter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.storyWriter !== undefined && (obj.storyWriter = message.storyWriter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetSetStoryWriter();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.storyWriter = object.storyWriter ?? "";
        return message;
    },
};
function createBaseMsgSetSetStoryWriterResponse() {
    return {};
}
export const MsgSetSetStoryWriterResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetStoryWriterResponse();
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
        const message = createBaseMsgSetSetStoryWriterResponse();
        return message;
    },
};
function createBaseMsgSetSetArtist() {
    return { creator: "", setId: 0, artist: "" };
}
export const MsgSetSetArtist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.artist !== "") {
            writer.uint32(26).string(message.artist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetArtist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
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
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            artist: isSet(object.artist) ? String(object.artist) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.artist !== undefined && (obj.artist = message.artist);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetSetArtist();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.artist = object.artist ?? "";
        return message;
    },
};
function createBaseMsgSetSetArtistResponse() {
    return {};
}
export const MsgSetSetArtistResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetArtistResponse();
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
        const message = createBaseMsgSetSetArtistResponse();
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
function createBaseMsgMultiVoteCard() {
    return { creator: "", votes: [] };
}
export const MsgMultiVoteCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.votes) {
            SingleVote.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiVoteCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.votes.push(SingleVote.decode(reader, reader.uint32()));
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => SingleVote.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? SingleVote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiVoteCard();
        message.creator = object.creator ?? "";
        message.votes = object.votes?.map((e) => SingleVote.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgMultiVoteCardResponse() {
    return {};
}
export const MsgMultiVoteCardResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiVoteCardResponse();
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
        const message = createBaseMsgMultiVoteCardResponse();
        return message;
    },
};
function createBaseMsgOpenMatch() {
    return { creator: "", playerA: "", playerB: "", playerADeck: [], playerBDeck: [] };
}
export const MsgOpenMatch = {
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
        writer.uint32(34).fork();
        for (const v of message.playerADeck) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.playerBDeck) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenMatch();
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
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.playerADeck.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.playerADeck.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.playerBDeck.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.playerBDeck.push(longToNumber(reader.uint64()));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            playerA: isSet(object.playerA) ? String(object.playerA) : "",
            playerB: isSet(object.playerB) ? String(object.playerB) : "",
            playerADeck: Array.isArray(object?.playerADeck) ? object.playerADeck.map((e) => Number(e)) : [],
            playerBDeck: Array.isArray(object?.playerBDeck) ? object.playerBDeck.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.playerA !== undefined && (obj.playerA = message.playerA);
        message.playerB !== undefined && (obj.playerB = message.playerB);
        if (message.playerADeck) {
            obj.playerADeck = message.playerADeck.map((e) => Math.round(e));
        }
        else {
            obj.playerADeck = [];
        }
        if (message.playerBDeck) {
            obj.playerBDeck = message.playerBDeck.map((e) => Math.round(e));
        }
        else {
            obj.playerBDeck = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgOpenMatch();
        message.creator = object.creator ?? "";
        message.playerA = object.playerA ?? "";
        message.playerB = object.playerB ?? "";
        message.playerADeck = object.playerADeck?.map((e) => e) || [];
        message.playerBDeck = object.playerBDeck?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgOpenMatchResponse() {
    return { matchId: 0 };
}
export const MsgOpenMatchResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.matchId !== 0) {
            writer.uint32(8).uint64(message.matchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenMatchResponse();
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
        const message = createBaseMsgOpenMatchResponse();
        message.matchId = object.matchId ?? 0;
        return message;
    },
};
function createBaseMsgSetSetName() {
    return { creator: "", setId: 0, name: "" };
}
export const MsgSetSetName = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.setId !== 0) {
            writer.uint32(16).uint64(message.setId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetName();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.setId = longToNumber(reader.uint64());
                    break;
                case 3:
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            setId: isSet(object.setId) ? Number(object.setId) : 0,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetSetName();
        message.creator = object.creator ?? "";
        message.setId = object.setId ?? 0;
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseMsgSetSetNameResponse() {
    return {};
}
export const MsgSetSetNameResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetSetNameResponse();
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
        const message = createBaseMsgSetSetNameResponse();
        return message;
    },
};
function createBaseMsgChangeAlias() {
    return { creator: "", alias: "" };
}
export const MsgChangeAlias = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.alias !== "") {
            writer.uint32(18).string(message.alias);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAlias();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
            alias: isSet(object.alias) ? String(object.alias) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.alias !== undefined && (obj.alias = message.alias);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAlias();
        message.creator = object.creator ?? "";
        message.alias = object.alias ?? "";
        return message;
    },
};
function createBaseMsgChangeAliasResponse() {
    return {};
}
export const MsgChangeAliasResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAliasResponse();
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
        const message = createBaseMsgChangeAliasResponse();
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
        this.ChangeArtist = this.ChangeArtist.bind(this);
        this.RegisterForCouncil = this.RegisterForCouncil.bind(this);
        this.ReportMatch = this.ReportMatch.bind(this);
        this.ApointMatchReporter = this.ApointMatchReporter.bind(this);
        this.CreateSet = this.CreateSet.bind(this);
        this.AddCardToSet = this.AddCardToSet.bind(this);
        this.FinalizeSet = this.FinalizeSet.bind(this);
        this.BuyBoosterPack = this.BuyBoosterPack.bind(this);
        this.RemoveCardFromSet = this.RemoveCardFromSet.bind(this);
        this.RemoveContributorFromSet = this.RemoveContributorFromSet.bind(this);
        this.AddContributorToSet = this.AddContributorToSet.bind(this);
        this.CreateSellOffer = this.CreateSellOffer.bind(this);
        this.BuyCard = this.BuyCard.bind(this);
        this.RemoveSellOffer = this.RemoveSellOffer.bind(this);
        this.AddArtworkToSet = this.AddArtworkToSet.bind(this);
        this.AddStoryToSet = this.AddStoryToSet.bind(this);
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
        this.SetSetStoryWriter = this.SetSetStoryWriter.bind(this);
        this.SetSetArtist = this.SetSetArtist.bind(this);
        this.SetUserWebsite = this.SetUserWebsite.bind(this);
        this.SetUserBiography = this.SetUserBiography.bind(this);
        this.MultiVoteCard = this.MultiVoteCard.bind(this);
        this.OpenMatch = this.OpenMatch.bind(this);
        this.SetSetName = this.SetSetName.bind(this);
        this.ChangeAlias = this.ChangeAlias.bind(this);
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
    ApointMatchReporter(request) {
        const data = MsgApointMatchReporter.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ApointMatchReporter", data);
        return promise.then((data) => MsgApointMatchReporterResponse.decode(new _m0.Reader(data)));
    }
    CreateSet(request) {
        const data = MsgCreateSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateSet", data);
        return promise.then((data) => MsgCreateSetResponse.decode(new _m0.Reader(data)));
    }
    AddCardToSet(request) {
        const data = MsgAddCardToSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddCardToSet", data);
        return promise.then((data) => MsgAddCardToSetResponse.decode(new _m0.Reader(data)));
    }
    FinalizeSet(request) {
        const data = MsgFinalizeSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "FinalizeSet", data);
        return promise.then((data) => MsgFinalizeSetResponse.decode(new _m0.Reader(data)));
    }
    BuyBoosterPack(request) {
        const data = MsgBuyBoosterPack.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyBoosterPack", data);
        return promise.then((data) => MsgBuyBoosterPackResponse.decode(new _m0.Reader(data)));
    }
    RemoveCardFromSet(request) {
        const data = MsgRemoveCardFromSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveCardFromSet", data);
        return promise.then((data) => MsgRemoveCardFromSetResponse.decode(new _m0.Reader(data)));
    }
    RemoveContributorFromSet(request) {
        const data = MsgRemoveContributorFromSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveContributorFromSet", data);
        return promise.then((data) => MsgRemoveContributorFromSetResponse.decode(new _m0.Reader(data)));
    }
    AddContributorToSet(request) {
        const data = MsgAddContributorToSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddContributorToSet", data);
        return promise.then((data) => MsgAddContributorToSetResponse.decode(new _m0.Reader(data)));
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
    AddArtworkToSet(request) {
        const data = MsgAddArtworkToSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddArtworkToSet", data);
        return promise.then((data) => MsgAddArtworkToSetResponse.decode(new _m0.Reader(data)));
    }
    AddStoryToSet(request) {
        const data = MsgAddStoryToSet.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddStoryToSet", data);
        return promise.then((data) => MsgAddStoryToSetResponse.decode(new _m0.Reader(data)));
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
    SetSetStoryWriter(request) {
        const data = MsgSetSetStoryWriter.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetStoryWriter", data);
        return promise.then((data) => MsgSetSetStoryWriterResponse.decode(new _m0.Reader(data)));
    }
    SetSetArtist(request) {
        const data = MsgSetSetArtist.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetArtist", data);
        return promise.then((data) => MsgSetSetArtistResponse.decode(new _m0.Reader(data)));
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
    MultiVoteCard(request) {
        const data = MsgMultiVoteCard.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "MultiVoteCard", data);
        return promise.then((data) => MsgMultiVoteCardResponse.decode(new _m0.Reader(data)));
    }
    OpenMatch(request) {
        const data = MsgOpenMatch.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "OpenMatch", data);
        return promise.then((data) => MsgOpenMatchResponse.decode(new _m0.Reader(data)));
    }
    SetSetName(request) {
        const data = MsgSetSetName.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetName", data);
        return promise.then((data) => MsgSetSetNameResponse.decode(new _m0.Reader(data)));
    }
    ChangeAlias(request) {
        const data = MsgChangeAlias.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ChangeAlias", data);
        return promise.then((data) => MsgChangeAliasResponse.decode(new _m0.Reader(data)));
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
