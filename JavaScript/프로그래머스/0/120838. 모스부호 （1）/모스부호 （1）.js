function solution(letter) {
    let morese = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let str = "abcdefghijklmnopqrstuvwxyz".split("");
    
    let input = letter.split(" ").map((v) => morese.indexOf(v));
    return input.map((v) => str[v]).join("");
}