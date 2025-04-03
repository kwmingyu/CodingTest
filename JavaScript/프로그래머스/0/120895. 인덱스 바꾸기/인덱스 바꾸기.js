function solution(my_string, num1, num2) {
    let arr = my_string.split("");
    let temp = arr[num1];
    arr.splice(num1,1,arr[num2]);
    arr.splice(num2,1,temp);
    return arr.join("")
}