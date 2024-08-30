/**
 * TERNARY --> Three Parts
 * 
 *   ?  :
 * 
 * condition ? do something when true : do something when false
 */
const age = 112;

// Normal If Else

// if(age >=18){
//     console.log("you can vote")
// }
// else{
//     console.log("ghumay thako")
// }


// Simple Ternary

// age >= 18 ? console.log('vote dio') : console.log('ghumay thako')


let price = 500;
const isLeader = false;

if (isLeader == true) {
    price = 0;
}
else {
    price = price + 100;
}
console.log(price)

price = isLeader === true ? 0 : price + 100;
console.log(price)


// OPTIONAL: semi-advanced

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}
// console.log(price)


// Feel free to ignore this part
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
console.log(price)