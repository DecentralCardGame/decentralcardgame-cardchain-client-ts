/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { CardRarity, cardRarityFromJSON, cardRarityToJSON } from "./card";
import { Response, responseFromJSON, responseToJSON } from "./council";
import { Outcome, outcomeFromJSON, outcomeToJSON } from "./match";
import { SingleVote, VoteType, voteTypeFromJSON, voteTypeToJSON } from "./voting";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export interface MsgCreateuser {
  creator: string;
  newUser: string;
  alias: string;
}

export interface MsgCreateuserResponse {
}

export interface MsgBuyCardScheme {
  creator: string;
  bid: Coin | undefined;
}

export interface MsgBuyCardSchemeResponse {
  cardId: number;
}

export interface MsgVoteCard {
  creator: string;
  cardId: number;
  voteType: VoteType;
}

export interface MsgVoteCardResponse {
  airdropClaimed: boolean;
}

export interface MsgSaveCardContent {
  creator: string;
  cardId: number;
  content: Uint8Array;
  /**
   * bytes image = 4;
   *  string fullArt = 5;
   */
  notes: string;
  artist: string;
  balanceAnchor: boolean;
}

export interface MsgSaveCardContentResponse {
  airdropClaimed: boolean;
}

export interface MsgTransferCard {
  creator: string;
  cardId: number;
  receiver: string;
}

export interface MsgTransferCardResponse {
}

export interface MsgDonateToCard {
  creator: string;
  cardId: number;
  amount: string;
}

export interface MsgDonateToCardResponse {
}

export interface MsgAddArtwork {
  creator: string;
  cardId: number;
  image: Uint8Array;
  fullArt: boolean;
}

export interface MsgAddArtworkResponse {
}

export interface MsgChangeArtist {
  creator: string;
  cardID: number;
  artist: string;
}

export interface MsgChangeArtistResponse {
}

export interface MsgRegisterForCouncil {
  creator: string;
}

export interface MsgRegisterForCouncilResponse {
}

export interface MsgReportMatch {
  creator: string;
  matchId: number;
  playedCardsA: number[];
  playedCardsB: number[];
  outcome: Outcome;
}

export interface MsgReportMatchResponse {
  matchId: number;
}

export interface MsgApointMatchReporter {
  creator: string;
  reporter: string;
}

export interface MsgApointMatchReporterResponse {
}

export interface MsgCreateSet {
  creator: string;
  name: string;
  artist: string;
  storyWriter: string;
  contributors: string[];
}

export interface MsgCreateSetResponse {
}

export interface MsgAddCardToSet {
  creator: string;
  setId: number;
  cardId: number;
}

export interface MsgAddCardToSetResponse {
}

export interface MsgFinalizeSet {
  creator: string;
  setId: number;
}

export interface MsgFinalizeSetResponse {
}

export interface MsgBuyBoosterPack {
  creator: string;
  setId: number;
}

export interface MsgBuyBoosterPackResponse {
  airdropClaimed: boolean;
}

export interface MsgRemoveCardFromSet {
  creator: string;
  setId: number;
  cardId: number;
}

export interface MsgRemoveCardFromSetResponse {
}

export interface MsgRemoveContributorFromSet {
  creator: string;
  setId: number;
  user: string;
}

export interface MsgRemoveContributorFromSetResponse {
}

export interface MsgAddContributorToSet {
  creator: string;
  setId: number;
  user: string;
}

export interface MsgAddContributorToSetResponse {
}

export interface MsgCreateSellOffer {
  creator: string;
  card: number;
  price: string;
}

export interface MsgCreateSellOfferResponse {
}

export interface MsgBuyCard {
  creator: string;
  sellOfferId: number;
}

export interface MsgBuyCardResponse {
}

export interface MsgRemoveSellOffer {
  creator: string;
  sellOfferId: number;
}

export interface MsgRemoveSellOfferResponse {
}

export interface MsgAddArtworkToSet {
  creator: string;
  setId: number;
  image: Uint8Array;
}

export interface MsgAddArtworkToSetResponse {
}

export interface MsgAddStoryToSet {
  creator: string;
  setId: number;
  story: string;
}

export interface MsgAddStoryToSetResponse {
}

export interface MsgSetCardRarity {
  creator: string;
  cardId: number;
  setId: number;
  rarity: CardRarity;
}

export interface MsgSetCardRarityResponse {
}

export interface MsgCreateCouncil {
  creator: string;
  cardId: number;
}

export interface MsgCreateCouncilResponse {
}

/** Add revision */
export interface MsgCommitCouncilResponse {
  creator: string;
  response: string;
  councilId: number;
  suggestion: string;
}

export interface MsgCommitCouncilResponseResponse {
}

export interface MsgRevealCouncilResponse {
  creator: string;
  response: Response;
  secret: string;
  councilId: number;
}

export interface MsgRevealCouncilResponseResponse {
}

export interface MsgRestartCouncil {
  creator: string;
  councilId: number;
}

export interface MsgRestartCouncilResponse {
}

export interface MsgRewokeCouncilRegistration {
  creator: string;
}

export interface MsgRewokeCouncilRegistrationResponse {
}

export interface MsgConfirmMatch {
  creator: string;
  matchId: number;
  outcome: Outcome;
  votedCards: SingleVote[];
}

export interface MsgConfirmMatchResponse {
}

export interface MsgSetProfileCard {
  creator: string;
  cardId: number;
}

export interface MsgSetProfileCardResponse {
}

export interface MsgOpenBoosterPack {
  creator: string;
  boosterPackId: number;
}

export interface MsgOpenBoosterPackResponse {
  cardIds: number[];
}

export interface MsgTransferBoosterPack {
  creator: string;
  boosterPackId: number;
  receiver: string;
}

export interface MsgTransferBoosterPackResponse {
}

export interface MsgSetSetStoryWriter {
  creator: string;
  setId: number;
  storyWriter: string;
}

export interface MsgSetSetStoryWriterResponse {
}

export interface MsgSetSetArtist {
  creator: string;
  setId: number;
  artist: string;
}

export interface MsgSetSetArtistResponse {
}

export interface MsgSetUserWebsite {
  creator: string;
  website: string;
}

export interface MsgSetUserWebsiteResponse {
}

export interface MsgSetUserBiography {
  creator: string;
  biography: string;
}

export interface MsgSetUserBiographyResponse {
}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgMultiVoteCard {
  creator: string;
  votes: SingleVote[];
}

export interface MsgMultiVoteCardResponse {
}

export interface MsgOpenMatch {
  creator: string;
  playerA: string;
  playerB: string;
  playerADeck: number[];
  playerBDeck: number[];
}

export interface MsgOpenMatchResponse {
  matchId: number;
}

export interface MsgSetSetName {
  creator: string;
  setId: number;
  name: string;
}

export interface MsgSetSetNameResponse {
}

export interface MsgChangeAlias {
  creator: string;
  alias: string;
}

export interface MsgChangeAliasResponse {
}

export interface MsgInviteEarlyAccess {
  creator: string;
  user: string;
}

export interface MsgInviteEarlyAccessResponse {
}

export interface MsgDisinviteEarlyAccess {
  creator: string;
  user: string;
}

export interface MsgDisinviteEarlyAccessResponse {
}

export interface MsgConnectZealyAccount {
  creator: string;
  zealyId: string;
}

export interface MsgConnectZealyAccountResponse {
}

export interface MsgEncounterCreate {
  creator: string;
  name: string;
  Drawlist: number[];
  parameters: { [key: string]: string };
  image: Uint8Array;
}

export interface MsgEncounterCreate_ParametersEntry {
  key: string;
  value: string;
}

export interface MsgEncounterCreateResponse {
}

export interface MsgEncounterDo {
  creator: string;
  encounterId: number;
  user: string;
}

export interface MsgEncounterDoResponse {
}

export interface MsgEncounterClose {
  creator: string;
  encounterId: number;
  user: string;
  won: boolean;
}

export interface MsgEncounterCloseResponse {
}

function createBaseMsgCreateuser(): MsgCreateuser {
  return { creator: "", newUser: "", alias: "" };
}

