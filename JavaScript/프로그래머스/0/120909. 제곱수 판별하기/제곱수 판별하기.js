function solution(n) {
    let answer = 0;
    
    for(let i=1; i<n; i++){
        if (i*i === n){
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    return answer;
}