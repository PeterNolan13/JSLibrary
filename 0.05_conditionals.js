//If statements: Are used to tell JS which statements to execute basedd on a condition

console.log("If statements:");

var isOn = true;
var isCold = false;

//Shorthand for checking for true
if(isOn){
	console.log("The light is on");
}

//longhand for checking for true
if(isOn === true){
	console.log("The light is still on");
}

//Conditional Operators
//AND	&&
//OR 	||
//NOT	!

isOn = true;
isCold = false; 

if(isOn && isCold){
	console.log("The light is on and it is not cold");
}

if(isOn || isCold){
	console.log("I'm not sure what to say");
}

if(!isOn){
	console.log("The light is not on");
}

console.log("-------------------------------------")

//If/Else statements
//Else statements give JS an alternative statement to execute


console.log("If/Else statements:");

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up");
}

else{
	console.log("Going down");
}


//With an if/else statement
//Describe if the elevator is broken or not

if(elevatorBroken === true){
	console.log("Take the stairs");
}

else{
	console.log("Which floor are you going to?");
}

//Combining variable types for conditionals

if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is NOT our lucky day");
}

else{
	console.log("Phew. That could have been trouble!");
}

console.log("-------------------------------------")

//If/ElseIf/Else statements
//ElseIf statements allow for more than just two possible outcomes


console.log("If/ElseIf/Else statements:");

var isFast = true;
var isSmart = true;

if(isFast){
	console.log("Wow you're fast!")
}

else if(isSmart){
	console.log("Well at least you're smart");
}

else{
	console.log("Maybe spend more time in the gym/school");
}


console.log("-------------------------------------")

//Switch statements
//Very similar to if statements

//How it works:
//The value is evaluated once
//It is then compared with cases
//If a matching case is found, executes code

console.log("Switch statements:");

var marginOfSuperBowlWin = 1;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result = "That will be a good game";
		break;
	case 7:
		result = "I like it. Pretty close game";
		break;
	case 17:
		result = "Sweet we can just focus on the commercials";
		break;
	default:
		result = "I don't know. Let's see what happens"; 
		//don't need a break here. default is always the last thing the program looks at
}

console.log("Switch Result:", result); //console.log("Switch Result: " + result)


//Gold Badge
/*Disclaimer: This is a classic job interview question. It would be really good for you to memorize and understand how it’s working just for understanding of the logic behind it. There are a lot of different ways to do it.
 
Write a program that prints from 1 to 100.
For multiples of three print "Fizz" instead of the number.
For multiples of five print "Buzz" instead of the number. 
For numbers which are multiples of both three and five print "FizzBuzz".
*/

for(var i=1; i <=100; i++)
{
	if(i%3===0 && i%5===0)
	{
		console.log("FizzBuzz");
	}

	else if(i%5===0)
	{
		console.log("Buzz");
	}

	else if(i%3===0)
	{
		console.log("Fizz");
	}
	
	else
	{
		console.log(i);
	}
}


