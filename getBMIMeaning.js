//. const { template } = require('@babel/core')

 //let weight=75;
 //let height=172;

function calculateBMI(weight, height) {
 return weight/((height / 100) ** 2) ;
}

function getBMIMeaning(weight, height) {
let BMI = weight/((height / 100) ** 2)

  if ( BMI<18.5){
    console.log(BMI)
    return("Normal weight")
    
    
  } else if (BMI>=18.5) {
    console.log(BMI)
    return("Overweight");

  } else  (BMI>=25.0 )
  console.log(BMI)
  return("Underweight");
}

  


  

console.log(calculateBMI(60,170));
console.log(getBMIMeaning(60,170))
module.exports = getBMIMeaning
