console.log("\nThis is the example of currying using bind")


let num = 5
tableOf(num)


function tableOf(num) {
    let multiply = function(a, b) {
        console.log(a * b);
    }

    let multiplyByOne = multiply.bind(this, 1)
    let multiplyByTwo = multiply.bind(this, 2)
    let multiplyByThree = multiply.bind(this, 3)
    let multiplyByFour = multiply.bind(this, 4)
    let multiplyByFive = multiply.bind(this, 5)
    let multiplyBySix = multiply.bind(this, 6)
    let multiplyBySeven = multiply.bind(this, 7)
    let multiplyByEight = multiply.bind(this, 8)
    let multiplyByNine = multiply.bind(this, 9)
    let multiplyByTen = multiply.bind(this, 10)


    multiplyByOne(num);
    multiplyByTwo(num);
    multiplyByThree(num);
    multiplyByFour(num);
    multiplyByFive(num);
    multiplyBySix(num);
    multiplyBySeven(num);
    multiplyByEight(num);
    multiplyByNine(num);
    multiplyByTen(num);
}