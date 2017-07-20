# Sprint 1 - mongoDB & mongoose

## 1. You awake inside a new app and look around.

1. Take a few minutes to familiarize yourself with your surroundings and navigate the file structure of this app.  You should see a few routes listed in `server.js`; a basic front-end using them, a few files in public including your front-end JavaScript.  
  > "Hmm", you think to yourself, "this app seems to be a books app."

<<<<<<< HEAD
2. Open up your browser and startup the server.  Take a look at the books on the front-end.
=======
1. Open up your browser and startup the server.  Take a look at the books on the front-end.
>>>>>>> solution-sprint-2
  > You didn't forget to `npm install` did you?

## 2. OK server.js, let's see what you've got?!

<<<<<<< HEAD
1. Open up `server.js` and take a look at the hard-coded books data.  You should see an array of book objects in there called `books`.

2. You should also already see that there are routes to create (POST) new books, get a list of books (GET index), get a single book (GET show) and edit (PUT) and delete (DELETE) books.  -- Notice they're all manipulating the `books` array.  

## 3. Outgrowing Arrays as a datastore.

Arrays are no longer adequate as a data-store.  They lose their data whenever the server is shut down, they don't support backups unless you copy the file, and new elements never get saved in the file.  Plus, all the cool kids are using databases.
=======
1. Open up `server.js` and take a look at the hard-coded books data.  You should see a list of book objects in there.
1. You should also already see that there are routes to create (POST) new books, get a list of books (GET index), get a single book (GET show) and edit and delete books.  -- Plus they're all using that array.  

## 3. Outgrowing Arrays as a datastore.

Array's are no longer adequate as a data-store.  They lose their data whenever the server is shut-down, they don't support backups unless you copy the file and new elements never get saved in the file.  Plus all the cool kids are using databases not arrays.
>>>>>>> solution-sprint-2

Let's replace that array with a database.  We'll create a booksSchema and Books model.  

First off let's setup mongo and mongoose.  

1. Install mongoose into this repo's package.json: `npm install --save mongoose`
<<<<<<< HEAD
2. Create a new file `models/book.js`. We'll create a schema and model for books in this file!

3. Our books will have the following attributes:
=======
1. Create a new file `models/book.js`. We'll create a schema and model for books in this file!

1. Our books will have the following attributes:
>>>>>>> solution-sprint-2
  * title
  * author
  * image (use a string for this)
  * releaseDate

  Let's create a schema using these properties.  I'll get you started:

  ```js
  // book.js
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var BookSchema = new Schema({
       title: String,
      // you should fill the rest of this in
   });
  ```

<<<<<<< HEAD
4. Next let's create the `Book` model from the schema.  
=======
1. Next let's create the `Book` model from the schema.  
>>>>>>> solution-sprint-2
  ```js
  // book.js
  var Book = mongoose.model('Book', BookSchema);
  ```

<<<<<<< HEAD
5. Finally we'll need to export Book from this **module** (that's this file).  You can export it at the very end of the file by doing:
=======
1. Finally we'll need to export Book from this **module** (that's this file).  You can export it at the very end of the file by doing:
>>>>>>> solution-sprint-2
  ```js
  // book.js
  var Book = mongoose.model('Book', BookSchema);

  module.exports = Book;
  ```

<<<<<<< HEAD
## 4. Review: what are modules ?

1. We've already provided a `models/index.js` for you to use.  Examine it to see that it already:
  - requires mongoose  
  - connects to a local book-app database URI  

2. `index.js` will import each model and export an object called `exports` with keys representing each of our models.  That way we can `require` the entire directory and get all of our models!  Go ahead and import and export your `Book` model in `index.js`.

=======
## 4. Wait a second.... what are modules :grey_question:

We've already provided a `models/index.js` for you to use.  If you take a look in there you should already see that it
  1. requires mongoose
  1. connects to a book-app database

`index.js` will import each model and export an object called `exports` with keys representing each of our models.  That way we can `require` the entire directory and get all of our models!  

1. Go ahead and import and export your `Book` model in `index.js`.
>>>>>>> solution-sprint-2
  ```js
  // models/index.js
  module.exports.Book = require("./book.js");
  ```
<<<<<<< HEAD

3. Now if someone were to `require('./models')` they'd gain access to this book database model.

Here's a module example:
=======
  Now if someone were to `require('./models')` they'd gain access to this database model.

    <details><summary>Here's a module example:</summary>
>>>>>>> solution-sprint-2


      ├── models
      │   ├── index.js
      │   ├── gargoyle.js
      │   ├── gnome.js
      │   ├── goblin.js


<<<<<<< HEAD
Inside `index.js` we require each of the other files and export it as one object:

```javascript
// models/index.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");   
// the mongoose.connect line above  needs to happen exactly once in your code
    // move it from book.js to index.js  :)

module.exports.Gargoyle = require("./gargoyle.js");
module.exports.Goblin = require("./goblin.js");
module.exports.Gnome = require("./gnome.js");
```

