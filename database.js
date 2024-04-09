const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connection successful");
    })
    .catch((error) => {
        console.log("Connection nhi ho paya");
        console.error(error.message);
    })
}

module.exports = dbConnect;