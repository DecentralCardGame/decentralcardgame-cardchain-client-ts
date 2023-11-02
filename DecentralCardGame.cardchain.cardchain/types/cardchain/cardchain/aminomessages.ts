/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";

// eslint-disable-next-line import/no-cycle
import { AminoConverter } from "@cosmjs/stargate";
import {MsgRegisterForCouncil, MsgTransferCard } from "./tx";

type AminoConverters = Record<string, AminoConverter>;

/** A high level transaction of the coin module */
export interface AminoMsgTransferCard extends AminoMsg {
  readonly type: "cardchain/TransferCard";
  readonly value: {
    readonly creator: string;
    readonly cardId: number;
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
      toAmino: (msg: MsgTransferCard): AminoMsgTransferCard["value"] => (msg),
      fromAmino: (msg: AminoMsgTransferCard["value"]): MsgTransferCard => (msg),
    },
    "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
      aminoType: "cardchain/RegisterForCouncil",
      toAmino: (msg: MsgRegisterForCouncil): AminoMsgRegisterForCouncil["value"] => {
          console.log("Hier hier, was da los?", msg)
          return msg
        },
      fromAmino: (msg: AminoMsgRegisterForCouncil["value"]): MsgRegisterForCouncil => (msg),
    },
  };
}
