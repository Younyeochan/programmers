/*
문자열 my_string이 매개변수로 주어집니다. 
my_string에서 중복된 문자를 제거하고 
하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

my_string	        result
"people"	        "peol"
"We are the world"	"We arthwold"

입출력 예 설명
입출력 예 #1
"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
입출력 예 #2
"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

공백도 중복으로 봄
*/ 
let my_string = "people";

const solution = (my_string) => {
    let arr = my_string.split('');
    return arr.filter((a, i) => arr.indexOf(a) === i).join('');
}

console.log(solution(my_string));

/*
중복값 제거
나는 인덱스를 활용하여 비교했다. 하지만 set함수를 사용하면 중복값을 쉽게 지울 수 있었다.
new Set 

function solution(my_string) {
    let s = new Set(Array.from(my_string));
    return [...s.values()].join('');
}

function solution(my_string) {
    return [...new Set(my_string.split(''))].join('');
}
*/ 