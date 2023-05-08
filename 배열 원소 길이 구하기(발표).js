/* 
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/
let strlist = ["We", "are", "the", "world!"];

// map
// const solution = (strlist) => {
//     return strlist.map(x => x.length);
// }

// reduce
const solution = (strlist) => {
    let result = strlist.reduce((acc, cur) => {
        acc.push(cur.length)
        return acc
        // console.log(cur);
        // return acc 
},[]);
// 초기값을 설정해주지 않았기 때문에 인덱스가 1부터 시작
    return result;
}

console.log(solution(strlist));
