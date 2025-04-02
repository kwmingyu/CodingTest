function solution(str1, str2) {
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");
    let result="";
    for (let i=0; i<str1.length; i++){
        result = result + str1Arr[i];
        result = result + str2Arr[i];
    }
    return result;
}