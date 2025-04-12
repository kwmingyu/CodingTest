function solution(spell, dic) {
    for (let word of dic) {
        let temp = word.split(""); // 배열로 변환해서 "수정 가능"하게 함

        for (let ch of spell) {
            let idx = temp.indexOf(ch);
            if (idx === -1) {
                break; // ch가 없으면 이 단어는 실패
            }
            temp.splice(idx, 1); // 해당 문자 제거 → 원본문자열을 수정하듯!
        }

        // spell의 모든 문자를 제거했고, temp의 길이가 정확히 맞으면 성공
        if (temp.length === word.length - spell.length) {
            return 1;
        }
    }
    return 2;
}
