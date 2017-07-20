// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

const db = require('./models');

//require express in our app
const express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////
//  DATA
///////////////////

var newBookUUID = 18;

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books  re-written, AGAIN!
app.get('/api/books', function (req, res) {
<<<<<<< HEAD
  db.Book.find(function (err, books) {  // find all
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    } else {
      db.Book.populate(books, {
        path: 'author'
      }, function (err, docs) {
        if (err) return console.log(err);
        res.json(docs);
      })
    }
  });
});

// get one book, re-written!
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  db.findById(req.params.id, function (err, book) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      db.Book
      res.json(book);
    }
  });
});

// create new book, re-written!
app.post('/api/books', function (req, res) {
  let author = req.body.author
  console.log('author is', author);
  db.Author.findOne({name: author}, function (err, author) {
    let newBook = req.body;
    if (err) {  // author doesn't exist, let's create
      db.Author.create({
        name: author.name,
        alive: undefined  // we don't know if alive
      }, function (err, author) {
        if (err) return console.log(err);
        newBook.author = author;
        console.log('Author ' + author.name + ' successfully created.');
        db.Book.create(newBook, function (err, newBook) {
          if (err) return console.log(err);
          res.json(newBook);
        })
      });
    } else {
      console.log('Author already exists in db');
      console.log('doc we got is', author);
      newBook.author = author;  // need to be ref id?
      db.Book.create(newBook, function (err, newBook) {
        if (err) return console.log(err);
        res.json(newBook);
      })
    }
  });
  /*
  db.Book.create(req.body, (err, newBook) => {
    if (err) throw err;
    res.json(newBook);
  });
  */
});

// delete book, re-written!
=======
  // find one book by its id
  db.Book.find({})
    .populate('author')
    .exec(function(err, books){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(books);
    });

});



app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  db.Book.findById(req.params.id)
    // populate the author
    .populate('author')
    .exec(function(err, book){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(book);
    });

});



app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  var newBook = new db.Book({
    title: req.body.title,
    image: req.body.image,
    releaseDate: req.body.releaseDate
  });
  // find the author from req.body
  db.Author.findOne({name: req.body.author}, function(err, author){
    if (err) {
      return console.log(err);
    }
    // if that author doesn't exist yet, create a new one
    if (author === null) {
      db.Author.create({name:req.body.author, alive:true}, function(err, newAuthor) {
        createBookWithAuthorAndRespondTo(newBook, newAuthor, res);
      });
    } else {
      createBookWithAuthorAndRespondTo(newBook, author, res);
    }
  });
});

//post new character
app.post('/api/books/:book_id/characters', function (req, res) {
  db.Book.findById(req.params.book_id, function (err, book) {
    if (err) return console.log(err);
    if (!book) return console.log('book', book, 'not found!');
    db.Book.populate(book, {path: 'author'}, function (err, book) {
      if (err) return console.log(err);
      book.characters.push(req.body); // add this char to array
      book.save();
      res.status(201).json(book);
    })
  })
});

function createBookWithAuthorAndRespondTo(book, author, res) {
  // add this author to the book
  book.author = author;
  // save newBook to database
  book.save(function(err, book){
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", book.title);
    // send back the book!
    res.json(book);
  });
}


// delete book
>>>>>>> solution-sprint-2
app.delete('/api/books/:id', function (req, res) {
  db.Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (err) throw err;
    res.json(book);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
