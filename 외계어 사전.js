/*
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 
1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

spell	                dic	                                    result
["p", "o", "s"]	        ["sod", "eocd", "qixm", "adio", "soo"]	2
["z", "d", "x"]	        ["def", "dww", "dzx", "loveaw"]	        1
["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	2

입출력 예 #1
"p", "o", "s" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2를 return합니다.
입출력 예 #2
"z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 dic에 존재합니다. 따라서 1을 return합니다.
입출력 예 #3
"s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2을 return합니다.
*/ 


// let spell = ["p", "o", "s"];
// let dic = ["sod", "eocd", "qixm", "adio", "soo"];

// let spell = ["z", "d", "x"];
// let dic = ["def", "dww", "dzx", "loveaw"];

let spell = ["s", "o", "m", "d"];
let dic = ["moos", "dzx", "smm", "sunmmo", "som"];	

// function solution(spell, dic) {
//     // dic.filter를 이용하여 배열의 every의 값을 담는다. 하지만 빈값이 담길 경우 1이 반환되는 문제 발생
//     // 그래서 length 빈값인지 확인한 후 비었을때 2 하나라도 있을 경우 1 every를 사용하면 전부 트루 일때는 트루를 반환한다 includes는 트루와 펄스를 반환하니깐 전부 트루가 나오면 해당 1 아니면 2
//     // return dic.filter(a => spell.every(el=> a.includes(el))).length ? 1 : 2;
//     // every의 경우 전부 트루일 경우에만 트루를 반환하기 때문에 내가 확인한 방법은 dic를 필터로 조건을 걸어서 a라는 요소를 순환하며 조건으로 spell의 every를 사용하여 받아온 a라는 값을 el과 비교하여 트루일 경우
//     //  트루를 반환하게한다. 그렇게해서 하나라도 값이 있을 경우엔 1 아니면 2
//     return dic.filter(a => spell.every(el=> a.includes(el))).length ? 1 : 2;
// }

const solution = (spell, dic) => {
    return dic.some(a => spell.sort() + '' == [...a].sort() + '') ? 1 : 2;
}

console.log(solution(spell, dic));