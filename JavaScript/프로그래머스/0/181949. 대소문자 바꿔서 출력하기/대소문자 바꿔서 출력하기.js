const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input="";

rl.on("line", function(line) {
    input=line;
}).on("close", function() {
    let upperArr = input.toUpperCase().split("");
    let inputArr = input.split("");
    for(let i=0; i<upperArr.length; i++){
        if(upperArr[i] === inputArr[i]){
            upperArr.splice(i,1,upperArr[i].toLowerCase());
        }
    };
    console.log(upperArr.join(""));
});