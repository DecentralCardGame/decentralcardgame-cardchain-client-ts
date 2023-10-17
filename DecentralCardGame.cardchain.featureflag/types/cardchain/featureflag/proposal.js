/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.featureflag";
function createBaseFlagEnableProposal() {
    return { Title: "", Description: "", Module: "", Name: "" };
}
export const FlagEnableProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Title !== "") {
            writer.uint32(10).string(message.Title);
        }
        if (message.Description !== "") {
            writer.uint32(18).string(message.Description);
        }
        if (message.Module !== "") {
            writer.uint32(26).string(message.Module);
        }
        if (message.Name !== "") {
            writer.uint32(34).string(message.Name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlagEnableProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Title = reader.string();
                    break;
                case 2:
                    message.Description = reader.string();
                    break;
                case 3:
                    message.Module = reader.string();
                    break;
                case 4:
                    message.Name = reader.string();
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
            Title: isSet(object.Title) ? String(object.Title) : "",
            Description: isSet(object.Description) ? String(object.Description) : "",
            Module: isSet(object.Module) ? String(object.Module) : "",
            Name: isSet(object.Name) ? String(object.Name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.Title !== undefined && (obj.Title = message.Title);
        message.Description !== undefined && (obj.Description = message.Description);
        message.Module !== undefined && (obj.Module = message.Module);
        message.Name !== undefined && (obj.Name = message.Name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFlagEnableProposal();
        message.Title = object.Title ?? "";
        message.Description = object.Description ?? "";
        message.Module = object.Module ?? "";
        message.Name = object.Name ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
