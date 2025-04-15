function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let temp = word;
        for (let sound of canSpeak) {
            temp = temp.replace(sound, " "); // 일단 발음 제거
        }
        // 발음 모두 제거한 후 빈 문자열이면 가능
        if (temp.trim() === "") {
            // 중복 발음이 있었는지 확인
            let used = new Set();
            let valid = true;
            for (let sound of canSpeak) {
                if (word.includes(sound)) {
                    if (used.has(sound)) {
                        valid = false;
                        break;
                    }
                    used.add(sound);
                }
            }
            if (valid) count++;
        }
    }

    return count;
}
