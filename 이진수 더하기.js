/*
이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 
두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

bin1	bin2	result
"10"	"11"	"101"
"1001"	"1111"	"11000"

입출력 예 #1
10 + 11 = 101 이므로 "101" 을 return합니다.
입출력 예 #2
1001 + 1111 = 11000 이므로 "11000"을 return합니다.

parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
파싱할 값입니다. 문자열이 아닐 경우 ToString 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 공백은 무시합니다.
*/ 
let bin1 = "10";
let bin2 = "11";

const solution = (bin1, bin2) => {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

console.log(solution(bin1, bin2));