console.log(functionName('Justin', 'Murray'));
console.log(otherFullName('Justin', 'Murray'));
console.log(thirdFullName('Justin', 'Murray'));
// Function declaration
function functionName(begin, end) {
    return begin + " " + end;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map