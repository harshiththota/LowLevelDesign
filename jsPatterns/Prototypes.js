

/* 
JavaScript is a prototype based language, so, whenever we create a function using JavaScript,
JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object),
where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.
*/

// Person
var Person = function(name, job, year) {
	this.name = name;
	this.job = job;
	this.year = year;
};


Person.prototype.getName = function() {
	return this.name;
};

Person.prototype.getJob = function() {
	return this.job;
};

Person.prototype.getYear = function() {
	return this.year;
};


Person.prototype.updateName = function(name) {
	this.name = name;
};

const Person1 = new Person("Harshith", "Software", "1997");

console.log("Name : ", Person1.getName());
Person1.updateName("Hari");
console.log("Name : ", Person1.getName());
console.log("Name : ", Person1.name);
