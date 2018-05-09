const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;


const airTimeSchema = new Schema({
    airDate: { type: Date},
    startTime: { type: String},
    endTime: { type: String}
})

const episodeSchema = new Schema({ 
        name: { type: String },
        description: { type: String},
        runTime: { type: String},
        airTime: [airTimeSchema]
})

const ShowSchema   = new Schema({
    programName: {
            type: String,
            required: 'Name cannot be blank!'
            },
    episodeInfo: [episodeSchema],
    modified: {
        type: Date,
        default: Date.now
    },
    marketingAssign: { type: String},
    socialApprovalDate: {type: Date}

});

module.exports = mongoose.model('Show', ShowSchema);

