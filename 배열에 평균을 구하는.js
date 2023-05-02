// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function solution(numbers) {
//     let num = 0;
//     let result = numbers.reduce((acc, cur) => acc + cur, num)

//     return result / numbers.length
// }

function solution(numbers) {
    let num = 0;
    let result = numbers.reduce((acc, cur) => acc + cur, num).length
    
    return result
}

console.log(solution(numbers));