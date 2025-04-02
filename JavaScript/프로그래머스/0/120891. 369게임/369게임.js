function solution(order) {
    let count=0;
    String(order).split("").forEach((v)=> {
        if ([3,6,9].includes(parseInt(v))){
                count++
            }
    });
    return count
} 