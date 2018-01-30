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

function lineupCard(team: string, ...players_three: string[]) {
  console.log('Team: ' + team);
  for (let player of players_three) {
    console.log(player);
  }
}

lineupCard('Astros', 'Ben', 'Bell', 'Brown');