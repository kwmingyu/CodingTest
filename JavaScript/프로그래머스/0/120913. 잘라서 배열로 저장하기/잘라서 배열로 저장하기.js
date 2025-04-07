function solution(my_str, n) {
    let strArr = my_str.split("");
    let answer =[];
    for(let i=0; i<my_str.length/n; i++){
        answer.push(strArr.splice(0,n).join(""));
    }
    return answer;
}