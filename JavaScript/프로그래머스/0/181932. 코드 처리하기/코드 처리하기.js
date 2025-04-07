function solution(code) {
    let codeArr = code.split("");
    let mode = false;
    let answer =[];
    const EMPTY = "EMPTY";
    for(let i=0; i<codeArr.length; i++){
        if(codeArr[i] === "1"){
            mode = !mode;
        } else if ( mode === false) {
           if(i%2 === 0){
               answer.push(codeArr[i]);
           }
        } else if ( mode === true) {
            if(i%2 !== 0){
               answer.push(codeArr[i]);
           }
        }
    }
    answer = answer.join("")
    if(answer === ""){
        return EMPTY;
    }
    return answer;
}