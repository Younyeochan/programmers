/*
문자열 str1, str2가 매개변수로 주어집니다. 
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

"ab6CDE443fgh22iJKlmn1o"	"6CD"	1
*/ 

let str1 = "ab6CDE443fgh22iJKlmn1o";
let str2 = "6CD";
// 처음엔 indexOf를 사용했다 근데 그건 인덱스를 찾는거라 오류가 나옴 그래서 includes를 사용해서 문자열에 문자가있는지를 확인하고 통과함
const solution = (str1, str2) => {
   return str1.includes(str2)? 1 : 2;
}

console.log(solution(str1, str2));