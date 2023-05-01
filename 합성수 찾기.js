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
음 약수가 3개이상인 애들만 찾아서 넣어야함
4 / 1 2 4 임 

*/ 

let n = 10

const solution = (n) => {
    let number = 0;

    for(let i = 1; i <= n; i++) {
        let num = 0;
        for(let j = 0; j <= n; j++) {
            i % j === 0 ? num += 1 : num += 0;
        }
        num > 2 ? number += 1 : number += 0;
    }

    return number
}

console.log(solution(n));

/*
메소드로 푼 사람
function solution(n) {
  return Array(n).fill().map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}

*/