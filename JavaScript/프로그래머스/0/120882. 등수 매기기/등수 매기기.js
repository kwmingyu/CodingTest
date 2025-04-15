function solution(score) {
    // 평균 점수 구하기
    const avg = score.map(([eng, math]) => (eng + math) / 2);
    
    // 평균 점수 내림차순 정렬 (등수용)
    const sorted = [...avg].sort((a, b) => b - a);
    console.log(sorted)
    // 등수 매기기
    return avg.map(v => sorted.indexOf(v) + 1);
}
