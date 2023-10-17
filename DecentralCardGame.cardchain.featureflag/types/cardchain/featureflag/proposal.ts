/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.featureflag";

export interface FlagEnableProposal {
  Title: string;
  Description: string;
  Module: string;
  Name: string;
}

function createBaseFlagEnableProposal(): FlagEnableProposal {
  return { Title: "", Description: "", Module: "", Name: "" };
}

export const FlagEnableProposal = {
  encode(message: FlagEnableProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FlagEnableProposal {
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

  fromJSON(object: any): FlagEnableProposal {
    return {
      Title: isSet(object.Title) ? String(object.Title) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Module: isSet(object.Module) ? String(object.Module) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
    };
  },

  toJSON(message: FlagEnableProposal): unknown {
    const obj: any = {};
    message.Title !== undefined && (obj.Title = message.Title);
    message.Description !== undefined && (obj.Description = message.Description);
    message.Module !== undefined && (obj.Module = message.Module);
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FlagEnableProposal>, I>>(object: I): FlagEnableProposal {
    const message = createBaseFlagEnableProposal();
    message.Title = object.Title ?? "";
    message.Description = object.Description ?? "";
    message.Module = object.Module ?? "";
    message.Name = object.Name ?? "";
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
