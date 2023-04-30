/*
정수 배열 array가 매개변수로 주어질 때, 
가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

array	        result
[1, 8, 3]	    [8, 1]
[9, 10, 11, 8]	[11, 2]


입출력 예 #1
1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
입출력 예 #2
9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.
*/ 
// let array = [1, 8, 3];
let array = [9, 10, 11, 8];

const solution = (array) => {
    let num = Math.max(...array)
    return [num, array.indexOf(num)]
}
// 이건 똑같이 나왔다 
console.log(solution(array));