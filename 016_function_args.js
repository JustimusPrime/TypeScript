// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }
// printAddress('123 any street');
// printAddress('123 any street', 'suite 540');
// printAddress('123 any street', 'suite 540', 'UT');
// cannot have required value after optional value
// does not apply to default arguments
function lineupCard(team) {
    var players_three = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players_three[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_three_1 = players_three; _a < players_three_1.length; _a++) {
        var player_1 = players_three_1[_a];
        console.log(player_1);
    }
}
lineupCard('Astros', 'Ben', 'Bell', 'Brown');
//# sourceMappingURL=016_function_args.js.map