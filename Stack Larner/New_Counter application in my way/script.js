


window.onload = function(){
    main()
}

 function main(){
   let result = document.querySelector('.result-show');
   let incrementInput = document.getElementById('increment-input');
   let decrementInput = document.getElementById('decrement-input');
   let incrementBtn = document.querySelector('.increment-btn');
   let decrementBtn = document.querySelector('.decrement-btn');
       
    
    incrementBtn.addEventListener('click', function(){       
        if(incrementInput.value === ""){
            alert('First input any number')
        }else{
            result.innerHTML = parseInt(incrementInput.value) + parseInt(result.innerHTML)
        }
        
    })


    decrementBtn.addEventListener('click', function(){       
        if(decrementInput.value === ""){
            alert('First input any number')
        }else{
            if(parseInt(result.innerHTML) - parseInt(decrementInput.value) < 0){
                result.innerHTML = 0;
            }else{
                result.innerHTML = parseInt(result.innerHTML) - parseInt(decrementInput.value)
            }
        }
        
    })




    
 }


