


window.onload = function(){
    main()
}

 function main(){
    let resetBtn = document.querySelector('.reset-btn');
    let submitBtn = document.querySelector('.submit-btn');
    let inputName = document.getElementById('input-name');
    let showMessage = document.querySelector('.show-message');
    let showMessageSpan = document.querySelector('.show-message span');


    submitBtn.addEventListener('click', function(){
        if(inputName.value === ""){
            alert('Please Input Your Name')
        }else{
            showMessage.style.display = 'block'
            showMessageSpan.innerHTML = inputName.value;
            inputName.value = ''
        }
    })
    
    resetBtn.addEventListener('click', function(){
        showMessage.style.display = 'none'
        showMessageSpan.innerHTML = "";
    })

    
 }


