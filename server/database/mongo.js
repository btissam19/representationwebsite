const mongoose = require('mongoose');

async function connect(url) {
    await mongoose.connect(url);
    console.log("You are successfully connected to the database!!!");
}

module.exports = connect;
