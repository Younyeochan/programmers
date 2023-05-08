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

let spell = ["z", "d", "x"];
let dic = ["def", "dww", "dzx", "loveaw"];

// let spell = ["s", "o", "m", "d"];
// let dic = ["moos", "dzx", "smm", "sunmmo", "som"];	

// function solution(spell, dic) {
//     return dic.filter(a => spell.every(el=> a.includes(el))).length ? 1 : 2;
// }

// 조인 tostring
const solution = (spell, dic) => {
    // return dic.some(a => spell.sort().toString() == [...a].sort() + '') ? 1 : 2;
    return dic.some(a => spell.sort().join('') == [...a].sort().join('')) ? 1 : 2;
}

console.log(solution(spell, dic));