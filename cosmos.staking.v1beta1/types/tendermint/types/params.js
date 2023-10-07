/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
export const protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return { block: undefined, evidence: undefined, validator: undefined, version: undefined };
}
export const ConsensusParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
            version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined
            && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined
            && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined
            && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = (object.block !== undefined && object.block !== null)
            ? BlockParams.fromPartial(object.block)
            : undefined;
        message.evidence = (object.evidence !== undefined && object.evidence !== null)
            ? EvidenceParams.fromPartial(object.evidence)
            : undefined;
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? ValidatorParams.fromPartial(object.validator)
            : undefined;
        message.version = (object.version !== undefined && object.version !== null)
            ? VersionParams.fromPartial(object.version)
            : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return { maxBytes: 0, maxGas: 0 };
}
export const BlockParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxBytes !== 0) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== 0) {
            writer.uint32(16).int64(message.maxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxGas = longToNumber(reader.int64());
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
            maxBytes: isSet(object.maxBytes) ? Number(object.maxBytes) : 0,
            maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxBytes !== undefined && (obj.maxBytes = Math.round(message.maxBytes));
        message.maxGas !== undefined && (obj.maxGas = Math.round(message.maxGas));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes ?? 0;
        message.maxGas = object.maxGas ?? 0;
        return message;
    },
};
function createBaseEvidenceParams() {
    return { maxAgeNumBlocks: 0, maxAgeDuration: undefined, maxBytes: 0 };
}
export const EvidenceParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxAgeNumBlocks !== 0) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== 0) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxAgeDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = longToNumber(reader.int64());
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
            maxAgeNumBlocks: isSet(object.maxAgeNumBlocks) ? Number(object.maxAgeNumBlocks) : 0,
            maxAgeDuration: isSet(object.maxAgeDuration) ? Duration.fromJSON(object.maxAgeDuration) : undefined,
            maxBytes: isSet(object.maxBytes) ? Number(object.maxBytes) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = Math.round(message.maxAgeNumBlocks));
        message.maxAgeDuration !== undefined
            && (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : undefined);
        message.maxBytes !== undefined && (obj.maxBytes = Math.round(message.maxBytes));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks ?? 0;
        message.maxAgeDuration = (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null)
            ? Duration.fromPartial(object.maxAgeDuration)
            : undefined;
        message.maxBytes = object.maxBytes ?? 0;
        return message;
    },
};
function createBaseValidatorParams() {
    return { pubKeyTypes: [] };
}
export const ValidatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pubKeyTypes: Array.isArray(object?.pubKeyTypes) ? object.pubKeyTypes.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pubKeyTypes = message.pubKeyTypes.map((e) => e);
        }
        else {
            obj.pubKeyTypes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map((e) => e) || [];
        return message;
    },
};
function createBaseVersionParams() {
    return { app: 0 };
}
export const VersionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.app !== 0) {
            writer.uint32(8).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { app: isSet(object.app) ? Number(object.app) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.app !== undefined && (obj.app = Math.round(message.app));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.app = object.app ?? 0;
        return message;
    },
};
function createBaseHashedParams() {
    return { blockMaxBytes: 0, blockMaxGas: 0 };
}
export const HashedParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockMaxBytes !== 0) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== 0) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = longToNumber(reader.int64());
                    break;
                case 2:
                    message.blockMaxGas = longToNumber(reader.int64());
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
            blockMaxBytes: isSet(object.blockMaxBytes) ? Number(object.blockMaxBytes) : 0,
            blockMaxGas: isSet(object.blockMaxGas) ? Number(object.blockMaxGas) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockMaxBytes !== undefined && (obj.blockMaxBytes = Math.round(message.blockMaxBytes));
        message.blockMaxGas !== undefined && (obj.blockMaxGas = Math.round(message.blockMaxGas));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes ?? 0;
        message.blockMaxGas = object.blockMaxGas ?? 0;
        return message;
    },
};
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
