/*
문자열 s가 매개변수로 주어집니다. 
s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을
return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

s	        result
"abcabcadc"	"d"
"abdc"	    "abcd"
"hello"	    "eho"

입출력 예 #1
"abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.
입출력 예 #2
"abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.
입출력 예 #3
"hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.

*/ 
let s = "abcabcadc";

const solution = (s) => {
    let arr = [];
    s.split('').forEach(el => {
        s.indexOf(el) == s.lastIndexOf(el) ? arr.push(el) : '';
    });

    return arr.sort().join('');
}

console.log(solution(s));