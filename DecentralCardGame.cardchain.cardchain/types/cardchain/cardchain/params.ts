/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

/** Params defines the parameters for the module. */
export interface Params {
  votingRightsExpirationTime: number;
  setSize: number;
  setPrice: string;
  activeSetsAmount: number;
  setCreationFee: string;
  collateralDeposit: string;
  winnerReward: number;
  hourlyFaucet: string;
  inflationRate: string;
  raresPerPack: number;
  commonsPerPack: number;
  unCommonsPerPack: number;
  trialPeriod: number;
  gameVoteRatio: number;
  cardAuctionPriceReductionPeriod: number;
  airDropValue: string;
  airDropMaxBlockHeight: number;
  trialVoteReward: string;
  votePoolFraction: number;
  votingRewardCap: number;
  matchWorkerDelay: number;
  rareDropRatio: number;
  exceptionalDropRatio: number;
  uniqueDropRatio: number;
}

function createBaseParams(): Params {
  return {
    votingRightsExpirationTime: 0,
    setSize: 0,
    setPrice: "",
    activeSetsAmount: 0,
    setCreationFee: "",
    collateralDeposit: "",
    winnerReward: 0,
    hourlyFaucet: "",
    inflationRate: "",
    raresPerPack: 0,
    commonsPerPack: 0,
    unCommonsPerPack: 0,
    trialPeriod: 0,
    gameVoteRatio: 0,
    cardAuctionPriceReductionPeriod: 0,
    airDropValue: "",
    airDropMaxBlockHeight: 0,
    trialVoteReward: "",
    votePoolFraction: 0,
    votingRewardCap: 0,
    matchWorkerDelay: 0,
    rareDropRatio: 0,
    exceptionalDropRatio: 0,
    uniqueDropRatio: 0,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingRightsExpirationTime !== 0) {
      writer.uint32(8).int64(message.votingRightsExpirationTime);
    }
    if (message.setSize !== 0) {
      writer.uint32(16).uint64(message.setSize);
    }
    if (message.setPrice !== "") {
      writer.uint32(26).string(message.setPrice);
    }
    if (message.activeSetsAmount !== 0) {
      writer.uint32(32).uint64(message.activeSetsAmount);
    }
    if (message.setCreationFee !== "") {
      writer.uint32(42).string(message.setCreationFee);
    }
    if (message.collateralDeposit !== "") {
      writer.uint32(50).string(message.collateralDeposit);
    }
    if (message.winnerReward !== 0) {
      writer.uint32(56).int64(message.winnerReward);
    }
    if (message.hourlyFaucet !== "") {
      writer.uint32(74).string(message.hourlyFaucet);
    }
    if (message.inflationRate !== "") {
      writer.uint32(82).string(message.inflationRate);
    }
    if (message.raresPerPack !== 0) {
      writer.uint32(88).uint64(message.raresPerPack);
    }
    if (message.commonsPerPack !== 0) {
      writer.uint32(96).uint64(message.commonsPerPack);
    }
    if (message.unCommonsPerPack !== 0) {
      writer.uint32(104).uint64(message.unCommonsPerPack);
    }
    if (message.trialPeriod !== 0) {
      writer.uint32(112).uint64(message.trialPeriod);
    }
    if (message.gameVoteRatio !== 0) {
      writer.uint32(120).int64(message.gameVoteRatio);
    }
    if (message.cardAuctionPriceReductionPeriod !== 0) {
      writer.uint32(128).int64(message.cardAuctionPriceReductionPeriod);
    }
    if (message.airDropValue !== "") {
      writer.uint32(138).string(message.airDropValue);
    }
    if (message.airDropMaxBlockHeight !== 0) {
      writer.uint32(144).int64(message.airDropMaxBlockHeight);
    }
    if (message.trialVoteReward !== "") {
      writer.uint32(154).string(message.trialVoteReward);
    }
    if (message.votePoolFraction !== 0) {
      writer.uint32(160).int64(message.votePoolFraction);
    }
    if (message.votingRewardCap !== 0) {
      writer.uint32(64).int64(message.votingRewardCap);
    }
    if (message.matchWorkerDelay !== 0) {
      writer.uint32(168).uint64(message.matchWorkerDelay);
    }
    if (message.rareDropRatio !== 0) {
      writer.uint32(176).uint64(message.rareDropRatio);
    }
    if (message.exceptionalDropRatio !== 0) {
      writer.uint32(184).uint64(message.exceptionalDropRatio);
    }
    if (message.uniqueDropRatio !== 0) {
      writer.uint32(192).uint64(message.uniqueDropRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingRightsExpirationTime = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.setSize = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.setPrice = reader.string();
          break;
        case 4:
          message.activeSetsAmount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.setCreationFee = reader.string();
          break;
        case 6:
          message.collateralDeposit = reader.string();
          break;
        case 7:
          message.winnerReward = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.hourlyFaucet = reader.string();
          break;
        case 10:
          message.inflationRate = reader.string();
          break;
        case 11:
          message.raresPerPack = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.commonsPerPack = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.unCommonsPerPack = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.trialPeriod = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.gameVoteRatio = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.cardAuctionPriceReductionPeriod = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.airDropValue = reader.string();
          break;
        case 18:
          message.airDropMaxBlockHeight = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.trialVoteReward = reader.string();
          break;
        case 20:
          message.votePoolFraction = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.votingRewardCap = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.matchWorkerDelay = longToNumber(reader.uint64() as Long);
          break;
        case 22:
          message.rareDropRatio = longToNumber(reader.uint64() as Long);
          break;
        case 23:
          message.exceptionalDropRatio = longToNumber(reader.uint64() as Long);
          break;
        case 24:
          message.uniqueDropRatio = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      votingRightsExpirationTime: isSet(object.votingRightsExpirationTime)
        ? Number(object.votingRightsExpirationTime)
        : 0,
      setSize: isSet(object.setSize) ? Number(object.setSize) : 0,
      setPrice: isSet(object.setPrice) ? String(object.setPrice) : "",
      activeSetsAmount: isSet(object.activeSetsAmount) ? Number(object.activeSetsAmount) : 0,
      setCreationFee: isSet(object.setCreationFee) ? String(object.setCreationFee) : "",
      collateralDeposit: isSet(object.collateralDeposit) ? String(object.collateralDeposit) : "",
      winnerReward: isSet(object.winnerReward) ? Number(object.winnerReward) : 0,
      hourlyFaucet: isSet(object.hourlyFaucet) ? String(object.hourlyFaucet) : "",
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : "",
      raresPerPack: isSet(object.raresPerPack) ? Number(object.raresPerPack) : 0,
      commonsPerPack: isSet(object.commonsPerPack) ? Number(object.commonsPerPack) : 0,
      unCommonsPerPack: isSet(object.unCommonsPerPack) ? Number(object.unCommonsPerPack) : 0,
      trialPeriod: isSet(object.trialPeriod) ? Number(object.trialPeriod) : 0,
      gameVoteRatio: isSet(object.gameVoteRatio) ? Number(object.gameVoteRatio) : 0,
      cardAuctionPriceReductionPeriod: isSet(object.cardAuctionPriceReductionPeriod)
        ? Number(object.cardAuctionPriceReductionPeriod)
        : 0,
      airDropValue: isSet(object.airDropValue) ? String(object.airDropValue) : "",
      airDropMaxBlockHeight: isSet(object.airDropMaxBlockHeight) ? Number(object.airDropMaxBlockHeight) : 0,
      trialVoteReward: isSet(object.trialVoteReward) ? String(object.trialVoteReward) : "",
      votePoolFraction: isSet(object.votePoolFraction) ? Number(object.votePoolFraction) : 0,
      votingRewardCap: isSet(object.votingRewardCap) ? Number(object.votingRewardCap) : 0,
      matchWorkerDelay: isSet(object.matchWorkerDelay) ? Number(object.matchWorkerDelay) : 0,
      rareDropRatio: isSet(object.rareDropRatio) ? Number(object.rareDropRatio) : 0,
      exceptionalDropRatio: isSet(object.exceptionalDropRatio) ? Number(object.exceptionalDropRatio) : 0,
      uniqueDropRatio: isSet(object.uniqueDropRatio) ? Number(object.uniqueDropRatio) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votingRightsExpirationTime !== undefined
      && (obj.votingRightsExpirationTime = Math.round(message.votingRightsExpirationTime));
    message.setSize !== undefined && (obj.setSize = Math.round(message.setSize));
    message.setPrice !== undefined && (obj.setPrice = message.setPrice);
    message.activeSetsAmount !== undefined && (obj.activeSetsAmount = Math.round(message.activeSetsAmount));
    message.setCreationFee !== undefined && (obj.setCreationFee = message.setCreationFee);
    message.collateralDeposit !== undefined && (obj.collateralDeposit = message.collateralDeposit);
    message.winnerReward !== undefined && (obj.winnerReward = Math.round(message.winnerReward));
    message.hourlyFaucet !== undefined && (obj.hourlyFaucet = message.hourlyFaucet);
    message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
    message.raresPerPack !== undefined && (obj.raresPerPack = Math.round(message.raresPerPack));
    message.commonsPerPack !== undefined && (obj.commonsPerPack = Math.round(message.commonsPerPack));
    message.unCommonsPerPack !== undefined && (obj.unCommonsPerPack = Math.round(message.unCommonsPerPack));
    message.trialPeriod !== undefined && (obj.trialPeriod = Math.round(message.trialPeriod));
    message.gameVoteRatio !== undefined && (obj.gameVoteRatio = Math.round(message.gameVoteRatio));
    message.cardAuctionPriceReductionPeriod !== undefined
      && (obj.cardAuctionPriceReductionPeriod = Math.round(message.cardAuctionPriceReductionPeriod));
    message.airDropValue !== undefined && (obj.airDropValue = message.airDropValue);
    message.airDropMaxBlockHeight !== undefined
      && (obj.airDropMaxBlockHeight = Math.round(message.airDropMaxBlockHeight));
    message.trialVoteReward !== undefined && (obj.trialVoteReward = message.trialVoteReward);
    message.votePoolFraction !== undefined && (obj.votePoolFraction = Math.round(message.votePoolFraction));
    message.votingRewardCap !== undefined && (obj.votingRewardCap = Math.round(message.votingRewardCap));
    message.matchWorkerDelay !== undefined && (obj.matchWorkerDelay = Math.round(message.matchWorkerDelay));
    message.rareDropRatio !== undefined && (obj.rareDropRatio = Math.round(message.rareDropRatio));
    message.exceptionalDropRatio !== undefined && (obj.exceptionalDropRatio = Math.round(message.exceptionalDropRatio));
    message.uniqueDropRatio !== undefined && (obj.uniqueDropRatio = Math.round(message.uniqueDropRatio));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votingRightsExpirationTime = object.votingRightsExpirationTime ?? 0;
    message.setSize = object.setSize ?? 0;
    message.setPrice = object.setPrice ?? "";
    message.activeSetsAmount = object.activeSetsAmount ?? 0;
    message.setCreationFee = object.setCreationFee ?? "";
    message.collateralDeposit = object.collateralDeposit ?? "";
    message.winnerReward = object.winnerReward ?? 0;
    message.hourlyFaucet = object.hourlyFaucet ?? "";
    message.inflationRate = object.inflationRate ?? "";
    message.raresPerPack = object.raresPerPack ?? 0;
    message.commonsPerPack = object.commonsPerPack ?? 0;
    message.unCommonsPerPack = object.unCommonsPerPack ?? 0;
    message.trialPeriod = object.trialPeriod ?? 0;
    message.gameVoteRatio = object.gameVoteRatio ?? 0;
    message.cardAuctionPriceReductionPeriod = object.cardAuctionPriceReductionPeriod ?? 0;
    message.airDropValue = object.airDropValue ?? "";
    message.airDropMaxBlockHeight = object.airDropMaxBlockHeight ?? 0;
    message.trialVoteReward = object.trialVoteReward ?? "";
    message.votePoolFraction = object.votePoolFraction ?? 0;
    message.votingRewardCap = object.votingRewardCap ?? 0;
    message.matchWorkerDelay = object.matchWorkerDelay ?? 0;
    message.rareDropRatio = object.rareDropRatio ?? 0;
    message.exceptionalDropRatio = object.exceptionalDropRatio ?? 0;
    message.uniqueDropRatio = object.uniqueDropRatio ?? 0;
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
