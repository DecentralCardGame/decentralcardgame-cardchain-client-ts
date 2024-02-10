/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutpCard } from "./card";
import { Council } from "./council";
import { Match, Outcome, outcomeFromJSON, outcomeToJSON } from "./match";
import { Params } from "./params";
import { SellOffer, SellOfferStatus, sellOfferStatusFromJSON, sellOfferStatusToJSON } from "./sell_offer";
import { Server } from "./server";
import { CStatus, cStatusFromJSON, cStatusToJSON, OutpSet } from "./set";
import { User } from "./user";
import { VotingResults } from "./voting";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryQCardRequest {
  cardId: string;
}

export interface QueryQCardContentRequest {
  cardId: string;
}

export interface QueryQCardContentResponse {
  content: string;
  hash: string;
}

export interface QueryQUserRequest {
  address: string;
}

export interface QueryQCardchainInfoRequest {
}

export interface QueryQCardchainInfoResponse {
  cardAuctionPrice: string;
  activeSets: number[];
  cardsNumber: number;
  matchesNumber: number;
  sellOffersNumber: number;
  councilsNumber: number;
  lastCardModified: number;
}

export interface QueryQVotingResultsRequest {
}

export interface QueryQVotingResultsResponse {
  lastVotingResults: VotingResults | undefined;
}

export interface QueryQCardsRequest {
  owner: string;
  status: QueryQCardsRequest_Status;
  cardType: string;
  classes: string;
  sortBy: string;
  nameContains: string;
  keywordsContains: string;
  notesContains: string;
  onlyStarterCard: boolean;
}

export enum QueryQCardsRequest_Status {
  scheme = 0,
  prototype = 1,
  trial = 2,
  permanent = 3,
  suspended = 4,
  banned = 5,
  bannedSoon = 6,
  bannedVerySoon = 7,
  none = 8,
  playable = 9,
  unplayable = 10,
  UNRECOGNIZED = -1,
}

export function queryQCardsRequest_StatusFromJSON(object: any): QueryQCardsRequest_Status {
  switch (object) {
    case 0:
    case "scheme":
      return QueryQCardsRequest_Status.scheme;
    case 1:
    case "prototype":
      return QueryQCardsRequest_Status.prototype;
    case 2:
    case "trial":
      return QueryQCardsRequest_Status.trial;
    case 3:
    case "permanent":
      return QueryQCardsRequest_Status.permanent;
    case 4:
    case "suspended":
      return QueryQCardsRequest_Status.suspended;
    case 5:
    case "banned":
      return QueryQCardsRequest_Status.banned;
    case 6:
    case "bannedSoon":
      return QueryQCardsRequest_Status.bannedSoon;
    case 7:
    case "bannedVerySoon":
      return QueryQCardsRequest_Status.bannedVerySoon;
    case 8:
    case "none":
      return QueryQCardsRequest_Status.none;
    case 9:
    case "playable":
      return QueryQCardsRequest_Status.playable;
    case 10:
    case "unplayable":
      return QueryQCardsRequest_Status.unplayable;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QueryQCardsRequest_Status.UNRECOGNIZED;
  }
}

