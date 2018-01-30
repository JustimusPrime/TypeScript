// var x : number = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }
var players_two = [3, 10, 4, 5, 1];
// for in
console.log("For/Of");
for (var player_1 in players_two) {
    console.log(player_1);
}
// player is iterator variable
// for of
console.log("For/Of");
for (var _i = 0, players_two_1 = players_two; _i < players_two_1.length; _i++) {
    var player_2 = players_two_1[_i];
    console.log(player_2);
}
// you could use var instead in these examples, but let will attach it to the scope
//# sourceMappingURL=014_loops.js.map