const h1 = document.createElement("h1");
const p = document.createElement("p");
h1.className = "header";
p.className = "header";
h1.textContent = "JavaScript made this!!";
p.innerHTML = '<span class="name">Yreish</span> wrote the JavaScript';
document.getElementById("header").appendChild(h1);
document.getElementById("header").appendChild(p);

//Preliminaries with subs working

const messages = document.getElementsByClassName("message");

messages[0].innerHTML = "you're great";
messages[1].innerHTML = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're awesome";


const clear = document.getElementById("clear-button")

clear.addEventListener('click', function (e){
  document.getElementsByClassName("message").textContent = ""
  
  })

//Bronze

const themeDropDown = document.getElementById("theme-drop-down");

themeDropDown.addEventListener('change', function theme() {
  if(themeDropDown === "theme-one") {
    for(i=0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "blue/brown" 
    }
  }
}) 

element.classList.toggle("theme-two");

for(let i = 0; i < messages.length; i++) {
  messages[i].classList.toggle("theme-two");
}

//Silver do not feel confident, will ask TA.

//grab theme-drop-down id
//grab messages
//create a function
//use an if else statement inside of this function
//inside of this if else statement, loop over the messages

function theme() {
  if(themeDropDown === "theme-one") {
    for(i=0; i < rightMessages.length; i++) {
      rightMessages[i].style.backgroundColor = "red" 
    }
  }
}