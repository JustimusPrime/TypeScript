// functions have access to any public variables in the outer scope
// function nameFunction(name: string) : void {
//   var n : string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction('Justin');
// ***
// the inner functions maintain access to the outer scope even AFTER the values are returned!
// function nameFunction(name: string) {
//   var n : string = name;
//   return function() {
//     console.log(n);
//   }
// }
// var nameAgain = nameFunction('James');
// nameAgain();
// ***
function anotherLineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = anotherLineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
//# sourceMappingURL=019_closure_introductions.js.map