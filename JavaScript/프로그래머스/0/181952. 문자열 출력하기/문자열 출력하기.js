const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout,
});
let str;
rl.on("line", function(line) {
    str = line;
}).on("close", function() {
    console.log(str);
})