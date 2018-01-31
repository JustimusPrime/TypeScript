interface User {
  email : string;
  firstName? : string;
  lastName? : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUserOne = {
  email: 'test@test.com',
  firstName: 'Justin',
  lastName: 'Murray'
};

console.log(profile(realUserOne));
console.log(realUserOne.email);
