
/*
    머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
    상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
    상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

    box	        n	result
    [1, 1, 1]	1	1
    [10, 8, 6]	3	12

    입출력 예 #1
    상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 주사위는 1개 들어갈 수 있습니다.
    입출력 예 #2
    상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 주사위는 12개 들어갈 수 있습니다.
*/ 

let box = [10, 8 ,6];
let n = 3;

const solution = (box, n) => {
   return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
}

console.log(solution(box, n));


/*
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}

reduce를 사용해서 acc누산, v현재를 파라미터로 받고 누산값에 현재값과 정육면체의 길이를 나눈 값을 곱한다. 초기값은 1로 설정한다.
*/ 