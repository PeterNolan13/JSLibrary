//Booleans

var tired = true;
var awake = true;
var hungry = true;
var sad = false;
var happy = true;
var angry = false;

console.log(angry);

//comparisons
// == Equality
// === Strict Equality
// != Inequality
// !== String Inequality
// >
// <
// <=
// >= Greater than or equal to

console.log(12>11);
console.log(13<12);

var test= 2>= 3;
console.log(test);

console.log("Two is greater than one?" + " " + (2 > 1));

console.log("--------");

//When we check for equality, you always want to use === over the == in JavaScript
3 == "3";	//true
3 === "3";	//false
3 === 3		//true
2+2 === 4	//true

//inequality
"Joey" !== "Tif"	//true
100 !== 100			//false

//overview, difference between =, ==, ===
var one = 1;
var stringOne = "1";
console.log("Two equals?", one == stringOne);
console.log("Two equals?", one === stringOne); //3 is very safe and compares type & value

//Logical Operators
//Operators		Meaning		True expressions
//	&&			 and		 4 > 0 && -2 < 0
//	||			 or 		 4 > 0 || -2 > 0
//	!			 not			!(5 < 0)

console.log("&& operator: ", 2===2 && 1===1);
console.log("|| operator: ", 2===2 || 2===1);
console.log("!= operator: ", 2 != 1);

//Gold Badge
/* 
Look up boolean operators.
Try and combine two booleans using this.
*/

var hungry = true;
var awake = true;

console.log(awake && hungry);
