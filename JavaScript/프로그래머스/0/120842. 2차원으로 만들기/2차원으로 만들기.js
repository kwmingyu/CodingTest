function solution(num_list, n) {
    var answer=[];
    const arrSize = num_list.length;
    for(let i=0; i<arrSize/n; i++){
        answer.push(num_list.splice(0,n));
    }
    return answer;
}