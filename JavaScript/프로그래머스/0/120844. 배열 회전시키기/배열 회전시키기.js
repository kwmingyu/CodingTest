function solution(numbers, direction) {
    let temp=0;
    if(direction === "right"){
        temp = numbers.pop();
        numbers.splice(0,0,temp);
    } else {
        temp = numbers.splice(0,1)[0];
        numbers.push(temp);
    }
    return numbers;
}