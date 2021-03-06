const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_CONN);

const Show = require('./models/show');
const Client = require('./models/client');


//Allows CORS to happen
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });




// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});



// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});




// on routes that end in /shows
// ----------------------------------------------------
router.route('/shows')

    // create a show (accessed at POST http://localhost:5000/api/shows)
    .post(function(req, res) {

        const show = new Show({
            programName : req.body.programName,
            marketingAssign : req.body.marketingAssign,
            socialApprovalDate : req.body.socialApprovalDate,
            episodeInfo : [{
                name: req.body.episodeName,
                description: req.body.description,
                runTime: req.body.runTime,
                airTime : [{
                    date : req.body.airDate,
                    startTime : req.body.startTime,
                    endTime : req.body.endTime
                }]
            }]
        
        });     
        

        // save the show and check for errors
        show.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Show Created' });
        });

    })

     // get all the shows (accessed at GET http://localhost:5000/api/shows)         //https://stackoverflow.com/questions/11973304/mongodb-mongoose-querying-at-a-specific-date
     .get(function(req, res) {
      Show.find({"socialApprovalDate" : new Date(2018, 4, 24)}).exec(function(err, shows) {

          if (err)
              res.send(err);

          res.json(shows);
      });
  });



  // get all the shows on a particular date GET http://localhost:5000/api/shows/:date)
  router.route('/shows/date/:date')



router.route('/oec')

.post(function(req, res) {



    const client = new Client({
            id : req.body.id,
            soldByPerson : req.body.soldByPerson,
            typeOfClient : req.body.typeOfClient,
            clientCompanyName : req.body.clientCompanyName,
            clientPersonName : req.body.clientPersonName,
            clientPersonTitle : req.body.clientPersonTitle,
            clientPhone : req.body.clientPhone,
            clientEmail : req.body.clientEmail,
            productionCompany : req.body.productionCompany,
            productionCompanyPerson : req.body.productionCompanyPerson,
            productionCompanyPersonTitle : req.body.productionCompanyPersonTitle,
            productionCompanyPhone : req.body.productionCompanyPhone,
            productionCompanyEmail : req.body.productionCompanyEmail,
            copyright : req.body.copyright,
            contractSignDate : req.body.contractSignDate,
            contractStartDate : req.body.contractStartDate,
            contractEndDate : req.body.contractEndDate,
            airDatesTimes : req.body.airDatesTimes,
            contractAdditionalInfo : req.body.contractAdditionalInfo,
        webOTT:
        req.body.webOTT,
            payWall : req.body.payWall,	
            webCategory : req.body.webCategory,	
            selectVideoOnDemand : req.body.selectVideoOnDemand,	
            otherVideoOnDemand : req.body.otherVideoOnDemand,	
            webGraphicRequired : req.body.webGraphicRequired,	
            webProgramDescription : req.body.webProgramDescription,	
            webButton : req.body.webButton,	
        duplication:
        req.body.duplication,
            persmissionToSell : req.body.persmissionToSell,
            placeInStore : req.body.placeInStore,
            compSelection : req.body.compSelection,
            compFormat : req.body.compFormat,
            fTPInstructions : req.body.fTPInstructions,
            compDueDate : req.body.compDueDate,
            compNumbersPerEpisode : req.body.compNumbersPerEpisode,
            compGraphicDesign : req.body.compGraphicDesign,
            compAdditionalInfo : req.body.compAdditionalInfo,
        social:
        req.body.social,
            socialMediaPermission : req.body.socialMediaPermission,
            fullFacebookVideo : req.body.fullFacebookVideo,
            socialMediaStartDate : req.body.socialMediaStartDate,
            socialMediaEndDate : req.body.socialMediaEndDate,
            socialFrequency : req.body.socialFrequency,
            socialAdditionalInfo : req.body.socialAdditionalInfo,
            twitterHandle : req.body.twitterHandle,
            facebookHandle : req.body.facebookHandle,
        production:
        req.body.production,
            productionLocation : req.body.productionLocation,
            productionNameOfShow : req.body.productionNameOfShow,
            productionLengthOfProgram : req.body.productionLengthOfProgram,
            productionProducer : req.body.productionProducer,
            productionMethodToRecieve : req.body.productionMethodToRecieve,
            productionHighlight : req.body.productionHighlight,
            productionAdditionalInfo : req.body.productionAdditionalInfo,
        billboards:
        req.body.billboards,
            billboardNewExisting : req.body.billboardNewExisting,
            billboardGraphics : req.body.billboardGraphics,
            billboardScript : req.body.billboardScript,
            billboardLength : req.body.billboardLength,
            billboardNameServer : req.body.billboardNameServer,
            billboardAirSchedule : req.body.billboardAirSchedule,
            billboardAirProgram : req.body.billboardAirProgram,
            billboardNumberOfAirings : req.body.billboardNumberOfAirings,
            billboardNumberOfBillboards : req.body.billboardNumberOfBillboards,
            billboardDueDate : req.body.billboardDueDate,
        promotions:
        req.body.promotions,
            promotionsOrgination : req.body.promotionsOrgination,
            promotionsRunOfSchedule : req.body.promotionsRunOfSchedule,
            promotionsTimesPerDay : req.body.promotionsTimesPerDay,
            promotionsAirDuringSpecificPrograms : req.body.promotionsAirDuringSpecificPrograms,
            promotionsTimesPerProgram : req.body.promotionsTimesPerProgram,
            promotinsAirDatesStart : req.body.promotinsAirDatesStart,
            promotionsAirDatesEnd : req.body.promotionsAirDatesEnd,
            promotionsGraphics : req.body.promotionsGraphics,
            promotionsMethodToRecieve : req.body.promotionsMethodToRecieve,
            promotionsSocialMediaPermission : req.body.promotionsSocialMediaPermission,
            promotionsApproval : req.body.promotionsApproval,
            promotionsApprovalDate : req.body.promotionsApprovalDate,
        paidSpots:
        req.body.paidSpots,
            paidSpotPermission : req.body.paidSpotPermission,
            numberOfDifferentSpots : req.body.numberOfDifferentSpots,
            totalNumberOfAirings : req.body.totalNumberOfAirings,
            nameSavedInServer : req.body.nameSavedInServer,
            timeSavedInServer : req.body.timeSavedInServer,
            numberOfAiring : req.body.numberOfAiring,
            paidSpotPlacements : req.body.paidSpotPlacements,
            paidSpotDuplicationPermission : req.body.paidSpotDuplicationPermission,
            paidSpotMethodToRecieve : req.body.paidSpotMethodToRecieve,
            paidSpotApprovedBy : req.body.paidSpotApprovedBy,
            paidSpotApprovedDate : req.body.paidSpotApprovedDate,
        disclaimer:
        req.body.disclaimer,
            disclaimerExist : req.body.disclaimerExist,
            disclaimerGraphicRequired : req.body.disclaimerGraphicRequired,
            disclaimerGraphicName : req.body.disclaimerGraphicName,
            disclaimerScript : req.body.disclaimerScript,
            disclaimerRunTime : req.body.disclaimerRunTime,
            disclaimerServerName : req.body.disclaimerServerName,
            disclaimerDueDate : req.body.disclaimerDueDate
    
    });


            // save the show and check for errors
            client.save(function(err) {
                if (err)
                    res.send(err);
    
                res.json({ message: 'Client Created' });
            });
    
        })

        // get all the contracts (accessed at GET http://localhost:5000/oec/)        
    .get(function(req, res) {

    Client.find({}, function(err, clients) {

        if (err)
            res.send(err);

        res.json(clients);
    });
});

