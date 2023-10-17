/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.featureflag";

export interface Flag {
  Module: string;
  Name: string;
  Set: boolean;
}

function createBaseFlag(): Flag {
  return { Module: "", Name: "", Set: false };
}

export const Flag = {
  encode(message: Flag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Flag {
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

  fromJSON(object: any): Flag {
    return {
      Module: isSet(object.Module) ? String(object.Module) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Set: isSet(object.Set) ? Boolean(object.Set) : false,
    };
  },

  toJSON(message: Flag): unknown {
    const obj: any = {};
    message.Module !== undefined && (obj.Module = message.Module);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Set !== undefined && (obj.Set = message.Set);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Flag>, I>>(object: I): Flag {
    const message = createBaseFlag();
    message.Module = object.Module ?? "";
    message.Name = object.Name ?? "";
    message.Set = object.Set ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
