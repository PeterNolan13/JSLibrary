//Strings are a group of characters
//Strings must go in quotes

console.log("I'm studying abroad next semester");

var tweet = "I can't wait to go to Ireland!"
console.log(tweet);
var username = 'PNolan';
console.log(username);

var password = "1234password5!";
console.log(password);

var birthCity = "LaGrange";
var birthState = "Illinois";
var commaSpace = ",";
console.log(birthCity + commaSpace + birthState);
console.log(birthCity + "," + birthState + 10); 

//Mixing Strings & Integers
var ageInAugust = 40;
var highSchool = "Carmel HS"
var graduatedHS = 1994;

console.log(highSchool + commaSpace + graduatedHS);
console.log("My age in August: ", ageInAugust);
console.log("My 'age' in August: ", ageInAugust);
console.log('My "age" in August: ', ageInAugust);
console.log("My \"age\" in August: ", ageInAugust);

//I graduated from Lyons Township High School in 2014
var ageInAugust = 21;
var highSchool = "Lyons Township HS"
var graduatedHS = 2014

console.log(highSchool + commaSpace + graduatedHS)
console.log("My age in August: ", ageInAugust);


//String Methods (functions)
console.log(highSchool.length)
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" "));
console.log(highSchool.slice(3)); //cuts off everything before index 3
//indicies of strings start at 0

//Gold Badge
/*Take a simple lowercase string and write code that turns all the letters to uppercase letters.
Print before and after to the console:
*/

var sport = "soccer"
console.log(sport);
console.log(sport.toUpperCase());