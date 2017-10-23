const express = require('express');
const router = express.Router();

/* GET questions list from db. */
router.get('/questions', function (req, res, next) {
    res.send(
        [{
            title: 'Questions1'
        }, {
            title: 'Questions2'
        }, {
            title: 'Questions3'
        }]
    );
});

module.exports = router;
