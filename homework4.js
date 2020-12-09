/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.
*/

const humans = ["Socrates", "Plato", "Aristotle", "Hyppocrates"]
const humansAreMortal = true


const isMortal = (_name = "undefined") => {
        if ((humans.includes(_name)) && humansAreMortal)  {
                console.log(_name + " is mortal: " + humans.includes(_name))
        }
        else if (_name === "undefined") {
                        console.log("Please enter a name")
                }
        else if ((!humans.includes(_name)) && typeof _name === "string") {
                console.log("Not sure if " + _name + " is mortal... ")
                }
        else if (typeof _name === "number")
                console.log("I don't think numbers are mortal... but if all humans are gone, would numbers exist?")
}
        
isMortal("Socrates")