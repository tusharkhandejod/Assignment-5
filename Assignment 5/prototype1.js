console.log("This is prototype 1 example")

console.log("Object is created using object literal")

let empDB = {
    name: "Tushar Khandejod",
    department: "Software engineer",
    birthdate: "24-2-1998",
    age: 23,
    mobile: 9158331575
}

// console.log(empDB)

function myObj(name, department, birthdate, age, mobile) {
    this.name = name,
        this.department = department,
        this.birthdate = birthdate,
        this.age = age,
        this.mobile = mobile
}

myObj.prototype.setName = function(newName) {
    this.name = newName;
}

myObj.prototype.setDepartment = function(newDepartment) {
    this.department = newDepartment;
}


myObj.prototype.getName = function() {
    return this.name;
}

myObj.prototype.getDepartment = function(newDepartment) {
    return this.department;
}

let Obj1 = new myObj("Mrunal Khandejod", "IT training", "8-10-1996", 24, 8862010179)
console.log(Obj1)

let Obj2 = new myObj("Apeksha Deshmukh")
console.log(Obj2)