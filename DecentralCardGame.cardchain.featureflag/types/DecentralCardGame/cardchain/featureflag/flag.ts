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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Module = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.Set = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.Module !== "") {
      obj.Module = message.Module;
    }
    if (message.Name !== "") {
      obj.Name = message.Name;
    }
    if (message.Set === true) {
      obj.Set = message.Set;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Flag>, I>>(base?: I): Flag {
    return Flag.fromPartial(base ?? ({} as any));
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
