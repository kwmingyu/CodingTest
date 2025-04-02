function solution(cipher, code) {
    let answer=[];
    answer = cipher.split("");
    answer.unshift(" ");
    let result =""
    for(i=1; i<answer.length; i++){
        if(i%code === 0){
        result = result + answer[i];
    }
    }
    console.log(answer);
    return result


}