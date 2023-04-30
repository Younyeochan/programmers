/*
정수 n이 매개변수로 주어질 때, 
n의 약수를 오름차순으로 담은 배열을 return하도록 
solution 함수를 완성해주세요.

n	result
24	[1, 2, 3, 4, 6, 8, 12, 24]
29	[1, 29]

입출력 예 #1
24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
입출력 예 #2
29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.
*/ 
let n = 24

const solution = (n) => {
    let arr = [];

    for (let i=1; i <= n; i++) {
        arr.push(i)
    }

    return arr.filter(a => n % a == 0);

}

console.log(solution(n));

/* 
다른 사람 풀이
그냥 바로 인덱스에 더해서 배열만듬 나랑은 다른 접근

function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
*/