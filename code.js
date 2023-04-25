// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let boxTop = 200;
let boxLeft = 200;

let onKeyPress = function(event) {
    console.log("You Pressed: " + event.key);
}

document.addEventListener("keydown", onKeyPress);