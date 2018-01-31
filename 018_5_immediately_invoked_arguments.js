var yetAnotherFullName;
yetAnotherFullName = function (first, last) {
    return first + " " + last;
};
console.log(yetAnotherFullName('Justin', 'Murray'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('James', 'Murray');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map