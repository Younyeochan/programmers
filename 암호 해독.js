/*
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 
문자열을 return하도록 solution 함수를 완성해주세요.


"dfjardstddetckdaccccdegk"	4	"attack"
"pfqallllabwaoclk"	2	"fallback"

"dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 "attack"을 return합니다.
*/ 

let cipher = "pfqallllabwaoclk";
let code = 2;
// let cipher = "dfjardstddetckdaccccdegk";
// let code = 4;

const solution = (cipher, code) => {
    str = [];
    cipher.split('').filter((x, index) => {(index + 1) % code == 0? str.push(x) : ''});
    return str.join('')
}

console.log(solution(cipher, code));