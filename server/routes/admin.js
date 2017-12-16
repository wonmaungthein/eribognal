var express = require('express');
var router = express.Router();
const placesDB = require('../dbClients/placesDB')
const Place = require('../models/Place');
const answerDB = require('../dbClients/answerDB')
const Answer = require('../models/Answer');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin', {
    title: 'Admin',
    name: 'KPC'
  });
});

router.get('/places', function (req, res, next) {
  const callback = (error, places) => {
    if (error) {
      res.render('error', {
        error: error,
        message: 'This is an error'
      })
    }
    res.render('viewPlaces', {
      places: places,
      error: error
    });
  };
  placesDB.getPlaces(callback);
})

router.get('/places/add', function (req, res, next) {
  res.render('admin/places/placeAdd', {
    title: 'Admin',
    name: 'KPC'
  });
});

router.post('/places/add', (req, res) => {
  const query = req.body;
  const callBack = (data) => {
    res.redirect('/admin/places/add')
    res.end();
  }
  placesDB.addNewPlace(query, callBack)
})

router.post('/places/:placeId/approve', (req, res) => {
  const query = { _id: req.params.placeId };
  const callBack = (data) => {
    res.redirect('/admin/places')
    res.end();
  }
  placesDB.approvePlace(query, callBack)
})
router.get('/users', function (req, res, next) {
  res.send('This is users page in Admin');
});




router.get('/questionnaire', function (req, res, next) {
  const callback = (error, answers) => {
    if (error) {
      res.render('error', {
        error: error,
        message: 'This is an error'
      })
    }
    res.render('questionnaire', {
      answers: answers,
      error: error
    });
  };
  answerDB.getQuestionnaire(callback);
})
module.exports = router;