/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
function createBaseEncounter() {
    return { Id: 0, Drawlist: [], proven: false, owner: "", parameters: {}, imageId: 0, name: "" };
}
export const Encounter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Id !== 0) {
            writer.uint32(8).uint64(message.Id);
        }
        writer.uint32(18).fork();
        for (const v of message.Drawlist) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.proven === true) {
            writer.uint32(24).bool(message.proven);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        Object.entries(message.parameters).forEach(([key, value]) => {
            Encounter_ParametersEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.imageId !== 0) {
            writer.uint32(48).uint64(message.imageId);
        }
        if (message.name !== "") {
            writer.uint32(58).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Id = longToNumber(reader.uint64());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.Drawlist.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.Drawlist.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 3:
                    message.proven = reader.bool();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    const entry5 = Encounter_ParametersEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.parameters[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.imageId = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.name = reader.string();
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
            Id: isSet(object.Id) ? Number(object.Id) : 0,
            Drawlist: Array.isArray(object?.Drawlist) ? object.Drawlist.map((e) => Number(e)) : [],
            proven: isSet(object.proven) ? Boolean(object.proven) : false,
            owner: isSet(object.owner) ? String(object.owner) : "",
            parameters: isObject(object.parameters)
                ? Object.entries(object.parameters).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            imageId: isSet(object.imageId) ? Number(object.imageId) : 0,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.Id !== undefined && (obj.Id = Math.round(message.Id));
        if (message.Drawlist) {
            obj.Drawlist = message.Drawlist.map((e) => Math.round(e));
        }
        else {
            obj.Drawlist = [];
        }
        message.proven !== undefined && (obj.proven = message.proven);
        message.owner !== undefined && (obj.owner = message.owner);
        obj.parameters = {};
        if (message.parameters) {
            Object.entries(message.parameters).forEach(([k, v]) => {
                obj.parameters[k] = v;
            });
        }
        message.imageId !== undefined && (obj.imageId = Math.round(message.imageId));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEncounter();
        message.Id = object.Id ?? 0;
        message.Drawlist = object.Drawlist?.map((e) => e) || [];
        message.proven = object.proven ?? false;
        message.owner = object.owner ?? "";
        message.parameters = Object.entries(object.parameters ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.imageId = object.imageId ?? 0;
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseEncounter_ParametersEntry() {
    return { key: "", value: "" };
}
export const Encounter_ParametersEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncounter_ParametersEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEncounter_ParametersEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseEncounterWithImage() {
    return { encounter: undefined, image: new Uint8Array() };
}
export const EncounterWithImage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encounter !== undefined) {
            Encounter.encode(message.encounter, writer.uint32(10).fork()).ldelim();
        }
        if (message.image.length !== 0) {
            writer.uint32(18).bytes(message.image);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncounterWithImage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encounter = Encounter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.image = reader.bytes();
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
            encounter: isSet(object.encounter) ? Encounter.fromJSON(object.encounter) : undefined,
            image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.encounter !== undefined
            && (obj.encounter = message.encounter ? Encounter.toJSON(message.encounter) : undefined);
        message.image !== undefined
            && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEncounterWithImage();
        message.encounter = (object.encounter !== undefined && object.encounter !== null)
            ? Encounter.fromPartial(object.encounter)
            : undefined;
        message.image = object.image ?? new Uint8Array();
        return message;
    },
};
var globalThis = (() => {
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
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
