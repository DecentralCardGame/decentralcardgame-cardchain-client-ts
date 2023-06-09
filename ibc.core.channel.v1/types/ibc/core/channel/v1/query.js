/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
export const protobufPackage = "ibc.core.channel.v1";
function createBaseQueryChannelRequest() {
    return { portId: "", channelId: "" };
}
export const QueryChannelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryChannelResponse() {
    return { channel: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = Channel.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? Channel.fromPartial(object.channel)
            : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsRequest() {
    return { pagination: undefined };
}
export const QueryChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
export const QueryChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsRequest() {
    return { connection: "", pagination: undefined };
}
export const QueryConnectionChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
export const QueryConnectionChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelClientStateRequest() {
    return { portId: "", channelId: "" };
}
export const QueryChannelClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryChannelClientStateResponse() {
    return { identifiedClientState: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifiedClientState !== undefined) {
            IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            identifiedClientState: isSet(object.identifiedClientState)
                ? IdentifiedClientState.fromJSON(object.identifiedClientState)
                : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState
            ? IdentifiedClientState.toJSON(message.identifiedClientState)
            : undefined);
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateResponse();
        message.identifiedClientState =
            (object.identifiedClientState !== undefined && object.identifiedClientState !== null)
                ? IdentifiedClientState.fromPartial(object.identifiedClientState)
                : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelConsensusStateRequest() {
    return { portId: "", channelId: "", revisionNumber: 0, revisionHeight: 0 };
}
export const QueryChannelConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.revisionNumber !== 0) {
            writer.uint32(24).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            writer.uint32(32).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.revisionNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.revisionHeight = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
            revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.revisionNumber !== undefined && (obj.revisionNumber = Math.round(message.revisionNumber));
        message.revisionHeight !== undefined && (obj.revisionHeight = Math.round(message.revisionHeight));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.revisionNumber = object.revisionNumber ?? 0;
        message.revisionHeight = object.revisionHeight ?? 0;
        return message;
    },
};
function createBaseQueryChannelConsensusStateResponse() {
    return { consensusState: undefined, clientId: "", proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined
            && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? Any.fromPartial(object.consensusState)
            : undefined;
        message.clientId = object.clientId ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
export const QueryPacketCommitmentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketCommitmentResponse() {
    return { commitment: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketCommitmentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitment = reader.bytes();
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined
            && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsRequest() {
    return { portId: "", channelId: "", pagination: undefined };
}
export const QueryPacketCommitmentsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsResponse() {
    return { commitments: [], pagination: undefined, height: undefined };
}
export const QueryPacketCommitmentsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            commitments: Array.isArray(object?.commitments)
                ? object.commitments.map((e) => PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketReceiptRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
export const QueryPacketReceiptRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketReceiptResponse() {
    return { received: false, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketReceiptResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.received = reader.bool();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
export const QueryPacketAcknowledgementRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementResponse() {
    return { acknowledgement: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketAcknowledgementResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgement = reader.bytes();
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined
            && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return { portId: "", channelId: "", pagination: undefined, packetCommitmentSequences: [] };
}
export const QueryPacketAcknowledgementsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                    }
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => Math.round(e));
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return { acknowledgements: [], pagination: undefined, height: undefined };
}
export const QueryPacketAcknowledgementsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            acknowledgements: Array.isArray(object?.acknowledgements)
                ? object.acknowledgements.map((e) => PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedPacketsRequest() {
    return { portId: "", channelId: "", packetCommitmentSequences: [] };
}
export const QueryUnreceivedPacketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                    }
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => Math.round(e));
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryUnreceivedPacketsResponse() {
    return { sequences: [], height: undefined };
}
export const QueryUnreceivedPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.sequences.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.height = Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Number(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => Math.round(e));
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map((e) => e) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedAcksRequest() {
    return { portId: "", channelId: "", packetAckSequences: [] };
}
export const QueryUnreceivedAcksRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetAckSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetAckSequences.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.packetAckSequences.push(longToNumber(reader.uint64()));
                    }
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            packetAckSequences: Array.isArray(object?.packetAckSequences)
                ? object.packetAckSequences.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetAckSequences) {
            obj.packetAckSequences = message.packetAckSequences.map((e) => Math.round(e));
        }
        else {
            obj.packetAckSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetAckSequences = object.packetAckSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryUnreceivedAcksResponse() {
    return { sequences: [], height: undefined };
}
export const QueryUnreceivedAcksResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.sequences.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.height = Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Number(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => Math.round(e));
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map((e) => e) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceReceiveRequest() {
    return { portId: "", channelId: "" };
}
export const QueryNextSequenceReceiveRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryNextSequenceReceiveResponse() {
    return { nextSequenceReceive: 0, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryNextSequenceReceiveResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextSequenceReceive !== 0) {
            writer.uint32(8).uint64(message.nextSequenceReceive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextSequenceReceive = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            nextSequenceReceive: isSet(object.nextSequenceReceive) ? Number(object.nextSequenceReceive) : 0,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = Math.round(message.nextSequenceReceive));
        message.proof !== undefined
            && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined
            && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.nextSequenceReceive = object.nextSequenceReceive ?? 0;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Channel = this.Channel.bind(this);
        this.Channels = this.Channels.bind(this);
        this.ConnectionChannels = this.ConnectionChannels.bind(this);
        this.ChannelClientState = this.ChannelClientState.bind(this);
        this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
        this.PacketCommitment = this.PacketCommitment.bind(this);
        this.PacketCommitments = this.PacketCommitments.bind(this);
        this.PacketReceipt = this.PacketReceipt.bind(this);
        this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
        this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
        this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
        this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
        this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
    }
    Channel(request) {
        const data = QueryChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
        return promise.then((data) => QueryChannelResponse.decode(new _m0.Reader(data)));
    }
    Channels(request) {
        const data = QueryChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
        return promise.then((data) => QueryChannelsResponse.decode(new _m0.Reader(data)));
    }
    ConnectionChannels(request) {
        const data = QueryConnectionChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
        return promise.then((data) => QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
    }
    ChannelClientState(request) {
        const data = QueryChannelClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
        return promise.then((data) => QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
    }
    ChannelConsensusState(request) {
        const data = QueryChannelConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
        return promise.then((data) => QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
    }
    PacketCommitment(request) {
        const data = QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
        return promise.then((data) => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
    }
    PacketCommitments(request) {
        const data = QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
        return promise.then((data) => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
    }
    PacketReceipt(request) {
        const data = QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
        return promise.then((data) => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
    }
    PacketAcknowledgement(request) {
        const data = QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
        return promise.then((data) => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
    }
    PacketAcknowledgements(request) {
        const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
        return promise.then((data) => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
    }
    UnreceivedPackets(request) {
        const data = QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
        return promise.then((data) => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
    }
    UnreceivedAcks(request) {
        const data = QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
        return promise.then((data) => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
    }
    NextSequenceReceive(request) {
        const data = QueryNextSequenceReceiveRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
        return promise.then((data) => QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
    }
}
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
function isSet(value) {
    return value !== null && value !== undefined;
}
