const inputSides = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#calculate');
const output = document.querySelector('#area-Of-triangle');


function sumOfBaseAndHeight(base, height){
    const sum = base * height;
    return sum;
}
function calculateArea(){
    var base = Number(inputSides[0].value);
    var height = Number(inputSides[1].value)
    if(base && height){
        if(base > 0 && height > 0){
            const sum = sumOfBaseAndHeight(base , height);
    const area = sum/2;
    output.innerText = "Area of the Triangle is " +area;
        }else{
            output.innerText = "base and height should be greater 0."
        
        }
    }else{
            output.innerText = "Please fill out both the fields."
    }
    

}

calculateBtn.addEventListener('click', calculateArea);