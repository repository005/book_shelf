const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true});

const { User } = require('./models/user');
const { Bookr } = require('./models/book');

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/book', (req, res) => {
  const book = new book(req.body);

  book.save((err,doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      bookId: doc._id
    })
  })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});