function solution(numlist, n) {
    return numlist.map(x => [x, Math.abs(x - n)])
       .sort((a, b) => {
           if (a[1] === b[1]) 
               return b[0] - a[0]; // 거리 같으면 더 큰 수 우선
           return a[1] - b[1]; // 거리 기준 정렬
       })
       .map(x => x[0]);
}