function solution(array, height) {
    var answer = 0;
    array.forEach((v) => {
        if(v > height) {
            answer++;
        }
    })
    return answer;
}