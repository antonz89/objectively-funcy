// Your code here.

function getFirstName(input){
  return input.firstName;
}

console.log(getFirstName(({firstName: 'Colin', lastName: 'Jaffe'})));

//---------------------------------------------------------------

function getLastName(input){
  return input.lastName;
}

console.log(getLastName(({firstName: 'Colin', lastName: 'Jaffe'})));

//---------------------------------------------------------------

function getFullName(input){
  return `${input.firstName} ${input.lastName}`;
}
console.log(getFullName(({firstName: 'Colin', lastName: 'Jaffe'})));

//---------------------------------------------------------------
 function setFirstName(object,input){
    object.firstName = input;
    return object;
 }

 console.log(setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted'));

 //---------------------------------------------------------------

function setAge(object,input){
  object.age = input;
  return object;
}

console.log(setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45));
 //---------------------------------------------------------------

function giveBirthday(object){
  if (object.age === undefined){
    object.age = 1;
  } else {
    object.age +=1;
  }
  return object;
  
}

console.log(giveBirthday({firstName: 'Colin', lastName: 'Jaffe'}));
//  //---------------------------------------------------------------

const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: false};
const person2 = {firstName: 'Petra', lastName: 'Solano', married: false};

function marry (person1,person2){
  person1.married = true;
  person2.married = person1.married;
  person1.spouseName = `${person2.firstName} ${person2.lastName}`
  person2.spouseName = `${person1.firstName} ${person1.lastName}`
}
marry(person1,person2);

console.log(person1);
console.log(person2);

 //---------------------------------------------------------------

 function divorce(person1, person2){
  person1.married = false;
  person2.married = person1.married;
  delete person1.spouseName;
  delete person2.spouseName;
 }
 divorce(person1,person2);
 
 console.log(person1);
 console.log(person2);




















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
