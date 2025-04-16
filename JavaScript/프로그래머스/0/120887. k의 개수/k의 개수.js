function solution(i, j, k) {
    let count =0;
    for(let start=i; start<=j; start++){
        let tmp = start.toString().split("");
        tmp.forEach((v) => {
            if(parseInt(v) === k){
                count++;
            }
        })
    }
    return count
}