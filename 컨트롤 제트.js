/*
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
문자열에 있는 숫자를 차례대로 더하려고 합니다. 
이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 
숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 
머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

s	            result
"1 2 Z 3"	    4
"10 20 30 40"	100
"10 Z 20 Z 1"	1
"10 Z 20 Z"	    0
"-1 -2 -3 Z"	-3

입출력 예 #1
본문과 동일합니다.
입출력 예 #2
10 + 20 + 30 + 40 = 100을 return 합니다.
입출력 예 #3
"10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.
*/ 

// function solution(s) {
//     let arr = s.split(' ')
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 'Z'){
//             if(arr[i - 1]){
//                 arr.splice(i - 1, 2);
//                 i -= 2;
//             }
//             else{
//                 arr.splice(i, 1)
//                 i--; 
//             }
//         }
//     }
//     return arr.reduce((a, b) => a * 1 + b * 1, 0);
// }

// 스택처럼 관리
let s = "1 2 Z 3";

const solution = (s) => {
    let arr = [];

    s.split(' ').forEach(el => {
        if(el == 'Z') {
            arr.pop(el);
        } else {
            arr.push(+el)
        }
    });

    return arr.reduce((arr, cur) => arr + cur, 0)
}

console.log(solution(s));