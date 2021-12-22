/*
Inheritance basic example

// Class Person.
function Person(name) {
	this.name = name;
}
Person.prototype.getName = function() {
	return this.name;
};

// Class Author.
function Author(name, books) {
	Person.call(this, name); // Call the superclass's constructor in the scope of this. this.books = books; // Add an attribute to Author.
}

Author.prototype = new Person(); // Set up the prototype chain.
Author.prototype.constructor = Author; // Set the constructor attribute to Author.
Author.prototype.getBooks = function() { // Add a method to Author.
	return this.books;
};
*/


/*

Extend function.

Basic

function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
}

Improved

function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}
*/

function extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.superclass = superClass.prototype;
	if(superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}

/* Class Person. */
function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
};


/* Class Author. */
function Author(name, books) {
	Person.call(this, name);
	this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function() {
	return this.books;
};

Author.prototype.printBooks = function() {
	let index;

	for(index=0;index<this.books.length;index++) {
		console.log("* ", this.books[index]);
	}
};


const author = new Author("xyz", ["hello", "world"]);
console.log("name : ", author.getName());
author.printBooks();





