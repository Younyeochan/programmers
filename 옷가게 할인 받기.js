/*
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

150,000	142,500
580,000	464,000

입출력 예 #1

150,000원에서 5%를 할인한 142,500원을 return 합니다.
입출력 예 #2

580,000원에서 20%를 할인한 464,000원을 return 합니다.

할인 금액 = 정가 x 할인율


// // 싸대기 마려운 코드라고함 다시하자
    // let num = 0;
//     for(let i = 1; i <= price; i++) {
//         if(i % 150000 === 0) {
//             if(i !== 450000) {
//                 num += 5
//             }
//         } else if(i % 500000 === 0) {
//             num += 10
//         }
//     }
스위치
//     return price - (price * (num / 100))
// }
*/

let temp = 841521580000;
// 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인
const solution = (price) => {
    switch(true){
        case price >= 500000 :
            return Math.floor(price * 0.8);
        case price >= 300000 :
            return Math.floor(price * 0.9);
        case price >= 100000 :
            return Math.floor(price * 0.95);
        default :
            return price;
    }
}

console.log(solution(temp));