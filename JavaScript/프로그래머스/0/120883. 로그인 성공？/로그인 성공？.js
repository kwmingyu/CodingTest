function solution(id_pw, db) {
    for(let value of db){
        if(value[0] === id_pw[0]){
            if(value[1] === id_pw[1]){
                return "login";
            }
            return "wrong pw";
        } 
    }
    return "fail";
}