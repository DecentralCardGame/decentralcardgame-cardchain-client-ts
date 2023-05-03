import { MsgApointMatchReporter } from "./types/cardchain/tx";
import { MsgVoteCard } from "./types/cardchain/tx";
import { MsgRemoveSellOffer } from "./types/cardchain/tx";
import { MsgRewokeCouncilRegistration } from "./types/cardchain/tx";
import { MsgBuyCard } from "./types/cardchain/tx";
import { MsgSubmitMatchReporterProposal } from "./types/cardchain/tx";
import { MsgSetCardRarity } from "./types/cardchain/tx";
import { MsgAddArtwork } from "./types/cardchain/tx";
import { MsgRemoveContributorFromCollection } from "./types/cardchain/tx";
import { MsgRegisterForCouncil } from "./types/cardchain/tx";
import { MsgAddCardToCollection } from "./types/cardchain/tx";
import { MsgRemoveCardFromCollection } from "./types/cardchain/tx";
import { MsgSubmitCollectionProposal } from "./types/cardchain/tx";
import { MsgSetCollectionStoryWriter } from "./types/cardchain/tx";
import { MsgSubmitCopyrightProposal } from "./types/cardchain/tx";
import { MsgAddArtworkToCollection } from "./types/cardchain/tx";
import { MsgOpenBoosterPack } from "./types/cardchain/tx";
import { MsgChangeArtist } from "./types/cardchain/tx";
import { MsgReportMatch } from "./types/cardchain/tx";
import { MsgSetUserBiography } from "./types/cardchain/tx";
import { MsgRevealCouncilResponse } from "./types/cardchain/tx";
import { MsgTransferCard } from "./types/cardchain/tx";
import { MsgSaveCardContent } from "./types/cardchain/tx";
import { MsgConfirmMatch } from "./types/cardchain/tx";
import { MsgAddStoryToCollection } from "./types/cardchain/tx";
import { MsgDonateToCard } from "./types/cardchain/tx";
import { MsgCreateSellOffer } from "./types/cardchain/tx";
import { MsgAddContributorToCollection } from "./types/cardchain/tx";
import { MsgBuyCollection } from "./types/cardchain/tx";
import { MsgTransferBoosterPack } from "./types/cardchain/tx";
import { MsgRestartCouncil } from "./types/cardchain/tx";
import { MsgCreateCouncil } from "./types/cardchain/tx";
import { MsgCreateuser } from "./types/cardchain/tx";
import { MsgSetCollectionArtist } from "./types/cardchain/tx";
import { MsgCommitCouncilResponse } from "./types/cardchain/tx";
import { MsgBuyCardScheme } from "./types/cardchain/tx";
import { MsgSetUserWebsite } from "./types/cardchain/tx";
import { MsgCreateCollection } from "./types/cardchain/tx";
import { MsgSetProfileCard } from "./types/cardchain/tx";
import { MsgFinalizeCollection } from "./types/cardchain/tx";
const msgTypes = [
    ["/DecentralCardGame.cardchain.cardchain.MsgApointMatchReporter", MsgApointMatchReporter],
    ["/DecentralCardGame.cardchain.cardchain.MsgVoteCard", MsgVoteCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveSellOffer", MsgRemoveSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgRewokeCouncilRegistration", MsgRewokeCouncilRegistration],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCard", MsgBuyCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitMatchReporterProposal", MsgSubmitMatchReporterProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCardRarity", MsgSetCardRarity],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtwork", MsgAddArtwork],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveContributorFromCollection", MsgRemoveContributorFromCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgRegisterForCouncil", MsgRegisterForCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddCardToCollection", MsgAddCardToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgRemoveCardFromCollection", MsgRemoveCardFromCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitCollectionProposal", MsgSubmitCollectionProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCollectionStoryWriter", MsgSetCollectionStoryWriter],
    ["/DecentralCardGame.cardchain.cardchain.MsgSubmitCopyrightProposal", MsgSubmitCopyrightProposal],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddArtworkToCollection", MsgAddArtworkToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgOpenBoosterPack", MsgOpenBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgChangeArtist", MsgChangeArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgReportMatch", MsgReportMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserBiography", MsgSetUserBiography],
    ["/DecentralCardGame.cardchain.cardchain.MsgRevealCouncilResponse", MsgRevealCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferCard", MsgTransferCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgSaveCardContent", MsgSaveCardContent],
    ["/DecentralCardGame.cardchain.cardchain.MsgConfirmMatch", MsgConfirmMatch],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddStoryToCollection", MsgAddStoryToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgDonateToCard", MsgDonateToCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateSellOffer", MsgCreateSellOffer],
    ["/DecentralCardGame.cardchain.cardchain.MsgAddContributorToCollection", MsgAddContributorToCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCollection", MsgBuyCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgTransferBoosterPack", MsgTransferBoosterPack],
    ["/DecentralCardGame.cardchain.cardchain.MsgRestartCouncil", MsgRestartCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCouncil", MsgCreateCouncil],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateuser", MsgCreateuser],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetCollectionArtist", MsgSetCollectionArtist],
    ["/DecentralCardGame.cardchain.cardchain.MsgCommitCouncilResponse", MsgCommitCouncilResponse],
    ["/DecentralCardGame.cardchain.cardchain.MsgBuyCardScheme", MsgBuyCardScheme],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetUserWebsite", MsgSetUserWebsite],
    ["/DecentralCardGame.cardchain.cardchain.MsgCreateCollection", MsgCreateCollection],
    ["/DecentralCardGame.cardchain.cardchain.MsgSetProfileCard", MsgSetProfileCard],
    ["/DecentralCardGame.cardchain.cardchain.MsgFinalizeCollection", MsgFinalizeCollection],
];
export { msgTypes };
