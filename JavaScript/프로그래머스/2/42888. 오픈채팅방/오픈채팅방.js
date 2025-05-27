function solution(record) {
    let obj={};
    let cmd = record.map((v) => v.split(" "));
    let chatlog=[];
    
    cmd.forEach((v) => {

        switch(v[0]){
            case "Enter":
                obj[v[1]]=v[2];
                chatlog.push(`Enter ${v[1]}`);
                break;
            case "Leave":
                chatlog.push(`Leave ${v[1]}`);
                break;
            case "Change":
                obj[v[1]] = v[2];
                break;
        }
    })

    let chat =[];
    chatlog.forEach((v) =>{
        let msg = v.split(" ");
        switch(msg[0]){
            case "Enter":
                chat.push(`${obj[msg[1]]}님이 들어왔습니다.`);
                break;
            case "Leave":
                chat.push(`${obj[msg[1]]}님이 나갔습니다.`);
                break;
        }
    })
    return chat;
}