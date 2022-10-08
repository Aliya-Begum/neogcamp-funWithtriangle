const inputSides = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#calculate');
const output = document.querySelector('#area-Of-triangle');


function calculateArea(){
   const sum = Number(inputSides[0].value) + Number(inputSides[1].value) + Number(inputSides[2].value);
   const area = sum/2;
   output.innerText = "Area if Triangle" +area;
}

calculateBtn.addEventListener('click', calculateArea);