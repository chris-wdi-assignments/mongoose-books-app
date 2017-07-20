var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

<<<<<<< HEAD
module.exports = {
  Book: require('./book.js'),
  Author: require('./author.js')
};
=======
module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");
>>>>>>> solution-sprint-2
