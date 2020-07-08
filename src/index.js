const express = require('express');
const app = express();
require('./database');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(productRouter);




app.listen(PORT, () => {
    console.log("Server runnig on port " + PORT)
})