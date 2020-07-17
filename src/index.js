const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
require('./database');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(userRouter);
app.use(productRouter);




app.listen(PORT, () => {
    console.log("Server runnig on port " + PORT)
})