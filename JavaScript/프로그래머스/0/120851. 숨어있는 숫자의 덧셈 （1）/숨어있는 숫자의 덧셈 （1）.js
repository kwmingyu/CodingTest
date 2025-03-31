function solution(my_string) {
    var answer = my_string.split("")
    .filter(v => "1234567890".split("").includes(v))
    .map((v)=> +v)
    .reduce((acc,v) => acc+v)
    return answer;
}