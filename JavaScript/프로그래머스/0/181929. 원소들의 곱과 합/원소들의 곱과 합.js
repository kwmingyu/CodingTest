function solution(num_list) {
    let mul = 1;
    let sum=0;
    num_list.forEach((v,i) => {
        sum = sum + v;
        mul = mul * v;
    })
    return mul > sum*sum ? 0 : 1;
}