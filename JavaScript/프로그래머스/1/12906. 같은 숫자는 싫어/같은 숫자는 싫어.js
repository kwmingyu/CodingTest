function solution(arr)
{
    let stack =[];
    let answer =[];
    for(let i=arr.length-1; i>=0; i--){
        if(stack.length > 0 && stack[stack.length-1] === arr[i]){
            continue;
        }
        stack.push(arr[i]);
    }
    while(stack.length !== 0 ){
        answer.push(stack.pop());
    }
    return answer;
}