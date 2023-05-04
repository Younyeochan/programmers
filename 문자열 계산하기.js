/*
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
문자열 my_string이 매개변수로 주어질 때, 
수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

my_string	result
"3 + 4"	    7

입출력 예 #1
3 + 4 = 7을 return 합니다.
*/ 

let my_string = "3 + 5";
// eval도 있었지만 쓰지말라는 말이 많았음

const solution = (my_string) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function 생성자 함수로 바로 계산 때려버리기
    return Function(`return ${my_string}`)()
};

console.log(solution(my_string));