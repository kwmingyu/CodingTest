function solution(s) {
    let arr = Array(26).fill(0);
    let arr2 = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringArr = s.split("");
    let answer = "";
    stringArr.forEach((v)=>{
        arr[arr2.indexOf(v)] += 1;
    })
    arr.forEach((v,i) => {
        if(v === 1){
            answer += arr2[i];
        }
    })
    answer.split("").sort((a,b)=> a+b).join("");
    return answer;
}