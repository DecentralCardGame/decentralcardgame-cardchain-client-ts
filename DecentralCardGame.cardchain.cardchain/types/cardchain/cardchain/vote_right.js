/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseVoteRight() {
    return { cardId: 0, expireBlock: 0 };
}
export const VoteRight = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== 0) {
            writer.uint32(8).uint64(message.cardId);
        }
        if (message.expireBlock !== 0) {
            writer.uint32(16).int64(message.expireBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteRight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.expireBlock = longToNumber(reader.int64());
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
            cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
            expireBlock: isSet(object.expireBlock) ? Number(object.expireBlock) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = Math.round(message.cardId));
        message.expireBlock !== undefined && (obj.expireBlock = Math.round(message.expireBlock));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteRight();
        message.cardId = object.cardId ?? 0;
        message.expireBlock = object.expireBlock ?? 0;
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
