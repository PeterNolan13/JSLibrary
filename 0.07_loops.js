//For loops
//For loops are similar to while loops in that they let us repeat statements
//However they are more specialized

//for(counter; condition; increment){
	//code to be run
//}

console.log("For loops:");

for(var i =1; i<50; i+=5){
	console.log(i);
}


for(var i= 0; i<=100; i+=5){
	console.log(i);
}

//Start at 3, count by 7's. don't go over 40

for(var i=3; i<=40; i+=7){
	console.log(i);
}

//Break statement
//breaks are used to prematurely exit a loop

for(var i=0; i <20; i++){
	console.log("Testing:",i);
	if(i===13){
		console.log("Found 13!");
		break;
	}
}


//for in loops
//do while loops

console.log("---------------------------");

//Loops are used to do things multiple times easily
//The while loop tells JS to repeat statements until a condition is false

console.log("While loops:")

//Example
var score = 0;

while(score<10){
	score++; //Shorthand for saying (score = score +1)
	console.log("Score is:",score);
}

//Another example
var age = 0;
while(age<100){
	age+=10; //shorthand for (age = age+10)
	console.log("Our age is:",age);
}

if(age===100){
	console.log("I'm a century old! Literally");
}

//Challenge
//Write a while loop that prints 10-100 by 10s
//At 50, print "Halfway there"

//Define counter

//while(condition){
	//increment counter
	//print counter
	//check if 50
		//If so, print message
//}

var counter = 0;

while(counter<100){
	counter+=10;
	console.log("The count is:",counter);
	if(counter === 50){
		console.log("Halfway there!")
	}
}

console.log("---------------------------");

//The do...while loop is a variant of the while loop. This loop will execute 
//the code block once, before checking if the condition is true, and then it 
//will repeat the loop as long as the condition is true.

/*
console.log("Do While loops:");

//Syntax:
do {
   code block
}
while (condition);

//Note the semicolon used at the end of the do...while loop.

//Example:
var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 

//This^^^ prints out numbers from 20 to 25.


//The loop will always be executed at least once, even if the condition is false,
//because the code block is executed before the condition is tested.*/

/*Gold Badge
Create a for loop that counts to 10.
Print each number, 1 through 8.
But print 9 & 10 as "nine" & "ten"*/

for(var i=0; i<11;i++){
	if(i<9){
		console.log(i);
	}
	else if(i ===9){
		console.log("nine");
	}
	else{
		console.log("ten");
	}
}

