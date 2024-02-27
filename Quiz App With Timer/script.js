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
    
let nextQueButton = document.querySelector('.next-btn')

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
    }, 1000);
    

//    for(let i of crossMarks){
//     i.style.display = 'none'
//    }
//    checkMark.style.display = 'none'
//    correctAns.style.borderColor = 'red'
questionDynamic(0)
})


function questionDynamic(index){
    let question = document.querySelector('.question-page-1_question');
    let questionHeadElement = document.createElement("h2")
    questionHeadElement.innerHTML = questionsArr[index].question;
   
    question.append(questionHeadElement)
    //'<h2>' +  questionsArr[index].question + '</h2>'
    
     let questionUl = document.createElement('ul');
 
         question.append(questionUl);
  

        for(let i = 0; i< questionsArr[index].ansOptions.length; i++){
        
            let questionUlLi = document.createElement('li');
            questionUl.append(questionUlLi);
            questionUlLi.innerHTML = questionsArr[index].ansOptions[i]

        }

        




}



nextQueButton.addEventListener('click', function(){
    console.log('A');
    


})