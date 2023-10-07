import { MsgRemoveCardFromSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgChangeArtist } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgOpenMatch } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgVoteCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRemoveSellOffer } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgOpenBoosterPack } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetCardRarity } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddCardToSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddStoryToSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgTransferCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitCopyrightProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddContributorToSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgDonateToCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitSetProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgTransferBoosterPack } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetUserBiography } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetSetName } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCommitCouncilResponse } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRegisterForCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgFinalizeSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetProfileCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddArtwork } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSaveCardContent } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRewokeCouncilRegistration } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitMatchReporterProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateSellOffer } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateuser } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgApointMatchReporter } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetSetArtist } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRemoveContributorFromSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgReportMatch } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRestartCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetUserWebsite } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetSetStoryWriter } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgMultiVoteCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyCardScheme } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddArtworkToSet } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRevealCouncilResponse } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyBoosterPack } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgConfirmMatch } from "./types/DecentralCardGame/cardchain/cardchain/tx";
const msgTypes = [
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveCardFromSet", MsgRemoveCardFromSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgChangeArtist", MsgChangeArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenMatch", MsgOpenMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgVoteCard", MsgVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveSellOffer", MsgRemoveSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenBoosterPack", MsgOpenBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCardRarity", MsgSetCardRarity],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddCardToSet", MsgAddCardToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddStoryToSet", MsgAddStoryToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferCard", MsgTransferCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCouncil", MsgCreateCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCard", MsgBuyCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitCopyrightProposal", MsgSubmitCopyrightProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddContributorToSet", MsgAddContributorToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgDonateToCard", MsgDonateToCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitSetProposal", MsgSubmitSetProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferBoosterPack", MsgTransferBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserBiography", MsgSetUserBiography],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetName", MsgSetSetName],
    ["/DecentralCardGame.cardchain.cardchain.MsgCommitCouncilResponse", MsgCommitCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil", MsgRegisterForCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgFinalizeSet", MsgFinalizeSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetProfileCard", MsgSetProfileCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtwork", MsgAddArtwork],
    ["/DecentralCardGame.cardchain.cardchain.MsgSaveCardContent", MsgSaveCardContent],
    ["/DecentralCardGame.cardchain.cardchain.MsgRewokeCouncilRegistration", MsgRewokeCouncilRegistration],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitMatchReporterProposal", MsgSubmitMatchReporterProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSellOffer", MsgCreateSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateuser", MsgCreateuser],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSet", MsgCreateSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgApointMatchReporter", MsgApointMatchReporter],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetArtist", MsgSetSetArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveContributorFromSet", MsgRemoveContributorFromSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgReportMatch", MsgReportMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgRestartCouncil", MsgRestartCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserWebsite", MsgSetUserWebsite],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetStoryWriter", MsgSetSetStoryWriter],
    ["/DecentralCardGame.cardchain.cardchain.MsgMultiVoteCard", MsgMultiVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCardScheme", MsgBuyCardScheme],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtworkToSet", MsgAddArtworkToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgRevealCouncilResponse", MsgRevealCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyBoosterPack", MsgBuyBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgConfirmMatch", MsgConfirmMatch],
];
export { msgTypes };
