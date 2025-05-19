function solution(board, moves) {
    let stack=[];
    let count = 0;
    for(const i of moves){
        for(let j=0; j<board.length; j++){
            if(board[j][i-1] !== 0){
                if(stack.length > 0 && stack[stack.length-1] === board[j][i-1]){
                    stack.pop();
                    count +=2;
                }
                else {
                    stack.push(board[j][i-1]);
                }
                board[j][i-1] = 0;
                break;
            }
        }
    }
    return count;
}