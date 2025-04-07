function solution(array) {
    let answer = 0;
    array.forEach((v,i) => {
        array[i] = v.toString().split("");
        array[i].forEach((v) => {
            if(v.includes("7")){
                answer++;
         }
        });
    });
    
    return answer;
}