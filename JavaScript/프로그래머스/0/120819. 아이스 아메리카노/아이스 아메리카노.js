function solution(money) {
    const americano = 5500;
    let answer = [];
    answer.push(Math.floor(money/americano));
    answer.push(money-(answer[0]*americano));
    
    return answer;
}