var yetAnotherFullName : (first : string, last : string) => string;

yetAnotherFullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(yetAnotherFullName('Justin', 'Murray'));

// Immediately invoked version

(function(first : string, last : string) {
  console.log(first + " " + last);
})('James', 'Murray')