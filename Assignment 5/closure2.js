let a = 10

function OutFunction(c) {
    let b = 20;

    function InnerFunction() {
        let product = a * b * c;
        console.log(`The product of ${a}*${b}*${c} is ${product}`)
    }
    return InnerFunction;
}

let inner = OutFunction(30);
console.dir(inner)
inner();