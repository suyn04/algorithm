// 강의 해설
// function solution(arr) {
//     let answer = arr;
//     let sum = answer.reduce((a, b) => a + b, 0);
//     let flag = 0;
//     for (let i = 0; i < 8; i++) {
//         for (let j = i + 1; j < 9; j++) {
//             if (sum - (answer[i] + answer[j]) == 100) {
//                 answer.splice(j, 1);
//                 answer.splice(i, 1);
//                 flag = 1;
//                 break;
//             }
//         }
//         if (flag == 1) break;
//     }
//     return answer;
// }

// 내가 풀이한 방식
function solution(arr) {
    let sum = arr.reduce((count, v) => count + v, 0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] == sum - 100) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                return arr;
            }
        }
    }
    return arr;
}

arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
