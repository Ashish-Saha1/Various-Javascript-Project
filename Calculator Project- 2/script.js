// let inputBox = document.getElementById('input-box');
// let buttons = document.querySelectorAll('button')



// let str = "";



// buttons.forEach(button=>{
//     button.addEventListener('click', function(event){
//        if(inputBox.value === "" && event.target.innerHTML == "="){
//             str = "";
//             inputBox.value = str;
//        }
//         else if(event.target.innerHTML === "="){
//             str = eval(str);           
//             inputBox.value = str;
//             console.log(typeof str);
             
//         }else if(event.target.innerHTML === "AC"){
//             str = "";
//             inputBox.value = str;
//         }else if(event.target.innerHTML === "Del"){
//             console.log(typeof str);
//             str = str.toString()
//             str = str.substring(0, str.length-1)
//             inputBox.value = str;
//             console.log(typeof str);
//         }

//         else{
//            str += event.target.innerHTML;
//            inputBox.value = str;
//            console.log(typeof str);
//         }
//     })
// })


let firstNumber;
let lastNumber;
let step = 0;
let result = 0;
let operation;

let firstArr = [];
let secondArr = [];


let display = document.querySelector('#input-box')






function getNum(num){
    if(step === 0 || step === 1){
        firstArr.push(num);
        step = 1;
        firstNumber = Number(firstArr.join(''))
        display.value = firstNumber
    }else if(step === 2){
        secondArr.push(num);
        lastNumber = Number(secondArr.join(''));
        display.value = lastNumber
        
    }

    
    console.log(firstNumber)  
    console.log(lastNumber)
    console.log(firstArr)
    console.log(secondArr)
}


function getOperator(operator){
    step = 2;
    operation = operator;
    console.log(operation)
}




function calculateFun(){
    
    if(operation === "+"){
        result = firstNumber + lastNumber;
        display.value = result;
        // lastNumber = null
        // firstNumber = null
        firstArr = []
        secondArr = []
    }else if(operation === "-"){
        result = firstNumber - lastNumber;
        display.value = result;
    }else if(operation === "*"){
        result = firstNumber * lastNumber;
        display.value = result;
    }else if(operation === "/"){
        result = firstNumber / lastNumber;
        display.value = result;
    }

    // secondArr = []
    // lastNumber = null;
    //firstNumber = result;
    console.log(result)
    console.log(firstNumber)
    console.log(lastNumber)
     
}


function clearAll(){
   
    
    display.value = 0;
    firstNumber = null;
    lastNumber = null;
    step = 0;
    result = 0;
    operation = null;
    firstArr = [];
    secondArr = [];

}