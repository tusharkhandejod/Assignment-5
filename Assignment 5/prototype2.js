console.log("This is prototype 2 example")

let player1 = {
    name: "Virat Kohli",
    age: 33,
    gootAt: "Batting, fielding",
    role: "Batsman"
}

console.log(player1)


function myObj(name, age, goodAt, role) {
    this.name = name;
    this.age = age;
    this.goodAt = goodAt;
    this.role = role;
}

myObj.prototype.setName = function(newName) {
    this.name = newName
}

myObj.prototype.getName = function() {
    return this.age;
}
myObj.prototype.setAge = function(newAge) {
    this.age = newAge;
}

myObj.prototype.getAge = function() {
    return this.age;
}

myObj.prototype.setgoodAt = function(newgoodAt) {
    this.goodAt = newgoodAt
}

myObj.prototype.getgoodAt = function() {
    return this.goodAt;
}

myObj.prototype.setRole = function(newrole) {
    this.role = newrole;
}

myObj.prototype.getRole = function() {
    return this.role;
}

let player2 = new myObj("M.S.Dhoni", 40, "Batting, keeping", "Captain");
console.log(player2)

let player3 = new myObj()
console.log(player3)