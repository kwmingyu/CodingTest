function solution(l, r) {
    let result = [];

    for (let i = l; i <= r; i++) {
        let str = i.toString();
        if ([...str].every(ch => ch === '0' || ch === '5')) {
            result.push(i);
        }
    }

    return result.length > 0 ? result : [-1];
}
