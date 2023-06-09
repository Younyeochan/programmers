/*
문자열 my_str과 n이 매개변수로 주어질 때,
my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

my_str	            n	result
"abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
"abcdef123"	        3	["abc", "def", "123"]

입출력 예 #1
"abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
입출력 예 #2
"abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.
*/ 

let my_str = "abc1Addfggg4556b"
let n = 6

// const solution = (my_str, n) => {
//     const arr = [];
  
//     for (let i = 0; i < my_str.length; i += n) {
//         arr.push(my_str.substring(i, i + n));
//     }
//     return arr;
// }

const solution = (my_str, n) => {
    let arr = [];

    for(let i=0; i < my_str.length; i += n) {
        arr.push(my_str.slice(i, i+n));
    }

    return arr
}

console.log(solution(my_str, n));



/*
보니깐 정규식으로 푼사람도있었음

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
*/ 