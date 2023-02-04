console.log('this is project for multiplication table');
// generating two numbers for multiplication
let no1 = Math.random();
no1 = Math.ceil(no1*10);

let no2 = Math.random();
no2 = Math.ceil(no2*10);

// grabbintg the h1
let question = document.getElementById('question');
question.innerText = `what is ${no1} multiply by ${no2} ?`

// correct answer
const correctAnswer = no1 * no2;

// making a score variable
 let score = 0;
 score = JSON.parse(localStorage.getItem('points'));

 if(!score){
    score = 0
 }

//  grABBING THE SCOre tag
let scoreTag = document.getElementById('score');
scoreTag.innerText = `score: ${score}`;


 

// grabbing form
let form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    // e.preventDefault();
    let input = document.getElementById('input');
    let userAnswer = parseInt(input.value);
    if(correctAnswer === userAnswer){
        score++
        updateLocalStorage();
    }else{
        score--
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem('points', JSON.stringify(score) );
}



