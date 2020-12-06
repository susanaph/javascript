/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

var cakeFlavor = ["chocolate" ,"vanilla"]
var chosenCake = cakeFlavor[1]

function whichFlavor() {        
        if (chosenCake !== "chocolate") {
                console.log("This cake is " + cakeFlavor[1])
        } else if (chosenCake !== "vanilla") {
                console.log("This cake is " + cakeFlavor[0])
        }
}

whichFlavor()