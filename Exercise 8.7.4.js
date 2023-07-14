// Задание 8.7.4

let person = {
  name: 'Jogn'
}

function setFullName(name) {
  this.fullName = name;
}

let setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith")

console.log(person)