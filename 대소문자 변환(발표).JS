/*
문자열 my_string이 매개변수로 주어질 때, 
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 
solution 함수를 완성해주세요.

"cccCCC"	"CCCccc"
"abCdEfghIJ"	"ABcDeFGHij"
*/ 

let my_string = "cccCCC"

function solution(my_string){
    let str = ''

	for(const x of my_string){
        // x = 'a';
		if(x === x.toUpperCase()){
    		str += x.toLowerCase();
    	} else str += x.toUpperCase();
    }
    return str;
}

// for of 찾


// 맵으로 해보기
// const solution02 = (my_string) => {
//     // my_string.split('') 바꾸기
//     // return [...my_string].map(x => x === x.toUpperCase()? x.toLowerCase() : x.toUpperCase()).join('');
//     // return [...my_string].map(x => x === x.toUpperCase()?).join('');
// }

console.log(solution(my_string));
