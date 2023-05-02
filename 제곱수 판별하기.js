let n = 144;
// let n = 976;

// sqrt 제곱근 반환/ isInteger 정수인지 아닌지?

const solution = (n) => {
  let num = Math.sqrt(n);
  return  Number.isInteger(num)? 1 : 2;
}
console.log(solution(n));