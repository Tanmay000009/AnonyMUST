const dotenv = require('dotenv');

dotenv.config({path: 'config.env'});
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error in connecting to DB: ${err}`);
        process.exit(1)
    }
}

module.exports = connectDB;