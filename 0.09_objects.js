//Object

//don't use a comma after the last item

var emptyObject = {};

var johnQualls = {
	//Properties

	name		: "John Qualls",
	age			: "49",
	vocation	:"President of Eleven Fifty Academy",
	isRetired	:false,  
	//Methods
	greeting :function(){
		console.log("Hello, I am " + this.name + "." + "I am " + this.vocation);}, //"this" is 
		//referring to the object "johnQualls"
	ageOf :function(){
		console.log("Hello, I am " + this.name + "." + "I am " + this.age);
	},
	extendedGreeting : function(){
		this.greeting();
		this.ageOf();
	}
};

console.log("########################");
johnQualls.greeting();
johnQualls.ageOf();
johnQualls.extendedGreeting();
console.log("########################");






console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName);	//undefined
console.log("-----------------");

var animal = {
	type			:"bear",
	habitat			:"woods",
	weight			:500,
	commonInIndiana	:false
};

console.log(animal.weight);
console.log(animal["weight"]);
animal.weight = 600;
console.log(animal.weight);
console.log(animal.weight+50);
console.log(animal.weight);
animal.type="cat";
console.log(animal.type);
console.log("-----------");

console.log(animal.favoriteFood);
animal.favoriteFood = "carrots";
console.log(animal.favoriteFood);
animal.color = "blue";
animal.freakOfNature = true;
console.log(animal.color);
console.log(animal.freakOfNature);

delete animal.freakOfNature;
console.log(animal.freakOfNature); //undefined

//properties can be more than just string, bool, and numbers
//Can include arrays and other objects

animal.moviesAboutMe = ["Lion King", "Happy Feet", "Marley & Me"];
console.log(animal.moviesAboutMe);
//print out only the 2nd movie
console.log(animal.moviesAboutMe[1]);

console.log(Object.keys(animal));

//Student Exercises

//You try it - Make a friend object with at least four properties

var friend = {

	name 	: "Ray Lewis",
	age 	:  "21",
	HomeTown: "La Grange",
	College	: "Indiana University"
};

console.log(friend);


//Now make another object called movie with 3 properties

var movie = {
	title: "Harry Potter",
	numberOfMovies: "At least 7",
	femaleLead: "Emma Watson"
};

console.log(movie);

//Make an object about anything you want (recipe, car, sports team)

var chicagoBulls = {
	bestPlayerEver	: "Michael Jordan",
	numberOfRings	: 6,
	jerseyColor		:"red"
};

console.log(chicagoBulls);

//longish hand way
//"this" is contextual, based on whatever it is contained in
var car = {
	make:"",
	model: "",
	year: 0,
	constructor: function(make,model,year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Lexus", "RX", 2017);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar);

//Shorthand way of inheritance
var book = {
	title			: "",
	yearPublished	: 0,
	numPages		: 0,
	constructor: function(title, yearPublished, numPages){
		this.title = title;
		this.yearPublished = yearPublished;
		this.numPages = numPages;
		return this;
	}
}


var myFavBook = new book.constructor("Steelheart", 2015, 300);
console.log(myFavBook.title);


//Shorterhand version
//Javascript is chaos
//Technically....functions are also objects
//so we can do something like this

function computer(screenSize, hardDriveSize, hasNumPad){
	//We never technically defined these properties or the object really,
	//but it's okay because we are using javascript
	this.screenSize = screenSize;
	this.hardDriveSize = hardDriveSize;
	this.hasNumPad = hasNumPad;
}

var myPC = new computer(17, "1TB", true);
console.log(myPC.screenSize);

myPC.boot = function(){
	console.log("Booting");
}

//Objects are references
//var car
//*****************object******     //***** represent memory
//					car^

var pcOne = new computer(12, "500GB", false);
var pcTwo = new computer(14, "2TB", true);
var pcThree = pcTwo;

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize = 15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//Objects are not copied!! They are referenced

console.log("--------------------------------------")

/*console.log("The Date Object");

The Date Object

The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and
milliseconds.

Using new Date(), create a new date object with the current date and time.
var d = new Date();
//d stores the current date and time

//The other ways to initialize dates allow for the creation of new date objects 
//from the specified date and time.
/*new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)*/

//JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 
//Universal Time (UTC). One day contains 86,400,000 millisecond.

/*
//For example:
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

//JavaScript counts months from 0 to 11. January is 0, and December is 11.
//Date objects are static, rather than dynamic. The computer time is ticking, but 
//date objects don't change, once created.

/*Methods
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMilliseconds()


//For example:
var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour


//Let's create a program that prints the current time to the browser 
//once every second.
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);*/


//We declared a function printTime(), which gets the current time from the date
//object, and prints it to the screen.
//We then called the function once every second, using the setInterval method.
//The innerHTML property sets or returns the HTML content of an element.
//In our case, we are changing the HTML content of our document's body.
//This overwrites the content every second, instead of printing it repeatedly to 
//the screen.*/


console.log("--------------------------------------")
/*The Math object allows you to perform mathematical tasks, and includes 
several properties.

For example: 
document.write(Math.PI);
//Outputs 3.141592653589793

//Math has no constructor. There's no need to create a Math object first.

/*
abs(x) = returns the absolute value of x
acos(x) = returns the arccosine of x, in radians
asin(x) = returns the arcsine of x, in radians
atan(x) = returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x) = returns the arctangent of the quotient of its arguments
ceil(x) = returns x, rounded upwards to the nearest integer
cos(x) = returns the cosine of x (x is in radians)
exp(x) = returns the value of E^x
floor(x) = returns x, rounded downwards to the nearest integer
log(x) = returns the natural logarithm (base E) of x
max(x,y,z,....,n) = returns the number with the highest value
min(x,y,z,....,n) = returns the number with the lowest value
pow(x,y) = returns the value of x to the power of y
random() = returns a random number between 0 and 1
round(x) = rounds x to the nearest integer
sin(x) = returns the sine of x (x is in radians)
sqrt(x) = returns the square root of x
tan(x) = returns the tangent of an angle

Math.trunc() = truncates the decimals
*/

/*Bronze Badge
Create a person object with different properties describing them.

Silver Badge
Add methods for each of the properties above that returns the value of the property(I.E. getName() 
returns the name).
*/

var person = {

	name		: "Peter Nolan",
	age			: "21",
	vocation	:"Student",
	gender		:"Male",
	
	getName	: function(){
		console.log(this.name);
	},
	getAge	: function(){
		console.log(this.age);
	},
	getVocation	: function(){
		console.log(this.vocation);
	},
	getGender	: function(){
		console.log(this.gender);
	}

	} ;

person.getName();
person.getAge();
person.getVocation();
person.getGender();



/*Gold Badge
Create a child object that inherits all of the properties and methods from your person object.
Add anything you want to the child object, without adding it to the person.
*/

function child(name, age, vocation, gender, grade, favoriteColor){
	this.name = name;
	this.age = age;
	this.vocation = vocation;
	this.gender = gender;
	this.grade = grade;
	this.favoriteColor = favoriteColor;
	this.getName = function(){
		console.log(name);
	}
	this.getAge = function(){
		console.log(age);
	}
	this.getVocation = function(){
		console.log(vocation);
	}
	this.getGender = function(){
		console.log(gender);
	}
}




var person = new child("Ray", 10, "student", "male","5th grade", "blue");
console.log(person.name);
console.log(person.age);
console.log(person.vocation);
console.log(person.gender);
console.log(person.grade);
console.log(person.favoriteColor);




