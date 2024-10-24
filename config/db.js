const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('DB already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');
        return;
    } catch(e) {
        console.log(`Encounted an error: ${e}`);
    }
}

module.exports = connection;