import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgVoteCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddArtworkToCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateSellOffer } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRemoveContributorFromCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgDonateToCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddStoryToCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRestartCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRewokeCouncilRegistration } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetCollectionStoryWriter } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgApointMatchReporter } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgMultiVoteCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgTransferCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddCardToCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgBuyCardScheme } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateuser } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRemoveSellOffer } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddContributorToCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetCollectionArtist } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgAddArtwork } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitCopyrightProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgChangeArtist } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgReportMatch } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetUserBiography } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitMatchReporterProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetProfileCard } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCreateCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgConfirmMatch } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRemoveCardFromCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetCardRarity } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSaveCardContent } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRevealCouncilResponse } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgCommitCouncilResponse } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgRegisterForCouncil } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSetUserWebsite } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgSubmitCollectionProposal } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgOpenBoosterPack } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgTransferBoosterPack } from "./types/DecentralCardGame/cardchain/cardchain/tx";
import { MsgFinalizeCollection } from "./types/DecentralCardGame/cardchain/cardchain/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/DecentralCardGame.cardchain.cardchain.MsgVoteCard", MsgVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCard", MsgBuyCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtworkToCollection", MsgAddArtworkToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSellOffer", MsgCreateSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveContributorFromCollection", MsgRemoveContributorFromCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCollection", MsgCreateCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCollection", MsgBuyCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgDonateToCard", MsgDonateToCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddStoryToCollection", MsgAddStoryToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgRestartCouncil", MsgRestartCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgRewokeCouncilRegistration", MsgRewokeCouncilRegistration],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCollectionStoryWriter", MsgSetCollectionStoryWriter],
    ["/DecentralCardGame.cardchain.cardchain.MsgApointMatchReporter", MsgApointMatchReporter],
    ["/DecentralCardGame.cardchain.cardchain.MsgMultiVoteCard", MsgMultiVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferCard", MsgTransferCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddCardToCollection", MsgAddCardToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCardScheme", MsgBuyCardScheme],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateuser", MsgCreateuser],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveSellOffer", MsgRemoveSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddContributorToCollection", MsgAddContributorToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCollectionArtist", MsgSetCollectionArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtwork", MsgAddArtwork],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitCopyrightProposal", MsgSubmitCopyrightProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgChangeArtist", MsgChangeArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgReportMatch", MsgReportMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserBiography", MsgSetUserBiography],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitMatchReporterProposal", MsgSubmitMatchReporterProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetProfileCard", MsgSetProfileCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCouncil", MsgCreateCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgConfirmMatch", MsgConfirmMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveCardFromCollection", MsgRemoveCardFromCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCardRarity", MsgSetCardRarity],
    ["/DecentralCardGame.cardchain.cardchain.MsgSaveCardContent", MsgSaveCardContent],
    ["/DecentralCardGame.cardchain.cardchain.MsgRevealCouncilResponse", MsgRevealCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgCommitCouncilResponse", MsgCommitCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil", MsgRegisterForCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserWebsite", MsgSetUserWebsite],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitCollectionProposal", MsgSubmitCollectionProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenBoosterPack", MsgOpenBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferBoosterPack", MsgTransferBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgFinalizeCollection", MsgFinalizeCollection],
    
];

export { msgTypes }