const inputAngle = document.querySelectorAll('.input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output-box');

function calculateSumOfTriangle() {

    var angle1 = Number(inputAngle[0].value);
    var angle2 = Number(inputAngle[1].value);
    var angle3 = Number(inputAngle[2].value);

    const sumOfTriangle = angle1 + angle2 + angle3;

    if(angle1 && angle2 && angle3){
        if( angle1 > 0 && angle2 > 0 && angle3> 0){
            if (sumOfTriangle === 180) {
                output.innerText = "Yay!! Angles form a Triangle";
            }
            else{
                output.innerText = "Oh! Angles don't form a Triangle";
            }
        }
        else{
            output.innerText = "Invalid entry, Angle can not be less than or equal to 0 ";
        }
    }
    else{
        output.innerText = "Please enter all three angles"
    }
}


isTriangleBtn.addEventListener('click', calculateSumOfTriangle);