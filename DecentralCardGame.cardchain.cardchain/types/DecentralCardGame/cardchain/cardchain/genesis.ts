/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Card, TimeStamp } from "./card";
import { Council } from "./council";
import { Image } from "./image";
import { Match } from "./match";
import { Params } from "./params";
import { RunningAverage } from "./running_average";
import { SellOffer } from "./sell_offer";
import { Server } from "./server";
import { Set } from "./set";
import { User } from "./user";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

/** GenesisState defines the cardchain module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  cardRecords: Card[];
  users: User[];
  addresses: string[];
  matches: Match[];
  sets: Set[];
  sellOffers: SellOffer[];
  pools: Coin[];
  cardAuctionPrice: string;
  councils: Council[];
  RunningAverages: RunningAverage[];
  images: Image[];
  Servers: Server[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  lastCardModified: TimeStamp | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    cardRecords: [],
    users: [],
    addresses: [],
    matches: [],
    sets: [],
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cardRecords) {
      Card.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.addresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.matches) {
      Match.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.sets) {
      Set.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOffers) {
      SellOffer.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pools) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.cardAuctionPrice !== "") {
      writer.uint32(90).string(message.cardAuctionPrice);
    }
    for (const v of message.councils) {
      Council.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.RunningAverages) {
      RunningAverage.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.Servers) {
      Server.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.lastCardModified !== undefined) {
      TimeStamp.encode(message.lastCardModified, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cardRecords.push(Card.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.matches.push(Match.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sets.push(Set.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.pools.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cardAuctionPrice = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.councils.push(Council.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.RunningAverages.push(RunningAverage.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.images.push(Image.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.Servers.push(Server.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.lastCardModified = TimeStamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      cardRecords: Array.isArray(object?.cardRecords) ? object.cardRecords.map((e: any) => Card.fromJSON(e)) : [],
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      matches: Array.isArray(object?.matches) ? object.matches.map((e: any) => Match.fromJSON(e)) : [],
      sets: Array.isArray(object?.sets) ? object.sets.map((e: any) => Set.fromJSON(e)) : [],
      sellOffers: Array.isArray(object?.sellOffers) ? object.sellOffers.map((e: any) => SellOffer.fromJSON(e)) : [],
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Coin.fromJSON(e)) : [],
      cardAuctionPrice: isSet(object.cardAuctionPrice) ? String(object.cardAuctionPrice) : "",
      councils: Array.isArray(object?.councils) ? object.councils.map((e: any) => Council.fromJSON(e)) : [],
      RunningAverages: Array.isArray(object?.RunningAverages)
        ? object.RunningAverages.map((e: any) => RunningAverage.fromJSON(e))
        : [],
      images: Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      Servers: Array.isArray(object?.Servers) ? object.Servers.map((e: any) => Server.fromJSON(e)) : [],
      lastCardModified: isSet(object.lastCardModified) ? TimeStamp.fromJSON(object.lastCardModified) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.cardRecords?.length) {
      obj.cardRecords = message.cardRecords.map((e) => Card.toJSON(e));
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.addresses?.length) {
      obj.addresses = message.addresses;
    }
    if (message.matches?.length) {
      obj.matches = message.matches.map((e) => Match.toJSON(e));
    }
    if (message.sets?.length) {
      obj.sets = message.sets.map((e) => Set.toJSON(e));
    }
    if (message.sellOffers?.length) {
      obj.sellOffers = message.sellOffers.map((e) => SellOffer.toJSON(e));
    }
    if (message.pools?.length) {
      obj.pools = message.pools.map((e) => Coin.toJSON(e));
    }
    if (message.cardAuctionPrice !== "") {
      obj.cardAuctionPrice = message.cardAuctionPrice;
    }
    if (message.councils?.length) {
      obj.councils = message.councils.map((e) => Council.toJSON(e));
    }
    if (message.RunningAverages?.length) {
      obj.RunningAverages = message.RunningAverages.map((e) => RunningAverage.toJSON(e));
    }
    if (message.images?.length) {
      obj.images = message.images.map((e) => Image.toJSON(e));
    }
    if (message.Servers?.length) {
      obj.Servers = message.Servers.map((e) => Server.toJSON(e));
    }
    if (message.lastCardModified !== undefined) {
      obj.lastCardModified = TimeStamp.toJSON(message.lastCardModified);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.cardRecords = object.cardRecords?.map((e) => Card.fromPartial(e)) || [];
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.addresses = object.addresses?.map((e) => e) || [];
    message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
    message.sets = object.sets?.map((e) => Set.fromPartial(e)) || [];
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
