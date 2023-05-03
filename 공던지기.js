/*
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

numbers	            k	    result
[1, 2, 3, 4]	    2	    3
[1, 2, 3, 4, 5, 6]	5	    3
[1, 2, 3]	        3	    2

입출력 예 #1
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 1번에게 공을 던집니다.
입출력 예 #2
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 5번에게 공을 던집니다.
5번은 세 번째로 1번에게 공을 던집니다.
1번은 네 번째로 3번에게 공을 던집니다.
3번은 다섯 번째로 5번에게 공을 던집니다.
입출력 예 #3
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 2번에게 공을 던집니다.
2번은 세 번째로 1번에게 공을 던집니다.
let str = 0;
    let num = 0;

    if (numbers.indexOf(k) !== numbers[numbers.length - 1]) {
        str = (numbers.indexOf(k) - numbers.indexOf(numbers.length -1));
        num = numbers.lastIndexOf(Math.abs(str));
    } else if (numbers.indexOf(k) == numbers.indexOf(numbers.length - 2) && numbers.indexOf(k) == numbersnumbers.indexOf(numbers.length -1)) {
        str = (numbers.indexOf(k) - numbers.indexOf(numbers.length -1));
        num = numbers.lastIndexOf(Math.abs(str));
    }
    return numbers[num];

    20/ 22 거절뜸

    let num = 0;
    
    for(let i = 0; i < k; i++){
        num += 2;    
        if(num > numbers.length){
            num -= numbers.length;
        }
    }
    
    return numbers[num - 2];
*/ 

let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 1 ;

const solution = (numbers, k) => {
    // k에 일단 -1을 한다 그럼 2가 되는데 2 * 2 4와 배열의 랭스3 나눠준다. 그럼 2/3 나머짓값이 1이된다. 그럼 1을 반환
    // return numbers[(--k * 2) % numbers.length];
    // return numbers[(--k * 2) % numbers.length];

    /*
        애초에 k가 던진놈이 아님 그래서 -1로 던진놈으로 만듬 그 후에 한사람씩 건너뛰니깐 x2를하고 배열 크그로 나눈 index가 답 배열의 길이가 넘으면 나눠서 나머지값으로 다음위치할 인덱스가 나옴
    */ 
    let num = 0;
    
    for(let i = 0; i < k; i++){
        num += 2;    
        if(num > numbers.length){
            num -= numbers.length;
        }
    }
    
    return numbers[num - 2];
}

console.log(solution(numbers, k));