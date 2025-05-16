function solution(s) {
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(isValid(s)){
            count++;
        }
        s = rotateLeft(s);
    }
    return count;
}
function isValid(s){
    let stack =[];
    for(const c of s){
        if(c === "(" || c === "["  || c === "{"){
            stack.push(c);
        } else {
            if(stack.length === 0 ){
                return false;
            }
            const last = stack.pop();
            if (
                c === ")" && last !== "(" ||
                c === "}" && last !== "{" ||
                c === "]" && last !== "[" 
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
function rotateLeft(s){
    return s.slice(1) + s.charAt(0);
}