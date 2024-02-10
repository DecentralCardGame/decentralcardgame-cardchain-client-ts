import { MsgCancelUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
const msgTypes = [
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade],
];
export { msgTypes };
