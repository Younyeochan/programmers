/*
머쓱이는 친구들과 369게임을 하고 있습니다. 
369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 
대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때,
머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

order	result
3	    1
29423	2

입출력 예 #1
3은 3이 1개 있으므로 1을 출력합니다.
입출력 예 #2
29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.

배열로 만들고 그안에 filter로 3의 배수 찾아서 랭스 넣음될듯
*/ 

let order = 35154184845;

const solution = (order) => {
    return (order + '').split('').map(Number).filter(a => a !== 0 && a % 3 == 0).length
}

console.log(solution(order));