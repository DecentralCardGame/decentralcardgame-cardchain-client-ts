/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseMatchReporterProposal() {
    return { title: "", description: "", reporter: "" };
}
export const MatchReporterProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.reporter !== "") {
            writer.uint32(26).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMatchReporterProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.reporter = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMatchReporterProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.reporter = object.reporter ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
