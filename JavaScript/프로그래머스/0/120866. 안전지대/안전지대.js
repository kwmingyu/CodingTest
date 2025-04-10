function solution(board) {
    const n = board.length;
    const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                for (let k = 0; k < 9; k++) {
                    const ni = i + dx[k];
                    const nj = j + dy[k];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        if (board[ni][nj] === 0) {
                            board[ni][nj] = 2;
                        }
                    }
                }
            }
        }
    }
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) safeCount++;
        }
    }

    return safeCount;
}
