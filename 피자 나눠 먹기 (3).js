/*
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, 
n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

피자 7 조각 10명이면 부족하니 2개
피자 10 조각 10명이면 딱 맞으니 1개

피자는 무조건 10명마다 1+ 되는데
피자가 사람보다 적으면 + 1


slice	n	result
7	10	2
*/ 

let slice = 7;
let n = 20;
// 조각수가 마음대로야 그럼 고민해봐
// 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.


// const solution = (slice, n) => {
//     let answer = 0;
//     answer = Math.floor( n / slice ) + 1;
//     return answer
// }

const solution = (slice, n) => {
    return Math.ceil(n / slice)
}

console.log(solution(slice, n));