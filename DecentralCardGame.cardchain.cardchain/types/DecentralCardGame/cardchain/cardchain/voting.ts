/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export enum VoteType {
  fairEnough = 0,
  inappropriate = 1,
  overpowered = 2,
  underpowered = 3,
  UNRECOGNIZED = -1,
}

export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "fairEnough":
      return VoteType.fairEnough;
    case 1:
    case "inappropriate":
      return VoteType.inappropriate;
    case 2:
    case "overpowered":
      return VoteType.overpowered;
    case 3:
    case "underpowered":
      return VoteType.underpowered;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}

export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.fairEnough:
      return "fairEnough";
    case VoteType.inappropriate:
      return "inappropriate";
    case VoteType.overpowered:
      return "overpowered";
    case VoteType.underpowered:
      return "underpowered";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface VotingResults {
  totalVotes: number;
  totalFairEnoughVotes: number;
  totalOverpoweredVotes: number;
  totalUnderpoweredVotes: number;
  totalInappropriateVotes: number;
  cardResults: VotingResult[];
  notes: string;
}

export interface VotingResult {
  cardId: number;
  fairEnoughVotes: number;
  overpoweredVotes: number;
  underpoweredVotes: number;
  inappropriateVotes: number;
  result: string;
}

export interface SingleVote {
  cardId: number;
  voteType: VoteType;
}

function createBaseVotingResults(): VotingResults {
  return {
    totalVotes: 0,
    totalFairEnoughVotes: 0,
    totalOverpoweredVotes: 0,
    totalUnderpoweredVotes: 0,
    totalInappropriateVotes: 0,
    cardResults: [],
    notes: "",
  };
}

