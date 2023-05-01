/*
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 
num_list를 2 * 4 배열로 다음과 같이 변경합니다. 
2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.


num_list	                n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]

num_list	                        n	result
[1, 2, 3, 4, 5, 6, 7, 8]	        2	[[1, 2], [3, 4], [5, 6], [7, 8]]
[100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]

입출력 예 #1
num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다.
입출력 예 #2
num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.
*/ 

let num_list = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 2

const solution = (num_list, n) => {
    let arr = [];
    // while 문을 이용해서 랭스만큼 참이 될때 까지 돌림
    while(num_list.length) {
        arr.push(num_list.splice(0, n));
    }

    return arr
}

console.log(solution(num_list, n));

/*
function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}

메소드로 이렇게해야하는데..
*/ 