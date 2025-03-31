function solution(my_string) {
    var answer = my_string.split("")
    .filter(char => !["a","e","i","o","u"].includes(char))
    .join("");
    return answer;
}