function solution(num_list) {
    console.log(num_list[num_list.length-1]-num_list[num_list.length-2]);
    if (num_list[num_list.length-1] > num_list[num_list.length-2]){
        num_list.push((num_list[num_list.length-1] - num_list[num_list.length-2]));
    } else{
        num_list.push((num_list[num_list.length-1] * 2));
    }
    return num_list;
}