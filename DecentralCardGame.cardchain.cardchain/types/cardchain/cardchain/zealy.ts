/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export interface Zealy {
  address: string;
  zealyId: string;
}

function createBaseZealy(): Zealy {
  return { address: "", zealyId: "" };
}

export const Zealy = {
  encode(message: Zealy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.zealyId !== "") {
      writer.uint32(18).string(message.zealyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Zealy {
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

  fromJSON(object: any): Zealy {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      zealyId: isSet(object.zealyId) ? String(object.zealyId) : "",
    };
  },

  toJSON(message: Zealy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.zealyId !== undefined && (obj.zealyId = message.zealyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Zealy>, I>>(object: I): Zealy {
    const message = createBaseZealy();
    message.address = object.address ?? "";
    message.zealyId = object.zealyId ?? "";
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
