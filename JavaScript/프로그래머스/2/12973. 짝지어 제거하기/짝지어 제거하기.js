function solution(s)
{
    let stack = [];
    for(const c of s){
        if(stack.length==0 || stack[stack.length-1] !== c){
            stack.push(c);
        } else {
            stack.pop();
        }
    }
    if(stack.length){
        return 0
    } else {
        return 1
    }
}