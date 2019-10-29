'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );
const authRouter = require( './auth/router.js' );

// Routes
const booksRouter = require( './routes/books.js' );

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(authRouter); // Performs log in / creates user
app.use(booksRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
