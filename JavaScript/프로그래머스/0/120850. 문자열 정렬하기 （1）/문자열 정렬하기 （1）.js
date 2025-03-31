function solution(my_string) {
    var answer = my_string.split("")
    .filter(c => "1234567890".split("").includes(c))
    .map((v)=>+v)
    .sort((a,b) => a-b);
    return answer;
}