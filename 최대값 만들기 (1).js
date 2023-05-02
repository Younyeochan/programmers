/*
정수 배열 numbers가 매개변수로 주어집니다.
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

[1, 2, 3, 4, 5]	20
*/ 


let numbers = [1, 2, 3, 4, 5];
// 생각해보면 가장 큰 값은 마지막 배열 요소중 마지막과 전을 곱하게하면됨 근데 뒤죽박죽일 수 있음 그러니 정렬 후 곱
const solution = (numbers) => {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1]
}

console.log(solution(numbers));