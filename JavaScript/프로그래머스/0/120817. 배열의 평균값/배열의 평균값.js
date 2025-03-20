function solution(numbers) {
    let answer=0;
    let sum=0;
    numbers.forEach((element) => sum += element);
    answer = sum / numbers.length;
    return answer;
}