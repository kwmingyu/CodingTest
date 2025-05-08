function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let n1 =0;
        let n2 =0;
        stages.forEach((n)=>{
            if(n == i){
                n1++;
                n2++;
            } else if (n > i){
                n2++;
            }
        });
        result.push(n1/n2);
    }
    let indexArr = result.map((v,i) => ({i,v}));
    indexArr.sort((a,b) => b.v - a.v);
    let resultStage = indexArr.map((v) => v.i+1);
    return resultStage
}