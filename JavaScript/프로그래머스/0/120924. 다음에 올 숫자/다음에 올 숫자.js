function solution(common) {
    let diff = common[1] - common[0];
    let ratio = common[1] / common[0];

    if (common[2] - common[1] === diff) {
        // 등차수열
        return common[common.length - 1] + diff;
    } else {
        // 등비수열
        return common[common.length - 1] * ratio;
    }
}
