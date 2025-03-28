const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((v) => +v);
}).on('close', function () {
    let [num1, num2] = input;
    console.log(num1,"+",num2,"=", num1+num2);
});