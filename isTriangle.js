const inputAngle = document.querySelectorAll('.input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output-box');

function calculateSumOfTriangle(angle1, angle2, angle3) {

    const sumOfTriangle = angle1 + angle2 + angle3;

    var angleOne = inputAngle[0].value;
    var angleTwo = inputAngle[1].value;
    var angleThree = inputAngle[2].value;

    if(angleOne && angleTwo && angleThree){
        if( angleOne > 0 && angleTwo > 0 && angleThree > 0){
            if (sumOfTriangle === 180) {
                output.innerText = "Yay!! Angles form a Triangle";
            }
            else{
                output.innerText = "Oh! Angles don't form a Triangle";
            }
        }
        else{
            output.innerText = "Invalid entry, Angle can not be 0. ";
        }
    }
    else{
        output.innerText = "Please enter all three angles."
    }
}

function isTriangle() {
    const sumOfTriangle = calculateSumOfTriangle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    return sumOfTriangle;
}

isTriangleBtn.addEventListener('click', isTriangle);