/* 
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 
오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

"hi12392"	[1, 2, 2, 3, 9]
"p2o4i8gj2"	[2, 2, 4, 8]
"abcde0"	[0]
*/ 

// let my_string = "hi12392";
// let my_string = "p2o4i8gj2";
let my_string = "hi12392";

const solution = (my_string) => {
    let str = my_string.split('');

    // return str.map(a => Number(a)).sort((a,b)=>a-b);
    return str.map(a => Number(a)).filter(a => a >= 0).sort((a,b)=>a-b);
}

console.log(solution(my_string));