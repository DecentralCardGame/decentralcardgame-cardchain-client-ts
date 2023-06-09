/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseParams() {
    return { controllerEnabled: false };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.controllerEnabled === true) {
            writer.uint32(8).bool(message.controllerEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.controllerEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false };
    },
    toJSON(message) {
        const obj = {};
        message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.controllerEnabled = object.controllerEnabled ?? false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
