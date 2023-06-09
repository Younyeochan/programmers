/*
정수 num과 k가 매개변수로 주어질 때, 
num을 이루는 숫자 중에 k가 있으면 
num의 그 숫자가 있는 자리 수를 return하고 없으면 
-1을 return 하도록 solution 함수를 완성해보세요.

num	    k	result
29183	1	3
232443	4	4
123456	7	-1

입출력 예 #1
29183에서 1은 3번째에 있습니다.
입출력 예 #2
232443에서 4는 4번째에 처음 등장합니다.
입출력 예 #3
123456에 7은 없으므로 -1을 return 합니다.

어차피 인덱스에 없으면 -1을 반환함

*/ 
let num = 29183;
let k = 9;

// const solution = (num, k) => {
//     let arr = (num + '').split('').map(Number);

//     return arr.indexOf(k) + 1
// }

const solution = (num, k) => {
    let arr = (num + '').split('').map(Number);
    let number = 1;

    if(arr.indexOf(k) == -1) {
        return arr.indexOf(k)
    } else {
        number += arr.indexOf(k)
        return number
    }
}

/*
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}
*/ 



console.log(solution(num, k));