/*
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

2	10	2048
7	15	229,376
일단 새로운 배열을 만둘어준다. new Array를 통해서 배열을 만들고 fill을 통해서 정적인 값 하나로 채운다 한마디로 n으로 배열 요소를 다 채워줌 기존엔 undifined로 되어있었음
그 후 reduce로 누산 값에 x2를 해준다 기준은 n을 받아온다.
*/ 
let n = 2; // 세균
let t = 10; // 경과 시간

const solution = (n, t) => {
    return new Array(t).fill(n).reduce(acc => acc * 2, n);
};

console.log(solution(n, t));

// 다른 사람 풀이

// function solution(n, t) {
//     return n << t;
//   }
  