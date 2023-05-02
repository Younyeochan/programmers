/*
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
정수 i, j, k가 매개변수로 주어질 때, 
i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0

입출력 예 #1
본문과 동일합니다.
입출력 예 #2
10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
입출력 예 #3
3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.


*/ 

// 이건 나오는데..
// let i = 1;
// let j = 13;
// let k = 1;
// 이게 안됨 수정 필요 	3, 10, 2
let i = 3;
let j = 10;
let k = 2;

// 생각해보면 그렇다 랭스만큼 쭉뽑아내는 거니깐 3부터 나오더라도 10개가 뽑힌다 그래서 -i를 하고 +1을해서 배열 갯수를 맞춘다.
const solution = (i, j, k) => {
   return [...Array(j - i + 1).fill(0).map((a, index) => (i + index).toString()).join('')].filter(a => a == k).length;
}

console.log(solution(i, j, k));