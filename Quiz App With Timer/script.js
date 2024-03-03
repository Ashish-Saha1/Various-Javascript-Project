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
let indexCount = 0;
let scoreCount = 0;
let conuterLine;
let widthValue = 0;

startQuizButton.addEventListener('click',function(){
    startPage.style.display = "none";
    rulePage.style.display = "block";
})


exitQuizButton.addEventListener('click', function(){
    startPage.style.display = "block";
    rulePage.style.display = "none";
})


continueButton.addEventListener('click', ()=>{
    // let xxx = setInterval(lineAnimation, 10);
    rulePage.style.display = "none";
    questionPage1Button.style.display = 'block';
    nextQueButton.disabled = true;
    timer.innerHTML = 10;
    remainingTime = setInterval(timerFunction, 1000)
        //call below function to load dynamic question
    questionDynamic(indexCount);

    lineAnimation(0)
    
})



nextQueButton.addEventListener('click', function(){
    //here declear clearIntrval To reset timer after clicking nextBtn 
    clearInterval(remainingTime);
    
   let idd = setInterval(lineAnimation,10);
     
   clearInterval(conuterLine);
   lineAnimation(widthValue)
    

    let totalScore = document.querySelector('.score-calculation');
    let wishDisplay = document.querySelector('.display-wish');
        // After click next Que indexCount increse & load next question & timer will start as well (remainingTime)
   if(indexCount<questionsArr.length-1){
        indexCount ++
        questionDynamic(indexCount);
        nextQueButton.disabled = true;
        timer.innerHTML = 10;
        remainingTime = setInterval(timerFunction, 1000)
   }else{
            //if all question end then load result page as per below condition
        if(questionsArr.length === questionsArr[questionsArr.length-1].num){
        questionPage1Button.style.display = 'none';
        let resultPage = document.querySelector('.result-page');
        resultPage.style.display = 'block';
        totalScore.innerHTML =  scoreCount;
            // Message will appear as per full or zero score
        if(totalScore.innerHTML == questionsArr.length){
            wishDisplay.innerHTML = "Congratulations"
        }else if(totalScore.innerHTML == 0){
            wishDisplay.innerHTML = "Disaster"
        }
    }
       
   }


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
   

        //This below code should be seperated in new function
    // let optionsLi = question.getElementsByTagName('ul');

    // for(let i of optionsLi){
    //   i.addEventListener('click',(e)=>{
    //     if(e.target.innerHTML === questionsArr[index].ans){
    //         selectOptions(e,'fa-solid fa-check', 'correct-ans')
    //         scoreCount++
    //         setTimeoutFunction(i)
    //     }else{
    //         selectOptions(e,'fa-solid fa-xmark', 'wrong-ans')
    //         setTimeoutFunction(i)
    //     }
            
    //     })

    //     let optionsDisable = setTimeout(setTimeoutFunction, 10000, i)
          
    //    }


    answerSelect(question, indexCount)
}

            //This function is for to select answer then how is the change
 function answerSelect(question, index){
    let optionsLi = question.getElementsByTagName('ul');

    for(let i of optionsLi){
      i.addEventListener('click',(e)=>{
        if(e.target.innerHTML === questionsArr[index].ans){
            selectOptions(e,'fa-solid fa-check', 'correct-ans')
            scoreCount++
            setTimeoutFunction(i)
        }else{
            selectOptions(e,'fa-solid fa-xmark', 'wrong-ans')
            setTimeoutFunction(i)
        }
            
        })

        let optionsDisable = setTimeout(setTimeoutFunction, 10000, i)
          
       }
 }



const timerFunction = ()=>{ 
    if( timer.innerHTML > 0){
         timer.innerHTML --;          
    }else{
        nextQueButton.disabled = false;          
     }
}

function setTimeoutFunction(item){
    item.setAttribute('class', 'disabled-item')  
 }


 function selectOptions(event, attributeName, cssClassName){
    let iconCreate = document.createElement('i');
    iconCreate.setAttribute("class", attributeName)
    event.target.appendChild(iconCreate)
    event.target.classList.add(cssClassName);
    clearInterval(remainingTime);
    nextQueButton.disabled = false;


 }

 

 function lineAnimation(time){
    let lineDiv = document.querySelector('.line-animation');
   
    conuterLine = setInterval(timeLine);

    function timeLine(){
        time++;
        lineDiv.style.width = time + "px";
        if(time < 319){
            clearInterval(conuterLine)
        }
    }
   
 }