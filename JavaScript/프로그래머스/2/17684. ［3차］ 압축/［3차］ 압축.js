function solution(msg) {   
    //let dic ="ABCDEFGHIJKLMNOPQRSTUVWXUZ".split("");
    //일단 w에 대한다는 사전의 색인번호를 출력한다 -> 근데 지금 배열의 형식을 이용하면
    //indexOf 를 써야하는데 시간복잡도증가 -> 키-값 관계(해시)로 사전을관리
    let dic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let dicObj ={};
    let answer=[];
    dic.forEach((w,i) =>{
        dicObj[w]=i+1;
    })
    let endNum=Object.keys(dicObj).length+1;
    //현재 입력 w를 확인하고 
    let i=0;
    while(i<msg.length){
        let w = msg[i];
        let j = i+1;
        while(j <= msg.length && dicObj[msg.slice(i,j)]){
            w = msg.slice(i,j);
            j++;
        }
        answer.push(dicObj[w]);
        if(j<=msg.length){
            dicObj[msg.slice(i,j)] = endNum++;
        }
        i += w.length;
    }

    return answer;
}