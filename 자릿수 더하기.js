/*
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 
합을 return하도록 solution 함수를 완성해주세요

정수 1234가 들어왔어 그럼 그 친구들을 

1234	10
930211	16
*/ 

// map / 빼고 reudce 
const n = 1234;

// const solution = (n) => {
//     let num = String(n).split('').map(Number);
//     return num.reduce((acc, cur) => acc + cur);
// };

const solution = (n) => {
    return String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur));
};

console.log(solution(n));