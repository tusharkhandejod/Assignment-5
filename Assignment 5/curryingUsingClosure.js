let num = 10;


const tableOf = (num) => {
    let multiply = function(x) {
        return function(y) {
            console.log(x * y)
        }
    }


    let multiplyByOne = multiply(1)
    let multiplyByTwo = multiply(2)
    let multiplyByThree = multiply(3)
    let multiplyByFour = multiply(4)
    let multiplyByFive = multiply(5)
    let multiplyBySix = multiply(6)
    let multiplyBySeven = multiply(7)
    let multiplyByEight = multiply(8)
    let multiplyByNine = multiply(9)
    let multiplyByTen = multiply(10)

    multiplyByOne(num)
    multiplyByTwo(num)
    multiplyByThree(num)
    multiplyByFour(num)
    multiplyByFive(num)
    multiplyBySix(num)
    multiplyBySeven(num)
    multiplyByEight(num)
    multiplyByNine(num)
    multiplyByTen(num)
}

tableOf(num);