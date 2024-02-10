/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseServer() {
    return { reporter: "", invalidReports: 0, validReports: 0 };
}
export const Server = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reporter !== "") {
            writer.uint32(10).string(message.reporter);
        }
        if (message.invalidReports !== 0) {
            writer.uint32(16).uint64(message.invalidReports);
        }
        if (message.validReports !== 0) {
            writer.uint32(24).uint64(message.validReports);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reporter = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.invalidReports = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.validReports = longToNumber(reader.uint64());
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
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
            invalidReports: isSet(object.invalidReports) ? Number(object.invalidReports) : 0,
            validReports: isSet(object.validReports) ? Number(object.validReports) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reporter !== "") {
            obj.reporter = message.reporter;
        }
        if (message.invalidReports !== 0) {
            obj.invalidReports = Math.round(message.invalidReports);
        }
        if (message.validReports !== 0) {
            obj.validReports = Math.round(message.validReports);
        }
        return obj;
    },
    create(base) {
        return Server.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseServer();
        message.reporter = object.reporter ?? "";
        message.invalidReports = object.invalidReports ?? 0;
        message.validReports = object.validReports ?? 0;
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
