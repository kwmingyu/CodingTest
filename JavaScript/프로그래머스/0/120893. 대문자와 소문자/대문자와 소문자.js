function solution(my_string) {
    let input = my_string.split("");
    let upperInput = my_string.toUpperCase().split("");
    for(let i=0; i<upperInput.length; i++){
        if(upperInput[i] === input[i]){
            upperInput.splice(i,1,upperInput[i].toLowerCase());
        }
    }
    return upperInput.join("");
}