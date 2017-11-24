const fs = require('fs');
const placesDB = require('../dbClients/placesDB');

const readMe = fs.readFileSync('Places.json', 'utf8');

const query = JSON.parse(readMe);

const callBack = (data, err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('successfully your data saved to database');
    }
}

placesDB.addNewPlace(query, callBack);
