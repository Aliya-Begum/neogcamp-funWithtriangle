const inputSides = document.querySelectorAll('.input-value');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output');


function calculateSumOfSquares(base, height){
    const sumOfSquares = base*base + height*height;
    return sumOfSquares;
}
function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value) , Number(inputSides[1].value));
    console.log(sumOfSquares);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of Hypotenuse is " +lengthOfHypotenuse;
  
}

calculateBtn.addEventListener('click', calculateHypotenuse);
