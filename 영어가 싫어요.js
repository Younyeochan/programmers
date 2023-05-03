/*
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, 
numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

numbers	                                result
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"	                14067

입출력 예 #1
"onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
입출력 예 #1
"onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.
*/ 

let numbers = "onetwothreefourfivesixseveneightnine";

const solution = (numbers) => {
    let str = numbers
                .replace(/zero/g, 0)
                .replace(/one/g, 1)
                .replace(/two/g, 2)
                .replace(/three/g, 3)
                .replace(/four/g, 4)
                .replace(/five/g, 5)
                .replace(/six/g, 6)
                .replace(/seven/g, 7)
                .replace(/eight/g, 8)
                .replace(/nine/g, 9)
                .replace(/ten/g, 10)
    return Number(str)
}

console.log(solution(numbers));

/*
객체를 사용하고 한번에 할 수 있는 방법

function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}
*/ 