function solution(n) {
    let village = [0];
    let count = 1;
    let index = 1;
    while(index<=n){
        if((count % 3 === 0) || count.toString().includes("3")){
            count++;
        } else {
            village.push(count);
            count++;
            index++;
        }
    }
    return village[village.length-1];
}