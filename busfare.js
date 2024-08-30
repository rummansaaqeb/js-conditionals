const age = 12;
const price = 800;
const student = false;

if(age <= 10){
    console.log("You get to ride for free")
}
else if(student == true){
    // Discount 50%
    discount = 800 * 50 / 100;
    payAmount = price - discount
    console.log(payAmount)
}
else if(age >= 60){
    // Discount 15%
    discount = price * 15 / 100;
    payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}