const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (e) {
        console.log("Error while connecting to the database");
    }
})();


