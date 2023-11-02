/* eslint-disable @typescript-eslint/naming-convention */
import {AminoMsg} from "@cosmjs/amino";

// eslint-disable-next-line import/no-cycle
import {AminoConverter} from "@cosmjs/stargate";
import {MsgRegisterForCouncil, MsgTransferCard} from "./tx";

type AminoConverters = Record<string, AminoConverter>;

/** A high level transaction of the coin module */
export interface AminoMsgTransferCard extends AminoMsg {
    readonly type: "cardchain/TransferCard";
    readonly value: {
        readonly creator: string;
        readonly card_id: number;
        readonly receiver: string;
    };
}

export interface AminoMsgRegisterForCouncil extends AminoMsg {
    readonly type: "cardchain/RegisterForCouncil";
    readonly value: {
        readonly creator: string;
    };
}

export function isAminoMsgTransferCard(msg: AminoMsg): msg is AminoMsgTransferCard {
    return msg.type === "cardchain/TransferCard";
}

export function isAminoMsgRegisterForCouncil(msg: AminoMsg): msg is AminoMsgRegisterForCouncil {
    return msg.type === "cardchain/RegisterForCouncil";
}


export function createDecentralCardgameAminoConverters(): AminoConverters {
    return {
        "/DecentralCardGame.cardchain.cardchain.MsgTransferCard": {
            aminoType: "cardchain/TransferCard",
            toAmino: (msg: MsgTransferCard): AminoMsgTransferCard["value"] => ({
                creator: msg.creator,
                card_id: msg.cardId,
                receiver: msg.receiver
            }),
            fromAmino: (msg: AminoMsgTransferCard["value"]): MsgTransferCard => ({
                creator: msg.creator,
                cardId: msg.card_id,
                receiver: msg.receiver
            }),
        },
        "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
            aminoType: "cardchain/RegisterForCouncil",
            toAmino: (msg: MsgRegisterForCouncil): AminoMsgRegisterForCouncil["value"] => ({
                creator: msg.creator
            }),
            fromAmino: (msg: AminoMsgRegisterForCouncil["value"]): MsgRegisterForCouncil => ({
                creator: msg.creator
            }),
        },
    };
}
