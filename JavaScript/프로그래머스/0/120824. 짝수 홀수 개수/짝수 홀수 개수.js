function solution(num_list) {
    var answer = [];
    const count = {
        even: 0,
        odd: 0,
    };
    num_list.forEach((e) => {
        if(e % 2 === 0){
            //짝수일때
            count.even++;
        } else {
            count.odd++;
        }
    });
    answer.push(count.even);
    answer.push(count.odd);
    return answer;
}