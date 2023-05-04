/*
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

"aAb1B2cC34oOp"	10
*/ 

let my_string = "aAb1B2cC34oOp"

const solution = (my_string) => {
    let str = my_string.split('').map(Number);

    let str1 = str.filter(Boolean)
    // false, 0, -0, 0n, "", null, undefined, NaN를 제거할 수 있다. (거짓같은 값 제거)

    return str1.reduce((acc, cur) => acc + cur);
}

console.log(solution(my_string));

// function solution(my_string) {
//     return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
// }