export const VotingResults = {
  encode(message: VotingResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalVotes !== 0) {
      writer.uint32(8).uint64(message.totalVotes);
    }
    if (message.totalFairEnoughVotes !== 0) {
      writer.uint32(16).uint64(message.totalFairEnoughVotes);
    }
    if (message.totalOverpoweredVotes !== 0) {
      writer.uint32(24).uint64(message.totalOverpoweredVotes);
    }
    if (message.totalUnderpoweredVotes !== 0) {
      writer.uint32(32).uint64(message.totalUnderpoweredVotes);
    }
    if (message.totalInappropriateVotes !== 0) {
      writer.uint32(40).uint64(message.totalInappropriateVotes);
    }
    for (const v of message.cardResults) {
      VotingResult.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.notes !== "") {
      writer.uint32(58).string(message.notes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalFairEnoughVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalOverpoweredVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalUnderpoweredVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalInappropriateVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cardResults.push(VotingResult.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotingResults {
    return {
      totalVotes: isSet(object.totalVotes) ? Number(object.totalVotes) : 0,
      totalFairEnoughVotes: isSet(object.totalFairEnoughVotes) ? Number(object.totalFairEnoughVotes) : 0,
      totalOverpoweredVotes: isSet(object.totalOverpoweredVotes) ? Number(object.totalOverpoweredVotes) : 0,
      totalUnderpoweredVotes: isSet(object.totalUnderpoweredVotes) ? Number(object.totalUnderpoweredVotes) : 0,
      totalInappropriateVotes: isSet(object.totalInappropriateVotes) ? Number(object.totalInappropriateVotes) : 0,
      cardResults: Array.isArray(object?.cardResults)
        ? object.cardResults.map((e: any) => VotingResult.fromJSON(e))
        : [],
      notes: isSet(object.notes) ? String(object.notes) : "",
    };
  },

  toJSON(message: VotingResults): unknown {
    const obj: any = {};
    if (message.totalVotes !== 0) {
      obj.totalVotes = Math.round(message.totalVotes);
    }
    if (message.totalFairEnoughVotes !== 0) {
      obj.totalFairEnoughVotes = Math.round(message.totalFairEnoughVotes);
    }
    if (message.totalOverpoweredVotes !== 0) {
      obj.totalOverpoweredVotes = Math.round(message.totalOverpoweredVotes);
    }
    if (message.totalUnderpoweredVotes !== 0) {
      obj.totalUnderpoweredVotes = Math.round(message.totalUnderpoweredVotes);
    }
    if (message.totalInappropriateVotes !== 0) {
      obj.totalInappropriateVotes = Math.round(message.totalInappropriateVotes);
    }
    if (message.cardResults?.length) {
      obj.cardResults = message.cardResults.map((e) => VotingResult.toJSON(e));
    }
    if (message.notes !== "") {
      obj.notes = message.notes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VotingResults>, I>>(base?: I): VotingResults {
    return VotingResults.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VotingResults>, I>>(object: I): VotingResults {
    const message = createBaseVotingResults();
    message.totalVotes = object.totalVotes ?? 0;
    message.totalFairEnoughVotes = object.totalFairEnoughVotes ?? 0;
    message.totalOverpoweredVotes = object.totalOverpoweredVotes ?? 0;
    message.totalUnderpoweredVotes = object.totalUnderpoweredVotes ?? 0;
    message.totalInappropriateVotes = object.totalInappropriateVotes ?? 0;
    message.cardResults = object.cardResults?.map((e) => VotingResult.fromPartial(e)) || [];
    message.notes = object.notes ?? "";
    return message;
  },
};

function createBaseVotingResult(): VotingResult {
  return {
    cardId: 0,
    fairEnoughVotes: 0,
    overpoweredVotes: 0,
    underpoweredVotes: 0,
    inappropriateVotes: 0,
    result: "",
  };
}

export const VotingResult = {
  encode(message: VotingResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== 0) {
      writer.uint32(8).uint64(message.cardId);
    }
    if (message.fairEnoughVotes !== 0) {
      writer.uint32(16).uint64(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== 0) {
      writer.uint32(24).uint64(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== 0) {
      writer.uint32(32).uint64(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== 0) {
      writer.uint32(40).uint64(message.inappropriateVotes);
    }
    if (message.result !== "") {
      writer.uint32(50).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cardId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fairEnoughVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.overpoweredVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.underpoweredVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.inappropriateVotes = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotingResult {
    return {
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
      overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
      underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
      inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
      result: isSet(object.result) ? String(object.result) : "",
    };
  },

  toJSON(message: VotingResult): unknown {
    const obj: any = {};
    if (message.cardId !== 0) {
      obj.cardId = Math.round(message.cardId);
    }
    if (message.fairEnoughVotes !== 0) {
      obj.fairEnoughVotes = Math.round(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== 0) {
      obj.overpoweredVotes = Math.round(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== 0) {
      obj.underpoweredVotes = Math.round(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== 0) {
      obj.inappropriateVotes = Math.round(message.inappropriateVotes);
    }
    if (message.result !== "") {
      obj.result = message.result;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VotingResult>, I>>(base?: I): VotingResult {
    return VotingResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VotingResult>, I>>(object: I): VotingResult {
    const message = createBaseVotingResult();
    message.cardId = object.cardId ?? 0;
    message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
    message.overpoweredVotes = object.overpoweredVotes ?? 0;
    message.underpoweredVotes = object.underpoweredVotes ?? 0;
    message.inappropriateVotes = object.inappropriateVotes ?? 0;
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseSingleVote(): SingleVote {
  return { cardId: 0, voteType: 0 };
}

export const SingleVote = {
  encode(message: SingleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== 0) {
      writer.uint32(8).uint64(message.cardId);
    }
    if (message.voteType !== 0) {
      writer.uint32(16).int32(message.voteType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingleVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cardId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.voteType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SingleVote {
    return {
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0,
    };
  },

  toJSON(message: SingleVote): unknown {
    const obj: any = {};
    if (message.cardId !== 0) {
      obj.cardId = Math.round(message.cardId);
    }
    if (message.voteType !== 0) {
      obj.voteType = voteTypeToJSON(message.voteType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleVote>, I>>(base?: I): SingleVote {
    return SingleVote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleVote>, I>>(object: I): SingleVote {
    const message = createBaseSingleVote();
    message.cardId = object.cardId ?? 0;
    message.voteType = object.voteType ?? 0;
    return message;
  },
};

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
