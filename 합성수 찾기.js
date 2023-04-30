/*
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 
개수를 return하도록 solution 함수를 완성해주세요.

n	result
10	5
15	8

입출력 예 #1
10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
입출력 예 #1
15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

약수 갯수가 3개 이상?은 뭔소리지
음

*/ 

let n = 10

const solution = (n) => {
    let arr = Array(n).fill(1).map((v,i) => i + 1)

    return arr.filter((a, i) => i % a === 0)
}

console.log(solution(n));