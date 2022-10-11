let fruit = ["banana", "apple", "orange", "watermelon"];
  let poppedFruit = fruit.shift()
  let index = fruit.indexOf("orange")
  let addFruitIndex = fruit.push(index) 

// console.log(index)
console.log("fruit: ", fruit);


let vegetables = ["carrot", "tomato", "pepper", "lettuce"];
  let poppedVeg = vegetables.pop()
  let vegLength = vegetables.length
  let addVegLength = vegetables.push(vegLength)

console.log("vegetables: ", vegetables);

let food = fruit.concat(vegetables)
food.splice(4, 2);
let revFood = food.reverse("")
let arrString = food.join(", ")

console.log(arrString)
console.log("food: ", food);