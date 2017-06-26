//Functions: What do we use them for
	//Executes action(s)
	//Allows us to reuse code 


function hello(){
	console.log("hello world");
}

hello();

function printOneNumber(){
	console.log(5);
}

printOneNumber();

console.log("----------------------");

function divider(){
	console.log("----------------------")
}

divider();

//Scope with variables
//think of it like a rifle scope


function add(){
	var x = 3;
	var y = 10;
	console.log(x + y);
}

function subtract(){
	var x=10;
	var y=5;
	console.log(x-y);
}

add();
subtract();




//Parameter/Arguments(basically the same thing)
	//Parameters are the names in the function definition
	//Arguments are what is passed to the function


function numberEntered(x){ //x is a parameter
	// x and 7 share the same value
	console.log("Number entered:", x);
}

//Can have as many parameters as you want

function addTwoNums(x,y){ //X and Y are parameters
	console.log(x+y);
}

addTwoNums(4,7); //4 and 7 are arguments

divider();

numberEntered(7); //7 is the arguments


//return keyword
//When JS hits the return keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I'm feeling great!";
}

console.log(mood()); //Mood becomes the argument for console.log()


function multiply(x,y){
	return x*y;
}

console.log(multiply(7,5));

//On your own:
//write a function taht takes two arguments, a first name and a last name, and combines them to
//return <firstname><lastname> and then print the return value to the console


function combineNames(firstName, lastName){
	return firstName + " " + lastName;
}

console.log(combineNames("Peter", "Nolan"));

//Loops(small preview)

for(var i=0; i < 5; i++)
{
	divider();
}

//The setInterval() method calls a function or evaluates an expression at 
//specified intervals (in milliseconds).
//It will continue calling the function until clearInterval() is called or 
//the window is closed.

//For example:
/*function myAlert() {
   alert("Hi");
}
setInterval(myAlert, 3000);*/


//This will call the myAlert function every 3 seconds (1000 ms = 1 second).
//Write the name of the function without parentheses when passing it into the 
//setInterval method.


/*Gold Badge
Write a function that helps me calculate the cost of buying 100 sodas
 at $.99 each(or whatever and however many we feel like buying).
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93.*/

var numberOfSodas = 100;
var costPerSoda = 0.99;
var total;
var finalTotal

function sodas(numberOfSodas,costPerSoda){
	total = numberOfSodas*costPerSoda;
	return finalTotal = total*.07 + total;

}

console.log(sodas(numberOfSodas,costPerSoda));
console.log(numberOfSodas + " " + "Cokes will cost you $" + finalTotal + ".");
