/*
What are the differences between let, const and var?

'var' is a variable and allows a strong, a number, a boolean, a null value, or even un undefined value. By declaring a variable, you're able to use it later in the code (in a function or boolean expression) or reassign it (change the value)
*/

var currentCity = "Toronto"

function sayCity() {
	if (currentCity === "Toronto") {
	console.log("You live in" + " " + currentCity)
	}
}

sayCity()

/*In the code, I declare the variable currentCity and attach the value Toronto, then I use this variable to validate if true, and print the value in a phrase.
*/

/*
'let' is similar to 'var', but acts only within the scope of the function where it was defined. This can help when making functions, when nesting arguments in the function, to confine the 'let' argument to that function or to that part of the nested item.
*/

let currentOtherCity = "Toronto"

function sayOtherCity() {
        var currentOtherCity = "New York"
	if (currentOtherCity === "Toronto") {
	        console.log("Very unlikely")
        }
        console.log("You live in" + " " + currentOtherCity)
}

sayOtherCity()
console.log(currentCity)

/*
In this example, because 'let' currentCity was declared outside of the scope of the function where it is supposed to be used, when evaluating the function, and declaring a 'var' currentCity inside the function, the result will be that Toronto is ignored within the context of the function. When executing sayCity() function, the result will include New York, however, when printing currentCity, the value Toronto will be printed.
*/

/*
'const' is a constant, cannot be re-declared, as 'var' and 'let' allow, however, if 'const' is an array or object it allows for methods to modify some parts of the array or object, by adding items (push) or deleting items (pop), for example, or by changing the value in the key : value pair in an object.
*/

const greeting = "Hello"
const numbersArray = [1, 2, 3, 4, 5]
const capitalsObject = {"Canada" : "Ottawa", "United States" : "Washington D.C.", "Mexico" : "Mexico City"}
numbersArray.push(6)

console.log(numbersArray)
numbersArray.pop()
numbersArray.pop()
numbersArray.pop()
console.log(numbersArray)
console.log(capitalsObject)
capitalsObject.Canada = "Toronto"
console.log(capitalsObject)

/*
In these examples, a constant of greeting is declared and cannot change to another value. A constant array for numbers is declared and can be modified by adding or removing items (push or pop), and a constant object is declared and then modified in one key-value pair.
*/


/*
Hoisting is a behavior in JavaScript that moves declarations to the top of the scope, which allows to use a variable before it is declared. Because let and const need to be initialized, even if they are hoisted, they will cause an error (if used before declared and initialized)...

So, bottomline keep hoisting in mind when looking for bugs, and declare var, let, const at the top of the scope where they'll be used.
*/


currentOtherOtherCity = "Portland"

function whatCity() {
        if (currentOtherOtherCity === "Los Angeles") {
                console.log("It's L.A.")
        }
        else {
                console.log("It's" + " " + currentOtherOtherCity)
        }

}

whatCity()
console.log(currentOtherOtherCity)

/* This code above will run (if you delete the next block of code) even as there is an assignment for currentOtherOtherCity (with the value Portland), even though it hasn't been declared as a variable */

currentOtherOtherCity = "Portland"

function whatCity() {
        if (currentOtherOtherCity === "Los Angeles") {
                console.log("It's L.A.")
        }
        else {
                console.log("It's" + " " + currentOtherOtherCity)
        }

}

whatCity()
const currentOtherOtherCity = "Chicago"
console.log(currentOtherOtherCity)

/* This code above will fail, because I'm trying to use currentOtherOtherCity and then specifying that it's a constant... it would also fail is line 101 is let */