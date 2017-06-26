var x = 3;
console.log(x);

var y = 5;
var z = x + y;
console.log(z);

//Naming
//Name variables anything
var age = 21;
var money = 10000;

//Camel Casing
var numberOfSportsIHavePlayed = 5;
var myBirthYear = 1995;
var newNumber = (z * numberOfSportsIHavePlayed);
console.log(newNumber);

//Shorthand Operators
age -= 10;
console.log(age);
//same as
age = 21;
age = age - 10;
console.log(age);

money %= 100;
//same as money = money % 100;
console.log(money);

//Using the var for a value interchangeable
age = 21;
var ageInAugust = age +1;
console.log(ageInAugust);
var twelve = 12;
console.log(twelve * twelve);

//Gold Badge
/*Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Print a statement that would say something like the following:

Hints:
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would need total for the rest of your life.
Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
*/

var age = 21;
var maxAge = 100;
var coffee = 2; //cups per day

NN = (maxAge - age) * coffee;



console.log("You will need " + NN +" cups of coffee to last you until the ripe old age of 100");