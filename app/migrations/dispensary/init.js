const Dispensary = require('../../models').dispensary;

function migrate(app) {
    createDispensary(app);
}

function createDispensary() {

    let data = { name: 'Apollo', location: 'Toronto, Ontario' };
    let dispensary = new Dispensary(data)
    console.log(dispensary);

    /*dispensary.save((err, dispensary) => {
        if (err) return console.error(err)
    });*/
}

module.exports = migrate;
