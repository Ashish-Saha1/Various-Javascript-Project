//Global Variable

let background = document.querySelector('.background');
let divElement = null;
let hash = document.querySelector('.hash').textContent;


window.onload = ()=> {
    main()
}

let main = function(){
    
    let button = document.querySelector('.btn')
    let inputBox = document.querySelector('input')
    button.addEventListener('click', function(){
        let hexGenerator = changeColor();
        
        inputBox.value = hexGenerator;
        background.style.backgroundColor = hash +inputBox.value;
        
    });
    
}




let changeColor = function(){
    let r = Math.round(Math.random() * 255).toString(16);
    let g = Math.round(Math.random() * 255).toString(16);
    let b = Math.round(Math.random() * 255).toString(16);
    
    return  `${r}${g}${b}`.padStart(6, 0);
}



//Copy color code by clicking copy button

let copyButton = document.querySelector('.copy-btn');
let input = document.querySelector("input[type='text']");

copyButton.addEventListener('click', ()=>{
    navigator.clipboard.writeText(hash +input.value);
    if(divElement !== null){
        divElement.remove();
        divElement = null;
    }

    if(isValidHex(input.value)){
        showMassege(`Copied ${hash + input.value}`)
        console.log(input.value)
      }else{
        console.log(input.value)
        alert('Input is not a Valid Hex Code')
      }

    // if(input.value.length === 7){

    // }
    
})


//Function showing notification for copied color code

let showMassege = function(massage){
    //devElement is decleared at global area
    divElement = document.createElement('div');
        divElement.className = 'right copied-div-in';
        divElement.innerHTML = massage;
        background.appendChild(divElement);

    divElement.addEventListener('click', ()=> {
            divElement.classList.remove('copied-div-in');
            divElement.classList.add('copied-div-out');

            divElement.addEventListener("animationend", ()=>{
            divElement.remove();
            divElement = null;
    })
    })

    
}


        // Check manual input color in valid hex code or not
    let isValidHex = function(color){
        if(color.length !== 6) return false;
        let reg = /^[0-9A-F]{6}$/gi;
        return reg.test(color)
    }


    //  handle event handler to update background color by input color code
        

        input.addEventListener('keyup', function(){
            input.value = input.value.toUpperCase();
            if(isValidHex(input.value)){
            background.style.backgroundColor =hash+ input.value
            input.disabled = true
            
          }
             
          console.log(isValidHex(input.value));
          
            
            
        })
    
    

        

       
        
        
        
        
        
        
        
        
        
        
        
        
        
        





