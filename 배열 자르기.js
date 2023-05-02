/*
    정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, 
    numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
    [1, 2, 3, 4, 5]	1	3	[2, 3, 4]
*/

// let numbers = [0, 1, 2, 3, !4, 5, 6, 7, 8, 9, un, un, un ];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// const solution = (numbers, num1, num2) => {
//     // return numbers.slice(num1, num2 + 1);
//     return numbers.slice(num1, num2);
// };

const solution = (numbers, num1, num2) => {
    // return numbers.splice(num1, num2-num1 + 1);
    // console.log(num2-num1+1, ': +더하기');
    return numbers.splice(num1, num2 - num1 +1);

};
/* 
왜 1을 + 하는지 이해가안됨; 
-> 이해 됨 조건이 인덱스에서 인덱스 까지 짜르고 싶은거임
근데 splice는 인덱스가 아님 종료시키고 싶은 앞으로의 숫자가 들어가는거임 그렇다면?
내가 시작한 인덱스는 4라고 쳐 그럼 5번째 칸 후까지 자르고싶다는것
시작인덱스 - 종료 인덱스를 빼면 = 자르고 싶은 인덱스의 앞까지 잘리기에 + 1을 해서 마무리함
*/ 
// 9-4 5+1 6 9까지 나옴
console.log(solution(numbers, 4, 9));