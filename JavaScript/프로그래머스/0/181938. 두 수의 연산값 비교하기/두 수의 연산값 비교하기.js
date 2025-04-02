function solution(a, b) {
    let answer1 = parseInt(String(a) + String(b));
    let answer2 = 2*a*b;
    if(answer1 >= answer2 ){
        return answer1;
    } else {
        return answer2;
    }
}