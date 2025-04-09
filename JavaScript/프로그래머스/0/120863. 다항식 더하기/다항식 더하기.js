function solution(polynomial) {
    let xArr = [];
    let sum = 0;
    let xsum =0;
    let result="";
    
    console.log(polynomial.split(" + "));
    polynomial.split(" + ").forEach((v) => {
        if(v.includes("x")){
            xArr.push(v.split("x").join(""));
        } else {
            sum+=parseInt(v);
        }
    })
    xArr.forEach((v) => {
        if(v.length !== 0){
            xsum += parseInt(v);
        } else {
            xsum += 1;
        }
    })
     // 결과 조합
    if (xsum !== 0) {
        result += (xsum === 1) ? "x" : `${xsum}x`;
    }
    if (sum !== 0) {
        if (result) 
            result += " + ";
        result += sum;
    }
    return result
}