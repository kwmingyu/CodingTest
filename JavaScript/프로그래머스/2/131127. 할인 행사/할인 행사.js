function solution(want, number, discount) {
    let count=0;
    let wantObj={};
    for(let i=0; i<want.length; i++){
        wantObj[want[i]] = number[i];
    }
    let obj = {};
    let start = 0;
    let end = 9;
    
    for(let i=start; i<=end; i++){
        obj[discount[i]] = (obj[discount[i]] || 0) + 1;
    }
    
    while(end<discount.length){
        let valid = true;
        for(const w in wantObj){
            if((obj[w] || 0) < wantObj[w] ){
                valid = false;
                break;
            }
        }
        if(valid) count++;
        
        obj[discount[start]] -=1;
        if (obj[discount[start]] === 0) delete obj[discount[start]];
        start++;
        end++;
        if(end<discount.length){
            obj[discount[end]] = (obj[discount[end]] || 0) + 1;
        }
    }

    return count;
}