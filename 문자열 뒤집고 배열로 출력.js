let my_string = ["j ar on", 'ㅇ', 'ㄴㄴ'];
// split는 문자열을 가지고 배열을 만들어낼 수 있다.

// function solution(my_string) {
//     let str = [];
//     str = my_string.split('');
//     str = str.reverse();
//     str = str.join('');
    
//     return str
// }

const solution = (my_string) => [...my_string].reverse().join('');

console.log(solution(my_string));

let arr = ['a', 'b', 'c'];

const solution2 = (arr) => arr.reverse();
// 원본 

console.log(solution2(arr));
console.log(arr);
console.log(my_string)