  const { template } = require('@babel/core')



function calculateBMI(weight, height) {
 return weight/((height) ** 2) ;
}

function getBMIMeaning(weight, height) {
 let BMI = weight/((height) ** 2)
 
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

  module.exports = getBMIMeaning
