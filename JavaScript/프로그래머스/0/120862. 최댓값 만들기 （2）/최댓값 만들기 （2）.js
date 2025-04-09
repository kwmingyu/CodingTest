function solution(numbers) {
    numbers.sort((a,b) => b-a);
    let max1 = numbers[0]*numbers[1];
    let max2 = numbers[numbers.length-1] * numbers[numbers.length-2];
    return Math.max(max1,max2);
}