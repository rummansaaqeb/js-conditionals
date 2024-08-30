// Weight In KG and Height in meters.
let weight = 85; 
let height = 1.7;
let bmi = (weight) / (height * height);
console.log(bmi)

if(bmi < 18.5){
    console.log("You Are Underweight")
    
}
else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log("You Are Normal")
    }
    if(bmi >= 25 && bmi <= 29.9){
        console.log("You Are Overweight")
    }
    if(bmi >= 30 && bmi <= 1000){
        console.log("You Are Obese")
    }
}
