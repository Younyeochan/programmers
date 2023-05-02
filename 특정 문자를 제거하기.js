/*
 my_string과 문자 letter이 매개변수로 주어집니다. 
 my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

 "abcdef"	"f"	"abcde"
*/

let my_string = "abcdef"
let letter = 'f';

const solution = (my_string, letter) => {
    return my_string.split('').filter(x => x !== letter).join('');
}

const solution02 = (my_string, letter) => {
    return my_string.split(letter).join()
}

/*
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
*/
console.log(solution(my_string, letter));
console.log(solution02(my_string, letter));