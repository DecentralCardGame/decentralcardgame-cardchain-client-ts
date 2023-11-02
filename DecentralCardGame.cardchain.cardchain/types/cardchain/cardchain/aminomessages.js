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
            toAmino: (msg) => (msg),
            fromAmino: (msg) => (msg),
        },
        "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
            aminoType: "cardchain/RegisterForCouncil",
            toAmino: (msg) => {
                console.log("Hier hier, was da los?", msg);
                return msg;
            },
            fromAmino: (msg) => (msg),
        },
    };
}
