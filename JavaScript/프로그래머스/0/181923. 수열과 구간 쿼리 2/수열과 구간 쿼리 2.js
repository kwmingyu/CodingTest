function solution(arr, queries) {
    let result=[];
    queries.forEach(([s,e,k]) => {
        let temp = arr.slice(s,e+1).filter(v=> v>k);
        if(temp.length === 0){
            result.push(-1);
        } else {
            result.push(Math.min(...temp));
        }
    })
    return result;
}