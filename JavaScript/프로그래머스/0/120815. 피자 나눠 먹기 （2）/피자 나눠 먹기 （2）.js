function solution(n) {
    const getGcd = (a,b) => (a%b==0 ? b : getGcd(b,a%b));
    const getLcm = (a,b) => ((a*b) / getGcd(a,b));
    
    answer = getLcm(n,6) / 6;
    
    return answer;
}