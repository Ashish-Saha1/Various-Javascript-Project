let inputBox = document.getElementById('input-box');
let buttons = document.querySelectorAll('button')



let str = "";



buttons.forEach(button=>{
    button.addEventListener('click', function(event){
       if(inputBox.value === "" && event.target.innerHTML == "="){
            str = "";
            inputBox.value = str;
       }
        else if(event.target.innerHTML === "="){
            str = eval(str);           
            inputBox.value = str;
            console.log(typeof str);
             
        }else if(event.target.innerHTML === "AC"){
            str = "";
            inputBox.value = str;
        }else if(event.target.innerHTML === "Del"){
            console.log(typeof str);
            str = str.toString()
            str = str.substring(0, str.length-1)
            inputBox.value = str;
            console.log(typeof str);
        }

        else{
           str += event.target.innerHTML;
           inputBox.value = str;
           console.log(typeof str);
        }
    })
})









