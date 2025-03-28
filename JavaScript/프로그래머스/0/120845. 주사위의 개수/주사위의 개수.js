function solution(box, n) {
    let xMax = Math.floor(box[0]/n);
    let yMax = Math.floor(box[1]/n);
    let zMax = Math.floor(box[2]/n);
    var answer = xMax*yMax*zMax;
    return answer;
}