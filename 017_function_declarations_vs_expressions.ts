console.log(functionName('Justin', 'Murray'));
console.log(otherFullName('Justin', 'Murray'));
console.log(thirdFullName('Justin', 'Murray'));




// Function declaration
function functionName(begin : string, end: string) : string {
  return begin + " " + end;
}

// Function expression

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
  }

