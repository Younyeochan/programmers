/*
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

reduce랑 filter로 가능함 다시 풀것

[1, 2, 3, 4, 5]	[2, 3]
*/ 
// let num_list = [1,2,3,4,5]

// function solution(num_list) {    
//     let num01 = [];
//     let num02 = [];

//     num_list.forEach(element => {
//         if(element % 2 == 0) {
//             num01.push(element);
//         } else {
//             num02.push(element);
//         }
//     });
    
//     return [num01.length, num02.length];
// }

// console.log(solution(num_list));

// let num = [1,2,3,4,5]


// function solution(num) {  
//     let num01 = [];
//     let num02 = [];ㅓ
//     result = num.reduce((acc, cur) => {
//         acc.push(cur % 2 ? num01.push(cur) : num02.push(cur));
//         return acc;
//     }, []);

//     return [num01.length, num02.length]
// }


// console.log(solution(num));


//  filter

// let num = [1,2,3,4,5];

// function solution(num) {
//     return [num.filter(e => e % 2 ==0).length, num.filter(e => e % 2 == 1).length]
// }

// console.log(solution(num));

// reduce
// let num = [1,2,3,4,5];

// function solution(list) {
//     // let num01 = [];
//     // for(let i=0; i <= list; i++) {
//     //     if(i & 1) {
//     //         num01.push(i)
//     //     }
//     // }

//     // return num

//     return list.reduce((acc, cur) => (cur % 2 ? acc[1]++ : acc[0]++, acc), [0, 0])
// }

// console.log(solution(num));

let num_list = [1,2,3,4,5];

function soliution(num_list) {
    return num_list.reduce((acc, cur) => (cur % 2 ? acc[1]++ : acc[0]++, acc), [0, 0])
};

console.log(soliution(num_list));


/*
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
인덱스를 활용한 다른 사람 풀이
*/