In the end this means that when you require `./models` in `server.js` you get back an object like
        `{ Gargoyle: Model, Goblin: Model, Gnome: Model }`

=======
      Inside `index.js` we require each of the other files and export it as one object:

      // models/index.js
      var mongoose = require("mongoose");
      mongoose.connect("mongodb://localhost/book-app");   
      // the mongoose.connect line above  needs to happen exactly once in your code
          // move it from book.js to index.js  :)

      module.exports.Gargoyle = require("./gargoyle.js");
      module.exports.Goblin = require("./goblin.js");
      module.exports.Gnome = require("./gnome.js");

      In the end this means that when you require `./models` in `server.js` you get back an object like
        { Gargoyle: Model, Goblin: Model, Gnome: Model }

    </details>
>>>>>>> solution-sprint-2


## 5. Verifying that this is working

<<<<<<< HEAD
1. Take a quick look in `seed.js`.  You should see that it does a `require('./models');` and then later uses `db.Book.create` to load some data into the database.  (You might also notice that it tries to clear the `book-app` database first by deleting all the records.)

**What's a seed-file, you ask?**
> A seed file is a file used to load pre-made data into our database.  It lets us start up our app without having to key in starter data each time.

2. Try running `node seed.js` in your terminal. If you're not seeing `created X books`, then something might be going wrong in your `book.js` file.  

  Here's an example of what your `book.js` could look like:
  
  ```js
  // entire book.js so far
  var mongoose = require('mongoose');

  var BookSchema = new mongoose.Schema({
=======
Take a quick look in `seed.js`.  You should see that it does a `require('./models');` and then later uses `db.Book.create` to load some data into the database.  (The insightful student will also note that it tries to clear the `book-app` database first by deleting all the records.)

**What's a seed-file you ask?**
> A seed file is a file used to load pre-made data into our database.  It let's us start-up our app without having to key in data each time.

1. Try running `node seed.js` in your terminal.
  If you're not seeing `created X books` then something might be going wrong.  

  <details><summary>Spoiler: book.js</summary>
  ```js
  // entire book.js so far
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var BookSchema = new Schema({
>>>>>>> solution-sprint-2
    title: String,
    author: String,
    image: String,
    release_date: String
  });

  var Book = mongoose.model('Book', BookSchema);

  module.exports = Book;
  ```
<<<<<<< HEAD

3. You can use the Mongo shell to check what's now in your database, or start interacting with it through the server files.  If you got an error message above, FIX IT BEFORE YOU MOVE ON.  If you're stuck, ask for help.
=======
  </details>

1. You can use robomongo to check out your database.  If you got an error message try to debug, and if you're stuck ask for help.  
>>>>>>> solution-sprint-2


## 6. Connecting the database to the server

Next we'll start to use our new model in `server.js`.

<<<<<<< HEAD
1. Open `server.js`.  

2. Add the correct `require` statement to `server.js` to import your models module:  `var db = require('./models')`.  This should go near the top as part of the "SETUP and CONFIGURATION".

3. Delete the hard-coded books array.  We'll start to replace each route with the correct code to use the database instead.  From now on, when we want to get to a book, we'll use mongoose methods and access `db.Books`.

4. Find the books index route and replace it with the following code:

=======
1. Go ahead and open `server.js`.  
1. Add the correct require statement to `server.js` to import your modules.  `var db = require('./models')`.  This should go near the top as part of the "SETUP and CONFIGURATION".
1. Now delete the hard-coded books array.  We'll start to replace each route with the correct code to use the database instead.  From now on when we want to get to a book we'll use mongoose methods and access `db.Books`.

1. Find the books index route and replace it with the following code:
>>>>>>> solution-sprint-2
  ```js
  // server.js
  app.get('/api/books', function (req, res) {
    // send all books as JSON response
    db.Book.find(function(err, books){
<<<<<<< HEAD
      if (err) { 
        console.log("index error: " + err); 
        res.sendStatus(500);
      }
=======
      if (err) { return console.log("index error: " + err); }
>>>>>>> solution-sprint-2
      res.json(books);
    });
  });
  ```

<<<<<<< HEAD
5. Restart your server. Debug any error messages you see. 

6. If you've successfully seeded your database and debugged your code, you should see all the books from `seed.js` when you refresh the page.
=======
1. Restart your server and if you've successfully seeded your database you should see all the seeded books when you refresh the page.
>>>>>>> solution-sprint-2


## 7. Challenge!

<<<<<<< HEAD
On your own, use mongoose CRUD methods to refactor the other `/api/books*` routes to get data from your database.

Make sure you look back to the notes or the Mongoose documentation for info on important methods like:

* `find`
* `findOneAndRemove`
* `new`
* `save`
=======
On your own use the mongoose methods to replace the other `/api/books*` routes with mongoose commands.

Make sure you look back to the lecture notes for info on the most important methods like:
* find
* findOneAndRemove
* new
* save
>>>>>>> solution-sprint-2
