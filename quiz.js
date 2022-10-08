const quizForm = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

const correctAnwers = ["90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°"];

function calculateScore(){
    let score =0;
    let index =0;

    const userAnswers = new FormData(quizForm);
    for(let value of userAnswers.values()){
        if(value === correctAnwers[index]){
            score = score + 1;
        }
        index = index +1;
        
    }
    output.innerText = "your score is " +score;
}

submitBtn.addEventListener('click', calculateScore);