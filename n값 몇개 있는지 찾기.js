/**
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 * 즉 -> 배열안에서 해당 값이 몇개 있는지를 찾아서 반환
 * 
 * [1, 1, 2, 3, 4, 5] 1	2
 */

let arr = [1, 1, 2, 3, 4, 5];

function solution(arr, n) {
    return arr.filter(x => x == n).length;
}

console.log(solution(arr, 1));