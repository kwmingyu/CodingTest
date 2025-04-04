function solution(n, numlist) {
    let newNumlist = numlist.filter(v => v%n===0);
    return newNumlist;
}