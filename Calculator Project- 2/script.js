


// let firstNumber;
// let lastNumber;
// let step = 0;
// let result = 0;
// let operation;

// let firstArr = [];
// let secondArr = [];


// let display = document.querySelector('#input-box')






// function getNum(num){
//     if(step === 0 || step === 1){

//         firstArr.push(num);
//         step = 1;
//         firstNumber = Number(firstArr.join(''))
//         display.value = firstNumber
     
//     }else if(step === 2){
        
//         secondArr.push(num);
//         lastNumber = Number(secondArr.join(''));
//         display.value = lastNumber;

       
//         console.log(lastNumber)
       
//     }
//     else if(step === 3){
//         lastNumber = null
//         console.log(step)
//     }

   

// }


// function getOperator(operator){
//     step = 2;
//     console.log(step)
//     operation = operator;

// }




// function calculateFun(){
 
//     console.log(step)
//     if(operation === "+"){
        
//         result = firstNumber + lastNumber;
//         display.value = result;
        
    
//     }else if(operation === "-"){
//         result = firstNumber - lastNumber;
//         display.value = result;
//     }else if(operation === "*"){
//         result = firstNumber * lastNumber;
//         display.value = result;
//     }else if(operation === "/"){
//         result = firstNumber / lastNumber;
//         display.value = result;
//     }

//     // secondArr = []
//     // lastNumber = null;
//     //firstNumber = result;
//     // console.log(result)
//     // console.log(firstNumber)
//     // console.log(lastNumber)
     
// }


// function clearAll(){
   
    
//     display.value = 0;
//     firstNumber = null;
//     lastNumber = null;
//     step = 0;
//     result = 0;
//     operation = null;
//     firstArr = [];
//     secondArr = [];

// }






let display = document.querySelector('#input-box');

display.addEventListener('input',function(event){
    let reg = /[0-9 + \- * / %]+$/ig;

    if(!reg.test(event.target.value)){
        event.target.value = ''
    }
})

function getNum(num){  
   let reg = /^[\+ \- \* \/ \%]/;
    
    if(reg.test(display.value)){
        display.value = ""
    }else if(display.value.length >= 11){
        display.style.fontSize = '2rem'
        display.value+=num;
    }else if(display.value.length <= 11){
        display.style.fontSize = '2.5rem'
        display.value+=num;
    } else if(display.value.length <= 15){
        display.value+=num;
    }
//display.value+=num; 
}

function calculateFun(){
let result;
let inputArray = [];

let regStartsWith = /^[\+ \- \* \/ \%]/;
let regEndsWith = /[\+ \- \* \/ \%]$/;
    
if(regStartsWith.test(display.value)){
    display.value = ""
} else if(regEndsWith.test(display.value)){
    display.value = ""
}

else if(display.value.includes('+')){
    inputArray = display.value.split('+');
    display.value =  parseFloat(inputArray[0]) + parseFloat(inputArray[1])
    
}else if(display.value.includes('-')){
    inputArray = display.value.split('-');
    display.value =  parseFloat(inputArray[0]) - parseFloat(inputArray[1])
}else if(display.value.includes('*')){
    inputArray = display.value.split('*');
    display.value =  parseFloat(inputArray[0]) * parseFloat(inputArray[1])
}else if(display.value.includes('/')){
    inputArray = display.value.split('/');
    display.value =  parseFloat(inputArray[0]) / parseFloat(inputArray[1])
}else if(display.value.includes('%')){
    inputArray = display.value.split('%');
    display.value =  parseFloat(inputArray[0]) % parseFloat(inputArray[1])
}else{
    display.value = ""
}





    // if(display.value.includes('+')){
    //     inputArray = display.value.split('+');
    //     display.value =  parseInt(inputArray[0]) + parseInt(inputArray[1])
        
    // }else if(display.value.includes('-')){
    //     inputArray = display.value.split('-');
    //     display.value =  parseInt(inputArray[0]) - parseInt(inputArray[1])
    // }else if(display.value.includes('*')){
    //     inputArray = display.value.split('*');
    //     display.value =  parseInt(inputArray[0]) * parseInt(inputArray[1])
    // }else if(display.value.includes('/')){
    //     inputArray = display.value.split('/');
    //     display.value =  parseInt(inputArray[0]) / parseInt(inputArray[1])
    // }else if(display.value.includes('%')){
    //     inputArray = display.value.split('%');
    //     display.value =  parseInt(inputArray[0]) % parseInt(inputArray[1])
    // }else{
    //     display.value = ""
    // }



}

function deleteNum(){
    let convertString = display.value.toString();
   let deleteRightSideValue = convertString.slice(0, convertString.length -1)
    display.value = deleteRightSideValue
    
}


function clearAll(){
    display.style.fontSize = '2.5rem'
    display.value = "";
}







