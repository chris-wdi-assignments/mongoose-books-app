<<<<<<< HEAD
// book.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
=======
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String
})
>>>>>>> solution-sprint-2

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
<<<<<<< HEAD
  releaseDate: String
=======
  releaseDate: String,
  characters: [CharacterSchema]
>>>>>>> solution-sprint-2
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
