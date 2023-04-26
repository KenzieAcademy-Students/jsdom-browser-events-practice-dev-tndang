// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let imageTop = 200;
let imageLeft = 200;

let resetButton = document.getElementById("resetButton");

let resetCube = function() {
    imageTop = 200;
    imageLeft = 200;

    document.getElementById("imageContainer").style.top = imageTop + "px";
    document.getElementById("imageContainer").style.left = imageLeft + "px";

    console.log("Deku has been reset!")
} 

resetButton.addEventListener("click", resetCube);

let onKeyPress = function(event) {
    if (event.key === "ArrowDown") {
        imageTop += 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowUp") {
        imageTop -= 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowLeft") {
        imageLeft -= 10;
        console.log("You Pressed: " + event.key);
    } else if (event.key === "ArrowRight") {
        imageLeft += 10;
        console.log("You Pressed: " + event.key);
    } else {
        console.log("That key is invalid, please press an arrow key.");
    }

    document.getElementById("imageContainer").style.top = imageTop + "px";
    document.getElementById("imageContainer").style.left = imageLeft + "px";
}

document.addEventListener("keydown", onKeyPress);