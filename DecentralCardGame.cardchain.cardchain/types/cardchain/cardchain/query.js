/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { cardClassFromJSON, cardClassToJSON, cardRarityFromJSON, cardRarityToJSON, cardTypeFromJSON, cardTypeToJSON, OutpCard, statusFromJSON, statusToJSON, } from "./card";
import { Council } from "./council";
import { Encounter, EncounterWithImage } from "./encounters";
import { Match, outcomeFromJSON, outcomeToJSON } from "./match";
import { Params } from "./params";
import { SellOffer, sellOfferStatusFromJSON, sellOfferStatusToJSON } from "./sell_offer";
import { Server } from "./server";
import { cStatusFromJSON, cStatusToJSON, OutpSet } from "./set";
import { User } from "./user";
import { VotingResults } from "./voting";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
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
function createBaseQueryQCardRequest() {
    return { cardId: "" };
}
export const QueryQCardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== "") {
            writer.uint32(10).string(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { cardId: isSet(object.cardId) ? String(object.cardId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = message.cardId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardRequest();
        message.cardId = object.cardId ?? "";
        return message;
    },
};
function createBaseQueryQCardContentRequest() {
    return { cardId: 0 };
}
export const QueryQCardContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardContentRequest();
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
        const message = createBaseQueryQCardContentRequest();
        message.cardId = object.cardId ?? 0;
        return message;
    },
};
function createBaseQueryQCardContentResponse() {
    return { content: "", hash: "" };
}
export const QueryQCardContentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== "") {
            writer.uint32(10).string(message.content);
        }
        if (message.hash !== "") {
            writer.uint32(18).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardContentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
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
        return {
            content: isSet(object.content) ? String(object.content) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content);
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardContentResponse();
        message.content = object.content ?? "";
        message.hash = object.hash ?? "";
        return message;
    },
};
function createBaseQueryQUserRequest() {
    return { address: "" };
}
export const QueryQUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQUserRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryQCardchainInfoRequest() {
    return {};
}
export const QueryQCardchainInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardchainInfoRequest();
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
        const message = createBaseQueryQCardchainInfoRequest();
        return message;
    },
};
function createBaseQueryQCardchainInfoResponse() {
    return {
        cardAuctionPrice: "",
        activeSets: [],
        cardsNumber: 0,
        matchesNumber: 0,
        sellOffersNumber: 0,
        councilsNumber: 0,
        lastCardModified: 0,
    };
}
export const QueryQCardchainInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardAuctionPrice !== "") {
            writer.uint32(10).string(message.cardAuctionPrice);
        }
        writer.uint32(18).fork();
        for (const v of message.activeSets) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.cardsNumber !== 0) {
            writer.uint32(24).uint64(message.cardsNumber);
        }
        if (message.matchesNumber !== 0) {
            writer.uint32(32).uint64(message.matchesNumber);
        }
        if (message.sellOffersNumber !== 0) {
            writer.uint32(40).uint64(message.sellOffersNumber);
        }
        if (message.councilsNumber !== 0) {
            writer.uint32(48).uint64(message.councilsNumber);
        }
        if (message.lastCardModified !== 0) {
            writer.uint32(56).uint64(message.lastCardModified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardchainInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardAuctionPrice = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.activeSets.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.activeSets.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 3:
                    message.cardsNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.matchesNumber = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sellOffersNumber = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.councilsNumber = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.lastCardModified = longToNumber(reader.uint64());
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
            cardAuctionPrice: isSet(object.cardAuctionPrice) ? String(object.cardAuctionPrice) : "",
            activeSets: Array.isArray(object?.activeSets) ? object.activeSets.map((e) => Number(e)) : [],
            cardsNumber: isSet(object.cardsNumber) ? Number(object.cardsNumber) : 0,
            matchesNumber: isSet(object.matchesNumber) ? Number(object.matchesNumber) : 0,
            sellOffersNumber: isSet(object.sellOffersNumber) ? Number(object.sellOffersNumber) : 0,
            councilsNumber: isSet(object.councilsNumber) ? Number(object.councilsNumber) : 0,
            lastCardModified: isSet(object.lastCardModified) ? Number(object.lastCardModified) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardAuctionPrice !== undefined && (obj.cardAuctionPrice = message.cardAuctionPrice);
        if (message.activeSets) {
            obj.activeSets = message.activeSets.map((e) => Math.round(e));
        }
        else {
            obj.activeSets = [];
        }
        message.cardsNumber !== undefined && (obj.cardsNumber = Math.round(message.cardsNumber));
        message.matchesNumber !== undefined && (obj.matchesNumber = Math.round(message.matchesNumber));
        message.sellOffersNumber !== undefined && (obj.sellOffersNumber = Math.round(message.sellOffersNumber));
        message.councilsNumber !== undefined && (obj.councilsNumber = Math.round(message.councilsNumber));
        message.lastCardModified !== undefined && (obj.lastCardModified = Math.round(message.lastCardModified));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardchainInfoResponse();
        message.cardAuctionPrice = object.cardAuctionPrice ?? "";
        message.activeSets = object.activeSets?.map((e) => e) || [];
        message.cardsNumber = object.cardsNumber ?? 0;
        message.matchesNumber = object.matchesNumber ?? 0;
        message.sellOffersNumber = object.sellOffersNumber ?? 0;
        message.councilsNumber = object.councilsNumber ?? 0;
        message.lastCardModified = object.lastCardModified ?? 0;
        return message;
    },
};
function createBaseQueryQVotingResultsRequest() {
    return {};
}
export const QueryQVotingResultsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotingResultsRequest();
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
        const message = createBaseQueryQVotingResultsRequest();
        return message;
    },
};
function createBaseQueryQVotingResultsResponse() {
    return { lastVotingResults: undefined };
}
export const QueryQVotingResultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lastVotingResults !== undefined) {
            VotingResults.encode(message.lastVotingResults, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotingResultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastVotingResults = VotingResults.decode(reader, reader.uint32());
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
            lastVotingResults: isSet(object.lastVotingResults) ? VotingResults.fromJSON(object.lastVotingResults) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastVotingResults !== undefined && (obj.lastVotingResults = message.lastVotingResults
            ? VotingResults.toJSON(message.lastVotingResults)
            : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQVotingResultsResponse();
        message.lastVotingResults = (object.lastVotingResults !== undefined && object.lastVotingResults !== null)
            ? VotingResults.fromPartial(object.lastVotingResults)
            : undefined;
        return message;
    },
};
function createBaseQueryQCardsRequest() {
    return {
        owner: "",
        statuses: [],
        cardTypes: [],
        classes: [],
        sortBy: "",
        nameContains: "",
        keywordsContains: "",
        notesContains: "",
        onlyStarterCard: false,
        onlyBalanceAnchors: false,
        rarities: [],
        multiClassOnly: false,
    };
}
export const QueryQCardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.statuses) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.cardTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.classes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sortBy !== "") {
            writer.uint32(42).string(message.sortBy);
        }
        if (message.nameContains !== "") {
            writer.uint32(50).string(message.nameContains);
        }
        if (message.keywordsContains !== "") {
            writer.uint32(58).string(message.keywordsContains);
        }
        if (message.notesContains !== "") {
            writer.uint32(66).string(message.notesContains);
        }
        if (message.onlyStarterCard === true) {
            writer.uint32(72).bool(message.onlyStarterCard);
        }
        if (message.onlyBalanceAnchors === true) {
            writer.uint32(80).bool(message.onlyBalanceAnchors);
        }
        writer.uint32(90).fork();
        for (const v of message.rarities) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.multiClassOnly === true) {
            writer.uint32(96).bool(message.multiClassOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.statuses.push(reader.int32());
                        }
                    }
                    else {
                        message.statuses.push(reader.int32());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.cardTypes.push(reader.int32());
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.classes.push(reader.int32());
                        }
                    }
                    else {
                        message.classes.push(reader.int32());
                    }
                    break;
                case 5:
                    message.sortBy = reader.string();
                    break;
                case 6:
                    message.nameContains = reader.string();
                    break;
                case 7:
                    message.keywordsContains = reader.string();
                    break;
                case 8:
                    message.notesContains = reader.string();
                    break;
                case 9:
                    message.onlyStarterCard = reader.bool();
                    break;
                case 10:
                    message.onlyBalanceAnchors = reader.bool();
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rarities.push(reader.int32());
                        }
                    }
                    else {
                        message.rarities.push(reader.int32());
                    }
                    break;
                case 12:
                    message.multiClassOnly = reader.bool();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            statuses: Array.isArray(object?.statuses) ? object.statuses.map((e) => statusFromJSON(e)) : [],
            cardTypes: Array.isArray(object?.cardTypes) ? object.cardTypes.map((e) => cardTypeFromJSON(e)) : [],
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => cardClassFromJSON(e)) : [],
            sortBy: isSet(object.sortBy) ? String(object.sortBy) : "",
            nameContains: isSet(object.nameContains) ? String(object.nameContains) : "",
            keywordsContains: isSet(object.keywordsContains) ? String(object.keywordsContains) : "",
            notesContains: isSet(object.notesContains) ? String(object.notesContains) : "",
            onlyStarterCard: isSet(object.onlyStarterCard) ? Boolean(object.onlyStarterCard) : false,
            onlyBalanceAnchors: isSet(object.onlyBalanceAnchors) ? Boolean(object.onlyBalanceAnchors) : false,
            rarities: Array.isArray(object?.rarities) ? object.rarities.map((e) => cardRarityFromJSON(e)) : [],
            multiClassOnly: isSet(object.multiClassOnly) ? Boolean(object.multiClassOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.statuses) {
            obj.statuses = message.statuses.map((e) => statusToJSON(e));
        }
        else {
            obj.statuses = [];
        }
        if (message.cardTypes) {
            obj.cardTypes = message.cardTypes.map((e) => cardTypeToJSON(e));
        }
        else {
            obj.cardTypes = [];
        }
        if (message.classes) {
            obj.classes = message.classes.map((e) => cardClassToJSON(e));
        }
        else {
            obj.classes = [];
        }
        message.sortBy !== undefined && (obj.sortBy = message.sortBy);
        message.nameContains !== undefined && (obj.nameContains = message.nameContains);
        message.keywordsContains !== undefined && (obj.keywordsContains = message.keywordsContains);
        message.notesContains !== undefined && (obj.notesContains = message.notesContains);
        message.onlyStarterCard !== undefined && (obj.onlyStarterCard = message.onlyStarterCard);
        message.onlyBalanceAnchors !== undefined && (obj.onlyBalanceAnchors = message.onlyBalanceAnchors);
        if (message.rarities) {
            obj.rarities = message.rarities.map((e) => cardRarityToJSON(e));
        }
        else {
            obj.rarities = [];
        }
        message.multiClassOnly !== undefined && (obj.multiClassOnly = message.multiClassOnly);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardsRequest();
        message.owner = object.owner ?? "";
        message.statuses = object.statuses?.map((e) => e) || [];
        message.cardTypes = object.cardTypes?.map((e) => e) || [];
        message.classes = object.classes?.map((e) => e) || [];
        message.sortBy = object.sortBy ?? "";
        message.nameContains = object.nameContains ?? "";
        message.keywordsContains = object.keywordsContains ?? "";
        message.notesContains = object.notesContains ?? "";
        message.onlyStarterCard = object.onlyStarterCard ?? false;
        message.onlyBalanceAnchors = object.onlyBalanceAnchors ?? false;
        message.rarities = object.rarities?.map((e) => e) || [];
        message.multiClassOnly = object.multiClassOnly ?? false;
        return message;
    },
};
function createBaseQueryQCardsResponse() {
    return { cardsList: [] };
}
export const QueryQCardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.cardsList) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsList.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsList.push(longToNumber(reader.uint64()));
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
        return { cardsList: Array.isArray(object?.cardsList) ? object.cardsList.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.cardsList) {
            obj.cardsList = message.cardsList.map((e) => Math.round(e));
        }
        else {
            obj.cardsList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardsResponse();
        message.cardsList = object.cardsList?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryQMatchRequest() {
    return { matchId: 0 };
}
export const QueryQMatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.matchId !== 0) {
            writer.uint32(8).uint64(message.matchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchRequest();
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
        const message = createBaseQueryQMatchRequest();
        message.matchId = object.matchId ?? 0;
        return message;
    },
};
function createBaseQueryQSetRequest() {
    return { setId: 0 };
}
export const QueryQSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.setId !== 0) {
            writer.uint32(8).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetRequest();
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseQueryQSellOfferRequest() {
    return { sellOfferId: 0 };
}
export const QueryQSellOfferRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sellOfferId !== 0) {
            writer.uint32(8).uint64(message.sellOfferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOfferRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOfferRequest();
        message.sellOfferId = object.sellOfferId ?? 0;
        return message;
    },
};
function createBaseQueryQCouncilRequest() {
    return { councilId: 0 };
}
export const QueryQCouncilRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.councilId !== 0) {
            writer.uint32(8).uint64(message.councilId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCouncilRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { councilId: isSet(object.councilId) ? Number(object.councilId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCouncilRequest();
        message.councilId = object.councilId ?? 0;
        return message;
    },
};
function createBaseQueryQMatchesRequest() {
    return {
        timestampDown: 0,
        timestampUp: 0,
        containsUsers: [],
        reporter: "",
        outcome: 0,
        cardsPlayed: [],
        ignore: undefined,
    };
}
export const QueryQMatchesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestampDown !== 0) {
            writer.uint32(8).uint64(message.timestampDown);
        }
        if (message.timestampUp !== 0) {
            writer.uint32(16).uint64(message.timestampUp);
        }
        for (const v of message.containsUsers) {
            writer.uint32(26).string(v);
        }
        if (message.reporter !== "") {
            writer.uint32(34).string(message.reporter);
        }
        if (message.outcome !== 0) {
            writer.uint32(40).int32(message.outcome);
        }
        writer.uint32(50).fork();
        for (const v of message.cardsPlayed) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.ignore !== undefined) {
            IgnoreMatches.encode(message.ignore, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestampDown = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.timestampUp = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.containsUsers.push(reader.string());
                    break;
                case 4:
                    message.reporter = reader.string();
                    break;
                case 5:
                    message.outcome = reader.int32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsPlayed.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsPlayed.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 7:
                    message.ignore = IgnoreMatches.decode(reader, reader.uint32());
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
            timestampDown: isSet(object.timestampDown) ? Number(object.timestampDown) : 0,
            timestampUp: isSet(object.timestampUp) ? Number(object.timestampUp) : 0,
            containsUsers: Array.isArray(object?.containsUsers) ? object.containsUsers.map((e) => String(e)) : [],
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
            outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
            cardsPlayed: Array.isArray(object?.cardsPlayed) ? object.cardsPlayed.map((e) => Number(e)) : [],
            ignore: isSet(object.ignore) ? IgnoreMatches.fromJSON(object.ignore) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestampDown !== undefined && (obj.timestampDown = Math.round(message.timestampDown));
        message.timestampUp !== undefined && (obj.timestampUp = Math.round(message.timestampUp));
        if (message.containsUsers) {
            obj.containsUsers = message.containsUsers.map((e) => e);
        }
        else {
            obj.containsUsers = [];
        }
        message.reporter !== undefined && (obj.reporter = message.reporter);
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        if (message.cardsPlayed) {
            obj.cardsPlayed = message.cardsPlayed.map((e) => Math.round(e));
        }
        else {
            obj.cardsPlayed = [];
        }
        message.ignore !== undefined && (obj.ignore = message.ignore ? IgnoreMatches.toJSON(message.ignore) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQMatchesRequest();
        message.timestampDown = object.timestampDown ?? 0;
        message.timestampUp = object.timestampUp ?? 0;
        message.containsUsers = object.containsUsers?.map((e) => e) || [];
        message.reporter = object.reporter ?? "";
        message.outcome = object.outcome ?? 0;
        message.cardsPlayed = object.cardsPlayed?.map((e) => e) || [];
        message.ignore = (object.ignore !== undefined && object.ignore !== null)
            ? IgnoreMatches.fromPartial(object.ignore)
            : undefined;
        return message;
    },
};
function createBaseIgnoreMatches() {
    return { outcome: false };
}
export const IgnoreMatches = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.outcome === true) {
            writer.uint32(8).bool(message.outcome);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIgnoreMatches();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outcome = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { outcome: isSet(object.outcome) ? Boolean(object.outcome) : false };
    },
    toJSON(message) {
        const obj = {};
        message.outcome !== undefined && (obj.outcome = message.outcome);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIgnoreMatches();
        message.outcome = object.outcome ?? false;
        return message;
    },
};
function createBaseQueryQMatchesResponse() {
    return { matchesList: [], matches: [] };
}
export const QueryQMatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.matchesList) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.matches) {
            Match.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.matchesList.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.matchesList.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.matches.push(Match.decode(reader, reader.uint32()));
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
            matchesList: Array.isArray(object?.matchesList) ? object.matchesList.map((e) => Number(e)) : [],
            matches: Array.isArray(object?.matches) ? object.matches.map((e) => Match.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.matchesList) {
            obj.matchesList = message.matchesList.map((e) => Math.round(e));
        }
        else {
            obj.matchesList = [];
        }
        if (message.matches) {
            obj.matches = message.matches.map((e) => e ? Match.toJSON(e) : undefined);
        }
        else {
            obj.matches = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQMatchesResponse();
        message.matchesList = object.matchesList?.map((e) => e) || [];
        message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQSellOffersRequest() {
    return { priceDown: "", priceUp: "", seller: "", buyer: "", card: 0, status: 0, ignore: undefined };
}
export const QueryQSellOffersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceDown !== "") {
            writer.uint32(10).string(message.priceDown);
        }
        if (message.priceUp !== "") {
            writer.uint32(18).string(message.priceUp);
        }
        if (message.seller !== "") {
            writer.uint32(26).string(message.seller);
        }
        if (message.buyer !== "") {
            writer.uint32(34).string(message.buyer);
        }
        if (message.card !== 0) {
            writer.uint32(40).uint64(message.card);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.ignore !== undefined) {
            IgnoreSellOffers.encode(message.ignore, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOffersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDown = reader.string();
                    break;
                case 2:
                    message.priceUp = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                case 4:
                    message.buyer = reader.string();
                    break;
                case 5:
                    message.card = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.ignore = IgnoreSellOffers.decode(reader, reader.uint32());
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
            priceDown: isSet(object.priceDown) ? String(object.priceDown) : "",
            priceUp: isSet(object.priceUp) ? String(object.priceUp) : "",
            seller: isSet(object.seller) ? String(object.seller) : "",
            buyer: isSet(object.buyer) ? String(object.buyer) : "",
            card: isSet(object.card) ? Number(object.card) : 0,
            status: isSet(object.status) ? sellOfferStatusFromJSON(object.status) : 0,
            ignore: isSet(object.ignore) ? IgnoreSellOffers.fromJSON(object.ignore) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceDown !== undefined && (obj.priceDown = message.priceDown);
        message.priceUp !== undefined && (obj.priceUp = message.priceUp);
        message.seller !== undefined && (obj.seller = message.seller);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        message.card !== undefined && (obj.card = Math.round(message.card));
        message.status !== undefined && (obj.status = sellOfferStatusToJSON(message.status));
        message.ignore !== undefined && (obj.ignore = message.ignore ? IgnoreSellOffers.toJSON(message.ignore) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOffersRequest();
        message.priceDown = object.priceDown ?? "";
        message.priceUp = object.priceUp ?? "";
        message.seller = object.seller ?? "";
        message.buyer = object.buyer ?? "";
        message.card = object.card ?? 0;
        message.status = object.status ?? 0;
        message.ignore = (object.ignore !== undefined && object.ignore !== null)
            ? IgnoreSellOffers.fromPartial(object.ignore)
            : undefined;
        return message;
    },
};
function createBaseIgnoreSellOffers() {
    return { status: false, card: false };
}
export const IgnoreSellOffers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status === true) {
            writer.uint32(8).bool(message.status);
        }
        if (message.card === true) {
            writer.uint32(16).bool(message.card);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIgnoreSellOffers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.bool();
                    break;
                case 2:
                    message.card = reader.bool();
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
            status: isSet(object.status) ? Boolean(object.status) : false,
            card: isSet(object.card) ? Boolean(object.card) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.card !== undefined && (obj.card = message.card);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIgnoreSellOffers();
        message.status = object.status ?? false;
        message.card = object.card ?? false;
        return message;
    },
};
function createBaseQueryQSellOffersResponse() {
    return { sellOffersIds: [], sellOffers: [] };
}
export const QueryQSellOffersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sellOffersIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.sellOffers) {
            SellOffer.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOffersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sellOffersIds.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.sellOffersIds.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
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
            sellOffersIds: Array.isArray(object?.sellOffersIds) ? object.sellOffersIds.map((e) => Number(e)) : [],
            sellOffers: Array.isArray(object?.sellOffers) ? object.sellOffers.map((e) => SellOffer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sellOffersIds) {
            obj.sellOffersIds = message.sellOffersIds.map((e) => Math.round(e));
        }
        else {
            obj.sellOffersIds = [];
        }
        if (message.sellOffers) {
            obj.sellOffers = message.sellOffers.map((e) => e ? SellOffer.toJSON(e) : undefined);
        }
        else {
            obj.sellOffers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOffersResponse();
        message.sellOffersIds = object.sellOffersIds?.map((e) => e) || [];
        message.sellOffers = object.sellOffers?.map((e) => SellOffer.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQServerRequest() {
    return { id: 0 };
}
export const QueryQServerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQServerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQServerRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryQServerResponse() {
    return {};
}
export const QueryQServerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQServerResponse();
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
        const message = createBaseQueryQServerResponse();
        return message;
    },
};
function createBaseQueryQSetsRequest() {
    return { status: 0, ignoreStatus: false, contributors: [], containsCards: [], owner: "" };
}
export const QueryQSetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.ignoreStatus === true) {
            writer.uint32(16).bool(message.ignoreStatus);
        }
        for (const v of message.contributors) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.containsCards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.ignoreStatus = reader.bool();
                    break;
                case 3:
                    message.contributors.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.containsCards.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.containsCards.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 5:
                    message.owner = reader.string();
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
            status: isSet(object.status) ? cStatusFromJSON(object.status) : 0,
            ignoreStatus: isSet(object.ignoreStatus) ? Boolean(object.ignoreStatus) : false,
            contributors: Array.isArray(object?.contributors) ? object.contributors.map((e) => String(e)) : [],
            containsCards: Array.isArray(object?.containsCards) ? object.containsCards.map((e) => Number(e)) : [],
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = cStatusToJSON(message.status));
        message.ignoreStatus !== undefined && (obj.ignoreStatus = message.ignoreStatus);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e);
        }
        else {
            obj.contributors = [];
        }
        if (message.containsCards) {
            obj.containsCards = message.containsCards.map((e) => Math.round(e));
        }
        else {
            obj.containsCards = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetsRequest();
        message.status = object.status ?? 0;
        message.ignoreStatus = object.ignoreStatus ?? false;
        message.contributors = object.contributors?.map((e) => e) || [];
        message.containsCards = object.containsCards?.map((e) => e) || [];
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseQueryQSetsResponse() {
    return { setIds: [] };
}
export const QueryQSetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.setIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.setIds.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.setIds.push(longToNumber(reader.uint64()));
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
        return { setIds: Array.isArray(object?.setIds) ? object.setIds.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.setIds) {
            obj.setIds = message.setIds.map((e) => Math.round(e));
        }
        else {
            obj.setIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetsResponse();
        message.setIds = object.setIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryRarityDistributionRequest() {
    return { setId: 0 };
}
export const QueryRarityDistributionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.setId !== 0) {
            writer.uint32(8).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRarityDistributionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRarityDistributionRequest();
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseQueryRarityDistributionResponse() {
    return { current: [], wanted: [] };
}
export const QueryRarityDistributionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.current) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.wanted) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRarityDistributionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.current.push(reader.uint32());
                        }
                    }
                    else {
                        message.current.push(reader.uint32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.wanted.push(reader.uint32());
                        }
                    }
                    else {
                        message.wanted.push(reader.uint32());
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
            current: Array.isArray(object?.current) ? object.current.map((e) => Number(e)) : [],
            wanted: Array.isArray(object?.wanted) ? object.wanted.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.current) {
            obj.current = message.current.map((e) => Math.round(e));
        }
        else {
            obj.current = [];
        }
        if (message.wanted) {
            obj.wanted = message.wanted.map((e) => Math.round(e));
        }
        else {
            obj.wanted = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRarityDistributionResponse();
        message.current = object.current?.map((e) => e) || [];
        message.wanted = object.wanted?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryQCardContentsRequest() {
    return { cardIds: [] };
}
export const QueryQCardContentsRequest = {
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
        const message = createBaseQueryQCardContentsRequest();
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
        const message = createBaseQueryQCardContentsRequest();
        message.cardIds = object.cardIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryQCardContentsResponse() {
    return { cards: [] };
}
export const QueryQCardContentsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cards) {
            QueryQCardContentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardContentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cards.push(QueryQCardContentResponse.decode(reader, reader.uint32()));
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
            cards: Array.isArray(object?.cards) ? object.cards.map((e) => QueryQCardContentResponse.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cards) {
            obj.cards = message.cards.map((e) => e ? QueryQCardContentResponse.toJSON(e) : undefined);
        }
        else {
            obj.cards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardContentsResponse();
        message.cards = object.cards?.map((e) => QueryQCardContentResponse.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQAccountFromZealyRequest() {
    return { zealyId: "" };
}
export const QueryQAccountFromZealyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.zealyId !== "") {
            writer.uint32(10).string(message.zealyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQAccountFromZealyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zealyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { zealyId: isSet(object.zealyId) ? String(object.zealyId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.zealyId !== undefined && (obj.zealyId = message.zealyId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQAccountFromZealyRequest();
        message.zealyId = object.zealyId ?? "";
        return message;
    },
};
function createBaseQueryQAccountFromZealyResponse() {
    return { address: "" };
}
export const QueryQAccountFromZealyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQAccountFromZealyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQAccountFromZealyResponse();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryQEncountersRequest() {
    return {};
}
export const QueryQEncountersRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncountersRequest();
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
        const message = createBaseQueryQEncountersRequest();
        return message;
    },
};
function createBaseQueryQEncountersResponse() {
    return { encounters: [] };
}
export const QueryQEncountersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.encounters) {
            Encounter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncountersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encounters.push(Encounter.decode(reader, reader.uint32()));
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
            encounters: Array.isArray(object?.encounters) ? object.encounters.map((e) => Encounter.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.encounters) {
            obj.encounters = message.encounters.map((e) => e ? Encounter.toJSON(e) : undefined);
        }
        else {
            obj.encounters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncountersResponse();
        message.encounters = object.encounters?.map((e) => Encounter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQEncounterRequest() {
    return { id: 0 };
}
export const QueryQEncounterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncounterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncounterRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryQEncounterResponse() {
    return { encounter: undefined };
}
export const QueryQEncounterResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encounter !== undefined) {
            Encounter.encode(message.encounter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncounterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encounter = Encounter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { encounter: isSet(object.encounter) ? Encounter.fromJSON(object.encounter) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.encounter !== undefined
            && (obj.encounter = message.encounter ? Encounter.toJSON(message.encounter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncounterResponse();
        message.encounter = (object.encounter !== undefined && object.encounter !== null)
            ? Encounter.fromPartial(object.encounter)
            : undefined;
        return message;
    },
};
function createBaseQueryQEncountersWithImageRequest() {
    return {};
}
export const QueryQEncountersWithImageRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncountersWithImageRequest();
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
        const message = createBaseQueryQEncountersWithImageRequest();
        return message;
    },
};
function createBaseQueryQEncountersWithImageResponse() {
    return { encounters: [] };
}
export const QueryQEncountersWithImageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.encounters) {
            EncounterWithImage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncountersWithImageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encounters.push(EncounterWithImage.decode(reader, reader.uint32()));
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
            encounters: Array.isArray(object?.encounters)
                ? object.encounters.map((e) => EncounterWithImage.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.encounters) {
            obj.encounters = message.encounters.map((e) => e ? EncounterWithImage.toJSON(e) : undefined);
        }
        else {
            obj.encounters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncountersWithImageResponse();
        message.encounters = object.encounters?.map((e) => EncounterWithImage.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQEncounterWithImageRequest() {
    return { id: 0 };
}
export const QueryQEncounterWithImageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncounterWithImageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncounterWithImageRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryQEncounterWithImageResponse() {
    return { encounter: undefined };
}
export const QueryQEncounterWithImageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encounter !== undefined) {
            EncounterWithImage.encode(message.encounter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQEncounterWithImageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encounter = EncounterWithImage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { encounter: isSet(object.encounter) ? EncounterWithImage.fromJSON(object.encounter) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.encounter !== undefined
            && (obj.encounter = message.encounter ? EncounterWithImage.toJSON(message.encounter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQEncounterWithImageResponse();
        message.encounter = (object.encounter !== undefined && object.encounter !== null)
            ? EncounterWithImage.fromPartial(object.encounter)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QCard = this.QCard.bind(this);
        this.QCardContent = this.QCardContent.bind(this);
        this.QUser = this.QUser.bind(this);
        this.QCardchainInfo = this.QCardchainInfo.bind(this);
        this.QVotingResults = this.QVotingResults.bind(this);
        this.QCards = this.QCards.bind(this);
        this.QMatch = this.QMatch.bind(this);
        this.QSet = this.QSet.bind(this);
        this.QSellOffer = this.QSellOffer.bind(this);
        this.QCouncil = this.QCouncil.bind(this);
        this.QMatches = this.QMatches.bind(this);
        this.QSellOffers = this.QSellOffers.bind(this);
        this.QServer = this.QServer.bind(this);
        this.QSets = this.QSets.bind(this);
        this.RarityDistribution = this.RarityDistribution.bind(this);
        this.QCardContents = this.QCardContents.bind(this);
        this.QAccountFromZealy = this.QAccountFromZealy.bind(this);
        this.QEncounters = this.QEncounters.bind(this);
        this.QEncounter = this.QEncounter.bind(this);
        this.QEncountersWithImage = this.QEncountersWithImage.bind(this);
        this.QEncounterWithImage = this.QEncounterWithImage.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QCard(request) {
        const data = QueryQCardRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCard", data);
        return promise.then((data) => OutpCard.decode(new _m0.Reader(data)));
    }
    QCardContent(request) {
        const data = QueryQCardContentRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCardContent", data);
        return promise.then((data) => QueryQCardContentResponse.decode(new _m0.Reader(data)));
    }
    QUser(request) {
        const data = QueryQUserRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QUser", data);
        return promise.then((data) => User.decode(new _m0.Reader(data)));
    }
    QCardchainInfo(request) {
        const data = QueryQCardchainInfoRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCardchainInfo", data);
        return promise.then((data) => QueryQCardchainInfoResponse.decode(new _m0.Reader(data)));
    }
    QVotingResults(request) {
        const data = QueryQVotingResultsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QVotingResults", data);
        return promise.then((data) => QueryQVotingResultsResponse.decode(new _m0.Reader(data)));
    }
    QCards(request) {
        const data = QueryQCardsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCards", data);
        return promise.then((data) => QueryQCardsResponse.decode(new _m0.Reader(data)));
    }
    QMatch(request) {
        const data = QueryQMatchRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QMatch", data);
        return promise.then((data) => Match.decode(new _m0.Reader(data)));
    }
    QSet(request) {
        const data = QueryQSetRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSet", data);
        return promise.then((data) => OutpSet.decode(new _m0.Reader(data)));
    }
    QSellOffer(request) {
        const data = QueryQSellOfferRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSellOffer", data);
        return promise.then((data) => SellOffer.decode(new _m0.Reader(data)));
    }
    QCouncil(request) {
        const data = QueryQCouncilRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCouncil", data);
        return promise.then((data) => Council.decode(new _m0.Reader(data)));
    }
    QMatches(request) {
        const data = QueryQMatchesRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QMatches", data);
        return promise.then((data) => QueryQMatchesResponse.decode(new _m0.Reader(data)));
    }
    QSellOffers(request) {
        const data = QueryQSellOffersRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSellOffers", data);
        return promise.then((data) => QueryQSellOffersResponse.decode(new _m0.Reader(data)));
    }
    QServer(request) {
        const data = QueryQServerRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QServer", data);
        return promise.then((data) => Server.decode(new _m0.Reader(data)));
    }
    QSets(request) {
        const data = QueryQSetsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSets", data);
        return promise.then((data) => QueryQSetsResponse.decode(new _m0.Reader(data)));
    }
    RarityDistribution(request) {
        const data = QueryRarityDistributionRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "RarityDistribution", data);
        return promise.then((data) => QueryRarityDistributionResponse.decode(new _m0.Reader(data)));
    }
    QCardContents(request) {
        const data = QueryQCardContentsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCardContents", data);
        return promise.then((data) => QueryQCardContentsResponse.decode(new _m0.Reader(data)));
    }
    QAccountFromZealy(request) {
        const data = QueryQAccountFromZealyRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QAccountFromZealy", data);
        return promise.then((data) => QueryQAccountFromZealyResponse.decode(new _m0.Reader(data)));
    }
    QEncounters(request) {
        const data = QueryQEncountersRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QEncounters", data);
        return promise.then((data) => QueryQEncountersResponse.decode(new _m0.Reader(data)));
    }
    QEncounter(request) {
        const data = QueryQEncounterRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QEncounter", data);
        return promise.then((data) => QueryQEncounterResponse.decode(new _m0.Reader(data)));
    }
    QEncountersWithImage(request) {
        const data = QueryQEncountersWithImageRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QEncountersWithImage", data);
        return promise.then((data) => QueryQEncountersWithImageResponse.decode(new _m0.Reader(data)));
    }
    QEncounterWithImage(request) {
        const data = QueryQEncounterWithImageRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QEncounterWithImage", data);
        return promise.then((data) => QueryQEncounterWithImageResponse.decode(new _m0.Reader(data)));
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
