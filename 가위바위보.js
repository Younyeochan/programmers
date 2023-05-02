/*
가위는 2 바위는 0 보는 5로 표현합니다. 
가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 
문자열을 return하도록 solution 함수를 완성해보세요.


"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.
rsp	   result
"2" 	"0"
"205"	"052"
*/ 


/*
 가위는 2 바위는 0 보는 5

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
*/


let rsp = "205";

const solution = (rsp) => {
    let num = '';

    str = rsp.split("").map(Number);

    for(let i = 0; i < str.length; i++) {
        if(str[i] == 2) {
            num += 0; 
        } else if (str[i] == 0) {
            num += 5; 
        } else if (str[i] == 5) {
            num += 2; 
        }
    }

    return num
}

console.log(solution(rsp));