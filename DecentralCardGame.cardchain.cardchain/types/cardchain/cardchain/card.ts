/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export enum Status {
  scheme = 0,
  prototype = 1,
  trial = 2,
  permanent = 3,
  suspended = 4,
  banned = 5,
  bannedSoon = 6,
  bannedVerySoon = 7,
  none = 8,
  adventureItem = 9,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "scheme":
      return Status.scheme;
    case 1:
    case "prototype":
      return Status.prototype;
    case 2:
    case "trial":
      return Status.trial;
    case 3:
    case "permanent":
      return Status.permanent;
    case 4:
    case "suspended":
      return Status.suspended;
    case 5:
    case "banned":
      return Status.banned;
    case 6:
    case "bannedSoon":
      return Status.bannedSoon;
    case 7:
    case "bannedVerySoon":
      return Status.bannedVerySoon;
    case 8:
    case "none":
      return Status.none;
    case 9:
    case "adventureItem":
      return Status.adventureItem;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.scheme:
      return "scheme";
    case Status.prototype:
      return "prototype";
    case Status.trial:
      return "trial";
    case Status.permanent:
      return "permanent";
    case Status.suspended:
      return "suspended";
    case Status.banned:
      return "banned";
    case Status.bannedSoon:
      return "bannedSoon";
    case Status.bannedVerySoon:
      return "bannedVerySoon";
    case Status.none:
      return "none";
    case Status.adventureItem:
      return "adventureItem";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CardRarity {
  common = 0,
  uncommon = 1,
  rare = 2,
  exceptional = 3,
  unique = 4,
  UNRECOGNIZED = -1,
}

export function cardRarityFromJSON(object: any): CardRarity {
  switch (object) {
    case 0:
    case "common":
      return CardRarity.common;
    case 1:
    case "uncommon":
      return CardRarity.uncommon;
    case 2:
    case "rare":
      return CardRarity.rare;
    case 3:
    case "exceptional":
      return CardRarity.exceptional;
    case 4:
    case "unique":
      return CardRarity.unique;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardRarity.UNRECOGNIZED;
  }
}

export function cardRarityToJSON(object: CardRarity): string {
  switch (object) {
    case CardRarity.common:
      return "common";
    case CardRarity.uncommon:
      return "uncommon";
    case CardRarity.rare:
      return "rare";
    case CardRarity.exceptional:
      return "exceptional";
    case CardRarity.unique:
      return "unique";
    case CardRarity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CardClass {
  nature = 0,
  culture = 1,
  mysticism = 2,
  technology = 3,
  UNRECOGNIZED = -1,
}

export function cardClassFromJSON(object: any): CardClass {
  switch (object) {
    case 0:
    case "nature":
      return CardClass.nature;
    case 1:
    case "culture":
      return CardClass.culture;
    case 2:
    case "mysticism":
      return CardClass.mysticism;
    case 3:
    case "technology":
      return CardClass.technology;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardClass.UNRECOGNIZED;
  }
}

export function cardClassToJSON(object: CardClass): string {
  switch (object) {
    case CardClass.nature:
      return "nature";
    case CardClass.culture:
      return "culture";
    case CardClass.mysticism:
      return "mysticism";
    case CardClass.technology:
      return "technology";
    case CardClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CardType {
  place = 0,
  action = 1,
  entity = 2,
  headquarter = 3,
  UNRECOGNIZED = -1,
}

export function cardTypeFromJSON(object: any): CardType {
  switch (object) {
    case 0:
    case "place":
      return CardType.place;
    case 1:
    case "action":
      return CardType.action;
    case 2:
    case "entity":
      return CardType.entity;
    case 3:
    case "headquarter":
      return CardType.headquarter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardType.UNRECOGNIZED;
  }
}

export function cardTypeToJSON(object: CardType): string {
  switch (object) {
    case CardType.place:
      return "place";
    case CardType.action:
      return "action";
    case CardType.entity:
      return "entity";
    case CardType.headquarter:
      return "headquarter";
    case CardType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Card {
  owner: string;
  artist: string;
  content: Uint8Array;
  imageId: number;
  fullArt: boolean;
  notes: string;
  status: Status;
  votePool: string;
  voters: string[];
  fairEnoughVotes: number;
  overpoweredVotes: number;
  underpoweredVotes: number;
  inappropriateVotes: number;
  nerflevel: number;
  balanceAnchor: boolean;
  starterCard: boolean;
  rarity: CardRarity;
}

export interface OutpCard {
  owner: string;
  artist: string;
  content: string;
  image: string;
  fullArt: boolean;
  notes: string;
  status: Status;
  votePool: string;
  voters: string[];
  fairEnoughVotes: number;
  overpoweredVotes: number;
  underpoweredVotes: number;
  inappropriateVotes: number;
  nerflevel: number;
  balanceAnchor: boolean;
  hash: string;
  starterCard: boolean;
  rarity: CardRarity;
}

export interface TimeStamp {
  timeStamp: number;
}

function createBaseCard(): Card {
  return {
    owner: "",
    artist: "",
    content: new Uint8Array(),
    imageId: 0,
    fullArt: false,
    notes: "",
    status: 0,
    votePool: "",
    voters: [],
    fairEnoughVotes: 0,
    overpoweredVotes: 0,
    underpoweredVotes: 0,
    inappropriateVotes: 0,
    nerflevel: 0,
    balanceAnchor: false,
    starterCard: false,
    rarity: 0,
  };
}

export const Card = {
  encode(message: Card, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.artist !== "") {
      writer.uint32(18).string(message.artist);
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    if (message.imageId !== 0) {
      writer.uint32(32).uint64(message.imageId);
    }
    if (message.fullArt === true) {
      writer.uint32(40).bool(message.fullArt);
    }
    if (message.notes !== "") {
      writer.uint32(50).string(message.notes);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.votePool !== "") {
      writer.uint32(66).string(message.votePool);
    }
    for (const v of message.voters) {
      writer.uint32(114).string(v!);
    }
    if (message.fairEnoughVotes !== 0) {
      writer.uint32(72).uint64(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== 0) {
      writer.uint32(80).uint64(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== 0) {
      writer.uint32(88).uint64(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== 0) {
      writer.uint32(96).uint64(message.inappropriateVotes);
    }
    if (message.nerflevel !== 0) {
      writer.uint32(104).int64(message.nerflevel);
    }
    if (message.balanceAnchor === true) {
      writer.uint32(120).bool(message.balanceAnchor);
    }
    if (message.starterCard === true) {
      writer.uint32(128).bool(message.starterCard);
    }
    if (message.rarity !== 0) {
      writer.uint32(136).int32(message.rarity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Card {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.artist = reader.string();
          break;
        case 3:
          message.content = reader.bytes();
          break;
        case 4:
          message.imageId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.fullArt = reader.bool();
          break;
        case 6:
          message.notes = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.votePool = reader.string();
          break;
        case 14:
          message.voters.push(reader.string());
          break;
        case 9:
          message.fairEnoughVotes = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.overpoweredVotes = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.underpoweredVotes = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.inappropriateVotes = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.nerflevel = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.balanceAnchor = reader.bool();
          break;
        case 16:
          message.starterCard = reader.bool();
          break;
        case 17:
          message.rarity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Card {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(),
      imageId: isSet(object.imageId) ? Number(object.imageId) : 0,
      fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
      notes: isSet(object.notes) ? String(object.notes) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      votePool: isSet(object.votePool) ? String(object.votePool) : "",
      voters: Array.isArray(object?.voters) ? object.voters.map((e: any) => String(e)) : [],
      fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
      overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
      underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
      inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
      nerflevel: isSet(object.nerflevel) ? Number(object.nerflevel) : 0,
      balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
      starterCard: isSet(object.starterCard) ? Boolean(object.starterCard) : false,
      rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
    };
  },

  toJSON(message: Card): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.artist !== undefined && (obj.artist = message.artist);
    message.content !== undefined
      && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    message.imageId !== undefined && (obj.imageId = Math.round(message.imageId));
    message.fullArt !== undefined && (obj.fullArt = message.fullArt);
    message.notes !== undefined && (obj.notes = message.notes);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.votePool !== undefined && (obj.votePool = message.votePool);
    if (message.voters) {
      obj.voters = message.voters.map((e) => e);
    } else {
      obj.voters = [];
    }
    message.fairEnoughVotes !== undefined && (obj.fairEnoughVotes = Math.round(message.fairEnoughVotes));
    message.overpoweredVotes !== undefined && (obj.overpoweredVotes = Math.round(message.overpoweredVotes));
    message.underpoweredVotes !== undefined && (obj.underpoweredVotes = Math.round(message.underpoweredVotes));
    message.inappropriateVotes !== undefined && (obj.inappropriateVotes = Math.round(message.inappropriateVotes));
    message.nerflevel !== undefined && (obj.nerflevel = Math.round(message.nerflevel));
    message.balanceAnchor !== undefined && (obj.balanceAnchor = message.balanceAnchor);
    message.starterCard !== undefined && (obj.starterCard = message.starterCard);
    message.rarity !== undefined && (obj.rarity = cardRarityToJSON(message.rarity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Card>, I>>(object: I): Card {
    const message = createBaseCard();
    message.owner = object.owner ?? "";
    message.artist = object.artist ?? "";
    message.content = object.content ?? new Uint8Array();
    message.imageId = object.imageId ?? 0;
    message.fullArt = object.fullArt ?? false;
    message.notes = object.notes ?? "";
    message.status = object.status ?? 0;
    message.votePool = object.votePool ?? "";
    message.voters = object.voters?.map((e) => e) || [];
    message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
    message.overpoweredVotes = object.overpoweredVotes ?? 0;
    message.underpoweredVotes = object.underpoweredVotes ?? 0;
    message.inappropriateVotes = object.inappropriateVotes ?? 0;
    message.nerflevel = object.nerflevel ?? 0;
    message.balanceAnchor = object.balanceAnchor ?? false;
    message.starterCard = object.starterCard ?? false;
    message.rarity = object.rarity ?? 0;
    return message;
  },
};

function createBaseOutpCard(): OutpCard {
  return {
    owner: "",
    artist: "",
    content: "",
    image: "",
    fullArt: false,
    notes: "",
    status: 0,
    votePool: "",
    voters: [],
    fairEnoughVotes: 0,
    overpoweredVotes: 0,
    underpoweredVotes: 0,
    inappropriateVotes: 0,
    nerflevel: 0,
    balanceAnchor: false,
    hash: "",
    starterCard: false,
    rarity: 0,
  };
}

export const OutpCard = {
  encode(message: OutpCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.artist !== "") {
      writer.uint32(18).string(message.artist);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    if (message.fullArt === true) {
      writer.uint32(40).bool(message.fullArt);
    }
    if (message.notes !== "") {
      writer.uint32(50).string(message.notes);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.votePool !== "") {
      writer.uint32(66).string(message.votePool);
    }
    for (const v of message.voters) {
      writer.uint32(114).string(v!);
    }
    if (message.fairEnoughVotes !== 0) {
      writer.uint32(72).uint64(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== 0) {
      writer.uint32(80).uint64(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== 0) {
      writer.uint32(88).uint64(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== 0) {
      writer.uint32(96).uint64(message.inappropriateVotes);
    }
    if (message.nerflevel !== 0) {
      writer.uint32(104).int64(message.nerflevel);
    }
    if (message.balanceAnchor === true) {
      writer.uint32(120).bool(message.balanceAnchor);
    }
    if (message.hash !== "") {
      writer.uint32(130).string(message.hash);
    }
    if (message.starterCard === true) {
      writer.uint32(136).bool(message.starterCard);
    }
    if (message.rarity !== 0) {
      writer.uint32(144).int32(message.rarity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutpCard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutpCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.artist = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.fullArt = reader.bool();
          break;
        case 6:
          message.notes = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.votePool = reader.string();
          break;
        case 14:
          message.voters.push(reader.string());
          break;
        case 9:
          message.fairEnoughVotes = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.overpoweredVotes = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.underpoweredVotes = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.inappropriateVotes = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.nerflevel = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.balanceAnchor = reader.bool();
          break;
        case 16:
          message.hash = reader.string();
          break;
        case 17:
          message.starterCard = reader.bool();
          break;
        case 18:
          message.rarity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutpCard {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      content: isSet(object.content) ? String(object.content) : "",
      image: isSet(object.image) ? String(object.image) : "",
      fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
      notes: isSet(object.notes) ? String(object.notes) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      votePool: isSet(object.votePool) ? String(object.votePool) : "",
      voters: Array.isArray(object?.voters) ? object.voters.map((e: any) => String(e)) : [],
      fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
      overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
      underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
      inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
      nerflevel: isSet(object.nerflevel) ? Number(object.nerflevel) : 0,
      balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
      hash: isSet(object.hash) ? String(object.hash) : "",
      starterCard: isSet(object.starterCard) ? Boolean(object.starterCard) : false,
      rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
    };
  },

  toJSON(message: OutpCard): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.artist !== undefined && (obj.artist = message.artist);
    message.content !== undefined && (obj.content = message.content);
    message.image !== undefined && (obj.image = message.image);
    message.fullArt !== undefined && (obj.fullArt = message.fullArt);
    message.notes !== undefined && (obj.notes = message.notes);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.votePool !== undefined && (obj.votePool = message.votePool);
    if (message.voters) {
      obj.voters = message.voters.map((e) => e);
    } else {
      obj.voters = [];
    }
    message.fairEnoughVotes !== undefined && (obj.fairEnoughVotes = Math.round(message.fairEnoughVotes));
    message.overpoweredVotes !== undefined && (obj.overpoweredVotes = Math.round(message.overpoweredVotes));
    message.underpoweredVotes !== undefined && (obj.underpoweredVotes = Math.round(message.underpoweredVotes));
    message.inappropriateVotes !== undefined && (obj.inappropriateVotes = Math.round(message.inappropriateVotes));
    message.nerflevel !== undefined && (obj.nerflevel = Math.round(message.nerflevel));
    message.balanceAnchor !== undefined && (obj.balanceAnchor = message.balanceAnchor);
    message.hash !== undefined && (obj.hash = message.hash);
    message.starterCard !== undefined && (obj.starterCard = message.starterCard);
    message.rarity !== undefined && (obj.rarity = cardRarityToJSON(message.rarity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutpCard>, I>>(object: I): OutpCard {
    const message = createBaseOutpCard();
    message.owner = object.owner ?? "";
    message.artist = object.artist ?? "";
    message.content = object.content ?? "";
    message.image = object.image ?? "";
    message.fullArt = object.fullArt ?? false;
    message.notes = object.notes ?? "";
    message.status = object.status ?? 0;
    message.votePool = object.votePool ?? "";
    message.voters = object.voters?.map((e) => e) || [];
    message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
    message.overpoweredVotes = object.overpoweredVotes ?? 0;
    message.underpoweredVotes = object.underpoweredVotes ?? 0;
    message.inappropriateVotes = object.inappropriateVotes ?? 0;
    message.nerflevel = object.nerflevel ?? 0;
    message.balanceAnchor = object.balanceAnchor ?? false;
    message.hash = object.hash ?? "";
    message.starterCard = object.starterCard ?? false;
    message.rarity = object.rarity ?? 0;
    return message;
  },
};

function createBaseTimeStamp(): TimeStamp {
  return { timeStamp: 0 };
}

export const TimeStamp = {
  encode(message: TimeStamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeStamp !== 0) {
      writer.uint32(8).uint64(message.timeStamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeStamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeStamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeStamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeStamp {
    return { timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0 };
  },

  toJSON(message: TimeStamp): unknown {
    const obj: any = {};
    message.timeStamp !== undefined && (obj.timeStamp = Math.round(message.timeStamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeStamp>, I>>(object: I): TimeStamp {
    const message = createBaseTimeStamp();
    message.timeStamp = object.timeStamp ?? 0;
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
