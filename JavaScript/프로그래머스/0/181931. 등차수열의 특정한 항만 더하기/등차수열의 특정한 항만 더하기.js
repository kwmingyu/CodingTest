function solution(a, d, included) {
    let arr =[];
    let element = a;
    let result =0;
    for(let i=0; i<included.length; i++){
        arr.push(element);
        if (included[i] === true) {
            result += element;
        }
        element+=d;
    }
    return result;
}