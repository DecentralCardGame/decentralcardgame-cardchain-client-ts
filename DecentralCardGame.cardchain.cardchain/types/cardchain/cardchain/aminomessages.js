export function isAminoMsgTransferCard(msg) {
    return msg.type === "cardchain/TransferCard";
}
export function isAminoMsgRegisterForCouncil(msg) {
    return msg.type === "cardchain/RegisterForCouncil";
}
export function createDecentralCardgameAminoConverters() {
    return {
        "/DecentralCardGame.cardchain.cardchain.MsgTransferCard": {
            aminoType: "cardchain/TransferCard",
            toAmino: (msg) => ({
                creator: msg.creator,
                card_id: msg.cardId,
                receiver: msg.receiver
            }),
            fromAmino: (msg) => ({
                creator: msg.creator,
                cardId: msg.card_id,
                receiver: msg.receiver
            }),
        },
        "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
            aminoType: "cardchain/RegisterForCouncil",
            toAmino: (msg) => ({
                creator: msg.creator
            }),
            fromAmino: (msg) => ({
                creator: msg.creator
            }),
        },
    };
}
