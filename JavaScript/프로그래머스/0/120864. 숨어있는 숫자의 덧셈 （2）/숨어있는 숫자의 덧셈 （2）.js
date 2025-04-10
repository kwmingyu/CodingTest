function solution(my_string) {
    let numstr=my_string.match(/\d+/g);
    if (!numstr){
        return 0;
    }
    let sum = 0;
    numstr.forEach((v)=>{
        sum+=parseInt(v);
    })
    return  sum;
}