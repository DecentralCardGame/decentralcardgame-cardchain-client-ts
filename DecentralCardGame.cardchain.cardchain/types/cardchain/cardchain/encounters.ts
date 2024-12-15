/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export interface Encounter {
  Id: number;
  Drawlist: number[];
  proven: boolean;
  owner: string;
  parameters: { [key: string]: string };
  imageId: number;
  name: string;
}

export interface Encounter_ParametersEntry {
  key: string;
  value: string;
}

export interface EncounterWithImage {
  encounter: Encounter | undefined;
  image: Uint8Array;
}

function createBaseEncounter(): Encounter {
  return { Id: 0, Drawlist: [], proven: false, owner: "", parameters: {}, imageId: 0, name: "" };
}

export const Encounter = {
  encode(message: Encounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Encounter_ParametersEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (message.imageId !== 0) {
      writer.uint32(48).uint64(message.imageId);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Drawlist.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.Drawlist.push(longToNumber(reader.uint64() as Long));
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
          message.imageId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Encounter {
    return {
      Id: isSet(object.Id) ? Number(object.Id) : 0,
      Drawlist: Array.isArray(object?.Drawlist) ? object.Drawlist.map((e: any) => Number(e)) : [],
      proven: isSet(object.proven) ? Boolean(object.proven) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      parameters: isObject(object.parameters)
        ? Object.entries(object.parameters).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      imageId: isSet(object.imageId) ? Number(object.imageId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Encounter): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = Math.round(message.Id));
    if (message.Drawlist) {
      obj.Drawlist = message.Drawlist.map((e) => Math.round(e));
    } else {
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

  fromPartial<I extends Exact<DeepPartial<Encounter>, I>>(object: I): Encounter {
    const message = createBaseEncounter();
    message.Id = object.Id ?? 0;
    message.Drawlist = object.Drawlist?.map((e) => e) || [];
    message.proven = object.proven ?? false;
    message.owner = object.owner ?? "";
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.imageId = object.imageId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEncounter_ParametersEntry(): Encounter_ParametersEntry {
  return { key: "", value: "" };
}

export const Encounter_ParametersEntry = {
  encode(message: Encounter_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encounter_ParametersEntry {
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

  fromJSON(object: any): Encounter_ParametersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Encounter_ParametersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Encounter_ParametersEntry>, I>>(object: I): Encounter_ParametersEntry {
    const message = createBaseEncounter_ParametersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEncounterWithImage(): EncounterWithImage {
  return { encounter: undefined, image: new Uint8Array() };
}

export const EncounterWithImage = {
  encode(message: EncounterWithImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encounter !== undefined) {
      Encounter.encode(message.encounter, writer.uint32(10).fork()).ldelim();
    }
    if (message.image.length !== 0) {
      writer.uint32(18).bytes(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncounterWithImage {
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

  fromJSON(object: any): EncounterWithImage {
    return {
      encounter: isSet(object.encounter) ? Encounter.fromJSON(object.encounter) : undefined,
      image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(),
    };
  },

  toJSON(message: EncounterWithImage): unknown {
    const obj: any = {};
    message.encounter !== undefined
      && (obj.encounter = message.encounter ? Encounter.toJSON(message.encounter) : undefined);
    message.image !== undefined
      && (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EncounterWithImage>, I>>(object: I): EncounterWithImage {
    const message = createBaseEncounterWithImage();
    message.encounter = (object.encounter !== undefined && object.encounter !== null)
      ? Encounter.fromPartial(object.encounter)
      : undefined;
    message.image = object.image ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
