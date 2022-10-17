const inputSides = document.querySelectorAll('.input-value');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output');


function calculateSumOfSquares(base, height){
    const sumOfSquares = base*base + height*height;
    return sumOfSquares;
}
function calculateHypotenuse(){
    var inputOne = Number(inputSides[0].value);
    var inputTwo = Number(inputSides[1].value);
    if(inputOne && inputTwo){
        if(inputOne > 0 && inputTwo > 0){

            const sumOfSquares = calculateSumOfSquares( inputOne, inputTwo );
            const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        
            output.innerText = "The length of Hypotenuse is " +lengthOfHypotenuse;

        }else{
            output.innerText = "base and height should be greater than zero(0)"
        }
    }else{
        output.innerText = "Please fill out both th fields"
    }
}

calculateBtn.addEventListener('click', calculateHypotenuse);
