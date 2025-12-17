//Exercise 1
var complexArithmeticResults = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:");
console.log(complexArithmeticResults);

//Exercise 2
var projectIdentifier = "COMP484"
ProjectIdentifier = "JS_Advanced"
//This fails because JavaScript is case-sensitive. "ProjectIdentifier" is not the same variable as "projectIdentifier"
projectIdentifier = "JS_Advanced"
console.log("");
console.log("Exercise 2:");
console.log(projectIdentifier);

//Exercise 3
var courseDescription = "The course is 'interactive' and involves 'scripting' logic."
console.log("");
console.log("Exercise 3:");
console.log(courseDescription);

//Exercise 4
var errorMessage = 'An internal server error occurred: \"Access Denied\"'
console.log("");
console.log("Exercise 4:");
console.log(errorMessage);

//Exercise 5
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;

console.log("\nExercise 5:");
console.log("Subtraction:", resultSubtraction);
console.log("Multiplication:", resultMultiplication);
console.log("typeof valueA:", typeof valueA);
console.log("typeof valueB:", typeof valueB);

//Exercise 6
var unassignedVar;
var explicitNull = null;
console.log("");
console.log("Exercise 6:");
console.log(typeof unassignedVar);
console.log(typeof explicitNull);
//A blank string is still a string while null is an object

//Exercise 7
console.log("");
console.log("Exercise 7:");
var isBlocking = true;
console.log(typeof isBlocking);
isBlocking = "true";
console.log(typeof isBlocking);

//Exercise 8
console.log("");
console.log("Exercise 8:");
//var 1test = test
//cant start variable name with a number
//var test 2 = test
//cant add a space in variable name
//var "test" = test
//cant use special characters like "" in variable name
console.log("Check Comments");

//Exercise 9
console.log("");
console.log("Exercise 9:");
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);

//Exercise 10
console.log("");
console.log("Exercise 10:");
var x = 10;
var y_post = x++;
console.log(y_post);
console.log(x);
x = 10;
var z_pre = ++x;
console.log(z_pre);
console.log(x);
// x++ returns the value before incrementing
// ++x increments before returning the value

// Exercise 11
console.log("");
console.log("Exercise 11:");

var testNumber = 0;
var testBoolean = false; 

if (testNumber == testBoolean) {
    console.log("testNumber and testBoolean are loosely equal");
} else {
    console.log("testNumber and testBoolean are not loosely equal");
}

//javascript has something called type coercion which lets different types of values ways to connect to eachother. The boolean value of true = 1 and false = 0. so when using ==, they can actually relate to eachother
