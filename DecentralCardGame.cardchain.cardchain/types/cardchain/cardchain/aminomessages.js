export function isAminoMsgTransferCard(msg) {
    return msg.type === "decentral-cardgame/MsgTransferCard";
}
export function isAminoMsgRegisterForCouncil(msg) {
    return msg.type === "decentral-cardgame/MsgRegisterForCouncil";
}
export function createDecentralCardgameAminoConverters() {
    return {
        "/DecentralCardGame.cardchain.cardchain.MsgTransferCard": {
            aminoType: "decentral-cardgame/MsgTransferCard",
            toAmino: (msg) => (msg),
            fromAmino: (msg) => (msg),
        },
        "/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil": {
            aminoType: "decentral-cardgame/MsgRegisterForCouncil",
            toAmino: (msg) => {
                console.log("Hier hier, was da los?", msg);
                return msg;
            },
            fromAmino: (msg) => (msg),
        },
    };
}
