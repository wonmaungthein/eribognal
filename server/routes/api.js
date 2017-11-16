const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const placesDB = require('../dbClients/placesDB')


/* GET questions list from db. */
router.get('/questions', function (req, res, next) {
    res.send(
        [{
            title: 'What are you food habit?',
            questionType: 'multiple', // 'text', 'single'
            options: [
                {
                    value: '1',
                    text: 'this is a relly long text'
                },
                {
                    value: '2',
                    text: 'Choice 2'
                },{
                    value: '3',
                    text: 'Choice 3'
                }
            ]

        }, {
            title: 'How much do you spend on Food',
            questionType: 'multiple',
            options: [
                {
                    value: '4',
                    text: 'less than 20'
                },
                {
                    value: '5',
                    text: 'less than 50'
                },{
                    value: '6',
                    text: 'hundred pound'
                }
            ]
        }, {
            title: 'Questions3',
            questionType: 'multiple',
            options: [
                {
                    value: '7',
                    text: 'Option 5'
                },
                {
                    value: '8',
                    text: 'Option wqeqe 1'
                },{
                    value: '9',
                    text: 'Option sad sa 1'
                }
            ]
        }]
    );
});

router.get('/places', function (req, res, next) {
    const callback = (error, places) => {
        res.send(places);
    };
    placesDB.getPlaces({}, callback);
})

router.post('/places', function (req, res, next) {
    const callback = () => { res.send(200) }
    placesDB.addNewPlace(req.body, callback)
});

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
