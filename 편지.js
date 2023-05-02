/*
머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 
할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 
편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 
최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

message는 2라는 숫자를 가지고있다.
메세지를 배열로만들고 해당 배열의 갯수 length에 x 2를 하면 가로길이가 나옴

"happy birthday!"	30
"I love you~"	22
*/ 

let message = "happy birthday!";

const solution = (message) => {
    return message.split('').length * 2;
};


console.log(solution(message));