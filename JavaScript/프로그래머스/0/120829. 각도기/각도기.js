function solution(angle) {
    let answer;
    if(angle < 90 ){
        return answer=1;
    } else if (angle === 90) {
        return answer=2;
    } else if (angle > 90){ 
        if (angle === 180){
            return answer = 4;
        }
        return answer=3;
    }
}