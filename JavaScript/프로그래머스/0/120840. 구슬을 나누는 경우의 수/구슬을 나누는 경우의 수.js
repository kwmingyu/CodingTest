function solution(balls, share) {
    const fBalls = factorial(balls);
    const fShare = factorial(share);
    const fDiff = factorial(balls - share);
    return Math.round(fBalls / (fShare * fDiff));
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
