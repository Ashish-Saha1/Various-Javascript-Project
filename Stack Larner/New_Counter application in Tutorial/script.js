
//Global Variable

let counter = 0;

window.onload = function(){
    main()
}

 function main(){
   let resultShow = document.querySelector('.result-show');
   let incrementInput = document.getElementById('increment-input');
   let decrementInput = document.getElementById('decrement-input');
   let incrementBtn = document.querySelector('.increment-btn');
   let decrementBtn = document.querySelector('.decrement-btn');
       

    display(resultShow)

    incrementBtn.addEventListener('click', function(){
         let increment = parseInt(incrementInput.value);
        if(isNaN(increment) === false){
            counter += increment;
            display(resultShow) 
        }
        else{
            incrementInput.value = 1;
        }
       
        console.log(isNaN(increment) )
        
    })



    decrementBtn.addEventListener('click', function(){
        let decrement = parseInt(decrementInput.value);
        if(isNaN(decrement) === false){
            counter -= decrement;
            display(resultShow)
        }
        else{
            decrementInput.value = 1;
        }
         
       
    })


    incrementInput.addEventListener('keyup', handleInputLimit)

    decrementInput.addEventListener('keyup', handleInputLimit)

    
 }




 function display(resultShow){
     let finaleResult = counter;
        
        if(counter < 0){
            counter = 0
        }
        if(counter < 10){           
            finaleResult = `0${counter}`          
        }
        resultShow.innerText = finaleResult;
    }

 
    function handleInputLimit(event){
        if(event.target.value > 100){
             event.target.value = 100;
        }

        if(event.target.value < 0){
            event.target.value = 0;
    }
         
 }