// on routes that end in /oec/:client_id
// ----------------------------------------------------
router.route('/oec/:client_id')
    // get the show with that id (accessed at GET http://localhost:5000/api/client/:client_id)
    .get(function(req, res) {
        Client.findById(req.params.client_id, function(err, client) {
            if (err)
                res.send(err);
            res.json(client);
        });
    })

// delete the show with this id (accessed at DELETE http://localhost:5000/api/oec/:client_id)
    .delete(function(req, res) {
        Client.remove({
            _id: req.params.client_id
        }, function(err, client) {
            if (err)
                res.send(err);
  
            res.json({ message: 'Successfully deleted' });
        });
    })

    // update the show with this id (accessed at PUT http://localhost:5000/api/shows/:show_id)
        .put(function(req, res) {

        // use our show model to find the show we want
        Client.findByIdAndUpdate(
            
            req.params.client_id,
            req.body,
            {new: true},

            // the callback function
            (err, client) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(client);
        }
    );
})


    router.route('/oec/search/:query')
    .get(function(req, res) {
        Client.find({
            typeOfClient: { "$regex": req.query.typeOfClient, "$options": "i" },
            clientCompanyName: { "$regex": req.query.clientCompanyName, "$options": "i" },
            // contractStartDate: { "$regex": req.query.contractStartDate, "$options": "i" },
            // contractEndDate: { "$regex": req.query.contractEndDate, "$options": "i" } 
        }, function(err, client) {
            if (err)
                res.send(err);
            res.json(client);
        });
    })


    router.route('/oec/searching')
    .post(function(req, res) {
        var query = {};
        if (req.body.clientCompanyName) {
            query.clientCompanyName = req.body.clientCompanyName;
        }
        
        if (req.body.typeOfClient) {
            query.typeOfClient = req.body.typeOfClient;
        }
        
        Client.find(query, function (err, docs) {
            // …
        });
    })

    .get(function(req, res) {

        Client.find({}, function(err, clients) {
    
            if (err)
                res.send(err);
    
            res.json(clients);
        });
    });


// on routes that end in /shows/:show_id
// ----------------------------------------------------
  router.route('/shows/:show_id')

    // get the show with that id (accessed at GET http://localhost:5000/api/shows/:show_id)
    .get(function(req, res) {
        Show.findById(req.params.show_id, function(err, show) {
            if (err)
                res.send(err);
            res.json(show);
        });
    })

      // update the show with this id (accessed at PUT http://localhost:5000/api/shows/:show_id)
      .put(function(req, res) {

        // use our show model to find the show we want
        Show.findById(req.params.show_id, function(err, show) {

            if (err)
                res.send(err);

        

            // save the client
            client.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Client updated!' });
            });

        });
    })

     // delete the show with this id (accessed at DELETE http://localhost:5000/api/shows/:show_id)
     .delete(function(req, res) {
      Show.remove({
          _id: req.params.show_id
      }, function(err, show) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

