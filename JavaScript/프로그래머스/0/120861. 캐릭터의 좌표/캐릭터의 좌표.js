function solution(keyinput, board) {
    const pos = {
        x: 0,
        y: 0,
    };

    const range = {
        x: (board[0] - 1) / 2,
        y: (board[1] - 1) / 2,
    };

    keyinput.forEach((v) => {
        switch (v) {
            case "left":
                if (pos.x > -range.x) pos.x--;
                break;
            case "right":
                if (pos.x < range.x) pos.x++;
                break;
            case "up":
                if (pos.y < range.y) pos.y++;
                break;
            case "down":
                if (pos.y > -range.y) pos.y--;
                break;
        }
    });

    return [pos.x, pos.y];
}
