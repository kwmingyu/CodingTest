function solution(n, k) {
    let bonus = Math.floor(n/10);
    let answer = n*12000 + (k - bonus)*2000;
    return answer;
}