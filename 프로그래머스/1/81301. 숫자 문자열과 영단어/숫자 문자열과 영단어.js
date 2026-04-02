function solution(s) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    arr.forEach((v, i) => {
        if (s.includes(v)) {
            s = s.replaceAll(v, i);
        }
    });

    return Number(s);
}