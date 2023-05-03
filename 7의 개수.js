/*
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
정수 배열 array가 매개변수로 주어질 때,
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

array	    result
[7, 77, 17]	4
[10, 29]	0

입출력 예 #1
[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
입출력 예 #2
[10, 29]에는 7이 없으므로 0을 return 합니다.
*/ 

let array = [10, 29, 23, 7, 42, 56, 77, 23, 45];

// 정규식 이용
// const solution = (array) => {
//     let arr = array.map(a => a + '').join('');

//     return arr.match(/7/g) !== null ? arr.match(/7/g).length : 0;
// }

const solution = (array) => {
    // 생각해보면 조인을 사용해서 문자열을 한번에 묶고 스플라이트로 7을 기준으로 나눠버리면 애초에 , 로 랭스가 나뉜다. 그럼 거기서 하나를 빼면 딱 갯수가 된다...
    return array.join('').split('7').length - 1;
}

console.log(solution(array));