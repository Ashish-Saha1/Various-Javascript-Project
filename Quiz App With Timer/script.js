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
    
let nextQueButton = document.querySelector('.next-btn');

let remainingTime;
let scoreCount = 0;

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
   
    nextQueButton.disabled = true;

     timer.innerHTML = 6;
     remainingTime = setInterval(timerFunction, 1000)
    
    // setInterval(() => {
        
    //     if(timer.innerText > 0){
    //       timer.innerText --;
          
    //     }else{
    //         nextQueButton.disabled = false;     
    //         clearInterval()
    //     }
    // }, 1000);
    
    
    
     


//    for(let i of crossMarks){
//     i.style.display = 'none'
//    }
//    checkMark.style.display = 'none'
//    correctAns.style.borderColor = 'red'


let indexCount = 0;
questionDynamic(indexCount)

nextQueButton.addEventListener('click', function(){
   if(indexCount<questionsArr.length-1){
        indexCount ++
        questionDynamic(indexCount);
        nextQueButton.disabled = true;
        timer.innerHTML = 6;
        remainingTime = setInterval(timerFunction, 1000)
   }else{
    console.log('closed')
    if(questionsArr.length === questionsArr[questionsArr.length-1].num){
        questionPage1Button.style.display = 'none';
       let resultPage = document.querySelector('.result-page');
       let totalScore = document.querySelector('.score-calculation');
       resultPage.style.display = 'block';
        totalScore.innerHTML =  scoreCount;
    }
    console.log(questionsArr[questionsArr.length-1].num)
   }


})


})


function questionDynamic(index){
               
    let question = document.querySelector('.question-page-1_question');
    let questionHeadElement = '<h2>' + questionsArr[index].num + ". "+  questionsArr[index].question + '</h2>';
        
    question.innerHTML = questionHeadElement;
    
    let questionUl = document.createElement('ul');
         question.append(questionUl);
                //create Li & input options in li innerHTML
        for(let i = 0; i< questionsArr[index].ansOptions.length; i++){
            let questionUlLi = document.createElement('li');
            questionUl.append(questionUlLi);
            questionUlLi.innerHTML = questionsArr[index].ansOptions[i]
        }

        let pageNo = document.querySelector('.page1-of-5');
        pageNo.innerHTML = questionsArr[index].num + " of " + questionsArr.length +" Questions";
   
        //let optionsLi = question.getElementsByTagName('li');
        let optionsLi = question.querySelectorAll('question-page-1_question ul');
console.log(optionsLi)
        for(let x of optionsLi){
            x.addEventListener('click',(e)=>{
                console.log(e.target)
            })
        }
    //    for(let i of optionsLi){
    //        i.addEventListener('click',(e)=>{
    //             if(e.target.innerHTML === questionsArr[index].ans){
    //                 let iconCorrect = document.createElement('i');
    //                 iconCorrect.setAttribute('class', 'fa-solid fa-check ')
    //                 e.target.appendChild(iconCorrect)
    //                 e.target.classList.add('correct-ans');
    //                 clearInterval(remainingTime);
    //                 nextQueButton.disabled = false;
    //                 e.target.setAttribute('class', 'disabled-item')
    //                 scoreCount++
    //                 console.log(i)
    //             }
    //             // else if(timer.innerHTML === 0){
    //             //     console.log(e.target);
                    
    //             // }
    //             else{
    //                 let iconCross = document.createElement('i');
    //                 iconCross.setAttribute('class', 'fa-solid fa-xmark')
    //                 e.target.appendChild(iconCross)
    //                 e.target.style.color = 'red';
    //                 clearInterval(remainingTime);
    //                 nextQueButton.disabled = false;
    //                 e.target.setAttribute('class', 'disabled-item')
                   
    //             }

                
                
                
                
    //        })

    //        //console.log(i.setAttribute('class', 'disabled-item'));
    //         // setTimeout(() => {
    //         //     i.setAttribute('class', 'disabled-item')
    //         // }, 6000);

    //        let optionsDisable = setTimeout(setTimeoutFunctio, 6000, i)
            
    //    }
}



const timerFunction = ()=>{ 

         if(timer.innerText > 0){
            timer.innerText --;
            
          }else{
              nextQueButton.disabled = false; 
            
          }

}

        function setTimeoutFunctio(item){
                item.setAttribute('class', 'disabled-item')
            }
