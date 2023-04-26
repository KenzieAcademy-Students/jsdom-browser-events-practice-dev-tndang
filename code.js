// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let boxTop = 200;
let boxLeft = 200;

let resetButton = document.getElementById("resetButton");

let resetCube = function() {
    boxTop = 200;
    boxLeft = 200;

    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";

    console.log("The cube has been reset!")
} 

resetButton.addEventListener("click", resetCube);

let onKeyPress = function(event) {
    if (event.key === "ArrowDown") {
        boxTop += 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowUp") {
        boxTop -= 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowLeft") {
        boxLeft -= 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowRight") {
        boxLeft += 10;
        console.log("You Pressed: " + event.key);
    } else {
        console.log("That key is invalid, please press an arrow key.");
    }

    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
}

document.addEventListener("keydown", onKeyPress);