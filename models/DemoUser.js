const mongoose = require('mongoose');

const demoUserschema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    linkedInProf: {
        type: String
    },
    phone:{
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
});

module.exports = mongoose.model('DemoUser', demoUserschema);