function solution(num_list) {
    let odd=[];
    let even=[];
    num_list.forEach((v) => {
        v%2 === 0 ? even.push(v.toString()) : odd.push(v.toString());
    });
    var answer = parseInt(even.join("")) + parseInt(odd.join(""));
    return answer;
}