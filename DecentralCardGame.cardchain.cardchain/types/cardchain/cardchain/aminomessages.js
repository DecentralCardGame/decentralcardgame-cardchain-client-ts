export function isAminoMsgTransferCard(msg) {
    return msg.type === "cardchain/MsgTransferCard";
}
export function isAminoMsgRegisterForCouncil(msg) {
    return msg.type === "cardchain/MsgRegisterForCouncil";
}
export function createDecentralCardgameAminoConverters() {
    return {
        "/DecentralCardGame.cardchain.cardchain.MsgTransferCard": {
            aminoType: "cardchain/MsgTransferCard",
            toAmino: (msg) => (msg),
            fromAmino: (msg) => (msg),
        },
        "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
            aminoType: "cardchain/MsgRegisterForCouncil",
            toAmino: (msg) => {
                console.log("Hier hier, was da los?", msg);
                return msg;
            },
            fromAmino: (msg) => (msg),
        },
    };
}
