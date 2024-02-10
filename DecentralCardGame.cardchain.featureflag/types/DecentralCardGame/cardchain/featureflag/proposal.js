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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlagEnableProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.Module = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.Name = reader.string();
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
            Title: isSet(object.Title) ? String(object.Title) : "",
            Description: isSet(object.Description) ? String(object.Description) : "",
            Module: isSet(object.Module) ? String(object.Module) : "",
            Name: isSet(object.Name) ? String(object.Name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Title !== "") {
            obj.Title = message.Title;
        }
        if (message.Description !== "") {
            obj.Description = message.Description;
        }
        if (message.Module !== "") {
            obj.Module = message.Module;
        }
        if (message.Name !== "") {
            obj.Name = message.Name;
        }
        return obj;
    },
    create(base) {
        return FlagEnableProposal.fromPartial(base ?? {});
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
