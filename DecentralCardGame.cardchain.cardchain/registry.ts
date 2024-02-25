import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgChangeAlias } from "./types/cardchain/cardchain/tx";
import { MsgChangeArtist } from "./types/cardchain/cardchain/tx";
import { MsgAddContributorToSet } from "./types/cardchain/cardchain/tx";
import { MsgAddArtworkToSet } from "./types/cardchain/cardchain/tx";
import { MsgBuyCardScheme } from "./types/cardchain/cardchain/tx";
import { MsgVoteCard } from "./types/cardchain/cardchain/tx";
import { MsgOpenBoosterPack } from "./types/cardchain/cardchain/tx";
import { MsgMultiVoteCard } from "./types/cardchain/cardchain/tx";
import { MsgSetSetArtist } from "./types/cardchain/cardchain/tx";
import { MsgApointMatchReporter } from "./types/cardchain/cardchain/tx";
import { MsgAddArtwork } from "./types/cardchain/cardchain/tx";
import { MsgCreateSellOffer } from "./types/cardchain/cardchain/tx";
import { MsgBuyCard } from "./types/cardchain/cardchain/tx";
import { MsgCreateuser } from "./types/cardchain/cardchain/tx";
import { MsgBuyBoosterPack } from "./types/cardchain/cardchain/tx";
import { MsgCreateCouncil } from "./types/cardchain/cardchain/tx";
import { MsgSetUserBiography } from "./types/cardchain/cardchain/tx";
import { MsgSetSetStoryWriter } from "./types/cardchain/cardchain/tx";
import { MsgDonateToCard } from "./types/cardchain/cardchain/tx";
import { MsgRemoveContributorFromSet } from "./types/cardchain/cardchain/tx";
import { MsgSetUserWebsite } from "./types/cardchain/cardchain/tx";
import { MsgTransferCard } from "./types/cardchain/cardchain/tx";
import { MsgRewokeCouncilRegistration } from "./types/cardchain/cardchain/tx";
import { MsgFinalizeSet } from "./types/cardchain/cardchain/tx";
import { MsgOpenMatch } from "./types/cardchain/cardchain/tx";
import { MsgSetCardRarity } from "./types/cardchain/cardchain/tx";
import { MsgRegisterForCouncil } from "./types/cardchain/cardchain/tx";
import { MsgSaveCardContent } from "./types/cardchain/cardchain/tx";
import { MsgRestartCouncil } from "./types/cardchain/cardchain/tx";
import { MsgAddStoryToSet } from "./types/cardchain/cardchain/tx";
import { MsgReportMatch } from "./types/cardchain/cardchain/tx";
import { MsgAddCardToSet } from "./types/cardchain/cardchain/tx";
import { MsgRevealCouncilResponse } from "./types/cardchain/cardchain/tx";
import { MsgSetProfileCard } from "./types/cardchain/cardchain/tx";
import { MsgRemoveCardFromSet } from "./types/cardchain/cardchain/tx";
import { MsgSetSetName } from "./types/cardchain/cardchain/tx";
import { MsgTransferBoosterPack } from "./types/cardchain/cardchain/tx";
import { MsgCreateSet } from "./types/cardchain/cardchain/tx";
import { MsgRemoveSellOffer } from "./types/cardchain/cardchain/tx";
import { MsgConfirmMatch } from "./types/cardchain/cardchain/tx";
import { MsgCommitCouncilResponse } from "./types/cardchain/cardchain/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/DecentralCardGame.cardchain.cardchain.MsgChangeAlias", MsgChangeAlias],
    ["/DecentralCardGame.cardchain.cardchain.MsgChangeArtist", MsgChangeArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddContributorToSet", MsgAddContributorToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtworkToSet", MsgAddArtworkToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCardScheme", MsgBuyCardScheme],
    ["/DecentralCardGame.cardchain.cardchain.MsgVoteCard", MsgVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenBoosterPack", MsgOpenBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgMultiVoteCard", MsgMultiVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetArtist", MsgSetSetArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgApointMatchReporter", MsgApointMatchReporter],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtwork", MsgAddArtwork],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSellOffer", MsgCreateSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCard", MsgBuyCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateuser", MsgCreateuser],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyBoosterPack", MsgBuyBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCouncil", MsgCreateCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserBiography", MsgSetUserBiography],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetStoryWriter", MsgSetSetStoryWriter],
    ["/DecentralCardGame.cardchain.cardchain.MsgDonateToCard", MsgDonateToCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveContributorFromSet", MsgRemoveContributorFromSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserWebsite", MsgSetUserWebsite],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferCard", MsgTransferCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgRewokeCouncilRegistration", MsgRewokeCouncilRegistration],
    ["/DecentralCardGame.cardchain.cardchain.MsgFinalizeSet", MsgFinalizeSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenMatch", MsgOpenMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCardRarity", MsgSetCardRarity],
    ["/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil", MsgRegisterForCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgSaveCardContent", MsgSaveCardContent],
    ["/DecentralCardGame.cardchain.cardchain.MsgRestartCouncil", MsgRestartCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddStoryToSet", MsgAddStoryToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgReportMatch", MsgReportMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddCardToSet", MsgAddCardToSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgRevealCouncilResponse", MsgRevealCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetProfileCard", MsgSetProfileCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveCardFromSet", MsgRemoveCardFromSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetSetName", MsgSetSetName],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferBoosterPack", MsgTransferBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSet", MsgCreateSet],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveSellOffer", MsgRemoveSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgConfirmMatch", MsgConfirmMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgCommitCouncilResponse", MsgCommitCouncilResponse],
    
];

export { msgTypes }