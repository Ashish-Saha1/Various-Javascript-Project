//Global Variable

let background = document.querySelector('.color-section_color-picker');
let divElement = null;

let copyButton = document.querySelector('.change-color-section_header p');
let inputHex = document.querySelector(".input-div_input-hex input");
let inputRgb = document.querySelector(".input-div_input-rgb input");
let colorModeOptions = document.getElementsByName('option');

 let redColor = document.getElementById('red');
 let greenColor = document.getElementById('green');
 let blueColor = document.getElementById('blue');

 let defaultValue = {
    red: 170,
    green: 190,
    blue: 220
 }



// Onload Handelar
window.onload = ()=> {
    main();
    updateDomByClickRandomButton(defaultValue)
}


// Boot function collect all dom ref 
let main = function(){   
    let randomButton = document.querySelector('.color-section_header p')
 

    randomButton.addEventListener('click', function(){
        let color = generateColor()
        updateDomByClickRandomButton(color);

    });    
}



                                    //----------------------Event handlars----------------------

            
/**
 * Copy color code by clicking copy button
 * Global variables are used
 * Here multiple works done like div element remove, Radio button checked, 
 * isvalidHex function called, showMassege function called
 * @param {string}
 * @returns {string} remove divElement if, copy color code & show 
 */
            // copyButton.addEventListener('click', ()=>{
   
            //     if(divElement !== null){
            //         divElement.remove();
            //         divElement = null;
            //     }
            
            //     let hexRadioBtn = document.getElementById("hex");
            //     let rgbRadioBtn = document.getElementById("rgb");
            
            //     if(hexRadioBtn.checked){
            //         //copy code to clipboard
            //         if(isValidHex(inputHex.value)){
            //             navigator.clipboard.writeText(`#${inputHex.value}`);
            //         }
            
            //         // For display copied ocde
            //         if(isValidHex(inputHex.value)){
            //             showMassege(`Copied #${inputHex.value}`)
            //           }else if(inputHex.value === ""){
            //             showMassege(`Blank`)
            //           }
            //           else{
            //             showMassege(`${inputHex.value} is not a valid code to copy`)
            //           }
            //     }else if(rgbRadioBtn.checked){
            //         if(isValidHex(inputHex.value)){
            //             navigator.clipboard.writeText(inputRgb.value);
            //         }
                    
            //         if(isValidHex(inputHex.value)){
            //             showMassege(`Copied ${inputRgb.value}`)
            //           }else if(inputRgb.value === ""){
            //             showMassege(`Blank`)
            //           }
            //           else{
            //             showMassege(`Hex & Rgb color code is not equal`)
            //           }
            //     }else{
            //         showMassege("Select Copy Mode First")
            //     }
                
            // })



/**
 * handle event handler to update background color by input color code
 * this function is to update background color by manual input as well as update RGB field & RGB slider
 */

 inputHex.addEventListener('keyup', function(e){
    inputHex.value = inputHex.value.toUpperCase();
    let hexColor = e.target.value;
    
    if(isValidHex(hexColor)){
        let color = hexToDecimel(hexColor)
    
        updateDomByClickRandomButton(color)
       
  }
            
})


   

copyButton.addEventListener('click', function(){
    if(divElement !== null){
            divElement.remove();
            divElement = null;
        }

    const colorModeChecker = isCopyColorModeChecked(colorModeOptions)
 
   if(colorModeChecker === null){
        throw new Error('Invalid Radio Input')
   }

    if(isValidHex(inputHex.value)){
        if(colorModeChecker === 'hex'){
            navigator.clipboard.writeText(`#${inputHex.value}`);
            showMassege(`Copied #${inputHex.value}`)
        }else{
            navigator.clipboard.writeText(`${inputRgb.value}`);  
            showMassege(`Copied ${inputRgb.value}`)     
    }
    }else{
        showMassege('Invalid Code')
    }

  


})



/**
 * Function for input range movement & update RGB input box
 * This function is change RGB slider value & RGB input field by movement of RGB slider
 */


    
    redColor.addEventListener('change', handleRgbColorSlider);
    greenColor.addEventListener('change', handleRgbColorSlider);
    blueColor.addEventListener('change', handleRgbColorSlider);


                            // -------------Dom Functions-------------------------

    function updateDomByClickRandomButton(color){
        let hexGenerator = hex(color);
        let rgbGenerator = rgb(color);

document.querySelector('.color-section_color-picker').style.backgroundColor = `#${hexGenerator}`;
document.querySelector(".input-div_input-hex input").value = hexGenerator;
document.querySelector(".input-div_input-rgb input").value = rgbGenerator;
document.getElementById('red').value = color.red;
document.querySelector('.adjust-rgb_red span').innerText = color.red;
document.getElementById('green').value = color.green;
document.querySelector('.adjust-rgb_green span').innerText = color.green; 
document.getElementById('blue').value = color.blue;
document.querySelector('.adjust-rgb_blue span').innerText = color.blue;

        
    }

//This function is not match with tutorial but working well
    function handleRgbColorSlider(){
        let red = parseInt(document.getElementById('red').value);
        let green =parseInt(document.getElementById('green').value);
        let blue = parseInt(document.getElementById('blue').value);
 
    let color = {
        red,
        green,
        blue
    }
        updateDomByClickRandomButton(color)

    }

    


/**
 * Function showing notification for copied color code
 * @param {string} massage 
 * Function add or remove a div element dynamically in html & show a massage
 */
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




                    //----------- utility Function / Utils Function-----------------


/**
 * generateColor is used to return an object which generate random color code
 * @returns {object}
 */
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


/**
 * Hex function is to take three dicimel color & return hex color code
 * @param {object} color 
 * @returns {string}
 */
        let hex = function({red, green, blue}){
            //let {red, green, blue} = generateColor(); 
            // return  `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.padStart(6, 0).toUpperCase();
             return  `${red.toString(16).padStart(2,0)}${green.toString(16).padStart(2,0)}${blue.toString(16).padStart(2,0)}`.toUpperCase();
            
            
        }


/**
 * Rgb function is to take three dicimel color & return RGB color code
 * @param {object} color 
 * @returns {string}
 */
        let rgb = function({red, green, blue}){
            //let {red, green, blue} = generateColor();
            return  `rgb(${red},${green},${blue})`
        }


  /**
   *  iSvalidHex function used to check Hex color code is valid or not
   * @param {Object} color 
   * @returns {Boolean}
   */                 
        let isValidHex = function(color){
            if(color.length !== 6) return false;
            let reg = /^[0-9A-F]{6}$/gi;
            return reg.test(color)
        }


/**
 * convert hex to Rgb code
 * This function has received a hex code & converty it to RGB code
 * @param {string} code 
 * @returns {object}
 */

const hexToDecimel = function(code){
   let hex = code.replace(/^#/, "");

    let red = parseInt(hex.substring(0,2), 16);
    let green = parseInt(hex.substring(2,4), 16);
    let blue = parseInt(hex.substring(4,6), 16);  

    return {
        red,
        green,
        blue
    }
}


    // Variable declear globally
function isCopyColorModeChecked(nodes){
    
    let checkedValue = null;
        for(let i=0; i<nodes.length; i++){
            if(nodes[i].checked){
                checkedValue = nodes[i].value;
                break;
                
            }
        }
        return checkedValue
}










    


