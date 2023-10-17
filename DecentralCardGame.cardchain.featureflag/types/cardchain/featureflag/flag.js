/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.featureflag";
function createBaseFlag() {
    return { Module: "", Name: "", Set: false };
}
export const Flag = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Module !== "") {
            writer.uint32(10).string(message.Module);
        }
        if (message.Name !== "") {
            writer.uint32(18).string(message.Name);
        }
        if (message.Set === true) {
            writer.uint32(24).bool(message.Set);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlag();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Module = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Set = reader.bool();
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
            Module: isSet(object.Module) ? String(object.Module) : "",
            Name: isSet(object.Name) ? String(object.Name) : "",
            Set: isSet(object.Set) ? Boolean(object.Set) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Module !== undefined && (obj.Module = message.Module);
        message.Name !== undefined && (obj.Name = message.Name);
        message.Set !== undefined && (obj.Set = message.Set);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFlag();
        message.Module = object.Module ?? "";
        message.Name = object.Name ?? "";
        message.Set = object.Set ?? false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
