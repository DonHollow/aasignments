var mSquare = document.getElementById("square")

mSquare.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue"

// blue on hover working
})

mSquare.addEventListener("mousedown", function() {
    this.style.backgroundColor = "red"

// red when held down working
})

mSquare.addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow"

// yellow when let go on square working
})

mSquare.addEventListener("dblclick", function() {
    this.style.backgroundColor = "green"

// green on double click working
})

mSquare.addEventListener("wheel", function(e) {
    this.style.backgroundColor = "orange"

// orange when husing wheel working
})

var colorPick = function(key){
    if (key.keycode == 82) {
        mSquare.style.backgroundColor = "red"
        console.log("r")
        //unsure why red key wont interact
    } else if(key.keyCode == 66) {
        mSquare.style.backgroundColor = "blue"
    } else if(key.keyCode == 89 ){
        mSquare.style.backgroundColor = "yellow"
    } else if(key.keyCode == 71 ){
        mSquare.style.backgroundColor = "green"
    } else if (key.keyCode == 79 ) {
        mSquare.style.backgroundColor = "orange"
    } else {console.log ("no")}

    //all other colors work flawlessly once corresponding key has been pressed.
}
window.addEventListener("keyup", colorPick)