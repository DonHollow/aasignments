//Problem #1

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

// var count = 0;

// for (var i = 0; i < officeItems.length; i++){
//     if(officeItems[i] == "computer")
//     count++;
// }

// console.log(count)

//Problem #2

let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]  

for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
} else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') {
    peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
}

if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough , let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!")
} else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!")
}
}