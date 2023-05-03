/*
문자열 before와 after가 매개변수로 주어질 때, 
before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

before	after	result
"olleh"	"hello"	1
"allpe"	"apple"	0

입출력 예 #1
"olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.
입출력 예 #2
"allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.
*/ 

let before = "olleholleholleholleholleholleh"
let after = "hellohellohellohellohellohello"

/*
내가 푼 방법이 똑같았다.
일단 처음엔 before를 리버스 했는데 그게 안되길래 걍 순서를 똑같이 만들면되지않을까해서했다.
*/ 

const solution = (before, after) => {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

console.log(solution(before, after));