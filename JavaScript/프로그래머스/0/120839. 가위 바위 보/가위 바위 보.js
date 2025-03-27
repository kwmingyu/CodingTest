function solution(rsp) {
    let answer = rsp.split("")
        .map((v) => {
        if( v === "2"){
            return "0";
        } else if ( v === "0") {
            return "5";
        } else if ( v === "5" ){
            return "2";
        }
    })
    .join("");
    return answer
}