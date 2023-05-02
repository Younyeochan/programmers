let my_string = "jaron";
// split는 문자열을 가지고 배열을 만들어낼 수 있다.

// function solution(my_string) {
//     let str = [];
//     str = my_string.split('');
//     str = str.reverse();
//     str = str.join('');
    
//     return str
// }

const solution = (my_string) => {
    return my_string.split('').reverse().join('');
}

console.log(solution(my_string));