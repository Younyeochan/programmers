/*
정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

[4, 5, 6, 7, 8, 9, 10, 11, 12]	[6, 9, 12]
[1, 9, 3, 10, 13, 5]	[10, 5]
[2, 100, 120, 600, 12, 12]	[120, 600, 12, 12]

입출력 예 #1
numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
입출력 예 #2
numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
입출력 예 #3
numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.
*/ 

let numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12];
let n = 3;

const solution = (n, numlist) => {
    // 쓸때없는 map을 돌렸다...
    // 생각해보니 이미 numlist가 배열이기 때문에 배열을 그대로 필터로 원하는 값만 뽑으면 됫었음..
    // return numlist.map(a => a % n == 0 ? a : '' ).filter(a => a !== '');
    return numlist.filter(a => a % n == 0);
};


console.log(solution(n, numlist));