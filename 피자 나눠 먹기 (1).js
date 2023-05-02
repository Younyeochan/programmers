/* 
    머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
    피자를 나눠먹을 사람의 수 n이 주어질 때, 
    모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

    7명이 한판을 먹음 1
    15명은 3판이 필요함

    만약에 15명이라면 피자를 3판을 주어야하는 로직이 필요한것 어떤 숫자가 들어와도 7로 나눳을때 1이 아니면 + 1을 한다?

    다른 사람들의 풀이

    parseInt/ ceil

    parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
    Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.

*/

// 내가 처음 쓴 답
/**
function solution(n) {
    let num = 0;

    for(let i = 1; i <= n; i++) {
        if ( n <= 7 && i % 7) {
            num += 1
            break;
        } else if ( i % 7 == 1 ){
            num += 1
        }
    } 

    return num
}
 */

let n = 7;

function solution(n) {
    return n % 7 === 0 ? n / 7 : parseInt(n/7 + 1);
}



//   return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;

console.log(solution(n));