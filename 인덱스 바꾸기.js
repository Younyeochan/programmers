/*
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 
return 하도록 solution 함수를 완성해보세요.

"hello"	1	2	"hlelo"
"I love you"	3	6	"I l veoyou"

입출력 예 #1
"hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.

입출력 예 #2
"I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.
*/ 

let my_string = "I love you";
let num1 = 3;
let num2 = 6;


const solution = (my_string, num1, num2) => {
    let str = my_string.split('');

    // (시작인덱스, 종료 인덱스)
    /*
        배열메소드가 아닌 string 문자열을 잘라낸거임
        String.prototype.slice()
        slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
    */   
    // let str01 = [...my_string].slice(num1, num1 + 1);
    // let str02 = [...my_string].slice(num2, num2 + 1);
    let str01 = my_string.slice(num1, num1 + 1);
    let str02 = my_string.slice(num2, num2 + 1);

    str.splice(num2, 1, str01);
    str.splice(num1, 1, str02);

    console.log(typeof str01);

    return str.join('')
};
// 너무 하드 코딩임 제대로 사용할 수 있도록... 해야함


console.log(solution(my_string, num1, num2));