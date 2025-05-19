function solution(s){
    let stack = [];
    
    for (const c of s){
        if(c === ")"){
           if (stack.length === 0){
               return false;
           } else {
               stack.pop();
           } 
            
        } else {
         stack.push(c);   
        }
    }
    
    if (stack.length !== 0 ){
        return false;
    }
    return true;
}