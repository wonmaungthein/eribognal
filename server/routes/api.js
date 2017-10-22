
var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/questions', function (req, res, next) {
    res.render('index', { title: "Eribognal"}
);
});
    
    // [
        
        // {
        //     "title": "Question 2"
        // }
    // ]    

// router.get('/', function (req, res, next) {
//     res.render('index', { title: 'Eribognal' });
// });

// module.exports = router;

module.exports = router;