/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseParams() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.votingRightsExpirationTime = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.setSize = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.setPrice = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.activeSetsAmount = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.setCreationFee = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.collateralDeposit = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.winnerReward = longToNumber(reader.int64());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.hourlyFaucet = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.inflationRate = reader.string();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.raresPerPack = longToNumber(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.commonsPerPack = longToNumber(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.unCommonsPerPack = longToNumber(reader.uint64());
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.trialPeriod = longToNumber(reader.uint64());
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.gameVoteRatio = longToNumber(reader.int64());
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.cardAuctionPriceReductionPeriod = longToNumber(reader.int64());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.airDropValue = reader.string();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.airDropMaxBlockHeight = longToNumber(reader.int64());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.trialVoteReward = reader.string();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.votePoolFraction = longToNumber(reader.int64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.votingRewardCap = longToNumber(reader.int64());
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.matchWorkerDelay = longToNumber(reader.uint64());
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }
                    message.rareDropRatio = longToNumber(reader.uint64());
                    continue;
                case 23:
                    if (tag !== 184) {
                        break;
                    }
                    message.exceptionalDropRatio = longToNumber(reader.uint64());
                    continue;
                case 24:
                    if (tag !== 192) {
                        break;
                    }
                    message.uniqueDropRatio = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
        if (message.votingRightsExpirationTime !== 0) {
            obj.votingRightsExpirationTime = Math.round(message.votingRightsExpirationTime);
        }
        if (message.setSize !== 0) {
            obj.setSize = Math.round(message.setSize);
        }
        if (message.setPrice !== "") {
            obj.setPrice = message.setPrice;
        }
        if (message.activeSetsAmount !== 0) {
            obj.activeSetsAmount = Math.round(message.activeSetsAmount);
        }
        if (message.setCreationFee !== "") {
            obj.setCreationFee = message.setCreationFee;
        }
        if (message.collateralDeposit !== "") {
            obj.collateralDeposit = message.collateralDeposit;
        }
        if (message.winnerReward !== 0) {
            obj.winnerReward = Math.round(message.winnerReward);
        }
        if (message.hourlyFaucet !== "") {
            obj.hourlyFaucet = message.hourlyFaucet;
        }
        if (message.inflationRate !== "") {
            obj.inflationRate = message.inflationRate;
        }
        if (message.raresPerPack !== 0) {
            obj.raresPerPack = Math.round(message.raresPerPack);
        }
        if (message.commonsPerPack !== 0) {
            obj.commonsPerPack = Math.round(message.commonsPerPack);
        }
        if (message.unCommonsPerPack !== 0) {
            obj.unCommonsPerPack = Math.round(message.unCommonsPerPack);
        }
        if (message.trialPeriod !== 0) {
            obj.trialPeriod = Math.round(message.trialPeriod);
        }
        if (message.gameVoteRatio !== 0) {
            obj.gameVoteRatio = Math.round(message.gameVoteRatio);
        }
        if (message.cardAuctionPriceReductionPeriod !== 0) {
            obj.cardAuctionPriceReductionPeriod = Math.round(message.cardAuctionPriceReductionPeriod);
        }
        if (message.airDropValue !== "") {
            obj.airDropValue = message.airDropValue;
        }
        if (message.airDropMaxBlockHeight !== 0) {
            obj.airDropMaxBlockHeight = Math.round(message.airDropMaxBlockHeight);
        }
        if (message.trialVoteReward !== "") {
            obj.trialVoteReward = message.trialVoteReward;
        }
        if (message.votePoolFraction !== 0) {
            obj.votePoolFraction = Math.round(message.votePoolFraction);
        }
        if (message.votingRewardCap !== 0) {
            obj.votingRewardCap = Math.round(message.votingRewardCap);
        }
        if (message.matchWorkerDelay !== 0) {
            obj.matchWorkerDelay = Math.round(message.matchWorkerDelay);
        }
        if (message.rareDropRatio !== 0) {
            obj.rareDropRatio = Math.round(message.rareDropRatio);
        }
        if (message.exceptionalDropRatio !== 0) {
            obj.exceptionalDropRatio = Math.round(message.exceptionalDropRatio);
        }
        if (message.uniqueDropRatio !== 0) {
            obj.uniqueDropRatio = Math.round(message.uniqueDropRatio);
        }
        return obj;
    },
    create(base) {
        return Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
const tsProtoGlobalThis = (() => {
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
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
