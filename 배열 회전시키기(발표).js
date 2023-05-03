/* 
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]

numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
*/ 


let numbers = [1, 2, 3];
let direction = "right";

const solution = (numbers, direction) => {
    if(direction === "right") {
        for(let i=1; i<numbers.length; i++) {
            let num = numbers.shift();
            numbers.push(num);
        }
    } else {
        for(let i=1; i<numbers.length; i++) {
            let num = numbers.pop();
            numbers.unshift(num);
        }
    }

    return numbers;
};

/*
     if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
굳이 변수를 선언하지 않아도 됫었음..1

삼항 연산자로 선언해서 할 수 있음..
 
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}
*/ 

console.log(solution(numbers, direction));