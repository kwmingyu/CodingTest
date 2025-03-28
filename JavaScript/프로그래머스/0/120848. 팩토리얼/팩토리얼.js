function solution(n) {
    let fac=0;
    for(let i=1; i<=n; i++){
        if(factorial(i)>n){
            return i-1;
        } else {
            fac = i;
        }
    }
    return fac;
}

function factorial(num){
    if(num===0 || num===1) return 1;
    return num*(factorial(num-1));
}