const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('Supartro/patri')
// }
// else{
//     console.log("onno patro khuji")
// }

if(salary > 25000 || height > 72){
    console.log("esho baba kobul")
}
else{
    console.log("bhak tui mokbul")
}



// More and More Condition
// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log("esho baba kobul")
// }
// else{
//     console.log("bhak tui mokbul")
// }


if(salary > 25000 && height > 72 && isBCS == true){
    console.log("esho baba kobul")
}
else{
    console.log("bhak tui mokbul")
}


// COMPLEX CONDITION
if( (salary > 25000 && hasCar == true) || isBCS == true ){
    console.log("tomar 14 gushti raaji")
}

if( (salary > 25000 || hasCar == true) && isBCS == true ){
    console.log("tomar 14 gushti raaji")
}