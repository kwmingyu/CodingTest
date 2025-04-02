function solution(array, n) {
    let absArr=[];
    array.sort((a,b)=>a-b);
    array.forEach((v) => absArr.push(Math.abs(v-n)));
    return array[absArr.indexOf(Math.min(...absArr))];
}