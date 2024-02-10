/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Flag } from "./flag";
import { Params } from "./params";

export const protobufPackage = "DecentralCardGame.cardchain.featureflag";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryQFlagRequest {
  module: string;
  name: string;
}

export interface QueryQFlagResponse {
  flag: Flag | undefined;
}

export interface QueryQFlagsRequest {
}

export interface QueryQFlagsResponse {
  flags: Flag[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryQFlagRequest(): QueryQFlagRequest {
  return { module: "", name: "" };
}

export const QueryQFlagRequest = {
  encode(message: QueryQFlagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQFlagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQFlagRequest {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QueryQFlagRequest): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQFlagRequest>, I>>(base?: I): QueryQFlagRequest {
    return QueryQFlagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQFlagRequest>, I>>(object: I): QueryQFlagRequest {
    const message = createBaseQueryQFlagRequest();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryQFlagResponse(): QueryQFlagResponse {
  return { flag: undefined };
}

export const QueryQFlagResponse = {
  encode(message: QueryQFlagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flag !== undefined) {
      Flag.encode(message.flag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQFlagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.flag = Flag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQFlagResponse {
    return { flag: isSet(object.flag) ? Flag.fromJSON(object.flag) : undefined };
  },

  toJSON(message: QueryQFlagResponse): unknown {
    const obj: any = {};
    if (message.flag !== undefined) {
      obj.flag = Flag.toJSON(message.flag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQFlagResponse>, I>>(base?: I): QueryQFlagResponse {
    return QueryQFlagResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQFlagResponse>, I>>(object: I): QueryQFlagResponse {
    const message = createBaseQueryQFlagResponse();
    message.flag = (object.flag !== undefined && object.flag !== null) ? Flag.fromPartial(object.flag) : undefined;
    return message;
  },
};

function createBaseQueryQFlagsRequest(): QueryQFlagsRequest {
  return {};
}

export const QueryQFlagsRequest = {
  encode(_: QueryQFlagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQFlagsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQFlagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryQFlagsRequest {
    return {};
  },

  toJSON(_: QueryQFlagsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQFlagsRequest>, I>>(base?: I): QueryQFlagsRequest {
    return QueryQFlagsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQFlagsRequest>, I>>(_: I): QueryQFlagsRequest {
    const message = createBaseQueryQFlagsRequest();
    return message;
  },
};

function createBaseQueryQFlagsResponse(): QueryQFlagsResponse {
  return { flags: [] };
}

export const QueryQFlagsResponse = {
  encode(message: QueryQFlagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.flags) {
      Flag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQFlagsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQFlagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.flags.push(Flag.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQFlagsResponse {
    return { flags: Array.isArray(object?.flags) ? object.flags.map((e: any) => Flag.fromJSON(e)) : [] };
  },

  toJSON(message: QueryQFlagsResponse): unknown {
    const obj: any = {};
    if (message.flags?.length) {
      obj.flags = message.flags.map((e) => Flag.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryQFlagsResponse>, I>>(base?: I): QueryQFlagsResponse {
    return QueryQFlagsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryQFlagsResponse>, I>>(object: I): QueryQFlagsResponse {
    const message = createBaseQueryQFlagsResponse();
    message.flags = object.flags?.map((e) => Flag.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of QFlag items. */
  QFlag(request: QueryQFlagRequest): Promise<QueryQFlagResponse>;
  /** Queries a list of QFlags items. */
  QFlags(request: QueryQFlagsRequest): Promise<QueryQFlagsResponse>;
}

export const QueryServiceName = "DecentralCardGame.cardchain.featureflag.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QFlag = this.QFlag.bind(this);
    this.QFlags = this.QFlags.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  QFlag(request: QueryQFlagRequest): Promise<QueryQFlagResponse> {
    const data = QueryQFlagRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QFlag", data);
    return promise.then((data) => QueryQFlagResponse.decode(_m0.Reader.create(data)));
  }

  QFlags(request: QueryQFlagsRequest): Promise<QueryQFlagsResponse> {
    const data = QueryQFlagsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QFlags", data);
    return promise.then((data) => QueryQFlagsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
