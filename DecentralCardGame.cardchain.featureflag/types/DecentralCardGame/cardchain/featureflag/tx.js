/* eslint-disable */
export const protobufPackage = "DecentralCardGame.cardchain.featureflag";
export const MsgServiceName = "DecentralCardGame.cardchain.featureflag.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
    }
}
