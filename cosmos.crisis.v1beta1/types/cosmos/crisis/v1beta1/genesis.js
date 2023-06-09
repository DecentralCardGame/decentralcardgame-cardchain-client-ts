/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export const protobufPackage = "cosmos.crisis.v1beta1";
function createBaseGenesisState() {
    return { constantFee: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.constantFee !== undefined) {
            Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.constantFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.constantFee !== undefined
            && (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.constantFee = (object.constantFee !== undefined && object.constantFee !== null)
            ? Coin.fromPartial(object.constantFee)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
