/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Flag } from "./flag";
import { Params } from "./params";
export const protobufPackage = "DecentralCardGame.cardchain.featureflag";
function createBaseGenesisState() {
    return { params: undefined, flags: {} };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.flags).forEach(([key, value]) => {
            GenesisState_FlagsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = GenesisState_FlagsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.flags[entry2.key] = entry2.value;
                    }
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            flags: isObject(object.flags)
                ? Object.entries(object.flags).reduce((acc, [key, value]) => {
                    acc[key] = Flag.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        obj.flags = {};
        if (message.flags) {
            Object.entries(message.flags).forEach(([k, v]) => {
                obj.flags[k] = Flag.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.flags = Object.entries(object.flags ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Flag.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseGenesisState_FlagsEntry() {
    return { key: "", value: undefined };
}
export const GenesisState_FlagsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Flag.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_FlagsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Flag.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Flag.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? Flag.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState_FlagsEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null) ? Flag.fromPartial(object.value) : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
