let price = 2000;
const isLeader = true;

// if(isLeader === true){
//     if(price > 1000) {
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }       
// }
// else {
//     price = price + 100;
// }
// console.log(price)

price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 100;
console.log(price)