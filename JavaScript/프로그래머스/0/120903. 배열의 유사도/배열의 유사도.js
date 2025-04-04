function solution(s1, s2) {
    let count=0;
    
    s1.forEach((v) => {
        if (s2.includes(v)){
            count++;
        }
    })
    return count;
}