function solution(hp) {
    let ant5 = Math.floor(hp/5);
    let ant3 = Math.floor((hp - 5*ant5)/3);
    let ant1 = Math.floor((hp -5*ant5 - 3*ant3) / 1);
    return ant5+ant3+ant1
}