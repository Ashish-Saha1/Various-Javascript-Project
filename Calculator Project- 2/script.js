


let display = document.querySelector('#input-box');

display.addEventListener('input',function(event){
    //reg means this num or symbol i want to input by pressing keyboard
    let reg = /[0-9 + \- * / % .]+$/ig;

    if(!reg.test(event.target.value)){
        event.target.value = ''
    }
})

function getNum(num){  
   let reg = /^[\+ \- \* \/ \%]/;
    //below test means if above symbol in reg variable in found Starts before
    // any number then display.value = ""
    if(reg.test(display.value)){
        display.value = ""
    } 
    else if(display.value.length > 11 && display.value.length < 15){
        display.style.fontSize = '2rem';
        display.value+=num;
    }
    
    else if(display.value.length < 15){
        display.value+=num;
    }
    

 
}

function calculateFun(){
let result;
let inputArray = [];

let regStartsWith = /^[\+ \- \* \/ \%]/;
let regEndsWith = /[\+ \- \* \/ \%]$/;
    
if(regStartsWith.test(display.value)){
    return ""
} else if(regEndsWith.test(display.value)){
    return ""
}

else if(display.value.includes('+')){
    inputArray = display.value.split('+');
    return  parseFloat(inputArray[0]) + parseFloat(inputArray[1])
    
}else if(display.value.includes('-')){
    inputArray = display.value.split('-');
    return  parseFloat(inputArray[0]) - parseFloat(inputArray[1])
}else if(display.value.includes('*')){
    inputArray = display.value.split('*');
    return  parseFloat(inputArray[0]) * parseFloat(inputArray[1])
}else if(display.value.includes('/')){
    inputArray = display.value.split('/');
    return  parseFloat(inputArray[0]) / parseFloat(inputArray[1])
}else if(display.value.includes('%')){
    inputArray = display.value.split('%');
    return  parseFloat(inputArray[0]) % parseFloat(inputArray[1])
}else{
    return ""
}


}


function deleteNum(){
    let convertString = display.value.toString();
    let deleteRightSideValue = convertString.slice(0, convertString.length -1)
    display.value = deleteRightSideValue;
    if(display.value.length < 11){
        display.style.fontSize = '2.5rem'
       
    } 
    
}


function clearAll(){
    display.style.fontSize = '2.5rem'
    display.value = "";
}



function showDisplay(){
    let calculator = calculateFun();
   
        if(calculator === ""){
            display.value = calculator;
        }else if(Number.isInteger(calculator)){
            display.value = calculator
        }else{
            display.value = calculator.toFixed(2)
        }


    
}


