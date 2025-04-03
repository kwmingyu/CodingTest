function solution(numbers) {
    const strN = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
    for (let i = 0; i < strN.length; i ++ ) {
        numbers = numbers.split(strN[i]).join(i);
        console.log(numbers);
    }
    
    return Number(numbers);
    
}