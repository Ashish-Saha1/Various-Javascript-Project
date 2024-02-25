let startQuizButton = document.querySelector('.start-btn');
let exitQuizButton = document.querySelector('.exit-btn');
let continueButton = document.querySelector('.continue-btn');


let startPage = document.querySelector('.my-Quiz-app');
let rulePage = document.querySelector('.rule-box');
let questionPage1Button = document.querySelector('.question-page-1');


let timer = document.querySelector('.timer')

let crossMarks = document.querySelectorAll('.fa-xmark')
let checkMark = document.querySelector('.fa-check');
let correctAns = document.querySelector('.correct-ans')
    
console.log(crossMarks)

startQuizButton.addEventListener('click',function(){
    startPage.style.display = "none";
    rulePage.style.display = "block";
})


exitQuizButton.addEventListener('click', function(){
    startPage.style.display = "block";
    rulePage.style.display = "none";
})


continueButton.addEventListener('click', ()=>{
    rulePage.style.display = "none";
    questionPage1Button.style.display = 'block';
   
    // timer.innerText = 15
    setInterval(() => {
        if(timer.innerText > 0){
          timer.innerText --;
        }else{
            clearInterval()
        }
    }, 600);
    

   for(let i of crossMarks){
    i.style.display = 'none'
   }
   checkMark.style.display = 'none'
//    correctAns.style.borderColor = 'red'
    
})


