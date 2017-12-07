const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const placesDB = require('../dbClients/placesDB')

const answerDB = require('../dbClients/answerDB');
const path = require('path');
const imagesDir = path.dirname(require.main.filename) + '/../public/images/places/';
const questionsData = require('./data/questions');

/* GET questions list from db. */
router.get('/questions', function (req, res, next) {
    res.send(questionsData);
});

router.get('/places', function (req, res, next) {
    const callback = (error, places) => {
        res.send(places);
    };
    placesDB.getPlaces({ status: 'Approved' }, callback);
})

router.post('/places', function (req, res, next) {
    const place = JSON.parse(req.body.place);

    const callback = (place) => {
        if (req.files) {
            const image = req.files.image;

            image.mv(`${imagesDir}${place._id}.png`, (err) => {
                if (err) {
                    console.error(err);
                } else console.log('image saved')
            })
        }
        return res.send(200);
    }
    const onError = (e) => {
        res.status(500)
        res.json({ error: "An error has happened" })
    }
    placesDB.addNewPlace(place).then(callback).catch(onError)
});

router.post('/answers', function (req, res, next) {
    const callback = (answers) => {
        res.send(answers)
    }
    const errorCallback = (error) => {
        console.error(error);
        res.send(500);
    }
    answerDB.addAnswer(req.body).then(callback).catch(errorCallback)

})

router.get('/places/:placeId', function (req, res, next) {
    const body = req.body;
    const placeId = req.params.placeId;

    const callback = (error, data) => {
        if (error) {
            console.error(error);
            return res.send(500);
        }
        res.json(data);
    }
    placesDB.viewPlaces({ _id: placeId }, callback);
});

module.exports = router
