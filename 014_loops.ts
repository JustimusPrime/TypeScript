// var x : number = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }

let players_two : number[] = [3, 10, 4, 5, 1];


// for in
console.log("For/Of");
for (let player in players_two) {
  console.log(player);
}

// player is iterator variable


// for of
console.log("For/Of");
for (let player of players_two) {
  console.log(player);
}

// you could use var instead in these examples, but let will attach it to the scope
