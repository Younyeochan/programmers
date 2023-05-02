// 10	[1, 3, 5, 7, 9]

function solution(n) {
    let num = [];

    for(let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
           num.push(i)
        }
    }
    return num
}

console.log(solresultution(10));