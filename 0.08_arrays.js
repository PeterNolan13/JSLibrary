//Arrays are a collection of items
//We define thm using []s

var Colors = ["gray", "black", "Yellow", "Green", "Blue", "navy", "purple"];
var Winners = [3, 13, 33];
var myFavorite = ["sushi", 2, "U2", true, [2,13]]; //Mixed type array
//Don't actually ever do mixed type array
//Just because you can doesn't mean you should

console.log(Colors);

//Array have indexes

var countries = ["USA", "France", "Germany"];
//Indexes: 		   0	    1         2

console.log(countries[0]);

console.log("----------------------------");

//Iterating over arrays
//Tricky at frist but gets pretty easy

var movies = ["Die Hard", "Dumb and Dumber", "Lord of the Rings", "The Departed", "Fight Club", "Harry Potter"];

console.log(movies[3]);

for(var i = 0; i<movies.length; i++){
	console.log("The index is:", i);
	console.log(movies[i]);
}

console.log("----------------------------");

//Associative Arrays

/*While many programming languages support arrays with named indexes 
(text instead of numbers), called associative arrays, JavaScript does not.
However, you still can use the named array syntax, which will produce an object.
//For example:
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"

/*Now, person is treated as an object, instead of being an array.
The named indexes "name" and "age" become properties of the person object.
As the person array is treated as an object, the standard array methods and 
properties will produce incorrect results. For example, person.length will 
return 0.*/


/*Gold Badge
Create an array where each element is an array of different lists.(I.E. 0 is your cars, 1 is
 your pets, 2 is your children). Create a loop to print out every element.*/


var cars = ["Honda, Mazda, Lexus, Infiniti"];
var pets = ["Dog, Fish, Cat, Horse"];
var children = ["Peter, Matt, Niki"];

var differentLists = [cars, pets, children];

for(var i = 0; i < differentLists.length; i++){
	console.log(differentLists[i]);
}


//Other Challenges

//Random number should be between 0 - 50


	var randomNum = (Math.random()*100)/2;

	if(randomNum <= 50){
		
	console.log(Math.trunc(randomNum));
	}	
			


//Create an array and fill it with 15 random numbers (Learn the random function)
//Write code to determine how many prime numbers there are

var randomNum1 = Math.random()*100;
var randomNum2 = Math.random()*100;
var randomNum3 = Math.random()*100;
var randomNum4 = Math.random()*100;
var randomNum5 = Math.random()*100;
var randomNum6 = Math.random()*100;
var randomNum7 = Math.random()*100;
var randomNum8 = Math.random()*100;
var randomNum9 = Math.random()*100;
var randomNum10 = Math.random()*100;
var randomNum11 = Math.random()*100;
var randomNum12 = Math.random()*100;
var randomNum13 = Math.random()*100;
var randomNum14 = Math.random()*100;
var randomNum15 = Math.random()*100;

function prime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

var num4 = 0;
  for(var i = 0; i < randomNum.length; i++){
    //console.log();
    if(prime(randomNum[i]) === true){
        num4 += 1;
    }

}

console.log(num4);

//NEED TO FIX PRIME NUMBER FUNCTION

//ask if there is a faster way to do this^^^. A for loop might serve this purpose

		

var randomNumbers = [Math.trunc(randomNum1),Math.trunc(randomNum2),Math.trunc(randomNum3),Math.trunc(randomNum4),Math.trunc(randomNum5),Math.trunc(randomNum6),Math.trunc(randomNum7),Math.trunc(randomNum8),Math.trunc(randomNum9),Math.trunc(randomNum10),Math.trunc(randomNum11),Math.trunc(randomNum12),Math.trunc(randomNum13),Math.trunc(randomNum14),Math.trunc(randomNum15),];
console.log(randomNumbers); 


/*Create an empty array
With a loop, fill it with all integers between 5 and 45
Iterate through the loop and remove all numbers that are multiples of 3 or 5
Iterate through the loop and change all numbers that end in a 1 to 0*/

var array = [];
for(i = 5; i <=45; i++) //loops through following code 40 times
{
	
		if(i%3===0){

		}

		else if(i%5===0){

		}
		else{
			array.push(i);
		}
}
console.log(array + " ");


/*Create an array of 5 words
Write code to create another array filled with 5 numbers
Write code to create an array with 5 elements with a word and a number separated by a dash*/

var words = ["cat","car", "house", "person", "boat"]
var numbers = [1,2,3,4,5];
var elements = [words[0] + "/" + numbers[0], words[1] + "/" + numbers[1],words[2] + "/" + numbers[2],words[3] + "/" + numbers[3],words[4] + "/" + numbers[4]];

console.log(elements);




/*Create an array with every letter in the alphabet 
Write code to make an array of 5 words, each with 5 random letters
(["jeodp", "bactg", "aqpvy", "bqwzs", "poebt", "xtser"])*/


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var index1 = Math.trunc(randomNum);
var hope = [];
var index2 = Math.trunc(randomNum);
var hope1 = [];
var index3 = Math.trunc(randomNum);
var hope2 = [];
var index4 = Math.trunc(randomNum);
var hope3 = [];
var index5 = Math.trunc(randomNum);
var hope4 = [];


for(i=0; i<=4; i++){
var randomNum = (Math.random()*100)/4;
var index1 = Math.trunc(randomNum);
var randomNum = (Math.random()*100)/4;
var index2 = Math.trunc(randomNum);
var randomNum = (Math.random()*100)/4;
var index3 = Math.trunc(randomNum);
var randomNum = (Math.random()*100)/4;
var index4 = Math.trunc(randomNum);
var randomNum = (Math.random()*100)/4;
var index5 = Math.trunc(randomNum);

hope.push(alphabet[index1]);
hope1.push(alphabet[index2]);
hope2.push(alphabet[index3]);
hope3.push(alphabet[index4]);
hope4.push(alphabet[index5]);
}

var y = hope[0] + hope[1] + hope[2] +hope[3] + hope[4];
var x = hope1[0] + hope1[1] + hope1[2] +hope1[3] + hope1[4];
var z = hope2[0] + hope2[1] + hope2[2] +hope2[3] + hope2[4];
var w = hope3[0] + hope3[1] + hope3[2] +hope3[3] + hope3[4];
var p = hope4[0] + hope4[1] + hope4[2] +hope4[3] + hope4[4];
console.log(y + " " + x + " " + z + " " + w + " " + p);