export function queryQCardsRequest_StatusToJSON(object: QueryQCardsRequest_Status): string {
  switch (object) {
    case QueryQCardsRequest_Status.scheme:
      return "scheme";
    case QueryQCardsRequest_Status.prototype:
      return "prototype";
    case QueryQCardsRequest_Status.trial:
      return "trial";
    case QueryQCardsRequest_Status.permanent:
      return "permanent";
    case QueryQCardsRequest_Status.suspended:
      return "suspended";
    case QueryQCardsRequest_Status.banned:
      return "banned";
    case QueryQCardsRequest_Status.bannedSoon:
      return "bannedSoon";
    case QueryQCardsRequest_Status.bannedVerySoon:
      return "bannedVerySoon";
    case QueryQCardsRequest_Status.none:
      return "none";
    case QueryQCardsRequest_Status.playable:
      return "playable";
    case QueryQCardsRequest_Status.unplayable:
      return "unplayable";
    case QueryQCardsRequest_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface QueryQCardsResponse {
  cardsList: number[];
}

export interface QueryQMatchRequest {
  matchId: number;
}

export interface QueryQSetRequest {
  setId: number;
}

export interface QueryQSellOfferRequest {
  sellOfferId: number;
}

export interface QueryQCouncilRequest {
  councilId: number;
}

export interface QueryQMatchesRequest {
  timestampDown: number;
  timestampUp: number;
  containsUsers: string[];
  reporter: string;
  outcome: Outcome;
  cardsPlayed: number[];
  ignore: IgnoreMatches | undefined;
}

export interface IgnoreMatches {
  outcome: boolean;
}

export interface QueryQMatchesResponse {
  matchesList: number[];
  matches: Match[];
}

export interface QueryQSellOffersRequest {
  priceDown: string;
  priceUp: string;
  seller: string;
  buyer: string;
  card: number;
  status: SellOfferStatus;
  ignore: IgnoreSellOffers | undefined;
}

export interface IgnoreSellOffers {
  status: boolean;
  card: boolean;
}

export interface QueryQSellOffersResponse {
  sellOffersIds: number[];
  sellOffers: SellOffer[];
}

export interface QueryQServerRequest {
  id: number;
}

export interface QueryQServerResponse {
}

export interface QueryQSetsRequest {
  status: CStatus;
  ignoreStatus: boolean;
  contributors: string[];
  containsCards: number[];
  owner: string;
}

export interface QueryQSetsResponse {
  setIds: number[];
}

export interface QueryRarityDistributionRequest {
  setId: number;
}

export interface QueryRarityDistributionResponse {
  current: number[];
  wanted: number[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryQCardRequest(): QueryQCardRequest {
  return { cardId: "" };
}

export const QueryQCardRequest = {
  encode(message: QueryQCardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== "") {
      writer.uint32(10).string(message.cardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCardRequest {
    return { cardId: isSet(object.cardId) ? String(object.cardId) : "" };
  },

  toJSON(message: QueryQCardRequest): unknown {
    const obj: any = {};
    if (message.cardId !== "") {
      obj.cardId = message.cardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardRequest>, I>>(base?: I): QueryQCardRequest {
    return QueryQCardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardRequest>, I>>(object: I): QueryQCardRequest {
    const message = createBaseQueryQCardRequest();
    message.cardId = object.cardId ?? "";
    return message;
  },
};

function createBaseQueryQCardContentRequest(): QueryQCardContentRequest {
  return { cardId: "" };
}

export const QueryQCardContentRequest = {
  encode(message: QueryQCardContentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== "") {
      writer.uint32(10).string(message.cardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardContentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCardContentRequest {
    return { cardId: isSet(object.cardId) ? String(object.cardId) : "" };
  },

  toJSON(message: QueryQCardContentRequest): unknown {
    const obj: any = {};
    if (message.cardId !== "") {
      obj.cardId = message.cardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardContentRequest>, I>>(base?: I): QueryQCardContentRequest {
    return QueryQCardContentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardContentRequest>, I>>(object: I): QueryQCardContentRequest {
    const message = createBaseQueryQCardContentRequest();
    message.cardId = object.cardId ?? "";
    return message;
  },
};

function createBaseQueryQCardContentResponse(): QueryQCardContentResponse {
  return { content: "", hash: "" };
}

export const QueryQCardContentResponse = {
  encode(message: QueryQCardContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardContentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
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

  fromJSON(object: any): QueryQCardContentResponse {
    return {
      content: isSet(object.content) ? String(object.content) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
    };
  },

  toJSON(message: QueryQCardContentResponse): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardContentResponse>, I>>(base?: I): QueryQCardContentResponse {
    return QueryQCardContentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardContentResponse>, I>>(object: I): QueryQCardContentResponse {
    const message = createBaseQueryQCardContentResponse();
    message.content = object.content ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseQueryQUserRequest(): QueryQUserRequest {
  return { address: "" };
}

export const QueryQUserRequest = {
  encode(message: QueryQUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQUserRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryQUserRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQUserRequest>, I>>(base?: I): QueryQUserRequest {
    return QueryQUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQUserRequest>, I>>(object: I): QueryQUserRequest {
    const message = createBaseQueryQUserRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryQCardchainInfoRequest(): QueryQCardchainInfoRequest {
  return {};
}

export const QueryQCardchainInfoRequest = {
  encode(_: QueryQCardchainInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardchainInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardchainInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryQCardchainInfoRequest {
    return {};
  },

  toJSON(_: QueryQCardchainInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardchainInfoRequest>, I>>(base?: I): QueryQCardchainInfoRequest {
    return QueryQCardchainInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardchainInfoRequest>, I>>(_: I): QueryQCardchainInfoRequest {
    const message = createBaseQueryQCardchainInfoRequest();
    return message;
  },
};

function createBaseQueryQCardchainInfoResponse(): QueryQCardchainInfoResponse {
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
  encode(message: QueryQCardchainInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardchainInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardchainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cardAuctionPrice = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.activeSets.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeSets.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cardsNumber = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.matchesNumber = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sellOffersNumber = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.councilsNumber = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.lastCardModified = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCardchainInfoResponse {
    return {
      cardAuctionPrice: isSet(object.cardAuctionPrice) ? String(object.cardAuctionPrice) : "",
      activeSets: Array.isArray(object?.activeSets) ? object.activeSets.map((e: any) => Number(e)) : [],
      cardsNumber: isSet(object.cardsNumber) ? Number(object.cardsNumber) : 0,
      matchesNumber: isSet(object.matchesNumber) ? Number(object.matchesNumber) : 0,
      sellOffersNumber: isSet(object.sellOffersNumber) ? Number(object.sellOffersNumber) : 0,
      councilsNumber: isSet(object.councilsNumber) ? Number(object.councilsNumber) : 0,
      lastCardModified: isSet(object.lastCardModified) ? Number(object.lastCardModified) : 0,
    };
  },

  toJSON(message: QueryQCardchainInfoResponse): unknown {
    const obj: any = {};
    if (message.cardAuctionPrice !== "") {
      obj.cardAuctionPrice = message.cardAuctionPrice;
    }
    if (message.activeSets?.length) {
      obj.activeSets = message.activeSets.map((e) => Math.round(e));
    }
    if (message.cardsNumber !== 0) {
      obj.cardsNumber = Math.round(message.cardsNumber);
    }
    if (message.matchesNumber !== 0) {
      obj.matchesNumber = Math.round(message.matchesNumber);
    }
    if (message.sellOffersNumber !== 0) {
      obj.sellOffersNumber = Math.round(message.sellOffersNumber);
    }
    if (message.councilsNumber !== 0) {
      obj.councilsNumber = Math.round(message.councilsNumber);
    }
    if (message.lastCardModified !== 0) {
      obj.lastCardModified = Math.round(message.lastCardModified);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardchainInfoResponse>, I>>(base?: I): QueryQCardchainInfoResponse {
    return QueryQCardchainInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardchainInfoResponse>, I>>(object: I): QueryQCardchainInfoResponse {
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

function createBaseQueryQVotingResultsRequest(): QueryQVotingResultsRequest {
  return {};
}

export const QueryQVotingResultsRequest = {
  encode(_: QueryQVotingResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQVotingResultsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQVotingResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryQVotingResultsRequest {
    return {};
  },

  toJSON(_: QueryQVotingResultsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQVotingResultsRequest>, I>>(base?: I): QueryQVotingResultsRequest {
    return QueryQVotingResultsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQVotingResultsRequest>, I>>(_: I): QueryQVotingResultsRequest {
    const message = createBaseQueryQVotingResultsRequest();
    return message;
  },
};

function createBaseQueryQVotingResultsResponse(): QueryQVotingResultsResponse {
  return { lastVotingResults: undefined };
}

export const QueryQVotingResultsResponse = {
  encode(message: QueryQVotingResultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastVotingResults !== undefined) {
      VotingResults.encode(message.lastVotingResults, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQVotingResultsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQVotingResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastVotingResults = VotingResults.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQVotingResultsResponse {
    return {
      lastVotingResults: isSet(object.lastVotingResults) ? VotingResults.fromJSON(object.lastVotingResults) : undefined,
    };
  },

  toJSON(message: QueryQVotingResultsResponse): unknown {
    const obj: any = {};
    if (message.lastVotingResults !== undefined) {
      obj.lastVotingResults = VotingResults.toJSON(message.lastVotingResults);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQVotingResultsResponse>, I>>(base?: I): QueryQVotingResultsResponse {
    return QueryQVotingResultsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQVotingResultsResponse>, I>>(object: I): QueryQVotingResultsResponse {
    const message = createBaseQueryQVotingResultsResponse();
    message.lastVotingResults = (object.lastVotingResults !== undefined && object.lastVotingResults !== null)
      ? VotingResults.fromPartial(object.lastVotingResults)
      : undefined;
    return message;
  },
};

function createBaseQueryQCardsRequest(): QueryQCardsRequest {
  return {
    owner: "",
    status: 0,
    cardType: "",
    classes: "",
    sortBy: "",
    nameContains: "",
    keywordsContains: "",
    notesContains: "",
    onlyStarterCard: false,
  };
}

export const QueryQCardsRequest = {
  encode(message: QueryQCardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.cardType !== "") {
      writer.uint32(26).string(message.cardType);
    }
    if (message.classes !== "") {
      writer.uint32(34).string(message.classes);
    }
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cardType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.classes = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sortBy = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nameContains = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.keywordsContains = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.notesContains = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.onlyStarterCard = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCardsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      status: isSet(object.status) ? queryQCardsRequest_StatusFromJSON(object.status) : 0,
      cardType: isSet(object.cardType) ? String(object.cardType) : "",
      classes: isSet(object.classes) ? String(object.classes) : "",
      sortBy: isSet(object.sortBy) ? String(object.sortBy) : "",
      nameContains: isSet(object.nameContains) ? String(object.nameContains) : "",
      keywordsContains: isSet(object.keywordsContains) ? String(object.keywordsContains) : "",
      notesContains: isSet(object.notesContains) ? String(object.notesContains) : "",
      onlyStarterCard: isSet(object.onlyStarterCard) ? Boolean(object.onlyStarterCard) : false,
    };
  },

  toJSON(message: QueryQCardsRequest): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.status !== 0) {
      obj.status = queryQCardsRequest_StatusToJSON(message.status);
    }
    if (message.cardType !== "") {
      obj.cardType = message.cardType;
    }
    if (message.classes !== "") {
      obj.classes = message.classes;
    }
    if (message.sortBy !== "") {
      obj.sortBy = message.sortBy;
    }
    if (message.nameContains !== "") {
      obj.nameContains = message.nameContains;
    }
    if (message.keywordsContains !== "") {
      obj.keywordsContains = message.keywordsContains;
    }
    if (message.notesContains !== "") {
      obj.notesContains = message.notesContains;
    }
    if (message.onlyStarterCard === true) {
      obj.onlyStarterCard = message.onlyStarterCard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardsRequest>, I>>(base?: I): QueryQCardsRequest {
    return QueryQCardsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardsRequest>, I>>(object: I): QueryQCardsRequest {
    const message = createBaseQueryQCardsRequest();
    message.owner = object.owner ?? "";
    message.status = object.status ?? 0;
    message.cardType = object.cardType ?? "";
    message.classes = object.classes ?? "";
    message.sortBy = object.sortBy ?? "";
    message.nameContains = object.nameContains ?? "";
    message.keywordsContains = object.keywordsContains ?? "";
    message.notesContains = object.notesContains ?? "";
    message.onlyStarterCard = object.onlyStarterCard ?? false;
    return message;
  },
};

function createBaseQueryQCardsResponse(): QueryQCardsResponse {
  return { cardsList: [] };
}

export const QueryQCardsResponse = {
  encode(message: QueryQCardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cardsList) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.cardsList.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardsList.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCardsResponse {
    return { cardsList: Array.isArray(object?.cardsList) ? object.cardsList.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: QueryQCardsResponse): unknown {
    const obj: any = {};
    if (message.cardsList?.length) {
      obj.cardsList = message.cardsList.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCardsResponse>, I>>(base?: I): QueryQCardsResponse {
    return QueryQCardsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCardsResponse>, I>>(object: I): QueryQCardsResponse {
    const message = createBaseQueryQCardsResponse();
    message.cardsList = object.cardsList?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryQMatchRequest(): QueryQMatchRequest {
  return { matchId: 0 };
}

export const QueryQMatchRequest = {
  encode(message: QueryQMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== 0) {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.matchId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQMatchRequest {
    return { matchId: isSet(object.matchId) ? Number(object.matchId) : 0 };
  },

  toJSON(message: QueryQMatchRequest): unknown {
    const obj: any = {};
    if (message.matchId !== 0) {
      obj.matchId = Math.round(message.matchId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQMatchRequest>, I>>(base?: I): QueryQMatchRequest {
    return QueryQMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQMatchRequest>, I>>(object: I): QueryQMatchRequest {
    const message = createBaseQueryQMatchRequest();
    message.matchId = object.matchId ?? 0;
    return message;
  },
};

function createBaseQueryQSetRequest(): QueryQSetRequest {
  return { setId: 0 };
}

export const QueryQSetRequest = {
  encode(message: QueryQSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setId !== 0) {
      writer.uint32(8).uint64(message.setId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.setId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSetRequest {
    return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
  },

  toJSON(message: QueryQSetRequest): unknown {
    const obj: any = {};
    if (message.setId !== 0) {
      obj.setId = Math.round(message.setId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSetRequest>, I>>(base?: I): QueryQSetRequest {
    return QueryQSetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSetRequest>, I>>(object: I): QueryQSetRequest {
    const message = createBaseQueryQSetRequest();
    message.setId = object.setId ?? 0;
    return message;
  },
};

function createBaseQueryQSellOfferRequest(): QueryQSellOfferRequest {
  return { sellOfferId: 0 };
}

export const QueryQSellOfferRequest = {
  encode(message: QueryQSellOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellOfferId !== 0) {
      writer.uint32(8).uint64(message.sellOfferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSellOfferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSellOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sellOfferId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSellOfferRequest {
    return { sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0 };
  },

  toJSON(message: QueryQSellOfferRequest): unknown {
    const obj: any = {};
    if (message.sellOfferId !== 0) {
      obj.sellOfferId = Math.round(message.sellOfferId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSellOfferRequest>, I>>(base?: I): QueryQSellOfferRequest {
    return QueryQSellOfferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSellOfferRequest>, I>>(object: I): QueryQSellOfferRequest {
    const message = createBaseQueryQSellOfferRequest();
    message.sellOfferId = object.sellOfferId ?? 0;
    return message;
  },
};

function createBaseQueryQCouncilRequest(): QueryQCouncilRequest {
  return { councilId: 0 };
}

export const QueryQCouncilRequest = {
  encode(message: QueryQCouncilRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.councilId !== 0) {
      writer.uint32(8).uint64(message.councilId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQCouncilRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQCouncilRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.councilId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQCouncilRequest {
    return { councilId: isSet(object.councilId) ? Number(object.councilId) : 0 };
  },

  toJSON(message: QueryQCouncilRequest): unknown {
    const obj: any = {};
    if (message.councilId !== 0) {
      obj.councilId = Math.round(message.councilId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQCouncilRequest>, I>>(base?: I): QueryQCouncilRequest {
    return QueryQCouncilRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQCouncilRequest>, I>>(object: I): QueryQCouncilRequest {
    const message = createBaseQueryQCouncilRequest();
    message.councilId = object.councilId ?? 0;
    return message;
  },
};

function createBaseQueryQMatchesRequest(): QueryQMatchesRequest {
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
  encode(message: QueryQMatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestampDown !== 0) {
      writer.uint32(8).uint64(message.timestampDown);
    }
    if (message.timestampUp !== 0) {
      writer.uint32(16).uint64(message.timestampUp);
    }
    for (const v of message.containsUsers) {
      writer.uint32(26).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQMatchesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQMatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestampDown = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestampUp = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.containsUsers.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reporter = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.outcome = reader.int32() as any;
          continue;
        case 6:
          if (tag === 48) {
            message.cardsPlayed.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardsPlayed.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ignore = IgnoreMatches.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQMatchesRequest {
    return {
      timestampDown: isSet(object.timestampDown) ? Number(object.timestampDown) : 0,
      timestampUp: isSet(object.timestampUp) ? Number(object.timestampUp) : 0,
      containsUsers: Array.isArray(object?.containsUsers) ? object.containsUsers.map((e: any) => String(e)) : [],
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
      cardsPlayed: Array.isArray(object?.cardsPlayed) ? object.cardsPlayed.map((e: any) => Number(e)) : [],
      ignore: isSet(object.ignore) ? IgnoreMatches.fromJSON(object.ignore) : undefined,
    };
  },

  toJSON(message: QueryQMatchesRequest): unknown {
    const obj: any = {};
    if (message.timestampDown !== 0) {
      obj.timestampDown = Math.round(message.timestampDown);
    }
    if (message.timestampUp !== 0) {
      obj.timestampUp = Math.round(message.timestampUp);
    }
    if (message.containsUsers?.length) {
      obj.containsUsers = message.containsUsers;
    }
    if (message.reporter !== "") {
      obj.reporter = message.reporter;
    }
    if (message.outcome !== 0) {
      obj.outcome = outcomeToJSON(message.outcome);
    }
    if (message.cardsPlayed?.length) {
      obj.cardsPlayed = message.cardsPlayed.map((e) => Math.round(e));
    }
    if (message.ignore !== undefined) {
      obj.ignore = IgnoreMatches.toJSON(message.ignore);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQMatchesRequest>, I>>(base?: I): QueryQMatchesRequest {
    return QueryQMatchesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQMatchesRequest>, I>>(object: I): QueryQMatchesRequest {
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

function createBaseIgnoreMatches(): IgnoreMatches {
  return { outcome: false };
}

export const IgnoreMatches = {
  encode(message: IgnoreMatches, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outcome === true) {
      writer.uint32(8).bool(message.outcome);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IgnoreMatches {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIgnoreMatches();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.outcome = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IgnoreMatches {
    return { outcome: isSet(object.outcome) ? Boolean(object.outcome) : false };
  },

  toJSON(message: IgnoreMatches): unknown {
    const obj: any = {};
    if (message.outcome === true) {
      obj.outcome = message.outcome;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IgnoreMatches>, I>>(base?: I): IgnoreMatches {
    return IgnoreMatches.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IgnoreMatches>, I>>(object: I): IgnoreMatches {
    const message = createBaseIgnoreMatches();
    message.outcome = object.outcome ?? false;
    return message;
  },
};

function createBaseQueryQMatchesResponse(): QueryQMatchesResponse {
  return { matchesList: [], matches: [] };
}

export const QueryQMatchesResponse = {
  encode(message: QueryQMatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.matchesList) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.matches) {
      Match.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQMatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQMatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.matchesList.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchesList.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matches.push(Match.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQMatchesResponse {
    return {
      matchesList: Array.isArray(object?.matchesList) ? object.matchesList.map((e: any) => Number(e)) : [],
      matches: Array.isArray(object?.matches) ? object.matches.map((e: any) => Match.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryQMatchesResponse): unknown {
    const obj: any = {};
    if (message.matchesList?.length) {
      obj.matchesList = message.matchesList.map((e) => Math.round(e));
    }
    if (message.matches?.length) {
      obj.matches = message.matches.map((e) => Match.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQMatchesResponse>, I>>(base?: I): QueryQMatchesResponse {
    return QueryQMatchesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQMatchesResponse>, I>>(object: I): QueryQMatchesResponse {
    const message = createBaseQueryQMatchesResponse();
    message.matchesList = object.matchesList?.map((e) => e) || [];
    message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryQSellOffersRequest(): QueryQSellOffersRequest {
  return { priceDown: "", priceUp: "", seller: "", buyer: "", card: 0, status: 0, ignore: undefined };
}

export const QueryQSellOffersRequest = {
  encode(message: QueryQSellOffersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSellOffersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSellOffersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.priceDown = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.priceUp = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.seller = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.buyer = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.card = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ignore = IgnoreSellOffers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSellOffersRequest {
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

  toJSON(message: QueryQSellOffersRequest): unknown {
    const obj: any = {};
    if (message.priceDown !== "") {
      obj.priceDown = message.priceDown;
    }
    if (message.priceUp !== "") {
      obj.priceUp = message.priceUp;
    }
    if (message.seller !== "") {
      obj.seller = message.seller;
    }
    if (message.buyer !== "") {
      obj.buyer = message.buyer;
    }
    if (message.card !== 0) {
      obj.card = Math.round(message.card);
    }
    if (message.status !== 0) {
      obj.status = sellOfferStatusToJSON(message.status);
    }
    if (message.ignore !== undefined) {
      obj.ignore = IgnoreSellOffers.toJSON(message.ignore);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSellOffersRequest>, I>>(base?: I): QueryQSellOffersRequest {
    return QueryQSellOffersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSellOffersRequest>, I>>(object: I): QueryQSellOffersRequest {
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

function createBaseIgnoreSellOffers(): IgnoreSellOffers {
  return { status: false, card: false };
}

export const IgnoreSellOffers = {
  encode(message: IgnoreSellOffers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    if (message.card === true) {
      writer.uint32(16).bool(message.card);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IgnoreSellOffers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIgnoreSellOffers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.card = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IgnoreSellOffers {
    return {
      status: isSet(object.status) ? Boolean(object.status) : false,
      card: isSet(object.card) ? Boolean(object.card) : false,
    };
  },

  toJSON(message: IgnoreSellOffers): unknown {
    const obj: any = {};
    if (message.status === true) {
      obj.status = message.status;
    }
    if (message.card === true) {
      obj.card = message.card;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IgnoreSellOffers>, I>>(base?: I): IgnoreSellOffers {
    return IgnoreSellOffers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IgnoreSellOffers>, I>>(object: I): IgnoreSellOffers {
    const message = createBaseIgnoreSellOffers();
    message.status = object.status ?? false;
    message.card = object.card ?? false;
    return message;
  },
};

function createBaseQueryQSellOffersResponse(): QueryQSellOffersResponse {
  return { sellOffersIds: [], sellOffers: [] };
}

export const QueryQSellOffersResponse = {
  encode(message: QueryQSellOffersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sellOffersIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.sellOffers) {
      SellOffer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSellOffersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSellOffersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.sellOffersIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOffersIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSellOffersResponse {
    return {
      sellOffersIds: Array.isArray(object?.sellOffersIds) ? object.sellOffersIds.map((e: any) => Number(e)) : [],
      sellOffers: Array.isArray(object?.sellOffers) ? object.sellOffers.map((e: any) => SellOffer.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryQSellOffersResponse): unknown {
    const obj: any = {};
    if (message.sellOffersIds?.length) {
      obj.sellOffersIds = message.sellOffersIds.map((e) => Math.round(e));
    }
    if (message.sellOffers?.length) {
      obj.sellOffers = message.sellOffers.map((e) => SellOffer.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSellOffersResponse>, I>>(base?: I): QueryQSellOffersResponse {
    return QueryQSellOffersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSellOffersResponse>, I>>(object: I): QueryQSellOffersResponse {
    const message = createBaseQueryQSellOffersResponse();
    message.sellOffersIds = object.sellOffersIds?.map((e) => e) || [];
    message.sellOffers = object.sellOffers?.map((e) => SellOffer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryQServerRequest(): QueryQServerRequest {
  return { id: 0 };
}

export const QueryQServerRequest = {
  encode(message: QueryQServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQServerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQServerRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryQServerRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQServerRequest>, I>>(base?: I): QueryQServerRequest {
    return QueryQServerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQServerRequest>, I>>(object: I): QueryQServerRequest {
    const message = createBaseQueryQServerRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryQServerResponse(): QueryQServerResponse {
  return {};
}

export const QueryQServerResponse = {
  encode(_: QueryQServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQServerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryQServerResponse {
    return {};
  },

  toJSON(_: QueryQServerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQServerResponse>, I>>(base?: I): QueryQServerResponse {
    return QueryQServerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQServerResponse>, I>>(_: I): QueryQServerResponse {
    const message = createBaseQueryQServerResponse();
    return message;
  },
};

function createBaseQueryQSetsRequest(): QueryQSetsRequest {
  return { status: 0, ignoreStatus: false, contributors: [], containsCards: [], owner: "" };
}

export const QueryQSetsRequest = {
  encode(message: QueryQSetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.ignoreStatus === true) {
      writer.uint32(16).bool(message.ignoreStatus);
    }
    for (const v of message.contributors) {
      writer.uint32(26).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ignoreStatus = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contributors.push(reader.string());
          continue;
        case 4:
          if (tag === 32) {
            message.containsCards.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.containsCards.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSetsRequest {
    return {
      status: isSet(object.status) ? cStatusFromJSON(object.status) : 0,
      ignoreStatus: isSet(object.ignoreStatus) ? Boolean(object.ignoreStatus) : false,
      contributors: Array.isArray(object?.contributors) ? object.contributors.map((e: any) => String(e)) : [],
      containsCards: Array.isArray(object?.containsCards) ? object.containsCards.map((e: any) => Number(e)) : [],
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryQSetsRequest): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = cStatusToJSON(message.status);
    }
    if (message.ignoreStatus === true) {
      obj.ignoreStatus = message.ignoreStatus;
    }
    if (message.contributors?.length) {
      obj.contributors = message.contributors;
    }
    if (message.containsCards?.length) {
      obj.containsCards = message.containsCards.map((e) => Math.round(e));
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSetsRequest>, I>>(base?: I): QueryQSetsRequest {
    return QueryQSetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSetsRequest>, I>>(object: I): QueryQSetsRequest {
    const message = createBaseQueryQSetsRequest();
    message.status = object.status ?? 0;
    message.ignoreStatus = object.ignoreStatus ?? false;
    message.contributors = object.contributors?.map((e) => e) || [];
    message.containsCards = object.containsCards?.map((e) => e) || [];
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryQSetsResponse(): QueryQSetsResponse {
  return { setIds: [] };
}

export const QueryQSetsResponse = {
  encode(message: QueryQSetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.setIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQSetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQSetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.setIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.setIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQSetsResponse {
    return { setIds: Array.isArray(object?.setIds) ? object.setIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: QueryQSetsResponse): unknown {
    const obj: any = {};
    if (message.setIds?.length) {
      obj.setIds = message.setIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQSetsResponse>, I>>(base?: I): QueryQSetsResponse {
    return QueryQSetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQSetsResponse>, I>>(object: I): QueryQSetsResponse {
    const message = createBaseQueryQSetsResponse();
    message.setIds = object.setIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryRarityDistributionRequest(): QueryRarityDistributionRequest {
  return { setId: 0 };
}

export const QueryRarityDistributionRequest = {
  encode(message: QueryRarityDistributionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setId !== 0) {
      writer.uint32(8).uint64(message.setId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRarityDistributionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRarityDistributionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.setId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRarityDistributionRequest {
    return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
  },

  toJSON(message: QueryRarityDistributionRequest): unknown {
    const obj: any = {};
    if (message.setId !== 0) {
      obj.setId = Math.round(message.setId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRarityDistributionRequest>, I>>(base?: I): QueryRarityDistributionRequest {
    return QueryRarityDistributionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRarityDistributionRequest>, I>>(
    object: I,
  ): QueryRarityDistributionRequest {
    const message = createBaseQueryRarityDistributionRequest();
    message.setId = object.setId ?? 0;
    return message;
  },
};

function createBaseQueryRarityDistributionResponse(): QueryRarityDistributionResponse {
  return { current: [], wanted: [] };
}

export const QueryRarityDistributionResponse = {
  encode(message: QueryRarityDistributionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRarityDistributionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRarityDistributionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.current.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.current.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            message.wanted.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wanted.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRarityDistributionResponse {
    return {
      current: Array.isArray(object?.current) ? object.current.map((e: any) => Number(e)) : [],
      wanted: Array.isArray(object?.wanted) ? object.wanted.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: QueryRarityDistributionResponse): unknown {
    const obj: any = {};
    if (message.current?.length) {
      obj.current = message.current.map((e) => Math.round(e));
    }
    if (message.wanted?.length) {
      obj.wanted = message.wanted.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRarityDistributionResponse>, I>>(base?: I): QueryRarityDistributionResponse {
    return QueryRarityDistributionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRarityDistributionResponse>, I>>(
    object: I,
  ): QueryRarityDistributionResponse {
    const message = createBaseQueryRarityDistributionResponse();
    message.current = object.current?.map((e) => e) || [];
    message.wanted = object.wanted?.map((e) => e) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of QCard items. */
  QCard(request: QueryQCardRequest): Promise<OutpCard>;
  /** Queries a list of QCardContent items. */
  QCardContent(request: QueryQCardContentRequest): Promise<QueryQCardContentResponse>;
  /** Queries a list of QUser items. */
  QUser(request: QueryQUserRequest): Promise<User>;
  /** Queries a list of QCardchainInfo items. */
  QCardchainInfo(request: QueryQCardchainInfoRequest): Promise<QueryQCardchainInfoResponse>;
  /** Queries a list of QVotingResults items. */
  QVotingResults(request: QueryQVotingResultsRequest): Promise<QueryQVotingResultsResponse>;
  /** Queries a list of QCards items. */
  QCards(request: QueryQCardsRequest): Promise<QueryQCardsResponse>;
  /** Queries a list of QMatch items. */
  QMatch(request: QueryQMatchRequest): Promise<Match>;
  /** Queries a list of QSet items. */
  QSet(request: QueryQSetRequest): Promise<OutpSet>;
  /** Queries a list of QSellOffer items. */
  QSellOffer(request: QueryQSellOfferRequest): Promise<SellOffer>;
  /** Queries a list of QCouncil items. */
  QCouncil(request: QueryQCouncilRequest): Promise<Council>;
  /** Queries a list of QMatches items. */
  QMatches(request: QueryQMatchesRequest): Promise<QueryQMatchesResponse>;
  /** Queries a list of QSellOffers items. */
  QSellOffers(request: QueryQSellOffersRequest): Promise<QueryQSellOffersResponse>;
  /** Queries a list of QServer items. */
  QServer(request: QueryQServerRequest): Promise<Server>;
  /** Queries a list of QSets items. */
  QSets(request: QueryQSetsRequest): Promise<QueryQSetsResponse>;
  /** Queries a list of RarityDistribution items. */
  RarityDistribution(request: QueryRarityDistributionRequest): Promise<QueryRarityDistributionResponse>;
}

export const QueryServiceName = "DecentralCardGame.cardchain.cardchain.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
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
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  QCard(request: QueryQCardRequest): Promise<OutpCard> {
    const data = QueryQCardRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QCard", data);
    return promise.then((data) => OutpCard.decode(_m0.Reader.create(data)));
  }

  QCardContent(request: QueryQCardContentRequest): Promise<QueryQCardContentResponse> {
    const data = QueryQCardContentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QCardContent", data);
    return promise.then((data) => QueryQCardContentResponse.decode(_m0.Reader.create(data)));
  }

  QUser(request: QueryQUserRequest): Promise<User> {
    const data = QueryQUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QUser", data);
    return promise.then((data) => User.decode(_m0.Reader.create(data)));
  }

  QCardchainInfo(request: QueryQCardchainInfoRequest): Promise<QueryQCardchainInfoResponse> {
    const data = QueryQCardchainInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QCardchainInfo", data);
    return promise.then((data) => QueryQCardchainInfoResponse.decode(_m0.Reader.create(data)));
  }

  QVotingResults(request: QueryQVotingResultsRequest): Promise<QueryQVotingResultsResponse> {
    const data = QueryQVotingResultsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QVotingResults", data);
    return promise.then((data) => QueryQVotingResultsResponse.decode(_m0.Reader.create(data)));
  }

  QCards(request: QueryQCardsRequest): Promise<QueryQCardsResponse> {
    const data = QueryQCardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QCards", data);
    return promise.then((data) => QueryQCardsResponse.decode(_m0.Reader.create(data)));
  }

  QMatch(request: QueryQMatchRequest): Promise<Match> {
    const data = QueryQMatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QMatch", data);
    return promise.then((data) => Match.decode(_m0.Reader.create(data)));
  }

  QSet(request: QueryQSetRequest): Promise<OutpSet> {
    const data = QueryQSetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QSet", data);
    return promise.then((data) => OutpSet.decode(_m0.Reader.create(data)));
  }

  QSellOffer(request: QueryQSellOfferRequest): Promise<SellOffer> {
    const data = QueryQSellOfferRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QSellOffer", data);
    return promise.then((data) => SellOffer.decode(_m0.Reader.create(data)));
  }

  QCouncil(request: QueryQCouncilRequest): Promise<Council> {
    const data = QueryQCouncilRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QCouncil", data);
    return promise.then((data) => Council.decode(_m0.Reader.create(data)));
  }

  QMatches(request: QueryQMatchesRequest): Promise<QueryQMatchesResponse> {
    const data = QueryQMatchesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QMatches", data);
    return promise.then((data) => QueryQMatchesResponse.decode(_m0.Reader.create(data)));
  }

  QSellOffers(request: QueryQSellOffersRequest): Promise<QueryQSellOffersResponse> {
    const data = QueryQSellOffersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QSellOffers", data);
    return promise.then((data) => QueryQSellOffersResponse.decode(_m0.Reader.create(data)));
  }

  QServer(request: QueryQServerRequest): Promise<Server> {
    const data = QueryQServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QServer", data);
    return promise.then((data) => Server.decode(_m0.Reader.create(data)));
  }

  QSets(request: QueryQSetsRequest): Promise<QueryQSetsResponse> {
    const data = QueryQSetsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QSets", data);
    return promise.then((data) => QueryQSetsResponse.decode(_m0.Reader.create(data)));
  }

  RarityDistribution(request: QueryRarityDistributionRequest): Promise<QueryRarityDistributionResponse> {
    const data = QueryRarityDistributionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RarityDistribution", data);
    return promise.then((data) => QueryRarityDistributionResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
