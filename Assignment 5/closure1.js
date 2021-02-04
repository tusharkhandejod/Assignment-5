//global variables
let number1 = 10;
let number2 = 20;

function outerFunction(number3) {
    //outer function variable
    let number4 = 40;

    function innerFunction() {
        let sum = number1 + number2 + number3 + number4;
        console.log(`The sum of ${number1}+${number2}+${number3}+${number4} is ${sum}`)
    }

    innerFunction();
}

outerFunction(30);