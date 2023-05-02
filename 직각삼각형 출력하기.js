/*
"*"의 높이와 너비를 1이라고 했을 때, 
"*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

3

*
**
***

n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.

  var star = '';
    var num = "";
    
    for (var i = 0; i < n; i++) {
      star += "*";
      num += star + '\n';
    }
    return num

*/ 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    // output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);
    let triangle = '';
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (i === n - 1) flag = false;
        for (let j = 0; j < i + 1; j++) {
            triangle += '*';
        }
        if (flag === false) break;
        triangle += '\n';
    }    
    console.log(triangle);
});

