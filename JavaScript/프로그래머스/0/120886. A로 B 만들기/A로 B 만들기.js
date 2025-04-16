function solution(before, after) {
    let answer=[];
    let tmpBefore = before.split("");
    let tmpAfter = after.split("");
    for(let i=0; i<after.length; i++){
        let char = tmpBefore.splice(tmpBefore.indexOf(tmpAfter[i]),1);
        answer.push(char);
    }
    if (answer.join("") === after){
        return 1
    } 
    return 0;
}