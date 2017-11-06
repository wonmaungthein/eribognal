var express = require('express');
var router = express.Router();
const placesDB = require('../dbClients/placesDB')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Admin', name: 'KPC' });
});

router.get('/places', function (req, res, next) {
  const callback = (error, places) => {
    res.render('viewPlaces', {
      places: places
    });
  };
  placesDB.getPlaces(callback);
})

router.get('/places/add', function (req, res, next) {
  res.render('admin/places/placeAdd', { title: 'Admin', name: 'KPC' });
});


router.post('/places/add', (req, res) => {
  const query = req.body;
  const callBack = (data) => {
    res.redirect('/admin/places/add')
    res.end();
  }
  placesDB.addNewPlace(query, callBack)
})

module.exports = router;

