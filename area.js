const inputSides = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#calculate');
const output = document.querySelector('#area-Of-triangle');


function sumOfBaseAndHeight(base, height){
    const sum = base * height;
    return sum;
}
function calculateArea(){
    const sum = sumOfBaseAndHeight(Number(inputSides[0].value) , Number(inputSides[1].value));
    const area = sum/2;
    output.innerText = "Area of the Triangle is " +area;

}

calculateBtn.addEventListener('click', calculateArea);