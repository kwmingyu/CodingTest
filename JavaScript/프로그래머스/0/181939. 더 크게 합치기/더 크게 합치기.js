function solution(a, b) {
    let answer1 = String(a) + String(b);
    let answer2 = String(b) + String(a);
    if(parseInt(answer1) >= parseInt(answer2)){
        return parseInt(answer1);
    } else {
        return parseInt(answer2);
    }
}