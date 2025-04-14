function solution(dots) {
    const getSlopeEqual = (a, b, c, d) => {
        return (b[1] - a[1]) * (d[0] - c[0]) === (d[1] - c[1]) * (b[0] - a[0]);
    }

    const [a, b, c, d] = dots;

    // 가능한 선분쌍 3가지 조합
    if (getSlopeEqual(a, b, c, d)) return 1;
    if (getSlopeEqual(a, c, b, d)) return 1;
    if (getSlopeEqual(a, d, b, c)) return 1;

    return 0;
}
