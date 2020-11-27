const mongoose = require('mongoose');

var uri;

if(process.env.NODE_ENV === 'development') {
    uri = `mongodb://127.0.0.1:27017/${process.env.DB_PASS}`;
} else if (process.env.NODE_ENV === 'production') {
    uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qcmp5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
}

(async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (e) {
        console.log("Error while connecting to the database");
    }
})();


