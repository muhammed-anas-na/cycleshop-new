const mongoose = require('mongoose')
require('dotenv').config()
module.exports={
    connect(){
        console.log("This is the mongo connection string => ",process.env.MONGO_URL)
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            .then(() => {
                console.log("Database connected to mongodb");
            })
            .catch((err) => {
                console.error("Error connecting to database:", err);
            });
    }
}