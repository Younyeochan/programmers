/*
정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

array	        n	result
[3, 10, 28]	    20	28
[10, 11, 12]	13	12

입출력 예 #1
3, 10, 28 중 20과 가장 가까운 수는 28입니다.
입출력 예 #2
10, 11, 12 중 13과 가장 가까운 수는 12입니다.
*/ 

/*
    array.push(n);
    let num = array.indexOf(n);
    let arr01 = array.sort((a,b) => a-b).slice(num - 1, num);
    let arr02 = array.sort((a,b) => a-b).slice(num, num + 1);
    return Math.abs(arr01 - n) > Math.abs(arr02 - n) ? Number(arr02) : Number(arr01)
    제출 결과 틀리다고 나옴

    array.push(n);
    let arr = array;
    arr.sort((a,b) => a - b);

    let num = arr.indexOf(n);

    let arr01 = arr.splice(num + 1, 1);
    let arr02 = arr.splice(num - 1, 1);
    let str01 = arr01 == '' ? 0 : arr01
    let str02 = arr02 == '' ? 0 : arr02

    return str01 == 0 ? 0 : str01 - n < str02 == 0 ? 0 : str02 - n ? Number(arr02) : Number(arr01)
    제출 결과 틀림
*/ 

/*
정렬해서 가장 첫번째를
function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return array[0];
}
*/ 

let array =	[3, 10, 28];
let n = 20;

const solution = (array, n) => {
    array.sort((a, b) => a - b);
    let a = 0;
    let b = 0;
    let answer = [];

    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n - array[i]))
        a = Math.min(...answer);
        b = answer.indexOf(a)
    } 

    return array[b]
}

console.log(solution(array, n));