// Задание 8.7.3

let users = [
  {name: 'Bob', age: 25},
  {name: 'Joe', age: 10},
  {name: 'Dan', age: 101}
]

let adults = users.filter(function(user) {
  if (user.age >= 18) {
    return true
  } else {
    return false
  }
})

let names = users.map(user => user.name)

console.log(adults)
console.log(names)