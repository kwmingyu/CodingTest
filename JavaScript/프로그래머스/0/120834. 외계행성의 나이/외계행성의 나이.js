function solution(age) {
    let ageArr = String(age).split("");
    let answer=[];
    for(let i=0; i<ageArr.length; i++){
        switch(ageArr[i]){
            case "0":
                answer.push("a");
                break;
            case "1":
                answer.push("b");
                break;
            case "2":
                answer.push("c");
                break;
            case "3":
                answer.push("d");
                break;
            case "4":
                answer.push("e");
                break;
            case "5":
                answer.push("f");
                break;
            case "6":
                answer.push("g");
                break;
            case "7":
                answer.push("h");
                break;
            case "8":
                answer.push("i");
                break;
            case "9":
                answer.push("j");
                break;
        }
    }
    return answer.join("");

}