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
    // acc 누산값 , cur 현재값
    let result = strlist.reduce((acc, cur) => {
        // acc 누산값에 push해주는데 미리 설정한 [] 배열안에 cur 현재값의 length를 넣는다. 그렇다면
        // "we" 의 경우 2 "are"의 경우 3 "world!"의 경우 6으로 원하는 값을 받을 수 있다. 
        acc.push(cur.length)
        return acc
    }, []);

    return result;
}

console.log(solution(strlist));