/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Card, TimeStamp } from "./card";
import { Collection } from "./collection";
import { Council } from "./council";
import { Image } from "./image";
import { Match } from "./match";
import { Params } from "./params";
import { RunningAverage } from "./running_average";
import { SellOffer } from "./sell_offer";
import { Server } from "./server";
import { User } from "./user";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseGenesisState() {
    return {
        params: undefined,
        cardRecords: [],
        users: [],
        addresses: [],
        matches: [],
        collections: [],
        sellOffers: [],
        pools: [],
        cardAuctionPrice: "",
        councils: [],
        RunningAverages: [],
        images: [],
        Servers: [],
        lastCardModified: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.cardRecords) {
            Card.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.users) {
            User.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.addresses) {
            writer.uint32(34).string(v);
        }
        for (const v of message.matches) {
            Match.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.collections) {
            Collection.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.sellOffers) {
            SellOffer.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.pools) {
            Coin.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.cardAuctionPrice !== "") {
            writer.uint32(90).string(message.cardAuctionPrice);
        }
        for (const v of message.councils) {
            Council.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.RunningAverages) {
            RunningAverage.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.images) {
            Image.encode(v, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.Servers) {
            Server.encode(v, writer.uint32(122).fork()).ldelim();
        }
        if (message.lastCardModified !== undefined) {
            TimeStamp.encode(message.lastCardModified, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cardRecords.push(Card.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.users.push(User.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.addresses.push(reader.string());
                    break;
                case 6:
                    message.matches.push(Match.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.collections.push(Collection.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.pools.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.cardAuctionPrice = reader.string();
                    break;
                case 12:
                    message.councils.push(Council.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.RunningAverages.push(RunningAverage.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.images.push(Image.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.Servers.push(Server.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.lastCardModified = TimeStamp.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            cardRecords: Array.isArray(object?.cardRecords) ? object.cardRecords.map((e) => Card.fromJSON(e)) : [],
            users: Array.isArray(object?.users) ? object.users.map((e) => User.fromJSON(e)) : [],
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : [],
            matches: Array.isArray(object?.matches) ? object.matches.map((e) => Match.fromJSON(e)) : [],
            collections: Array.isArray(object?.collections) ? object.collections.map((e) => Collection.fromJSON(e)) : [],
            sellOffers: Array.isArray(object?.sellOffers) ? object.sellOffers.map((e) => SellOffer.fromJSON(e)) : [],
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Coin.fromJSON(e)) : [],
            cardAuctionPrice: isSet(object.cardAuctionPrice) ? String(object.cardAuctionPrice) : "",
            councils: Array.isArray(object?.councils) ? object.councils.map((e) => Council.fromJSON(e)) : [],
            RunningAverages: Array.isArray(object?.RunningAverages)
                ? object.RunningAverages.map((e) => RunningAverage.fromJSON(e))
                : [],
            images: Array.isArray(object?.images) ? object.images.map((e) => Image.fromJSON(e)) : [],
            Servers: Array.isArray(object?.Servers) ? object.Servers.map((e) => Server.fromJSON(e)) : [],
            lastCardModified: isSet(object.lastCardModified) ? TimeStamp.fromJSON(object.lastCardModified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.cardRecords) {
            obj.cardRecords = message.cardRecords.map((e) => e ? Card.toJSON(e) : undefined);
        }
        else {
            obj.cardRecords = [];
        }
        if (message.users) {
            obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
        }
        else {
            obj.users = [];
        }
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e);
        }
        else {
            obj.addresses = [];
        }
        if (message.matches) {
            obj.matches = message.matches.map((e) => e ? Match.toJSON(e) : undefined);
        }
        else {
            obj.matches = [];
        }
        if (message.collections) {
            obj.collections = message.collections.map((e) => e ? Collection.toJSON(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        if (message.sellOffers) {
            obj.sellOffers = message.sellOffers.map((e) => e ? SellOffer.toJSON(e) : undefined);
        }
        else {
            obj.sellOffers = [];
        }
        if (message.pools) {
            obj.pools = message.pools.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.cardAuctionPrice !== undefined && (obj.cardAuctionPrice = message.cardAuctionPrice);
        if (message.councils) {
            obj.councils = message.councils.map((e) => e ? Council.toJSON(e) : undefined);
        }
        else {
            obj.councils = [];
        }
        if (message.RunningAverages) {
            obj.RunningAverages = message.RunningAverages.map((e) => e ? RunningAverage.toJSON(e) : undefined);
        }
        else {
            obj.RunningAverages = [];
        }
        if (message.images) {
            obj.images = message.images.map((e) => e ? Image.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        if (message.Servers) {
            obj.Servers = message.Servers.map((e) => e ? Server.toJSON(e) : undefined);
        }
        else {
            obj.Servers = [];
        }
        message.lastCardModified !== undefined
            && (obj.lastCardModified = message.lastCardModified ? TimeStamp.toJSON(message.lastCardModified) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.cardRecords = object.cardRecords?.map((e) => Card.fromPartial(e)) || [];
        message.users = object.users?.map((e) => User.fromPartial(e)) || [];
        message.addresses = object.addresses?.map((e) => e) || [];
        message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
        message.collections = object.collections?.map((e) => Collection.fromPartial(e)) || [];
        message.sellOffers = object.sellOffers?.map((e) => SellOffer.fromPartial(e)) || [];
        message.pools = object.pools?.map((e) => Coin.fromPartial(e)) || [];
        message.cardAuctionPrice = object.cardAuctionPrice ?? "";
        message.councils = object.councils?.map((e) => Council.fromPartial(e)) || [];
        message.RunningAverages = object.RunningAverages?.map((e) => RunningAverage.fromPartial(e)) || [];
        message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
        message.Servers = object.Servers?.map((e) => Server.fromPartial(e)) || [];
        message.lastCardModified = (object.lastCardModified !== undefined && object.lastCardModified !== null)
            ? TimeStamp.fromPartial(object.lastCardModified)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
