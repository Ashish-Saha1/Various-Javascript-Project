//Global Variable

let background = document.querySelector('.color-section_color-picker');
let divElement = null;

let copyButton = document.querySelector('.change-color-section_header p');
let inputHex = document.querySelector(".input-div_input-hex input");
let inputRgb = document.querySelector(".input-div_input-rgb input");

let redColor = document.getElementById('red');
let redValue = document.querySelector('.adjust-rgb_red span')
let greenColor = document.getElementById('green');
let greenValue = document.querySelector('.adjust-rgb_green span') 
let blueColor = document.getElementById('blue');
let blueValue = document.querySelector('.adjust-rgb_blue span')


// Onload Handelar
window.onload = ()=> {
    main()
}


// Boot function collect all dom ref 
let main = function(){   
    let randomButton = document.querySelector('.color-section_header p')
    let inputBoxHex = document.querySelector('.input-div_input-hex input')

    randomButton.addEventListener('click', function(){
        let color = generateColor()
        let hexGenerator = hex(color);
        inputBoxHex.value = hexGenerator;
        background.style.backgroundColor =`#${inputBoxHex.value}`;
        
        //RGB color field
        let inputBoxRgb = document.querySelector('.input-div_input-rgb input');
        let rgbGenerator = rgb(color);
        inputBoxRgb.value = rgbGenerator;
        background.style.backgroundColor = `${inputBoxRgb.value}`;
        
//  Below code is to change RGB Slider
        rgbSlider(color);

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
            copyButton.addEventListener('click', ()=>{
   
                if(divElement !== null){
                    divElement.remove();
                    divElement = null;
                }
            
                let hexRadioBtn = document.getElementById("hex");
                let rgbRadioBtn = document.getElementById("rgb");
            
                if(hexRadioBtn.checked){
                    //copy code to clipboard
                    if(isValidHex(inputHex.value)){
                        navigator.clipboard.writeText(`#${inputHex.value}`);
                    }
            
                    // For display copied ocde
                    if(isValidHex(inputHex.value)){
                        showMassege(`Copied #${inputHex.value}`)
                      }else if(inputHex.value === ""){
                        showMassege(`Blank`)
                      }
                      else{
                        showMassege(`${inputHex.value} is not a valid code to copy`)
                      }
                }else if(rgbRadioBtn.checked){
                    if(isValidHex(inputHex.value)){
                        navigator.clipboard.writeText(inputRgb.value);
                    }
                    
                    if(isValidHex(inputHex.value)){
                        showMassege(`Copied ${inputRgb.value}`)
                      }else if(inputRgb.value === ""){
                        showMassege(`Blank`)
                      }
                      else{
                        showMassege(`Hex & Rgb color code is not equal`)
                      }
                }else{
                    showMassege("Select Copy Mode First")
                }
                
            })



/**
 * handle event handler to update background color by input color code
 * this function is to update background color by manual input as well as update RGB field & RGB slider
 */

 inputHex.addEventListener('keyup', function(){
    inputHex.value = inputHex.value.toUpperCase();
  if(isValidHex(inputHex.value)){
    background.style.backgroundColor = `#${inputHex.value}`;
    // input.disabled = true

    //let inputBoxRgb = document.querySelector('.input-div-rgb input');
    let covertColorCode = hexToRgb(inputHex.value);
    inputRgb.value = covertColorCode;

    
    
  }
            
})



/**
 * Function for input range movement & update RGB input box
 * This function is change RGB slider value & RGB input field by movement of RGB slider
 */

function updateRgbCode(){
    //Variable globally declear
    redValue.textContent = redColor.value;
    greenValue.textContent = greenColor.value;
    blueValue.textContent = blueColor.value;

    inputRgb.value = `rgb(${redColor.value},${greenColor.value},${blueColor.value})`
    background.style.backgroundColor = inputRgb.value;

    //To show the converted rgb code to hex input box
    let convertColorCodeRgbToHex = rgbToHex(inputRgb.value);
    inputHex.value = convertColorCodeRgbToHex;
}
    
    redColor.addEventListener('input', updateRgbCode);
    greenColor.addEventListener('input', updateRgbCode);
    blueColor.addEventListener('input', updateRgbCode);


                            // -------------Dom Functions-------------------------


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


/**
 * RGB Slider function is to change RGB slider 
 * @param {object} color
 * update RGB input value (Sliding value) 
 */
        let rgbSlider = function({red,green,blue}){
        //Variables are decleared globally
        //below code is to change span value
        redValue.textContent =  red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
        //below code is to change slider position
        redColor.value = red;
        greenColor.value = green;
        blueColor.value = blue;
    
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
            return  `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.padStart(6, 0).toUpperCase();
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
 * @returns {string}
 */

const hexToRgb = function(code){
   let hex = code.replace(/^#/, "");

    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    
        //below code is to change span value
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
        //below code is to change slider position
        redColor.value = r;
        greenColor.value = g;
        blueColor.value = b;

    return `rgb(${r},${g},${b})`  
}



/**
 * convert Rgb to Hex code
 * This function has received a RGB code & converty it to Hex code
 * @param {string} code 
 * @returns {string}
 */

const rgbToHex = function(code){
    let rgb = code.slice(4,-1).split(',');
    let red = parseInt(rgb[0]).toString(16);
    let green = parseInt(rgb[1]).toString(16);
    let blue = parseInt(rgb[2]).toString(16);

    return `${red.padStart(2,0)}${green.padStart(2,0)}${blue.padStart(2,0)}`.toUpperCase()
}



    


