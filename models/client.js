const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// Update in future to use dates instead of all strings would have to convert the dates


// Web OTT Identification
    const WebOTTSchema  = new Schema({
        payWall: String,
        webCategory: String,
        selectVideoOnDemand: String,
        otherVideoOnDemand: String,
        webGraphicRequired: String,
        webProgramDescription: String,
        webButton: String
    })

//duplication
    const DuplicationSchema = new Schema({
        persmissionToSell: String,
        placeInStore: String,
        compSelection: String,
        compFormat: String,
        fTPInstructions: String,
        compDueDate: String,
        compNumbersPerEpisode: String,
        compGraphicDesign: String,
        compAdditionalInfo: String
    })

// Social
    const SocialSchema = new Schema({
        socialMediaPermission: String,
        fullFacebookVideo: String,
        socialMediaStartDate: String,
        socialMediaEndDate: String,
        socialFrequency: String,
        socialAdditionalInfo: String
    })


// Production
    const ProductionSchema = new Schema({
        productionLocation: String,
        productionNameOfShow: String,
        productionLengthOfProgram: String,
        productionProducer: String,
        productionMethodToRecieve: String,
        productionHighlight: String,
        productionAdditionalInfo: String
            })


// Billboards
const BillboardSchema = new Schema({
    billboardNewExisting: String,
    billboardGraphics: String,
    billboardScript: String,
    billboardLength: String,
    billboardNameServer: String,
    billboardAirSchedule: String,
    billboardAirProgram: String,
    billboardNumberOfAirings: String,
    billboardNumberOfBillboards: String,
    billboardDueDate: String
})


// Promotions
const PromotionsSchema = new Schema({
    promotionsOrgination: String,
    promotionsRunOfSchedule: String,
    promotionsTimesPerDay: String,
    promotionsAirDuringSpecificPrograms: String,
    promotionsTimesPerProgram: String,
    promotinsAirDatesStart: String,
    promotionsAirDatesEnd: String,
    promotionsGraphics: String,
    promotionsMethodToRecieve: String,
    promotionsSocialMediaPermission: String,
    promotionsApproval: String,
    promotionsApprovalDate: String
})
// Paid Spots Schema
const PaidSpotSchema = new Schema({
    paidSpotPermission: String,
    numberOfDifferentSpots: String,
    totalNumberOfAirings: String,
    nameSavedInServer: String,
    timeSavedInServer: String,
    numberOfAiring: String,
    paidSpotPlacements: String,
    paidSpotDuplicationPermission: String,
    paidSpotMethodToRecieve: String,
    paidSpotApprovedBy: String,
    paidSpotApprovedDate: String,
})

// Basic Contract Schema
const ClientSchema   = new Schema({
    soldByPerson: String,
    typeOfClient: String,
    clientCompanyName: String,
    clientPersonName : String,
    clientPersonTitle: String,
    clientPhone: String,
    clientEmail: String,
    productionCompany: String,
    productionCompanyPerson: String,
    productionCompanyPersonTitle: String,
    productionCompanyPhone: String,
    productionCompanyEmail: String,
    copyright: String,
    contractSignDate: String,
    contractStartDate: String,
    contractEndDate: String,
    airDatesTimes: String,
    contractAdditionalInfo: String,
    webOTT: [WebOTTSchema],
    duplication: [DuplicationSchema],
    social: [SocialSchema],
    production: [ProductionSchema],
    billboards: [BillboardSchema],
    promotions: [PromotionsSchema],
    paidSpots: [PaidSpotSchema]

})


module.exports = mongoose.model('Client', ClientSchema);
