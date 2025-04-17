function solution(A, B) {
    let arr = A.split("");
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr.join("") === B){
            return count
        }
        count++;
        let temp = arr.pop();
        arr.unshift(temp);
        console.log(arr);
    }
    return -1
}