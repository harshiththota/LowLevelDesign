

// Fully exposed object
/*
var Book = function(isbn, title, author) {
	if(isbn == undefined) throw new Error("Book constructor requires an isbn.");
	this.isbn = isbn;
	this.title = title || "No title specified";
	this.author = author || "No author specified";
};

Book.prototype.display = function() {
	console.log("isbn : ", this.isbn);
	console.log("title : ", this.title);
	console.log("author : ", this.author);
};

const book1 = new Book("123", "Hello World", "XYZ");

book1.display();
*/


/*
var Book = function(isbn, title, author) {
	this.setIsbn(isbn);
	this.setTitle(title);
	this.setAuthor(author);
};

Book.prototype = {
	checkIsbn: function(isbn) {
		if(isbn == undefined || typeof isbn != "string") {
			return false;
		}
    
		return true; // All tests passed.
	},
	display: function() {
		console.log("isbn : ", this.isbn);
		console.log("title : ", this.title);
		console.log("author : ", this.author);
	},
	setIsbn: function(isbn) {
		if(!this.checkIsbn(isbn)) throw new Error("Book: Invalid ISBN.");

		this.isbn = isbn;
	},
	setTitle: function(title) {
		this.title = title || "No title specified";
	},
	setAuthor: function(author) {
		this.author = author || "No author specified";
	}
};

const book1 = new Book("123", "Hello World", "XYZ");

book1.display();
*/


var Book = (function() {
	// Private static attributes.
	var numOfBooks = 0;
  
	// Private static method.
	function checkIsbn(isbn) {
  	if(isbn == undefined || typeof isbn != "string") {
			return false;
		}

		return true;
	}

	// Return the constructor.
	return function(newIsbn, newTitle, newAuthor) { // implements Publication
		// Private attributes.
		var isbn, title, author;

		// Privileged methods.
		this.getIsbn = function() {
			return isbn;
		};

		this.setIsbn = function(newIsbn) {
			if(!checkIsbn(newIsbn)) throw new Error("Book: Invalid ISBN.");
			isbn = newIsbn;
		};

		this.getTitle = function() {
			return title;
		};

		this.setTitle = function(newTitle) {
			title = newTitle || "No title specified";
		};

		this.getAuthor = function() {
			return author;
		};

		this.setAuthor = function(newAuthor) {
			author = newAuthor || "No author specified";
		};

		// Constructor code.
		numOfBooks++; // Keep track of how many Books have been instantiated
		// with the private static attribute.
		if(numOfBooks > 50) throw new Error("Book: Only 50 instances of Book can be " + "created.");

		this.setIsbn(newIsbn);
		this.setTitle(newTitle);
		this.setAuthor(newAuthor);

	}; })();

// Public static method.
Book.convertToTitleCase = function(inputString) {
	console.log("convertToTitleCase : ", inputString);
};

// Public, non-privileged methods.
Book.prototype = {
	display: function() {
		console.log("isbn : ", this.getIsbn());
		console.log("title : ", this.getTitle());
		console.log("author : ", this.getAuthor());
	}
};

const book1 = new Book("123", "Hello World", "XYZ");

book1.display();


