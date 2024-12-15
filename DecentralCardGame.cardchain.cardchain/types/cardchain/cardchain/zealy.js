/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseZealy() {
    return { address: "", zealyId: "" };
}
export const Zealy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.zealyId !== "") {
            writer.uint32(18).string(message.zealyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseZealy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            zealyId: isSet(object.zealyId) ? String(object.zealyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.zealyId !== undefined && (obj.zealyId = message.zealyId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseZealy();
        message.address = object.address ?? "";
        message.zealyId = object.zealyId ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
