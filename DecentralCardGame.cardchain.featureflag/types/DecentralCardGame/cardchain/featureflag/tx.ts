/* eslint-disable */

export const protobufPackage = "DecentralCardGame.cardchain.featureflag";

/** Msg defines the Msg service. */
export interface Msg {
}

export const MsgServiceName = "DecentralCardGame.cardchain.featureflag.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
