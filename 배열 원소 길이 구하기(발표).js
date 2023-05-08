/* 
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/
let strlist = ["We", "are", "the", "world!"];

// map
// function solution(strlist) {
//     let map = strlist.map(x => x.length);
    
//     return map
// }

// reduce

const solution = (strlist) => {
    let result = strlist.reduce((acc, cur) => {
        acc.push(cur.length)
        return acc
    }, []);

    return result;
}

console.log(solution(strlist));