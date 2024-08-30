let age = 16;
let withAdult = false;

if (age >= 15) { // First If Condition
console.log('You can enter the park');
if (withAdult) { // nested if condition ==> Assistant Manager
console.log('You can enter the haunted house');
}
else {
console.log('You cannot enter the haunted house')
  }
}

else {
console.log('You cannot enter the park');
}