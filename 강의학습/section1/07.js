// 10부제

// 기본 답변
// function solution(day, arr) {
//     let answer = 0;
//     for (let x of arr) {
//         if (x % 10 == day) answer++;
//     }

//     return answer;
// }

// 답변 2
// filter 함수 이용
// function solution(day, arr) {
//     return arr.filter((v) => v % 10 === day).length;
// }

// 답변 3
// reduce 사용 (보통 배열 합 구할 때 사용)
function solution(day, arr) {
    return arr.reduce((count, v) => {
        return v % 10 === day ? count + 1 : count;
    }, 0);
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr2 = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(3, arr));
console.log(solution(0, arr2));
