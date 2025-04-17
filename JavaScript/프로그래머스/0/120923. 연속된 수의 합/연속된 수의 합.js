function solution(n, total) {
    let sum = (n * (n - 1)) / 2;
    let start = (total - sum) / n;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(start + i);
    }

    return result;
}
