const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  printStart(n);
});

function printStart(number) {
  let star = "*";
  for (let i = 0; i < number; i++) {
    console.log(star);
    star += "*";
  }
}
