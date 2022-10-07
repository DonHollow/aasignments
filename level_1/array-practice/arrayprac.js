let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0;

for (let i = 0; i < officeItems.length; i++){
  if (officeItems[i] === "computer")
  count++;
}

console.log(count)