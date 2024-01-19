//Global Variable

let background = document.querySelector('.background');
let divElement = null;



window.onload = ()=> {
    main()
}

let main = function(){
    
    let button = document.querySelector('.btn')
    let inputBox = document.querySelector('.input-div input')
    button.addEventListener('click', function(){
        let color = generateColor()
        let hexGenerator = hex(color);
        inputBox.value = hexGenerator;
        background.style.backgroundColor =`#${inputBox.value}`;
        
        //RGB color field

        let inputBoxRgb = document.querySelector('.input-div-rgb input');
        let rgbGenerator = rgb(color);
        inputBoxRgb.value = rgbGenerator;
        background.style.backgroundColor = `${inputBoxRgb.value}`;
        
    });
    
}


let generateColor = function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    return {
        red,
        green,
        blue
    }
}



let hex = function({red, green, blue}){
    //let {red, green, blue} = generateColor();
    
    return  `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.padStart(6, 0).toUpperCase();
}


let rgb = function({red, green, blue}){
    //let {red, green, blue} = generateColor();
    
    return  `rgb(${red},${green},${blue})`
}





//Copy color code by clicking copy button

let copyButton = document.querySelector('.copy-btn');
let copyButtonRgb = document.querySelector('.copy-btn-rgb');
let input = document.querySelector("input[type='text']");
let inputRgb = document.querySelector(".input-div-rgb input[type='text']");
console.log(inputRgb)
copyButton.addEventListener('click', ()=>{
    if(isValidHex(input.value)){
        navigator.clipboard.writeText(input.value);
    }

    if(divElement !== null){
        divElement.remove();
        divElement = null;
    }

    if(isValidHex(input.value)){
        showMassege(`Copied #${input.value}`)
      }else if(input.value === ""){
        showMassege(`Blank`)
      }
      else{
        showMassege(`${input.value} is not a valid code to copy`)
      }
    
})


copyButtonRgb.addEventListener('click', ()=>{
    if(isValidHex(input.value)){
        navigator.clipboard.writeText(inputRgb.value);
    }

    if(divElement !== null){
        divElement.remove();
        divElement = null;
    }

    if(isValidHex(input.value)){
        showMassege(`Copied ${inputRgb.value}`)
      }else if(inputRgb.value === ""){
        showMassege(`Blank`)
      }
      else{
        showMassege(`${inputRgb.value} is not a valid code to copy`)
      }
    
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
            background.style.backgroundColor = `#${input.value}`;
            // input.disabled = true

            let inputBoxRgb = document.querySelector('.input-div-rgb input');
            let covertColorCode = hexToRgb(input.value);
            inputBoxRgb.value = covertColorCode;
            
          }
             
            
        })
    
    

// convert hex to Rgb code

const hexToRgb = function(code){
   let hex = code.replace(/^#/, "");

    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    return `rgb(${r},${g},${b})`
       
    
}




