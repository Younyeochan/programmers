/*
두 배열이 얼마나 유사한지 확인해보려고 합니다. 
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

배열을 합치고 ? 어떻게 그냥 합치고 -> 필터로 안에 중복 제거 중복제거 방법 / 인덱스로 같은 인덱스가 아닌애 출력

["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
*/ 

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];

const solution = (s1, s2) => {
    let arr = s1.concat(s2);
    return arr.filter((x, y) => arr.indexOf(x) !== y);
}

console.log(solution(s1, s2));