export const MsgCreateuser = {
  encode(message: MsgCreateuser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateuser {
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

  fromJSON(object: any): MsgCreateuser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      newUser: isSet(object.newUser) ? String(object.newUser) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: MsgCreateuser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.newUser !== undefined && (obj.newUser = message.newUser);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateuser>, I>>(object: I): MsgCreateuser {
    const message = createBaseMsgCreateuser();
    message.creator = object.creator ?? "";
    message.newUser = object.newUser ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseMsgCreateuserResponse(): MsgCreateuserResponse {
  return {};
}

export const MsgCreateuserResponse = {
  encode(_: MsgCreateuserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateuserResponse {
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

  fromJSON(_: any): MsgCreateuserResponse {
    return {};
  },

  toJSON(_: MsgCreateuserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateuserResponse>, I>>(_: I): MsgCreateuserResponse {
    const message = createBaseMsgCreateuserResponse();
    return message;
  },
};

function createBaseMsgBuyCardScheme(): MsgBuyCardScheme {
  return { creator: "", bid: undefined };
}

export const MsgBuyCardScheme = {
  encode(message: MsgBuyCardScheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCardScheme {
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

  fromJSON(object: any): MsgBuyCardScheme {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
    };
  },

  toJSON(message: MsgBuyCardScheme): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bid !== undefined && (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCardScheme>, I>>(object: I): MsgBuyCardScheme {
    const message = createBaseMsgBuyCardScheme();
    message.creator = object.creator ?? "";
    message.bid = (object.bid !== undefined && object.bid !== null) ? Coin.fromPartial(object.bid) : undefined;
    return message;
  },
};

function createBaseMsgBuyCardSchemeResponse(): MsgBuyCardSchemeResponse {
  return { cardId: 0 };
}

export const MsgBuyCardSchemeResponse = {
  encode(message: MsgBuyCardSchemeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== 0) {
      writer.uint32(8).uint64(message.cardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCardSchemeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyCardSchemeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCardSchemeResponse {
    return { cardId: isSet(object.cardId) ? Number(object.cardId) : 0 };
  },

  toJSON(message: MsgBuyCardSchemeResponse): unknown {
    const obj: any = {};
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCardSchemeResponse>, I>>(object: I): MsgBuyCardSchemeResponse {
    const message = createBaseMsgBuyCardSchemeResponse();
    message.cardId = object.cardId ?? 0;
    return message;
  },
};

function createBaseMsgVoteCard(): MsgVoteCard {
  return { creator: "", cardId: 0, voteType: 0 };
}

export const MsgVoteCard = {
  encode(message: MsgVoteCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteCard {
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
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.voteType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoteCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0,
    };
  },

  toJSON(message: MsgVoteCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.voteType !== undefined && (obj.voteType = voteTypeToJSON(message.voteType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteCard>, I>>(object: I): MsgVoteCard {
    const message = createBaseMsgVoteCard();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    message.voteType = object.voteType ?? 0;
    return message;
  },
};

function createBaseMsgVoteCardResponse(): MsgVoteCardResponse {
  return { airdropClaimed: false };
}

export const MsgVoteCardResponse = {
  encode(message: MsgVoteCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteCardResponse {
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

  fromJSON(object: any): MsgVoteCardResponse {
    return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
  },

  toJSON(message: MsgVoteCardResponse): unknown {
    const obj: any = {};
    message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteCardResponse>, I>>(object: I): MsgVoteCardResponse {
    const message = createBaseMsgVoteCardResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
};

function createBaseMsgSaveCardContent(): MsgSaveCardContent {
  return { creator: "", cardId: 0, content: new Uint8Array(), notes: "", artist: "", balanceAnchor: false };
}

export const MsgSaveCardContent = {
  encode(message: MsgSaveCardContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveCardContent {
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
          message.cardId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgSaveCardContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(),
      notes: isSet(object.notes) ? String(object.notes) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
    };
  },

  toJSON(message: MsgSaveCardContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.content !== undefined
      && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    message.notes !== undefined && (obj.notes = message.notes);
    message.artist !== undefined && (obj.artist = message.artist);
    message.balanceAnchor !== undefined && (obj.balanceAnchor = message.balanceAnchor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSaveCardContent>, I>>(object: I): MsgSaveCardContent {
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

function createBaseMsgSaveCardContentResponse(): MsgSaveCardContentResponse {
  return { airdropClaimed: false };
}

export const MsgSaveCardContentResponse = {
  encode(message: MsgSaveCardContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveCardContentResponse {
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

  fromJSON(object: any): MsgSaveCardContentResponse {
    return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
  },

  toJSON(message: MsgSaveCardContentResponse): unknown {
    const obj: any = {};
    message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSaveCardContentResponse>, I>>(object: I): MsgSaveCardContentResponse {
    const message = createBaseMsgSaveCardContentResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
};

function createBaseMsgTransferCard(): MsgTransferCard {
  return { creator: "", cardId: 0, receiver: "" };
}

export const MsgTransferCard = {
  encode(message: MsgTransferCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCard {
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
          message.cardId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgTransferCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: MsgTransferCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferCard>, I>>(object: I): MsgTransferCard {
    const message = createBaseMsgTransferCard();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseMsgTransferCardResponse(): MsgTransferCardResponse {
  return {};
}

export const MsgTransferCardResponse = {
  encode(_: MsgTransferCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCardResponse {
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

  fromJSON(_: any): MsgTransferCardResponse {
    return {};
  },

  toJSON(_: MsgTransferCardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferCardResponse>, I>>(_: I): MsgTransferCardResponse {
    const message = createBaseMsgTransferCardResponse();
    return message;
  },
};

function createBaseMsgDonateToCard(): MsgDonateToCard {
  return { creator: "", cardId: 0, amount: "" };
}

export const MsgDonateToCard = {
  encode(message: MsgDonateToCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateToCard {
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
          message.cardId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgDonateToCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgDonateToCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDonateToCard>, I>>(object: I): MsgDonateToCard {
    const message = createBaseMsgDonateToCard();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgDonateToCardResponse(): MsgDonateToCardResponse {
  return {};
}

export const MsgDonateToCardResponse = {
  encode(_: MsgDonateToCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateToCardResponse {
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

  fromJSON(_: any): MsgDonateToCardResponse {
    return {};
  },

  toJSON(_: MsgDonateToCardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDonateToCardResponse>, I>>(_: I): MsgDonateToCardResponse {
    const message = createBaseMsgDonateToCardResponse();
    return message;
  },
};

function createBaseMsgAddArtwork(): MsgAddArtwork {
  return { creator: "", cardId: 0, image: new Uint8Array(), fullArt: false };
}

export const MsgAddArtwork = {
  encode(message: MsgAddArtwork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArtwork {
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
          message.cardId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgAddArtwork {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
      fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
    };
  },

  toJSON(message: MsgAddArtwork): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.image !== undefined
      && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
    message.fullArt !== undefined && (obj.fullArt = message.fullArt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddArtwork>, I>>(object: I): MsgAddArtwork {
    const message = createBaseMsgAddArtwork();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    message.image = object.image ?? new Uint8Array();
    message.fullArt = object.fullArt ?? false;
    return message;
  },
};

function createBaseMsgAddArtworkResponse(): MsgAddArtworkResponse {
  return {};
}

export const MsgAddArtworkResponse = {
  encode(_: MsgAddArtworkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArtworkResponse {
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

  fromJSON(_: any): MsgAddArtworkResponse {
    return {};
  },

  toJSON(_: MsgAddArtworkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddArtworkResponse>, I>>(_: I): MsgAddArtworkResponse {
    const message = createBaseMsgAddArtworkResponse();
    return message;
  },
};

function createBaseMsgChangeArtist(): MsgChangeArtist {
  return { creator: "", cardID: 0, artist: "" };
}

export const MsgChangeArtist = {
  encode(message: MsgChangeArtist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeArtist {
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
          message.cardID = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgChangeArtist {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardID: isSet(object.cardID) ? Number(object.cardID) : 0,
      artist: isSet(object.artist) ? String(object.artist) : "",
    };
  },

  toJSON(message: MsgChangeArtist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardID !== undefined && (obj.cardID = Math.round(message.cardID));
    message.artist !== undefined && (obj.artist = message.artist);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeArtist>, I>>(object: I): MsgChangeArtist {
    const message = createBaseMsgChangeArtist();
    message.creator = object.creator ?? "";
    message.cardID = object.cardID ?? 0;
    message.artist = object.artist ?? "";
    return message;
  },
};

function createBaseMsgChangeArtistResponse(): MsgChangeArtistResponse {
  return {};
}

export const MsgChangeArtistResponse = {
  encode(_: MsgChangeArtistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeArtistResponse {
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

  fromJSON(_: any): MsgChangeArtistResponse {
    return {};
  },

  toJSON(_: MsgChangeArtistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeArtistResponse>, I>>(_: I): MsgChangeArtistResponse {
    const message = createBaseMsgChangeArtistResponse();
    return message;
  },
};

function createBaseMsgRegisterForCouncil(): MsgRegisterForCouncil {
  return { creator: "" };
}

export const MsgRegisterForCouncil = {
  encode(message: MsgRegisterForCouncil, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterForCouncil {
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

  fromJSON(object: any): MsgRegisterForCouncil {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRegisterForCouncil): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterForCouncil>, I>>(object: I): MsgRegisterForCouncil {
    const message = createBaseMsgRegisterForCouncil();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRegisterForCouncilResponse(): MsgRegisterForCouncilResponse {
  return {};
}

export const MsgRegisterForCouncilResponse = {
  encode(_: MsgRegisterForCouncilResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterForCouncilResponse {
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

  fromJSON(_: any): MsgRegisterForCouncilResponse {
    return {};
  },

  toJSON(_: MsgRegisterForCouncilResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterForCouncilResponse>, I>>(_: I): MsgRegisterForCouncilResponse {
    const message = createBaseMsgRegisterForCouncilResponse();
    return message;
  },
};

function createBaseMsgReportMatch(): MsgReportMatch {
  return { creator: "", matchId: 0, playedCardsA: [], playedCardsB: [], outcome: 0 };
}

export const MsgReportMatch = {
  encode(message: MsgReportMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportMatch {
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
          message.matchId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCardsA.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.playedCardsA.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCardsB.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.playedCardsB.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.outcome = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReportMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      matchId: isSet(object.matchId) ? Number(object.matchId) : 0,
      playedCardsA: Array.isArray(object?.playedCardsA) ? object.playedCardsA.map((e: any) => Number(e)) : [],
      playedCardsB: Array.isArray(object?.playedCardsB) ? object.playedCardsB.map((e: any) => Number(e)) : [],
      outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
    };
  },

  toJSON(message: MsgReportMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    if (message.playedCardsA) {
      obj.playedCardsA = message.playedCardsA.map((e) => Math.round(e));
    } else {
      obj.playedCardsA = [];
    }
    if (message.playedCardsB) {
      obj.playedCardsB = message.playedCardsB.map((e) => Math.round(e));
    } else {
      obj.playedCardsB = [];
    }
    message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportMatch>, I>>(object: I): MsgReportMatch {
    const message = createBaseMsgReportMatch();
    message.creator = object.creator ?? "";
    message.matchId = object.matchId ?? 0;
    message.playedCardsA = object.playedCardsA?.map((e) => e) || [];
    message.playedCardsB = object.playedCardsB?.map((e) => e) || [];
    message.outcome = object.outcome ?? 0;
    return message;
  },
};

function createBaseMsgReportMatchResponse(): MsgReportMatchResponse {
  return { matchId: 0 };
}

export const MsgReportMatchResponse = {
  encode(message: MsgReportMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== 0) {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportMatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReportMatchResponse {
    return { matchId: isSet(object.matchId) ? Number(object.matchId) : 0 };
  },

  toJSON(message: MsgReportMatchResponse): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportMatchResponse>, I>>(object: I): MsgReportMatchResponse {
    const message = createBaseMsgReportMatchResponse();
    message.matchId = object.matchId ?? 0;
    return message;
  },
};

function createBaseMsgApointMatchReporter(): MsgApointMatchReporter {
  return { creator: "", reporter: "" };
}

export const MsgApointMatchReporter = {
  encode(message: MsgApointMatchReporter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApointMatchReporter {
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

  fromJSON(object: any): MsgApointMatchReporter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
    };
  },

  toJSON(message: MsgApointMatchReporter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApointMatchReporter>, I>>(object: I): MsgApointMatchReporter {
    const message = createBaseMsgApointMatchReporter();
    message.creator = object.creator ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
};

function createBaseMsgApointMatchReporterResponse(): MsgApointMatchReporterResponse {
  return {};
}

export const MsgApointMatchReporterResponse = {
  encode(_: MsgApointMatchReporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApointMatchReporterResponse {
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

  fromJSON(_: any): MsgApointMatchReporterResponse {
    return {};
  },

  toJSON(_: MsgApointMatchReporterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApointMatchReporterResponse>, I>>(_: I): MsgApointMatchReporterResponse {
    const message = createBaseMsgApointMatchReporterResponse();
    return message;
  },
};

function createBaseMsgCreateSet(): MsgCreateSet {
  return { creator: "", name: "", artist: "", storyWriter: "", contributors: [] };
}

export const MsgCreateSet = {
  encode(message: MsgCreateSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSet {
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

  fromJSON(object: any): MsgCreateSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
      contributors: Array.isArray(object?.contributors) ? object.contributors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgCreateSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.artist !== undefined && (obj.artist = message.artist);
    message.storyWriter !== undefined && (obj.storyWriter = message.storyWriter);
    if (message.contributors) {
      obj.contributors = message.contributors.map((e) => e);
    } else {
      obj.contributors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSet>, I>>(object: I): MsgCreateSet {
    const message = createBaseMsgCreateSet();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.artist = object.artist ?? "";
    message.storyWriter = object.storyWriter ?? "";
    message.contributors = object.contributors?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreateSetResponse(): MsgCreateSetResponse {
  return {};
}

export const MsgCreateSetResponse = {
  encode(_: MsgCreateSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSetResponse {
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

  fromJSON(_: any): MsgCreateSetResponse {
    return {};
  },

  toJSON(_: MsgCreateSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSetResponse>, I>>(_: I): MsgCreateSetResponse {
    const message = createBaseMsgCreateSetResponse();
    return message;
  },
};

function createBaseMsgAddCardToSet(): MsgAddCardToSet {
  return { creator: "", setId: 0, cardId: 0 };
}

export const MsgAddCardToSet = {
  encode(message: MsgAddCardToSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCardToSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCardToSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
    };
  },

  toJSON(message: MsgAddCardToSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddCardToSet>, I>>(object: I): MsgAddCardToSet {
    const message = createBaseMsgAddCardToSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.cardId = object.cardId ?? 0;
    return message;
  },
};

function createBaseMsgAddCardToSetResponse(): MsgAddCardToSetResponse {
  return {};
}

export const MsgAddCardToSetResponse = {
  encode(_: MsgAddCardToSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCardToSetResponse {
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

  fromJSON(_: any): MsgAddCardToSetResponse {
    return {};
  },

  toJSON(_: MsgAddCardToSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddCardToSetResponse>, I>>(_: I): MsgAddCardToSetResponse {
    const message = createBaseMsgAddCardToSetResponse();
    return message;
  },
};

function createBaseMsgFinalizeSet(): MsgFinalizeSet {
  return { creator: "", setId: 0 };
}

export const MsgFinalizeSet = {
  encode(message: MsgFinalizeSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== 0) {
      writer.uint32(16).uint64(message.setId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinalizeSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
    };
  },

  toJSON(message: MsgFinalizeSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeSet>, I>>(object: I): MsgFinalizeSet {
    const message = createBaseMsgFinalizeSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    return message;
  },
};

function createBaseMsgFinalizeSetResponse(): MsgFinalizeSetResponse {
  return {};
}

export const MsgFinalizeSetResponse = {
  encode(_: MsgFinalizeSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSetResponse {
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

  fromJSON(_: any): MsgFinalizeSetResponse {
    return {};
  },

  toJSON(_: MsgFinalizeSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeSetResponse>, I>>(_: I): MsgFinalizeSetResponse {
    const message = createBaseMsgFinalizeSetResponse();
    return message;
  },
};

function createBaseMsgBuyBoosterPack(): MsgBuyBoosterPack {
  return { creator: "", setId: 0 };
}

export const MsgBuyBoosterPack = {
  encode(message: MsgBuyBoosterPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== 0) {
      writer.uint32(16).uint64(message.setId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBoosterPack {
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
          message.setId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBoosterPack {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
    };
  },

  toJSON(message: MsgBuyBoosterPack): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBoosterPack>, I>>(object: I): MsgBuyBoosterPack {
    const message = createBaseMsgBuyBoosterPack();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    return message;
  },
};

function createBaseMsgBuyBoosterPackResponse(): MsgBuyBoosterPackResponse {
  return { airdropClaimed: false };
}

export const MsgBuyBoosterPackResponse = {
  encode(message: MsgBuyBoosterPackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBoosterPackResponse {
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

  fromJSON(object: any): MsgBuyBoosterPackResponse {
    return { airdropClaimed: isSet(object.airdropClaimed) ? Boolean(object.airdropClaimed) : false };
  },

  toJSON(message: MsgBuyBoosterPackResponse): unknown {
    const obj: any = {};
    message.airdropClaimed !== undefined && (obj.airdropClaimed = message.airdropClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBoosterPackResponse>, I>>(object: I): MsgBuyBoosterPackResponse {
    const message = createBaseMsgBuyBoosterPackResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
};

function createBaseMsgRemoveCardFromSet(): MsgRemoveCardFromSet {
  return { creator: "", setId: 0, cardId: 0 };
}

export const MsgRemoveCardFromSet = {
  encode(message: MsgRemoveCardFromSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCardFromSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveCardFromSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
    };
  },

  toJSON(message: MsgRemoveCardFromSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveCardFromSet>, I>>(object: I): MsgRemoveCardFromSet {
    const message = createBaseMsgRemoveCardFromSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.cardId = object.cardId ?? 0;
    return message;
  },
};

function createBaseMsgRemoveCardFromSetResponse(): MsgRemoveCardFromSetResponse {
  return {};
}

export const MsgRemoveCardFromSetResponse = {
  encode(_: MsgRemoveCardFromSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCardFromSetResponse {
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

  fromJSON(_: any): MsgRemoveCardFromSetResponse {
    return {};
  },

  toJSON(_: MsgRemoveCardFromSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveCardFromSetResponse>, I>>(_: I): MsgRemoveCardFromSetResponse {
    const message = createBaseMsgRemoveCardFromSetResponse();
    return message;
  },
};

function createBaseMsgRemoveContributorFromSet(): MsgRemoveContributorFromSet {
  return { creator: "", setId: 0, user: "" };
}

export const MsgRemoveContributorFromSet = {
  encode(message: MsgRemoveContributorFromSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveContributorFromSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgRemoveContributorFromSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgRemoveContributorFromSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveContributorFromSet>, I>>(object: I): MsgRemoveContributorFromSet {
    const message = createBaseMsgRemoveContributorFromSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgRemoveContributorFromSetResponse(): MsgRemoveContributorFromSetResponse {
  return {};
}

export const MsgRemoveContributorFromSetResponse = {
  encode(_: MsgRemoveContributorFromSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveContributorFromSetResponse {
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

  fromJSON(_: any): MsgRemoveContributorFromSetResponse {
    return {};
  },

  toJSON(_: MsgRemoveContributorFromSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveContributorFromSetResponse>, I>>(
    _: I,
  ): MsgRemoveContributorFromSetResponse {
    const message = createBaseMsgRemoveContributorFromSetResponse();
    return message;
  },
};

function createBaseMsgAddContributorToSet(): MsgAddContributorToSet {
  return { creator: "", setId: 0, user: "" };
}

export const MsgAddContributorToSet = {
  encode(message: MsgAddContributorToSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddContributorToSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgAddContributorToSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgAddContributorToSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddContributorToSet>, I>>(object: I): MsgAddContributorToSet {
    const message = createBaseMsgAddContributorToSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgAddContributorToSetResponse(): MsgAddContributorToSetResponse {
  return {};
}

export const MsgAddContributorToSetResponse = {
  encode(_: MsgAddContributorToSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddContributorToSetResponse {
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

  fromJSON(_: any): MsgAddContributorToSetResponse {
    return {};
  },

  toJSON(_: MsgAddContributorToSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddContributorToSetResponse>, I>>(_: I): MsgAddContributorToSetResponse {
    const message = createBaseMsgAddContributorToSetResponse();
    return message;
  },
};

function createBaseMsgCreateSellOffer(): MsgCreateSellOffer {
  return { creator: "", card: 0, price: "" };
}

export const MsgCreateSellOffer = {
  encode(message: MsgCreateSellOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSellOffer {
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
          message.card = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgCreateSellOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      card: isSet(object.card) ? Number(object.card) : 0,
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: MsgCreateSellOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.card !== undefined && (obj.card = Math.round(message.card));
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSellOffer>, I>>(object: I): MsgCreateSellOffer {
    const message = createBaseMsgCreateSellOffer();
    message.creator = object.creator ?? "";
    message.card = object.card ?? 0;
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseMsgCreateSellOfferResponse(): MsgCreateSellOfferResponse {
  return {};
}

export const MsgCreateSellOfferResponse = {
  encode(_: MsgCreateSellOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSellOfferResponse {
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

  fromJSON(_: any): MsgCreateSellOfferResponse {
    return {};
  },

  toJSON(_: MsgCreateSellOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSellOfferResponse>, I>>(_: I): MsgCreateSellOfferResponse {
    const message = createBaseMsgCreateSellOfferResponse();
    return message;
  },
};

function createBaseMsgBuyCard(): MsgBuyCard {
  return { creator: "", sellOfferId: 0 };
}

export const MsgBuyCard = {
  encode(message: MsgBuyCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sellOfferId !== 0) {
      writer.uint32(16).uint64(message.sellOfferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCard {
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
          message.sellOfferId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0,
    };
  },

  toJSON(message: MsgBuyCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCard>, I>>(object: I): MsgBuyCard {
    const message = createBaseMsgBuyCard();
    message.creator = object.creator ?? "";
    message.sellOfferId = object.sellOfferId ?? 0;
    return message;
  },
};

function createBaseMsgBuyCardResponse(): MsgBuyCardResponse {
  return {};
}

export const MsgBuyCardResponse = {
  encode(_: MsgBuyCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCardResponse {
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

  fromJSON(_: any): MsgBuyCardResponse {
    return {};
  },

  toJSON(_: MsgBuyCardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCardResponse>, I>>(_: I): MsgBuyCardResponse {
    const message = createBaseMsgBuyCardResponse();
    return message;
  },
};

function createBaseMsgRemoveSellOffer(): MsgRemoveSellOffer {
  return { creator: "", sellOfferId: 0 };
}

export const MsgRemoveSellOffer = {
  encode(message: MsgRemoveSellOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sellOfferId !== 0) {
      writer.uint32(16).uint64(message.sellOfferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSellOffer {
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
          message.sellOfferId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSellOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0,
    };
  },

  toJSON(message: MsgRemoveSellOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveSellOffer>, I>>(object: I): MsgRemoveSellOffer {
    const message = createBaseMsgRemoveSellOffer();
    message.creator = object.creator ?? "";
    message.sellOfferId = object.sellOfferId ?? 0;
    return message;
  },
};

function createBaseMsgRemoveSellOfferResponse(): MsgRemoveSellOfferResponse {
  return {};
}

export const MsgRemoveSellOfferResponse = {
  encode(_: MsgRemoveSellOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSellOfferResponse {
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

  fromJSON(_: any): MsgRemoveSellOfferResponse {
    return {};
  },

  toJSON(_: MsgRemoveSellOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveSellOfferResponse>, I>>(_: I): MsgRemoveSellOfferResponse {
    const message = createBaseMsgRemoveSellOfferResponse();
    return message;
  },
};

function createBaseMsgAddArtworkToSet(): MsgAddArtworkToSet {
  return { creator: "", setId: 0, image: new Uint8Array() };
}

export const MsgAddArtworkToSet = {
  encode(message: MsgAddArtworkToSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArtworkToSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgAddArtworkToSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
    };
  },

  toJSON(message: MsgAddArtworkToSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.image !== undefined
      && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddArtworkToSet>, I>>(object: I): MsgAddArtworkToSet {
    const message = createBaseMsgAddArtworkToSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.image = object.image ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgAddArtworkToSetResponse(): MsgAddArtworkToSetResponse {
  return {};
}

export const MsgAddArtworkToSetResponse = {
  encode(_: MsgAddArtworkToSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArtworkToSetResponse {
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

  fromJSON(_: any): MsgAddArtworkToSetResponse {
    return {};
  },

  toJSON(_: MsgAddArtworkToSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddArtworkToSetResponse>, I>>(_: I): MsgAddArtworkToSetResponse {
    const message = createBaseMsgAddArtworkToSetResponse();
    return message;
  },
};

function createBaseMsgAddStoryToSet(): MsgAddStoryToSet {
  return { creator: "", setId: 0, story: "" };
}

export const MsgAddStoryToSet = {
  encode(message: MsgAddStoryToSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStoryToSet {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgAddStoryToSet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      story: isSet(object.story) ? String(object.story) : "",
    };
  },

  toJSON(message: MsgAddStoryToSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.story !== undefined && (obj.story = message.story);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddStoryToSet>, I>>(object: I): MsgAddStoryToSet {
    const message = createBaseMsgAddStoryToSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.story = object.story ?? "";
    return message;
  },
};

function createBaseMsgAddStoryToSetResponse(): MsgAddStoryToSetResponse {
  return {};
}

export const MsgAddStoryToSetResponse = {
  encode(_: MsgAddStoryToSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStoryToSetResponse {
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

  fromJSON(_: any): MsgAddStoryToSetResponse {
    return {};
  },

  toJSON(_: MsgAddStoryToSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddStoryToSetResponse>, I>>(_: I): MsgAddStoryToSetResponse {
    const message = createBaseMsgAddStoryToSetResponse();
    return message;
  },
};

function createBaseMsgSetCardRarity(): MsgSetCardRarity {
  return { creator: "", cardId: 0, setId: 0, rarity: 0 };
}

export const MsgSetCardRarity = {
  encode(message: MsgSetCardRarity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCardRarity {
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
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.setId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.rarity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCardRarity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
    };
  },

  toJSON(message: MsgSetCardRarity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.rarity !== undefined && (obj.rarity = cardRarityToJSON(message.rarity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCardRarity>, I>>(object: I): MsgSetCardRarity {
    const message = createBaseMsgSetCardRarity();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    message.setId = object.setId ?? 0;
    message.rarity = object.rarity ?? 0;
    return message;
  },
};

function createBaseMsgSetCardRarityResponse(): MsgSetCardRarityResponse {
  return {};
}

export const MsgSetCardRarityResponse = {
  encode(_: MsgSetCardRarityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCardRarityResponse {
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

  fromJSON(_: any): MsgSetCardRarityResponse {
    return {};
  },

  toJSON(_: MsgSetCardRarityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCardRarityResponse>, I>>(_: I): MsgSetCardRarityResponse {
    const message = createBaseMsgSetCardRarityResponse();
    return message;
  },
};

function createBaseMsgCreateCouncil(): MsgCreateCouncil {
  return { creator: "", cardId: 0 };
}

export const MsgCreateCouncil = {
  encode(message: MsgCreateCouncil, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== 0) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCouncil {
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
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCouncil {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
    };
  },

  toJSON(message: MsgCreateCouncil): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCouncil>, I>>(object: I): MsgCreateCouncil {
    const message = createBaseMsgCreateCouncil();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    return message;
  },
};

function createBaseMsgCreateCouncilResponse(): MsgCreateCouncilResponse {
  return {};
}

export const MsgCreateCouncilResponse = {
  encode(_: MsgCreateCouncilResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCouncilResponse {
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

  fromJSON(_: any): MsgCreateCouncilResponse {
    return {};
  },

  toJSON(_: MsgCreateCouncilResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCouncilResponse>, I>>(_: I): MsgCreateCouncilResponse {
    const message = createBaseMsgCreateCouncilResponse();
    return message;
  },
};

function createBaseMsgCommitCouncilResponse(): MsgCommitCouncilResponse {
  return { creator: "", response: "", councilId: 0, suggestion: "" };
}

export const MsgCommitCouncilResponse = {
  encode(message: MsgCommitCouncilResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitCouncilResponse {
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
          message.councilId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgCommitCouncilResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      response: isSet(object.response) ? String(object.response) : "",
      councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
      suggestion: isSet(object.suggestion) ? String(object.suggestion) : "",
    };
  },

  toJSON(message: MsgCommitCouncilResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.response !== undefined && (obj.response = message.response);
    message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
    message.suggestion !== undefined && (obj.suggestion = message.suggestion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommitCouncilResponse>, I>>(object: I): MsgCommitCouncilResponse {
    const message = createBaseMsgCommitCouncilResponse();
    message.creator = object.creator ?? "";
    message.response = object.response ?? "";
    message.councilId = object.councilId ?? 0;
    message.suggestion = object.suggestion ?? "";
    return message;
  },
};

function createBaseMsgCommitCouncilResponseResponse(): MsgCommitCouncilResponseResponse {
  return {};
}

export const MsgCommitCouncilResponseResponse = {
  encode(_: MsgCommitCouncilResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitCouncilResponseResponse {
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

  fromJSON(_: any): MsgCommitCouncilResponseResponse {
    return {};
  },

  toJSON(_: MsgCommitCouncilResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommitCouncilResponseResponse>, I>>(
    _: I,
  ): MsgCommitCouncilResponseResponse {
    const message = createBaseMsgCommitCouncilResponseResponse();
    return message;
  },
};

function createBaseMsgRevealCouncilResponse(): MsgRevealCouncilResponse {
  return { creator: "", response: 0, secret: "", councilId: 0 };
}

export const MsgRevealCouncilResponse = {
  encode(message: MsgRevealCouncilResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevealCouncilResponse {
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
          message.response = reader.int32() as any;
          break;
        case 3:
          message.secret = reader.string();
          break;
        case 4:
          message.councilId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevealCouncilResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      response: isSet(object.response) ? responseFromJSON(object.response) : 0,
      secret: isSet(object.secret) ? String(object.secret) : "",
      councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
    };
  },

  toJSON(message: MsgRevealCouncilResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.response !== undefined && (obj.response = responseToJSON(message.response));
    message.secret !== undefined && (obj.secret = message.secret);
    message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevealCouncilResponse>, I>>(object: I): MsgRevealCouncilResponse {
    const message = createBaseMsgRevealCouncilResponse();
    message.creator = object.creator ?? "";
    message.response = object.response ?? 0;
    message.secret = object.secret ?? "";
    message.councilId = object.councilId ?? 0;
    return message;
  },
};

function createBaseMsgRevealCouncilResponseResponse(): MsgRevealCouncilResponseResponse {
  return {};
}

export const MsgRevealCouncilResponseResponse = {
  encode(_: MsgRevealCouncilResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevealCouncilResponseResponse {
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

  fromJSON(_: any): MsgRevealCouncilResponseResponse {
    return {};
  },

  toJSON(_: MsgRevealCouncilResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevealCouncilResponseResponse>, I>>(
    _: I,
  ): MsgRevealCouncilResponseResponse {
    const message = createBaseMsgRevealCouncilResponseResponse();
    return message;
  },
};

function createBaseMsgRestartCouncil(): MsgRestartCouncil {
  return { creator: "", councilId: 0 };
}

export const MsgRestartCouncil = {
  encode(message: MsgRestartCouncil, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.councilId !== 0) {
      writer.uint32(16).uint64(message.councilId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestartCouncil {
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
          message.councilId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRestartCouncil {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      councilId: isSet(object.councilId) ? Number(object.councilId) : 0,
    };
  },

  toJSON(message: MsgRestartCouncil): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRestartCouncil>, I>>(object: I): MsgRestartCouncil {
    const message = createBaseMsgRestartCouncil();
    message.creator = object.creator ?? "";
    message.councilId = object.councilId ?? 0;
    return message;
  },
};

function createBaseMsgRestartCouncilResponse(): MsgRestartCouncilResponse {
  return {};
}

export const MsgRestartCouncilResponse = {
  encode(_: MsgRestartCouncilResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestartCouncilResponse {
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

  fromJSON(_: any): MsgRestartCouncilResponse {
    return {};
  },

  toJSON(_: MsgRestartCouncilResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRestartCouncilResponse>, I>>(_: I): MsgRestartCouncilResponse {
    const message = createBaseMsgRestartCouncilResponse();
    return message;
  },
};

function createBaseMsgRewokeCouncilRegistration(): MsgRewokeCouncilRegistration {
  return { creator: "" };
}

export const MsgRewokeCouncilRegistration = {
  encode(message: MsgRewokeCouncilRegistration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewokeCouncilRegistration {
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

  fromJSON(object: any): MsgRewokeCouncilRegistration {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRewokeCouncilRegistration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRewokeCouncilRegistration>, I>>(object: I): MsgRewokeCouncilRegistration {
    const message = createBaseMsgRewokeCouncilRegistration();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRewokeCouncilRegistrationResponse(): MsgRewokeCouncilRegistrationResponse {
  return {};
}

export const MsgRewokeCouncilRegistrationResponse = {
  encode(_: MsgRewokeCouncilRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewokeCouncilRegistrationResponse {
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

  fromJSON(_: any): MsgRewokeCouncilRegistrationResponse {
    return {};
  },

  toJSON(_: MsgRewokeCouncilRegistrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRewokeCouncilRegistrationResponse>, I>>(
    _: I,
  ): MsgRewokeCouncilRegistrationResponse {
    const message = createBaseMsgRewokeCouncilRegistrationResponse();
    return message;
  },
};

function createBaseMsgConfirmMatch(): MsgConfirmMatch {
  return { creator: "", matchId: 0, outcome: 0, votedCards: [] };
}

export const MsgConfirmMatch = {
  encode(message: MsgConfirmMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      SingleVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmMatch {
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
          message.matchId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.outcome = reader.int32() as any;
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

  fromJSON(object: any): MsgConfirmMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      matchId: isSet(object.matchId) ? Number(object.matchId) : 0,
      outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
      votedCards: Array.isArray(object?.votedCards) ? object.votedCards.map((e: any) => SingleVote.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgConfirmMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
    if (message.votedCards) {
      obj.votedCards = message.votedCards.map((e) => e ? SingleVote.toJSON(e) : undefined);
    } else {
      obj.votedCards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmMatch>, I>>(object: I): MsgConfirmMatch {
    const message = createBaseMsgConfirmMatch();
    message.creator = object.creator ?? "";
    message.matchId = object.matchId ?? 0;
    message.outcome = object.outcome ?? 0;
    message.votedCards = object.votedCards?.map((e) => SingleVote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgConfirmMatchResponse(): MsgConfirmMatchResponse {
  return {};
}

export const MsgConfirmMatchResponse = {
  encode(_: MsgConfirmMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmMatchResponse {
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

  fromJSON(_: any): MsgConfirmMatchResponse {
    return {};
  },

  toJSON(_: MsgConfirmMatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmMatchResponse>, I>>(_: I): MsgConfirmMatchResponse {
    const message = createBaseMsgConfirmMatchResponse();
    return message;
  },
};

function createBaseMsgSetProfileCard(): MsgSetProfileCard {
  return { creator: "", cardId: 0 };
}

export const MsgSetProfileCard = {
  encode(message: MsgSetProfileCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== 0) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProfileCard {
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
          message.cardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetProfileCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
    };
  },

  toJSON(message: MsgSetProfileCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetProfileCard>, I>>(object: I): MsgSetProfileCard {
    const message = createBaseMsgSetProfileCard();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId ?? 0;
    return message;
  },
};

function createBaseMsgSetProfileCardResponse(): MsgSetProfileCardResponse {
  return {};
}

export const MsgSetProfileCardResponse = {
  encode(_: MsgSetProfileCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProfileCardResponse {
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

  fromJSON(_: any): MsgSetProfileCardResponse {
    return {};
  },

  toJSON(_: MsgSetProfileCardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetProfileCardResponse>, I>>(_: I): MsgSetProfileCardResponse {
    const message = createBaseMsgSetProfileCardResponse();
    return message;
  },
};

function createBaseMsgOpenBoosterPack(): MsgOpenBoosterPack {
  return { creator: "", boosterPackId: 0 };
}

export const MsgOpenBoosterPack = {
  encode(message: MsgOpenBoosterPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.boosterPackId !== 0) {
      writer.uint32(16).uint64(message.boosterPackId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBoosterPack {
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
          message.boosterPackId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenBoosterPack {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      boosterPackId: isSet(object.boosterPackId) ? Number(object.boosterPackId) : 0,
    };
  },

  toJSON(message: MsgOpenBoosterPack): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.boosterPackId !== undefined && (obj.boosterPackId = Math.round(message.boosterPackId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenBoosterPack>, I>>(object: I): MsgOpenBoosterPack {
    const message = createBaseMsgOpenBoosterPack();
    message.creator = object.creator ?? "";
    message.boosterPackId = object.boosterPackId ?? 0;
    return message;
  },
};

function createBaseMsgOpenBoosterPackResponse(): MsgOpenBoosterPackResponse {
  return { cardIds: [] };
}

export const MsgOpenBoosterPackResponse = {
  encode(message: MsgOpenBoosterPackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cardIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBoosterPackResponse {
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
              message.cardIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.cardIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenBoosterPackResponse {
    return { cardIds: Array.isArray(object?.cardIds) ? object.cardIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: MsgOpenBoosterPackResponse): unknown {
    const obj: any = {};
    if (message.cardIds) {
      obj.cardIds = message.cardIds.map((e) => Math.round(e));
    } else {
      obj.cardIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenBoosterPackResponse>, I>>(object: I): MsgOpenBoosterPackResponse {
    const message = createBaseMsgOpenBoosterPackResponse();
    message.cardIds = object.cardIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferBoosterPack(): MsgTransferBoosterPack {
  return { creator: "", boosterPackId: 0, receiver: "" };
}

export const MsgTransferBoosterPack = {
  encode(message: MsgTransferBoosterPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferBoosterPack {
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
          message.boosterPackId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgTransferBoosterPack {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      boosterPackId: isSet(object.boosterPackId) ? Number(object.boosterPackId) : 0,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: MsgTransferBoosterPack): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.boosterPackId !== undefined && (obj.boosterPackId = Math.round(message.boosterPackId));
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferBoosterPack>, I>>(object: I): MsgTransferBoosterPack {
    const message = createBaseMsgTransferBoosterPack();
    message.creator = object.creator ?? "";
    message.boosterPackId = object.boosterPackId ?? 0;
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseMsgTransferBoosterPackResponse(): MsgTransferBoosterPackResponse {
  return {};
}

export const MsgTransferBoosterPackResponse = {
  encode(_: MsgTransferBoosterPackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferBoosterPackResponse {
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

  fromJSON(_: any): MsgTransferBoosterPackResponse {
    return {};
  },

  toJSON(_: MsgTransferBoosterPackResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferBoosterPackResponse>, I>>(_: I): MsgTransferBoosterPackResponse {
    const message = createBaseMsgTransferBoosterPackResponse();
    return message;
  },
};

function createBaseMsgSetSetStoryWriter(): MsgSetSetStoryWriter {
  return { creator: "", setId: 0, storyWriter: "" };
}

export const MsgSetSetStoryWriter = {
  encode(message: MsgSetSetStoryWriter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetStoryWriter {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgSetSetStoryWriter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      storyWriter: isSet(object.storyWriter) ? String(object.storyWriter) : "",
    };
  },

  toJSON(message: MsgSetSetStoryWriter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.storyWriter !== undefined && (obj.storyWriter = message.storyWriter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetStoryWriter>, I>>(object: I): MsgSetSetStoryWriter {
    const message = createBaseMsgSetSetStoryWriter();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.storyWriter = object.storyWriter ?? "";
    return message;
  },
};

function createBaseMsgSetSetStoryWriterResponse(): MsgSetSetStoryWriterResponse {
  return {};
}

export const MsgSetSetStoryWriterResponse = {
  encode(_: MsgSetSetStoryWriterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetStoryWriterResponse {
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

  fromJSON(_: any): MsgSetSetStoryWriterResponse {
    return {};
  },

  toJSON(_: MsgSetSetStoryWriterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetStoryWriterResponse>, I>>(_: I): MsgSetSetStoryWriterResponse {
    const message = createBaseMsgSetSetStoryWriterResponse();
    return message;
  },
};

function createBaseMsgSetSetArtist(): MsgSetSetArtist {
  return { creator: "", setId: 0, artist: "" };
}

export const MsgSetSetArtist = {
  encode(message: MsgSetSetArtist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetArtist {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgSetSetArtist {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      artist: isSet(object.artist) ? String(object.artist) : "",
    };
  },

  toJSON(message: MsgSetSetArtist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.artist !== undefined && (obj.artist = message.artist);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetArtist>, I>>(object: I): MsgSetSetArtist {
    const message = createBaseMsgSetSetArtist();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.artist = object.artist ?? "";
    return message;
  },
};

function createBaseMsgSetSetArtistResponse(): MsgSetSetArtistResponse {
  return {};
}

export const MsgSetSetArtistResponse = {
  encode(_: MsgSetSetArtistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetArtistResponse {
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

  fromJSON(_: any): MsgSetSetArtistResponse {
    return {};
  },

  toJSON(_: MsgSetSetArtistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetArtistResponse>, I>>(_: I): MsgSetSetArtistResponse {
    const message = createBaseMsgSetSetArtistResponse();
    return message;
  },
};

function createBaseMsgSetUserWebsite(): MsgSetUserWebsite {
  return { creator: "", website: "" };
}

export const MsgSetUserWebsite = {
  encode(message: MsgSetUserWebsite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserWebsite {
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

  fromJSON(object: any): MsgSetUserWebsite {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      website: isSet(object.website) ? String(object.website) : "",
    };
  },

  toJSON(message: MsgSetUserWebsite): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserWebsite>, I>>(object: I): MsgSetUserWebsite {
    const message = createBaseMsgSetUserWebsite();
    message.creator = object.creator ?? "";
    message.website = object.website ?? "";
    return message;
  },
};

function createBaseMsgSetUserWebsiteResponse(): MsgSetUserWebsiteResponse {
  return {};
}

export const MsgSetUserWebsiteResponse = {
  encode(_: MsgSetUserWebsiteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserWebsiteResponse {
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

  fromJSON(_: any): MsgSetUserWebsiteResponse {
    return {};
  },

  toJSON(_: MsgSetUserWebsiteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserWebsiteResponse>, I>>(_: I): MsgSetUserWebsiteResponse {
    const message = createBaseMsgSetUserWebsiteResponse();
    return message;
  },
};

function createBaseMsgSetUserBiography(): MsgSetUserBiography {
  return { creator: "", biography: "" };
}

export const MsgSetUserBiography = {
  encode(message: MsgSetUserBiography, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.biography !== "") {
      writer.uint32(18).string(message.biography);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserBiography {
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

  fromJSON(object: any): MsgSetUserBiography {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      biography: isSet(object.biography) ? String(object.biography) : "",
    };
  },

  toJSON(message: MsgSetUserBiography): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.biography !== undefined && (obj.biography = message.biography);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserBiography>, I>>(object: I): MsgSetUserBiography {
    const message = createBaseMsgSetUserBiography();
    message.creator = object.creator ?? "";
    message.biography = object.biography ?? "";
    return message;
  },
};

function createBaseMsgSetUserBiographyResponse(): MsgSetUserBiographyResponse {
  return {};
}

export const MsgSetUserBiographyResponse = {
  encode(_: MsgSetUserBiographyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserBiographyResponse {
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

  fromJSON(_: any): MsgSetUserBiographyResponse {
    return {};
  },

  toJSON(_: MsgSetUserBiographyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserBiographyResponse>, I>>(_: I): MsgSetUserBiographyResponse {
    const message = createBaseMsgSetUserBiographyResponse();
    return message;
  },
};

function createBaseMsgMultiVoteCard(): MsgMultiVoteCard {
  return { creator: "", votes: [] };
}

export const MsgMultiVoteCard = {
  encode(message: MsgMultiVoteCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.votes) {
      SingleVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiVoteCard {
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

  fromJSON(object: any): MsgMultiVoteCard {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => SingleVote.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgMultiVoteCard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? SingleVote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiVoteCard>, I>>(object: I): MsgMultiVoteCard {
    const message = createBaseMsgMultiVoteCard();
    message.creator = object.creator ?? "";
    message.votes = object.votes?.map((e) => SingleVote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMultiVoteCardResponse(): MsgMultiVoteCardResponse {
  return {};
}

export const MsgMultiVoteCardResponse = {
  encode(_: MsgMultiVoteCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiVoteCardResponse {
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

  fromJSON(_: any): MsgMultiVoteCardResponse {
    return {};
  },

  toJSON(_: MsgMultiVoteCardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiVoteCardResponse>, I>>(_: I): MsgMultiVoteCardResponse {
    const message = createBaseMsgMultiVoteCardResponse();
    return message;
  },
};

function createBaseMsgOpenMatch(): MsgOpenMatch {
  return { creator: "", playerA: "", playerB: "", playerADeck: [], playerBDeck: [] };
}

export const MsgOpenMatch = {
  encode(message: MsgOpenMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenMatch {
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
              message.playerADeck.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.playerADeck.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerBDeck.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.playerBDeck.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      playerA: isSet(object.playerA) ? String(object.playerA) : "",
      playerB: isSet(object.playerB) ? String(object.playerB) : "",
      playerADeck: Array.isArray(object?.playerADeck) ? object.playerADeck.map((e: any) => Number(e)) : [],
      playerBDeck: Array.isArray(object?.playerBDeck) ? object.playerBDeck.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgOpenMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.playerA !== undefined && (obj.playerA = message.playerA);
    message.playerB !== undefined && (obj.playerB = message.playerB);
    if (message.playerADeck) {
      obj.playerADeck = message.playerADeck.map((e) => Math.round(e));
    } else {
      obj.playerADeck = [];
    }
    if (message.playerBDeck) {
      obj.playerBDeck = message.playerBDeck.map((e) => Math.round(e));
    } else {
      obj.playerBDeck = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenMatch>, I>>(object: I): MsgOpenMatch {
    const message = createBaseMsgOpenMatch();
    message.creator = object.creator ?? "";
    message.playerA = object.playerA ?? "";
    message.playerB = object.playerB ?? "";
    message.playerADeck = object.playerADeck?.map((e) => e) || [];
    message.playerBDeck = object.playerBDeck?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgOpenMatchResponse(): MsgOpenMatchResponse {
  return { matchId: 0 };
}

export const MsgOpenMatchResponse = {
  encode(message: MsgOpenMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== 0) {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenMatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenMatchResponse {
    return { matchId: isSet(object.matchId) ? Number(object.matchId) : 0 };
  },

  toJSON(message: MsgOpenMatchResponse): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenMatchResponse>, I>>(object: I): MsgOpenMatchResponse {
    const message = createBaseMsgOpenMatchResponse();
    message.matchId = object.matchId ?? 0;
    return message;
  },
};

function createBaseMsgSetSetName(): MsgSetSetName {
  return { creator: "", setId: 0, name: "" };
}

export const MsgSetSetName = {
  encode(message: MsgSetSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetName {
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
          message.setId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgSetSetName {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setId: isSet(object.setId) ? Number(object.setId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgSetSetName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setId !== undefined && (obj.setId = Math.round(message.setId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetName>, I>>(object: I): MsgSetSetName {
    const message = createBaseMsgSetSetName();
    message.creator = object.creator ?? "";
    message.setId = object.setId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgSetSetNameResponse(): MsgSetSetNameResponse {
  return {};
}

export const MsgSetSetNameResponse = {
  encode(_: MsgSetSetNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSetNameResponse {
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

  fromJSON(_: any): MsgSetSetNameResponse {
    return {};
  },

  toJSON(_: MsgSetSetNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSetNameResponse>, I>>(_: I): MsgSetSetNameResponse {
    const message = createBaseMsgSetSetNameResponse();
    return message;
  },
};

function createBaseMsgChangeAlias(): MsgChangeAlias {
  return { creator: "", alias: "" };
}

export const MsgChangeAlias = {
  encode(message: MsgChangeAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAlias {
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

  fromJSON(object: any): MsgChangeAlias {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: MsgChangeAlias): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeAlias>, I>>(object: I): MsgChangeAlias {
    const message = createBaseMsgChangeAlias();
    message.creator = object.creator ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseMsgChangeAliasResponse(): MsgChangeAliasResponse {
  return {};
}

export const MsgChangeAliasResponse = {
  encode(_: MsgChangeAliasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAliasResponse {
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

  fromJSON(_: any): MsgChangeAliasResponse {
    return {};
  },

  toJSON(_: MsgChangeAliasResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeAliasResponse>, I>>(_: I): MsgChangeAliasResponse {
    const message = createBaseMsgChangeAliasResponse();
    return message;
  },
};

function createBaseMsgInviteEarlyAccess(): MsgInviteEarlyAccess {
  return { creator: "", user: "" };
}

export const MsgInviteEarlyAccess = {
  encode(message: MsgInviteEarlyAccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInviteEarlyAccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteEarlyAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInviteEarlyAccess {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgInviteEarlyAccess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInviteEarlyAccess>, I>>(object: I): MsgInviteEarlyAccess {
    const message = createBaseMsgInviteEarlyAccess();
    message.creator = object.creator ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgInviteEarlyAccessResponse(): MsgInviteEarlyAccessResponse {
  return {};
}

export const MsgInviteEarlyAccessResponse = {
  encode(_: MsgInviteEarlyAccessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInviteEarlyAccessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteEarlyAccessResponse();
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

  fromJSON(_: any): MsgInviteEarlyAccessResponse {
    return {};
  },

  toJSON(_: MsgInviteEarlyAccessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInviteEarlyAccessResponse>, I>>(_: I): MsgInviteEarlyAccessResponse {
    const message = createBaseMsgInviteEarlyAccessResponse();
    return message;
  },
};

function createBaseMsgDisinviteEarlyAccess(): MsgDisinviteEarlyAccess {
  return { creator: "", user: "" };
}

export const MsgDisinviteEarlyAccess = {
  encode(message: MsgDisinviteEarlyAccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisinviteEarlyAccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisinviteEarlyAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisinviteEarlyAccess {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgDisinviteEarlyAccess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisinviteEarlyAccess>, I>>(object: I): MsgDisinviteEarlyAccess {
    const message = createBaseMsgDisinviteEarlyAccess();
    message.creator = object.creator ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgDisinviteEarlyAccessResponse(): MsgDisinviteEarlyAccessResponse {
  return {};
}

export const MsgDisinviteEarlyAccessResponse = {
  encode(_: MsgDisinviteEarlyAccessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisinviteEarlyAccessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisinviteEarlyAccessResponse();
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

  fromJSON(_: any): MsgDisinviteEarlyAccessResponse {
    return {};
  },

  toJSON(_: MsgDisinviteEarlyAccessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisinviteEarlyAccessResponse>, I>>(_: I): MsgDisinviteEarlyAccessResponse {
    const message = createBaseMsgDisinviteEarlyAccessResponse();
    return message;
  },
};

function createBaseMsgConnectZealyAccount(): MsgConnectZealyAccount {
  return { creator: "", zealyId: "" };
}

export const MsgConnectZealyAccount = {
  encode(message: MsgConnectZealyAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.zealyId !== "") {
      writer.uint32(18).string(message.zealyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectZealyAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectZealyAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.zealyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConnectZealyAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      zealyId: isSet(object.zealyId) ? String(object.zealyId) : "",
    };
  },

  toJSON(message: MsgConnectZealyAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.zealyId !== undefined && (obj.zealyId = message.zealyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectZealyAccount>, I>>(object: I): MsgConnectZealyAccount {
    const message = createBaseMsgConnectZealyAccount();
    message.creator = object.creator ?? "";
    message.zealyId = object.zealyId ?? "";
    return message;
  },
};

function createBaseMsgConnectZealyAccountResponse(): MsgConnectZealyAccountResponse {
  return {};
}

export const MsgConnectZealyAccountResponse = {
  encode(_: MsgConnectZealyAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectZealyAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectZealyAccountResponse();
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

  fromJSON(_: any): MsgConnectZealyAccountResponse {
    return {};
  },

  toJSON(_: MsgConnectZealyAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectZealyAccountResponse>, I>>(_: I): MsgConnectZealyAccountResponse {
    const message = createBaseMsgConnectZealyAccountResponse();
    return message;
  },
};

function createBaseMsgEncounterCreate(): MsgEncounterCreate {
  return { creator: "", name: "", Drawlist: [], parameters: {}, image: new Uint8Array() };
}

export const MsgEncounterCreate = {
  encode(message: MsgEncounterCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.Drawlist) {
      writer.uint64(v);
    }
    writer.ldelim();
    Object.entries(message.parameters).forEach(([key, value]) => {
      MsgEncounterCreate_ParametersEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.image.length !== 0) {
      writer.uint32(42).bytes(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreate();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Drawlist.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.Drawlist.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          const entry4 = MsgEncounterCreate_ParametersEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.parameters[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEncounterCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      Drawlist: Array.isArray(object?.Drawlist) ? object.Drawlist.map((e: any) => Number(e)) : [],
      parameters: isObject(object.parameters)
        ? Object.entries(object.parameters).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
    };
  },

  toJSON(message: MsgEncounterCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    if (message.Drawlist) {
      obj.Drawlist = message.Drawlist.map((e) => Math.round(e));
    } else {
      obj.Drawlist = [];
    }
    obj.parameters = {};
    if (message.parameters) {
      Object.entries(message.parameters).forEach(([k, v]) => {
        obj.parameters[k] = v;
      });
    }
    message.image !== undefined
      && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterCreate>, I>>(object: I): MsgEncounterCreate {
    const message = createBaseMsgEncounterCreate();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.Drawlist = object.Drawlist?.map((e) => e) || [];
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.image = object.image ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgEncounterCreate_ParametersEntry(): MsgEncounterCreate_ParametersEntry {
  return { key: "", value: "" };
}

export const MsgEncounterCreate_ParametersEntry = {
  encode(message: MsgEncounterCreate_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterCreate_ParametersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreate_ParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEncounterCreate_ParametersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: MsgEncounterCreate_ParametersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterCreate_ParametersEntry>, I>>(
    object: I,
  ): MsgEncounterCreate_ParametersEntry {
    const message = createBaseMsgEncounterCreate_ParametersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgEncounterCreateResponse(): MsgEncounterCreateResponse {
  return {};
}

export const MsgEncounterCreateResponse = {
  encode(_: MsgEncounterCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreateResponse();
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

  fromJSON(_: any): MsgEncounterCreateResponse {
    return {};
  },

  toJSON(_: MsgEncounterCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterCreateResponse>, I>>(_: I): MsgEncounterCreateResponse {
    const message = createBaseMsgEncounterCreateResponse();
    return message;
  },
};

function createBaseMsgEncounterDo(): MsgEncounterDo {
  return { creator: "", encounterId: 0, user: "" };
}

export const MsgEncounterDo = {
  encode(message: MsgEncounterDo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.encounterId !== 0) {
      writer.uint32(16).uint64(message.encounterId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterDo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterDo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.encounterId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgEncounterDo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      encounterId: isSet(object.encounterId) ? Number(object.encounterId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgEncounterDo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.encounterId !== undefined && (obj.encounterId = Math.round(message.encounterId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterDo>, I>>(object: I): MsgEncounterDo {
    const message = createBaseMsgEncounterDo();
    message.creator = object.creator ?? "";
    message.encounterId = object.encounterId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgEncounterDoResponse(): MsgEncounterDoResponse {
  return {};
}

export const MsgEncounterDoResponse = {
  encode(_: MsgEncounterDoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterDoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterDoResponse();
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

  fromJSON(_: any): MsgEncounterDoResponse {
    return {};
  },

  toJSON(_: MsgEncounterDoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterDoResponse>, I>>(_: I): MsgEncounterDoResponse {
    const message = createBaseMsgEncounterDoResponse();
    return message;
  },
};

function createBaseMsgEncounterClose(): MsgEncounterClose {
  return { creator: "", encounterId: 0, user: "", won: false };
}

export const MsgEncounterClose = {
  encode(message: MsgEncounterClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.encounterId !== 0) {
      writer.uint32(16).uint64(message.encounterId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.won === true) {
      writer.uint32(32).bool(message.won);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.encounterId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.won = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEncounterClose {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      encounterId: isSet(object.encounterId) ? Number(object.encounterId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      won: isSet(object.won) ? Boolean(object.won) : false,
    };
  },

  toJSON(message: MsgEncounterClose): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.encounterId !== undefined && (obj.encounterId = Math.round(message.encounterId));
    message.user !== undefined && (obj.user = message.user);
    message.won !== undefined && (obj.won = message.won);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterClose>, I>>(object: I): MsgEncounterClose {
    const message = createBaseMsgEncounterClose();
    message.creator = object.creator ?? "";
    message.encounterId = object.encounterId ?? 0;
    message.user = object.user ?? "";
    message.won = object.won ?? false;
    return message;
  },
};

function createBaseMsgEncounterCloseResponse(): MsgEncounterCloseResponse {
  return {};
}

export const MsgEncounterCloseResponse = {
  encode(_: MsgEncounterCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEncounterCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCloseResponse();
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

  fromJSON(_: any): MsgEncounterCloseResponse {
    return {};
  },

  toJSON(_: MsgEncounterCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEncounterCloseResponse>, I>>(_: I): MsgEncounterCloseResponse {
    const message = createBaseMsgEncounterCloseResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Createuser(request: MsgCreateuser): Promise<MsgCreateuserResponse>;
  BuyCardScheme(request: MsgBuyCardScheme): Promise<MsgBuyCardSchemeResponse>;
  VoteCard(request: MsgVoteCard): Promise<MsgVoteCardResponse>;
  SaveCardContent(request: MsgSaveCardContent): Promise<MsgSaveCardContentResponse>;
  TransferCard(request: MsgTransferCard): Promise<MsgTransferCardResponse>;
  DonateToCard(request: MsgDonateToCard): Promise<MsgDonateToCardResponse>;
  AddArtwork(request: MsgAddArtwork): Promise<MsgAddArtworkResponse>;
  ChangeArtist(request: MsgChangeArtist): Promise<MsgChangeArtistResponse>;
  RegisterForCouncil(request: MsgRegisterForCouncil): Promise<MsgRegisterForCouncilResponse>;
  ReportMatch(request: MsgReportMatch): Promise<MsgReportMatchResponse>;
  ApointMatchReporter(request: MsgApointMatchReporter): Promise<MsgApointMatchReporterResponse>;
  CreateSet(request: MsgCreateSet): Promise<MsgCreateSetResponse>;
  AddCardToSet(request: MsgAddCardToSet): Promise<MsgAddCardToSetResponse>;
  FinalizeSet(request: MsgFinalizeSet): Promise<MsgFinalizeSetResponse>;
  BuyBoosterPack(request: MsgBuyBoosterPack): Promise<MsgBuyBoosterPackResponse>;
  RemoveCardFromSet(request: MsgRemoveCardFromSet): Promise<MsgRemoveCardFromSetResponse>;
  RemoveContributorFromSet(request: MsgRemoveContributorFromSet): Promise<MsgRemoveContributorFromSetResponse>;
  AddContributorToSet(request: MsgAddContributorToSet): Promise<MsgAddContributorToSetResponse>;
  CreateSellOffer(request: MsgCreateSellOffer): Promise<MsgCreateSellOfferResponse>;
  BuyCard(request: MsgBuyCard): Promise<MsgBuyCardResponse>;
  RemoveSellOffer(request: MsgRemoveSellOffer): Promise<MsgRemoveSellOfferResponse>;
  AddArtworkToSet(request: MsgAddArtworkToSet): Promise<MsgAddArtworkToSetResponse>;
  AddStoryToSet(request: MsgAddStoryToSet): Promise<MsgAddStoryToSetResponse>;
  SetCardRarity(request: MsgSetCardRarity): Promise<MsgSetCardRarityResponse>;
  CreateCouncil(request: MsgCreateCouncil): Promise<MsgCreateCouncilResponse>;
  CommitCouncilResponse(request: MsgCommitCouncilResponse): Promise<MsgCommitCouncilResponseResponse>;
  RevealCouncilResponse(request: MsgRevealCouncilResponse): Promise<MsgRevealCouncilResponseResponse>;
  RestartCouncil(request: MsgRestartCouncil): Promise<MsgRestartCouncilResponse>;
  RewokeCouncilRegistration(request: MsgRewokeCouncilRegistration): Promise<MsgRewokeCouncilRegistrationResponse>;
  ConfirmMatch(request: MsgConfirmMatch): Promise<MsgConfirmMatchResponse>;
  SetProfileCard(request: MsgSetProfileCard): Promise<MsgSetProfileCardResponse>;
  OpenBoosterPack(request: MsgOpenBoosterPack): Promise<MsgOpenBoosterPackResponse>;
  TransferBoosterPack(request: MsgTransferBoosterPack): Promise<MsgTransferBoosterPackResponse>;
  SetSetStoryWriter(request: MsgSetSetStoryWriter): Promise<MsgSetSetStoryWriterResponse>;
  SetSetArtist(request: MsgSetSetArtist): Promise<MsgSetSetArtistResponse>;
  SetUserWebsite(request: MsgSetUserWebsite): Promise<MsgSetUserWebsiteResponse>;
  SetUserBiography(request: MsgSetUserBiography): Promise<MsgSetUserBiographyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MultiVoteCard(request: MsgMultiVoteCard): Promise<MsgMultiVoteCardResponse>;
  OpenMatch(request: MsgOpenMatch): Promise<MsgOpenMatchResponse>;
  SetSetName(request: MsgSetSetName): Promise<MsgSetSetNameResponse>;
  ChangeAlias(request: MsgChangeAlias): Promise<MsgChangeAliasResponse>;
  InviteEarlyAccess(request: MsgInviteEarlyAccess): Promise<MsgInviteEarlyAccessResponse>;
  DisinviteEarlyAccess(request: MsgDisinviteEarlyAccess): Promise<MsgDisinviteEarlyAccessResponse>;
  ConnectZealyAccount(request: MsgConnectZealyAccount): Promise<MsgConnectZealyAccountResponse>;
  EncounterCreate(request: MsgEncounterCreate): Promise<MsgEncounterCreateResponse>;
  EncounterDo(request: MsgEncounterDo): Promise<MsgEncounterDoResponse>;
  EncounterClose(request: MsgEncounterClose): Promise<MsgEncounterCloseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
    this.InviteEarlyAccess = this.InviteEarlyAccess.bind(this);
    this.DisinviteEarlyAccess = this.DisinviteEarlyAccess.bind(this);
    this.ConnectZealyAccount = this.ConnectZealyAccount.bind(this);
    this.EncounterCreate = this.EncounterCreate.bind(this);
    this.EncounterDo = this.EncounterDo.bind(this);
    this.EncounterClose = this.EncounterClose.bind(this);
  }
  Createuser(request: MsgCreateuser): Promise<MsgCreateuserResponse> {
    const data = MsgCreateuser.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "Createuser", data);
    return promise.then((data) => MsgCreateuserResponse.decode(new _m0.Reader(data)));
  }

  BuyCardScheme(request: MsgBuyCardScheme): Promise<MsgBuyCardSchemeResponse> {
    const data = MsgBuyCardScheme.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyCardScheme", data);
    return promise.then((data) => MsgBuyCardSchemeResponse.decode(new _m0.Reader(data)));
  }

  VoteCard(request: MsgVoteCard): Promise<MsgVoteCardResponse> {
    const data = MsgVoteCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "VoteCard", data);
    return promise.then((data) => MsgVoteCardResponse.decode(new _m0.Reader(data)));
  }

  SaveCardContent(request: MsgSaveCardContent): Promise<MsgSaveCardContentResponse> {
    const data = MsgSaveCardContent.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SaveCardContent", data);
    return promise.then((data) => MsgSaveCardContentResponse.decode(new _m0.Reader(data)));
  }

  TransferCard(request: MsgTransferCard): Promise<MsgTransferCardResponse> {
    const data = MsgTransferCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "TransferCard", data);
    return promise.then((data) => MsgTransferCardResponse.decode(new _m0.Reader(data)));
  }

  DonateToCard(request: MsgDonateToCard): Promise<MsgDonateToCardResponse> {
    const data = MsgDonateToCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "DonateToCard", data);
    return promise.then((data) => MsgDonateToCardResponse.decode(new _m0.Reader(data)));
  }

  AddArtwork(request: MsgAddArtwork): Promise<MsgAddArtworkResponse> {
    const data = MsgAddArtwork.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddArtwork", data);
    return promise.then((data) => MsgAddArtworkResponse.decode(new _m0.Reader(data)));
  }

  ChangeArtist(request: MsgChangeArtist): Promise<MsgChangeArtistResponse> {
    const data = MsgChangeArtist.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ChangeArtist", data);
    return promise.then((data) => MsgChangeArtistResponse.decode(new _m0.Reader(data)));
  }

  RegisterForCouncil(request: MsgRegisterForCouncil): Promise<MsgRegisterForCouncilResponse> {
    const data = MsgRegisterForCouncil.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RegisterForCouncil", data);
    return promise.then((data) => MsgRegisterForCouncilResponse.decode(new _m0.Reader(data)));
  }

  ReportMatch(request: MsgReportMatch): Promise<MsgReportMatchResponse> {
    const data = MsgReportMatch.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ReportMatch", data);
    return promise.then((data) => MsgReportMatchResponse.decode(new _m0.Reader(data)));
  }

  ApointMatchReporter(request: MsgApointMatchReporter): Promise<MsgApointMatchReporterResponse> {
    const data = MsgApointMatchReporter.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ApointMatchReporter", data);
    return promise.then((data) => MsgApointMatchReporterResponse.decode(new _m0.Reader(data)));
  }

  CreateSet(request: MsgCreateSet): Promise<MsgCreateSetResponse> {
    const data = MsgCreateSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateSet", data);
    return promise.then((data) => MsgCreateSetResponse.decode(new _m0.Reader(data)));
  }

  AddCardToSet(request: MsgAddCardToSet): Promise<MsgAddCardToSetResponse> {
    const data = MsgAddCardToSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddCardToSet", data);
    return promise.then((data) => MsgAddCardToSetResponse.decode(new _m0.Reader(data)));
  }

  FinalizeSet(request: MsgFinalizeSet): Promise<MsgFinalizeSetResponse> {
    const data = MsgFinalizeSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "FinalizeSet", data);
    return promise.then((data) => MsgFinalizeSetResponse.decode(new _m0.Reader(data)));
  }

  BuyBoosterPack(request: MsgBuyBoosterPack): Promise<MsgBuyBoosterPackResponse> {
    const data = MsgBuyBoosterPack.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyBoosterPack", data);
    return promise.then((data) => MsgBuyBoosterPackResponse.decode(new _m0.Reader(data)));
  }

  RemoveCardFromSet(request: MsgRemoveCardFromSet): Promise<MsgRemoveCardFromSetResponse> {
    const data = MsgRemoveCardFromSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveCardFromSet", data);
    return promise.then((data) => MsgRemoveCardFromSetResponse.decode(new _m0.Reader(data)));
  }

  RemoveContributorFromSet(request: MsgRemoveContributorFromSet): Promise<MsgRemoveContributorFromSetResponse> {
    const data = MsgRemoveContributorFromSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveContributorFromSet", data);
    return promise.then((data) => MsgRemoveContributorFromSetResponse.decode(new _m0.Reader(data)));
  }

  AddContributorToSet(request: MsgAddContributorToSet): Promise<MsgAddContributorToSetResponse> {
    const data = MsgAddContributorToSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddContributorToSet", data);
    return promise.then((data) => MsgAddContributorToSetResponse.decode(new _m0.Reader(data)));
  }

  CreateSellOffer(request: MsgCreateSellOffer): Promise<MsgCreateSellOfferResponse> {
    const data = MsgCreateSellOffer.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateSellOffer", data);
    return promise.then((data) => MsgCreateSellOfferResponse.decode(new _m0.Reader(data)));
  }

  BuyCard(request: MsgBuyCard): Promise<MsgBuyCardResponse> {
    const data = MsgBuyCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "BuyCard", data);
    return promise.then((data) => MsgBuyCardResponse.decode(new _m0.Reader(data)));
  }

  RemoveSellOffer(request: MsgRemoveSellOffer): Promise<MsgRemoveSellOfferResponse> {
    const data = MsgRemoveSellOffer.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RemoveSellOffer", data);
    return promise.then((data) => MsgRemoveSellOfferResponse.decode(new _m0.Reader(data)));
  }

  AddArtworkToSet(request: MsgAddArtworkToSet): Promise<MsgAddArtworkToSetResponse> {
    const data = MsgAddArtworkToSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddArtworkToSet", data);
    return promise.then((data) => MsgAddArtworkToSetResponse.decode(new _m0.Reader(data)));
  }

  AddStoryToSet(request: MsgAddStoryToSet): Promise<MsgAddStoryToSetResponse> {
    const data = MsgAddStoryToSet.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "AddStoryToSet", data);
    return promise.then((data) => MsgAddStoryToSetResponse.decode(new _m0.Reader(data)));
  }

  SetCardRarity(request: MsgSetCardRarity): Promise<MsgSetCardRarityResponse> {
    const data = MsgSetCardRarity.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetCardRarity", data);
    return promise.then((data) => MsgSetCardRarityResponse.decode(new _m0.Reader(data)));
  }

  CreateCouncil(request: MsgCreateCouncil): Promise<MsgCreateCouncilResponse> {
    const data = MsgCreateCouncil.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CreateCouncil", data);
    return promise.then((data) => MsgCreateCouncilResponse.decode(new _m0.Reader(data)));
  }

  CommitCouncilResponse(request: MsgCommitCouncilResponse): Promise<MsgCommitCouncilResponseResponse> {
    const data = MsgCommitCouncilResponse.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "CommitCouncilResponse", data);
    return promise.then((data) => MsgCommitCouncilResponseResponse.decode(new _m0.Reader(data)));
  }

  RevealCouncilResponse(request: MsgRevealCouncilResponse): Promise<MsgRevealCouncilResponseResponse> {
    const data = MsgRevealCouncilResponse.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RevealCouncilResponse", data);
    return promise.then((data) => MsgRevealCouncilResponseResponse.decode(new _m0.Reader(data)));
  }

  RestartCouncil(request: MsgRestartCouncil): Promise<MsgRestartCouncilResponse> {
    const data = MsgRestartCouncil.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RestartCouncil", data);
    return promise.then((data) => MsgRestartCouncilResponse.decode(new _m0.Reader(data)));
  }

  RewokeCouncilRegistration(request: MsgRewokeCouncilRegistration): Promise<MsgRewokeCouncilRegistrationResponse> {
    const data = MsgRewokeCouncilRegistration.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "RewokeCouncilRegistration", data);
    return promise.then((data) => MsgRewokeCouncilRegistrationResponse.decode(new _m0.Reader(data)));
  }

  ConfirmMatch(request: MsgConfirmMatch): Promise<MsgConfirmMatchResponse> {
    const data = MsgConfirmMatch.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ConfirmMatch", data);
    return promise.then((data) => MsgConfirmMatchResponse.decode(new _m0.Reader(data)));
  }

  SetProfileCard(request: MsgSetProfileCard): Promise<MsgSetProfileCardResponse> {
    const data = MsgSetProfileCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetProfileCard", data);
    return promise.then((data) => MsgSetProfileCardResponse.decode(new _m0.Reader(data)));
  }

  OpenBoosterPack(request: MsgOpenBoosterPack): Promise<MsgOpenBoosterPackResponse> {
    const data = MsgOpenBoosterPack.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "OpenBoosterPack", data);
    return promise.then((data) => MsgOpenBoosterPackResponse.decode(new _m0.Reader(data)));
  }

  TransferBoosterPack(request: MsgTransferBoosterPack): Promise<MsgTransferBoosterPackResponse> {
    const data = MsgTransferBoosterPack.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "TransferBoosterPack", data);
    return promise.then((data) => MsgTransferBoosterPackResponse.decode(new _m0.Reader(data)));
  }

  SetSetStoryWriter(request: MsgSetSetStoryWriter): Promise<MsgSetSetStoryWriterResponse> {
    const data = MsgSetSetStoryWriter.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetStoryWriter", data);
    return promise.then((data) => MsgSetSetStoryWriterResponse.decode(new _m0.Reader(data)));
  }

  SetSetArtist(request: MsgSetSetArtist): Promise<MsgSetSetArtistResponse> {
    const data = MsgSetSetArtist.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetArtist", data);
    return promise.then((data) => MsgSetSetArtistResponse.decode(new _m0.Reader(data)));
  }

  SetUserWebsite(request: MsgSetUserWebsite): Promise<MsgSetUserWebsiteResponse> {
    const data = MsgSetUserWebsite.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetUserWebsite", data);
    return promise.then((data) => MsgSetUserWebsiteResponse.decode(new _m0.Reader(data)));
  }

  SetUserBiography(request: MsgSetUserBiography): Promise<MsgSetUserBiographyResponse> {
    const data = MsgSetUserBiography.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetUserBiography", data);
    return promise.then((data) => MsgSetUserBiographyResponse.decode(new _m0.Reader(data)));
  }

  MultiVoteCard(request: MsgMultiVoteCard): Promise<MsgMultiVoteCardResponse> {
    const data = MsgMultiVoteCard.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "MultiVoteCard", data);
    return promise.then((data) => MsgMultiVoteCardResponse.decode(new _m0.Reader(data)));
  }

  OpenMatch(request: MsgOpenMatch): Promise<MsgOpenMatchResponse> {
    const data = MsgOpenMatch.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "OpenMatch", data);
    return promise.then((data) => MsgOpenMatchResponse.decode(new _m0.Reader(data)));
  }

  SetSetName(request: MsgSetSetName): Promise<MsgSetSetNameResponse> {
    const data = MsgSetSetName.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "SetSetName", data);
    return promise.then((data) => MsgSetSetNameResponse.decode(new _m0.Reader(data)));
  }

  ChangeAlias(request: MsgChangeAlias): Promise<MsgChangeAliasResponse> {
    const data = MsgChangeAlias.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ChangeAlias", data);
    return promise.then((data) => MsgChangeAliasResponse.decode(new _m0.Reader(data)));
  }

  InviteEarlyAccess(request: MsgInviteEarlyAccess): Promise<MsgInviteEarlyAccessResponse> {
    const data = MsgInviteEarlyAccess.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "InviteEarlyAccess", data);
    return promise.then((data) => MsgInviteEarlyAccessResponse.decode(new _m0.Reader(data)));
  }

  DisinviteEarlyAccess(request: MsgDisinviteEarlyAccess): Promise<MsgDisinviteEarlyAccessResponse> {
    const data = MsgDisinviteEarlyAccess.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "DisinviteEarlyAccess", data);
    return promise.then((data) => MsgDisinviteEarlyAccessResponse.decode(new _m0.Reader(data)));
  }

  ConnectZealyAccount(request: MsgConnectZealyAccount): Promise<MsgConnectZealyAccountResponse> {
    const data = MsgConnectZealyAccount.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "ConnectZealyAccount", data);
    return promise.then((data) => MsgConnectZealyAccountResponse.decode(new _m0.Reader(data)));
  }

  EncounterCreate(request: MsgEncounterCreate): Promise<MsgEncounterCreateResponse> {
    const data = MsgEncounterCreate.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "EncounterCreate", data);
    return promise.then((data) => MsgEncounterCreateResponse.decode(new _m0.Reader(data)));
  }

  EncounterDo(request: MsgEncounterDo): Promise<MsgEncounterDoResponse> {
    const data = MsgEncounterDo.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "EncounterDo", data);
    return promise.then((data) => MsgEncounterDoResponse.decode(new _m0.Reader(data)));
  }

  EncounterClose(request: MsgEncounterClose): Promise<MsgEncounterCloseResponse> {
    const data = MsgEncounterClose.encode(request).finish();
    const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Msg", "EncounterClose", data);
    return promise.then((data) => MsgEncounterCloseResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
