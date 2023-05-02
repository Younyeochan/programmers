// filter
/* 
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
"bus"
"nice to meet you"
*/

let my_string = "nice to meet you"

const solution = (my_string) => {
    let noStr = [ 'a', 'e', 'i', 'o', 'u' ]
    let str = my_string.split('');
    return str.filter(x => !noStr.includes(x)).join('')
}

console.log(solution(my_string));


// function solution(my_string) {
//     return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
// }