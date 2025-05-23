function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === p1[i % p1.length]) scores[0]++;
        if (answers[i] === p2[i % p2.length]) scores[1]++;
        if (answers[i] === p3[i % p3.length]) scores[2]++;
    }

    const maxScore = Math.max(...scores);
    const result = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) result.push(i + 1); // 사람 번호는 1번부터니까 +1
    }

    return result;
}
