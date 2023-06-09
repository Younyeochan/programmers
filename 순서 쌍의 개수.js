/*
순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
n이 100 이므로 곱이 100인 순서쌍은 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로 9를 return합니다.

20	6
*/ 

let n = 20;

const solution = (n) => {
    let num = [];
//     for(let i=1; i <= n; i++) {
//         for(let j=1; j <= n; j++) {
//             if (i * j == n) {
//                 num.push(i);
//             }
//         }
//     }

//     return num.length;
    for(let i = 1 ; i <= n ; i++) {
        if(n % i === 0) {
            num.push(i);
        };
    };

    return num.length;
}

console.log(solution(n));

// 다른사람 풀이

// return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length