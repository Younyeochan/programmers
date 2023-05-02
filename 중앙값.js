let array = [1, 7, 2, 10, 11]

function solution(array) {
    let arrm
    arrm = array.sort((a, b) => a - b);

    let mid = Math.floor(arrm.length / 2);
    
    return arrm[mid];
};

console.log(solution(array));