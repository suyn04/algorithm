function solution(str1, str2) {
    var answer = '';
    
    const max = Math.max(str1.length, str2.length);

    for (let i = 0; i < max; i++) {
        if (str1[i]) answer += str1[i];
        if (str2[i]) answer += str2[i];
    }
    
    return answer;
}