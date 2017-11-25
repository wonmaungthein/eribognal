const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eribongal', {
  useMongoClient: true,
  /* other options */
});





module.exports = promise;
