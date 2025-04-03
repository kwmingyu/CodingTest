function solution(array) {
    let sorted = [...array].sort((a,b)=> b-a);
    var answer = [];
    answer.push(sorted[0]);
    answer.push(array.indexOf(sorted[0]));
    return answer;
}