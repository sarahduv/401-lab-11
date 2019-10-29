'use strict';

const express = require('express');
const auth = require('../auth/middleware.js');
const router = express.Router();

router.get('/books', auth, handleGetAll);
router.get('/books/:id', auth, handleGetOne);

// Route Handlers
/**
 * Function that gets all books
 * @params {String} - request - user submits a request
 * @result {Object} - result - server sends the user an object
 */
// eslint-disable-next-line no-unused-vars
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
 * Function that gets one book
 * @params {String} - request - user submits a request
 * @result {object} - result - server sends the user the requested object
 */
// eslint-disable-next-line no-unused-vars
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
