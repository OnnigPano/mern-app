const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const cors = require('cors')
const dbConnect = require('./src/database');
const morgan = require('morgan');
const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/product');

const PORT = process.env.PORT || 5000;

dbConnect();

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
//Validar JSON format
app.use(express.json({
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch {
            res.status(400).json({ error: 'Invalid JSON' });
            throw Error('invalid JSON');
        }
    }
}));

app.use('/api/v1/', userRouter);
app.use('/api/v1/', productRouter);


/*
    Inconvenientes con el manejo
    de rutas no existentes
*/

    app.get('*', function (req, res) {
    res.status(404).json({
        error: 'Route Not Found'
    });
});
// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {
    app.use('/static', express.static(path.join(__dirname, 'public')));
}

app.listen(PORT, () => console.log("Server runnig on port " + PORT))