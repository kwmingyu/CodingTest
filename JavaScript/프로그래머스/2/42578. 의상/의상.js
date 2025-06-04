
function solution(clothes) {
    let category ={};
    for(const c of clothes){
        if(!category[c[1]]) category[c[1]] =[];
        category[c[1]].push(c[0]);
    }
    let answer =1;
    for (const type in category){
        answer = answer * (category[type].length +1);
    }
    return answer -1;
}