function solution(arr1, arr2) {
    let result = [];
    let A = arr1.length;
    let B = arr1[0].length;
    let D = arr2[0].length;
    for(let i=0; i<A; i++){
        result.push(new Array(D).fill(0));
    }
    
    for(let i=0; i<A; i++){
        for(let j=0; j<D; j++){
            for(let k=0; k<B; k++){
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result
}