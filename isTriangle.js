const inputAngle = document.querySelectorAll('.input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output-box');

function calculateSumOfTriangle(angle1, angle2, angle3) {
    const sumOfTriangle = angle1 + angle2 + angle3;
    if(inputAngle[0].value&&inputAngle[1].value&&inputAngle[2].value){
        if (sumOfTriangle === 180) {
            output.innerText = "Yay!! Angles form a Triangle";
        } else {
            output.innerText = "Oh! Angles don't form a Triangle";
        }
        
    }else{
        output.innerText = "Please enter all three angles";
    }
    
}

function isTriangle() {
    const sumOfTriangle = calculateSumOfTriangle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
}

isTriangleBtn.addEventListener('click', isTriangle);