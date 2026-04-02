function solution(s) {
    let answer = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];
        let a = 0;
        let b = 0;

        for (let j = i; j < s.length; j++) {
            if (s[j] === x) {
                a++;
            } else {
                b++;
            }

            if (a === b) {
                answer++;
                i = j + 1;
                break;
            }

            if (j === s.length - 1) {
                answer++;
                i = s.length;
            }
        }
    }

    return answer;
}