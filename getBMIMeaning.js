//. const { template } = require('@babel/core')

// let weight=75;
// let height=172;

function calculateBMI(weight, height) {
 return weight/((height / 100) ** 2) ;
}

function getBMIMeaning(weight, height) {
switch (calculateBMI){
    case 1 : calculateBMI < 18.5
    console.log("Normal weight");
    break;

    case 2 : calculateBMI >= 18.5
    console.log("Overweight");
    break;

    case 3 : calculateBMI > 20.5
    console.log("Underweight");
    break;



}
}

console.log(calculateBMI(70,170));
module.exports = getBMIMeaning
