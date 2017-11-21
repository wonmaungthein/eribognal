var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('./ensureAuthenticated')

// Get Homepage
router.get('/', ensureAuthenticated.AuthenticatedTest, function (req, res) {
  res.render('index', {
    title: "Admin Penal"
  });
});

module.exports = router;