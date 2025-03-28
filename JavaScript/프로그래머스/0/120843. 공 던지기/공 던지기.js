function solution(numbers, k) {
    let idx = 0;
    for(let i=0; i<k-1; i++){
        idx += 2;
        if(idx === numbers.length){
            idx = 0;
        } else if (idx > numbers.length){
            idx = 1;
        }
    }
    return numbers[idx];
}