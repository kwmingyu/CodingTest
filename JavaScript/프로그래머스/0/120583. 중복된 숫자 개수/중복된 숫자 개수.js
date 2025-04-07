function solution(array, n) {
    var answer = 0;
    array.forEach((v) => {
        if (v === n ){
            answer++;
        }
    })
    return answer;
}