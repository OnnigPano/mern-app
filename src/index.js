const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
require('./database');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'));

//Validar JSON format
app.use(express.json({
    verify: (req, res, buf, encoding) => {
      try {
        JSON.parse(buf);
      } catch (e) {
        res.status(400).json({ error: 'Invalid JSON' });
        throw Error('invalid JSON');
      }
    }
  }));

app.use('/api/v1/', userRouter);
app.use('/api/v1/', productRouter);

pp.get('*', function (req, res) {
    res.status(404).json({ error: 'Route Not Found' });
});


app.listen(PORT, () => {
    console.log("Server runnig on port " + PORT)
})