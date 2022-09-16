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

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're awesome";

//Bronze not working but messages have been rewritten

const selectElement = document.getElementById("theme-drop-down");
element.addEventListener('change', function(){
  //handle change
}); 

element.classList.toggle("theme-two");

for(let i = 0; i < messages.length; i++) {
  messages[i].classList.toggle("theme-two");
}

//Silver do not feel confident, will ask TA.