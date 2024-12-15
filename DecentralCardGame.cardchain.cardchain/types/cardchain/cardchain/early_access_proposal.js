/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseEarlyAccessProposal() {
    return { title: "", description: "", link: "", users: [] };
}
export const EarlyAccessProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== "") {
            writer.uint32(26).string(message.link);
        }
        for (const v of message.users) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEarlyAccessProposal();
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
                    message.link = reader.string();
                    break;
                case 4:
                    message.users.push(reader.string());
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
            link: isSet(object.link) ? String(object.link) : "",
            users: Array.isArray(object?.users) ? object.users.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        if (message.users) {
            obj.users = message.users.map((e) => e);
        }
        else {
            obj.users = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEarlyAccessProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.link = object.link ?? "";
        message.users = object.users?.map((e) => e) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
