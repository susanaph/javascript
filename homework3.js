/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.
*/

const humansAreMortal = true
const humans = ["man", "woman", "child", "elder"]
const socrates = "man"

if ((humansAreMortal) && (humans.includes(socrates))) {
        console.log("Socrates is mortal")
}