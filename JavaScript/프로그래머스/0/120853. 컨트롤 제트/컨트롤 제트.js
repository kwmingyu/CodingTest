function solution(s) {
    let lastIdx=0;
    let sum=0;
    var answer = s.split(" ").map((v,i) => {
        if(v === "Z"){
            sum = parseInt(sum - parseInt(s.split(" ")[lastIdx]));
        } else {
            sum = parseInt(sum + parseInt(v));
            lastIdx = i;
        }
    })
    
    return sum;
}