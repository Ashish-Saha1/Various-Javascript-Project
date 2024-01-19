window.onload = function(){
    main()
}


const converter = {
    area: {
        name: "Area",
        units: {
            squareKm: 'Square Kilometer',
            squareM: 'Square Meter',
            squareMile: 'Square MIle',
            squareYard: "Square Yard",
            squareFoot: "Square Foot"
        },

        variants: {
            'squareKm:squareM': {
                formula: "multiply the area value by 1000000",
                calculation(n){
                    return n * 1000000;
                },
                calculationRevarse(n){
                    return n / 1000000;
                }
            },
            'squareKm:squareMile': {
                formula: "divide the area value by 2.59",
                calculation(n){
                    return n / 2.59;
                },
                calculationRevarse(n){
                    return n * 2.59;
                }
            },
            'squareKm:squareYard': {
                formula: "multiply the area value by 1196000",
                calculation(n){
                    return n * 1196000;
                },
                calculationRevarse(n){
                    return n / 1196000;
                }
            },
            'squareKm:squareFoot': {
                formula: "or an approximate result, multiply the area value by 10760000 ",
                calculation(n){
                    return n * 10760000;
                },
                calculationRevarse(n){
                    return n / 10760000;
                }
            },
            'squareM:squareKm': {
                formula: "divide the area value by 1000000",
                calculation(n){
                    return n / 1000000;
                },
                calculationRevarse(n){
                    return n * 1000000;
                }
            },
            'squareM:squareMile': {
                formula: "divide the area value by 2590000",
                calculation(n){
                    return n / 2590000;
                },
                calculation(n){
                    return n * 2590000;
                }
            },
            'squareM:squareYard': {
                formula: "multiply the area value by 1.196",
                calculation(n){
                    return n * 1.196;
                },
                calculationRevarse(n){
                    return n * 1.196;
                }
            },
            'squareM:squareFoot': {
                formula: "multiply the area value by 10.764",
                calculation(n){
                    return n * 10.764;
                },
                calculationRevarse(n){
                    return n / 10.764;
                }
            },
            'squareMile:squareKm': {
                formula: "multiply the area value by 2.59",
                calculation(n){
                    return n * 2.59;
                },
                calculationRevarse(n){
                    return n / 2.59;
                }
            },
            'squareMile:squareM': {
                formula: "multiply the area value by 25900000",
                calculation(n){
                    return n * 25900000;
                },
                calculationRevarse(n){
                    return n / 25900000;
                }
            },
            'squareMile:squareYard': {
                formula: "for an approximate result, multiply the area value by 3098000",
                calculation(n){
                    return n * 3098000;
                },
                calculationRevarse(n){
                    return n / 3098000;
                }
            },
            'squareMile:squareFoot': {
                formula: "for an approximate result, multiply the area value by 27880000",
                calculation(n){
                    return n * 27880000;
                },
                calculationRevarse(n){
                    return n / 27880000;
                }
            },
            'squareYard:squareKm': {
                formula: "divide the area value by 1196000",
                calculation(n){
                    return n / 1196000;
                },
                calculationRevarse(n){
                    return n * 1196000;
                }
            },
            'squareYard:squareM': {
                formula: "divide the area value by 1.196",
                calculation(n){
                    return n / 1.196;
                },
                calculationRevarse(n){
                    return n * 1.196;
                }
            },
            'squareYard:squareMile': {
                formula: "for an approximate result, divide the area value by 3.098e+6  ",
                calculation(n){
                    return n / new Number(3.098e+6);
                },
                calculationRevarse(n){
                    return n * new Number(3.098e+6);
                }
            },
            'squareYard:squareFoot': {
                formula: "multiply the area value by 9",
                calculation(n){
                    return n * 9;
                },
                calculationRevarse(n){
                    return n / 9;
                }
            },
            'squareFoot:squareKm': {
                formula: "for an approximate result, divide the area value by 1.076e+7 ",
                calculation(n){
                    return n / new Number(1.076e+7);
                },
                calculationRevarse(n){
                    return n * new Number(1.076e+7);
                }
            },
            'squareFoot:squareM': {
                formula: "divide the area value by 10.764 ",
                calculation(n){
                    return n / 10.764;
                },
                calculationRevarse(n){
                    return n * 10.764;
                }
            },
            'squareFoot:squareMile': {
                formula: "for an approximate result, divide the area value by 2.788e+7",
                calculation(n){
                    return n / new Number(2.788e+7);
                },
                calculationRevarse(n){
                    return n * new Number(2.788e+7);
                }
            },
            'squareFoot:squareYard': {
                formula: "divide the area value by 9",
                calculation(n){
                    return n / 9;
                },
                calculationRevarse(n){
                    return n * 9;
                }
            },

        }
    },

    mass: {
        name: "Mass",
        units: {
            tonne: "Tonne",
            kilogram: "Kilogram",
            gram: "Gram",
            pound: "Pound",
            ounce: "Ounce", 
        },

        variants: {
            'tonne:kilogram': {
                formula: "multiply the mass value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'tonne:gram': {
                formula: "multiply the mass value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'tonne:pound': {
                formula: "for an approximate result, multiply the mass value by 2205",
                calculation(n){
                    return n * 2205;
                },
                calculationRevarse(n){
                    return n / 2205;
                }
            },
            'tonne:ounce': {
                formula: "for an approximate result, multiply the mass value by 35270",
                calculation(n){
                    return n * 35270;
                },
                calculationRevarse(n){
                    return n / 35270;
                }
            },
            'kilogram:tonne': {
                formula: "divide the mass value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'kilogram:gram': {
                formula: "multiply the mass value by 1000   ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilogram:pound': {
                formula: "for an approximate result, multiply the mass value by 2.205",
                calculation(n){
                    return n * 2.205;
                },
                calculationRevarse(n){
                    return n / 2.205;
                }
            },
            'kilogram:ounce': {
                formula: "multiply the mass value by 35.274 ",
                calculation(n){
                    return n * 35.27;
                },
                calculationRevarse(n){
                    return n / 35.27;
                }
            },
            'gram:tonne': {
                formula: "divide the mass value by 1e+6",
                calculation(n){
                    return n / new Number(1e+6);
                },
                calculationRevarse(n){
                    return n * new Number(1e+6);
                }
            },
            'gram:kilogram': {
                formula: "divide the mass value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'gram:pound': {
                formula: "for an approximate result, divide the mass value by 453.6 ",
                calculation(n){
                    return n / 453.6;
                },
                calculationRevarse(n){
                    return n * 453.6;
                }
            },
            'gram:ounce': {
                formula: "for an approximate result, divide the mass value by 28.35 ",
                calculation(n){
                    return n / 28.35;
                },
                calculationRevarse(n){
                    return n * 28.35;
                }
            },
            'pound:tonne': {
                formula: "for an approximate result, divide the mass value by 2205",
                calculation(n){
                    return n / 2205;
                },
                calculationRevarse(n){
                    return n * 2205;
                }
            },
            'pound:kilogram': {
                formula: "for an approximate result, divide the mass value by 2.205 ",
                calculation(n){
                    return n / 2.205;
                },
                calculationRevarse(n){
                    return n * 2.205;
                }
            },
            'pound:gram': {
                formula: "for an approximate result, multiply the mass value by 453.6   ",
                calculation(n){
                    return n * 453.6;
                },
                calculationRevarse(n){
                    return n / 453.6;
                }
            },
            'pound:ounce': {
                formula: "multiply the mass value by 16 ",
                calculation(n){
                    return n * 16;
                },
                calculationRevarse(n){
                    return n / 16;
                }
            },
            'ounce:tonne': {
                formula: "for an approximate result, divide the mass value by 35270 ",
                calculation(n){
                    return n / 35270;
                },
                calculationRevarse(n){
                    return n * 35270;
                }
            },
            'ounce:kilogram': {
                formula: "divide the mass value by 35.274 ",
                calculation(n){
                    return n / 35.274;
                },
                calculationRevarse(n){
                    return n * 35.274;
                }
            },
            'ounce:gram': {
                formula: "for an approximate result, multiply the mass value by 28.35  ",
                calculation(n){
                    return n * 28.35;
                },
                calculationRevarse(n){
                    return n / 28.35;
                }
            },
            'ounce:pound': {
                formula: "divide the mass value by 16  ",
                calculation(n){
                    return n / 16;
                },
                calculationRevarse(n){
                    return n * 16;
                }
            },
            
        }
    },

    length: {
        name: "Length",
        units:  {
            kilometer: "Kilometer",
            meter: "Meter",
            centimeter: "Centimeter",
            mile: "Mile",
        },

        variants: {
            'kilometer:meter':{
                formula: "multiply the length value by 1000 ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilometer:centimeter':{
                formula: "multiply the length value by 100000 ",
                calculation(n){
                    return n * 100000;
                },
                calculationRevarse(n){
                    return n / 100000;
                }
            },
            'kilometer:mile':{
                formula: "for an approximate result, divide the length value by 1.609 ",
                calculation(n){
                    return n / 1.609;
                },
                calculationRevarse(n){
                    return n * 1.609;
                }
            },
            'meter:kilometer':{
                formula: "divide the length value by 1000   ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'meter:centimeter':{
                formula: "multiply the length value by 100" ,
                calculation(n){
                    return n * 100;
                },
                calculationRevarse(n){
                    return n / 100;
                }
            },
            'meter:mile':{
                formula: "for an approximate result, divide the length value by 1609",
                calculation(n){
                    return n / 1609;
                },
                calculationRevarse(n){
                    return n * 1609;
                }
            },
            'centimeter:kilometer':{
                formula: 'divide the length value by 100000',
                calculation(n){
                    return n / 100000;
                },
                calculationRevarse(n){
                    return n * 100000;
                }
            },
            'centimeter:meter':{
                formula: "divide the length value by 100 ",
                calculation(n){
                    return n / 100;
                },
                calculationRevarse(n){
                    return n * 100;
                }
            },
            'centimeter:mile':{
                formula: "for an approximate result, divide the length value by 160900",
                calculation(n){
                    return n / 160900;
                },
                calculationRevarse(n){
                    return n * 160900;
                }
            },
            'mile:kilometer':{
                formula: "for an approximate result, multiply the length value by 1.609",
                calculation(n){
                    return n * 1.609;
                },
                calculationRevarse(n){
                    return n / 1.609;
                }
            },
            'mile:meter':{
                formula: " for an approximate result, multiply the length value by 1609",
                calculation(n){
                    return n * 1609;
                },
                calculationRevarse(n){
                    return n / 1609;
                }
            },
            'mile:centimeter':{
                formula: " for an approximate result, multiply the length value by 160900",
                calculation(n){
                    return n * 160900;
                },
                calculationRevarse(n){
                    return n / 160900;
                }
            },

        }
        
    },

    time: {
        name: "Time",
        units:  {
            second: "Second",
            minute: "Minute",
            hour: "Hour",          
        },

        variants: {
            'second:minute':{
                formula: "divide the time value by 60 ",
                calculation(n){
                    return n / 60;
                },
                calculationRevarse(n){
                    return n * 60;
                }
            },
            'second:hour':{
                formula: "divide the time value by 3600 ",
                calculation(n){
                    return n / 3600;
                },
                calculationRevarse(n){
                    return n * 3600;
                }
            },
            'minute:second':{
                formula: "multiply the time value by 60 ",
                calculation(n){
                    return n * 60;
                },
                calculationRevarse(n){
                    return n / 60;
                }
            },
            'minute:hour':{
                formula: "divide the time value by 60",
                calculation(n){
                    return n / 60;
                },
                calculationRevarse(n){
                    return n * 60;
                }
            },
            'hour:second':{
                formula: " multiply the time value by 3600 ",
                calculation(n){
                    return n * 3600;
                },
                calculationRevarse(n){
                    return n / 3600;
                }
            },
            'hour:minute':{
                formula: "multiply the time value by 60",
                calculation(n){
                    return n * 60;
                },
                calculationRevarse(n){
                    return n / 60;
                }
            },
         
        }
    },

    dataTransferRate: {
        name: "Data Transfer Rate",
        units:  {
            bitePerS: "Bit per second",
            kilobitePerS: "Kilobite per second",
            megabitePerS: "Megabyte per second",
        },

        variants: {
            'bitePerS:kilobitePerS':{
                formula: "divide the data transfer rate value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'bitePerS:megabitePerS':{
                formula: "divide the data transfer rate value by 1e+6 ",
                calculation(n){
                    return n / new Number(1e+6);
                },
                calculationRevarse(n){
                    return n * new Number(1e+6);
                }
            },
            'kilobitePerS:bitePerS':{
                formula: "multiply the data transfer rate value by 1000 ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilobitePerS:megabitePerS':{
                formula: "divide the data transfer rate value by 1000",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'megabitePerS:bitePerS':{
                formula: "multiply the data transfer rate value by 1e+6 ",
                calculation(n){
                    return n * new Number(1e+6);
                },
                calculationRevarse(n){
                    return n / new Number(1e+6);
                }
            },
            'megabitePerS:kilobitePerS':{
                formula: "multiply the data transfer rate value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculcalculationRevarseation(n){
                    return n / 1000;
                }
            },
           
        }
    }
}


let lastLeftSelectedValue = "";
let lastRightSelectedValue = "";

function main(){
    let inputCategory = document.getElementById('category-select');
    let leftInput = document.getElementById('left-inp');
    let rightInput = document.getElementById('right-inp');
   
    let leftSelect = document.getElementById('left-input_select');
    let rightSelect = document.getElementById('right-input_select');
        removeAllChild(inputCategory)
    let converterKeys = Object.keys(converter).sort();
        converterKeys.forEach((item)=>{
            addOptionsInCategory(inputCategory, {value: item, text: converter[item].name})
        })

        //default input category
       updateInputCategoryChange(inputCategory,leftSelect,rightSelect);

       caculateValue(inputCategory,leftSelect, rightSelect)
       
        

        
        inputCategory.addEventListener('change', function(){
            updateInputCategoryChange(inputCategory,leftSelect,rightSelect)
        })    
    
    
        leftSelect.addEventListener('change', function(event){
            if(event.target.value === rightSelect.value){
            
                const options = rightSelect.getElementsByTagName('option');
                for(let i = 0; i<options.length; i++){
                    if(lastLeftSelectedValue === options[i].value){
                     console.log(lastLeftSelectedValue, options[i].value,lastRightSelectedValue);
                     
                        options[i].selected = 'selected';
                        //below line is for update lastRightSelectedValue like lastLeftSelectedValue 
                        lastRightSelectedValue = options[i].value;
                        console.log(lastRightSelectedValue)
                        break;
                    }
                }
            }
           
            
            lastLeftSelectedValue = event.target.value;
            caculateValue(inputCategory,leftSelect, rightSelect)
        })


        rightSelect.addEventListener('change', function(event){
            if(event.target.value === leftSelect.value){                 

                const options = leftSelect.getElementsByTagName('option');
                for(let i = 0; i<options.length; i++){
                    if(lastRightSelectedValue === options[i].value){
                        console.log(lastRightSelectedValue, options[i].value,options[i]);
                        options[i].selected = 'selected';
                        lastLeftSelectedValue = options[i].value;
                        break;
                    }
                }
            }
            lastRightSelectedValue = event.target.value;
            caculateValue(inputCategory,leftSelect, rightSelect)
        })

        leftInput.addEventListener('keyup', function(event){
            if(event.target.value && !isNaN(event.target.value)){
                let converterCategoryName = inputCategory.value;
                let variants = converter[converterCategoryName].variants;
                let variantKey = `${leftSelect.value}:${rightSelect.value}`;
                let variant = variants[variantKey];
                leftInput.value = Number(event.target.value)
                rightInput.value = variant.calculation(Number(event.target.value))
            }else{
                rightInput.value = '';
            }
        })



        rightInput.addEventListener('keyup', function(event){
            if(event.target.value && !isNaN(event.target.value)){
                let converterCategoryName = inputCategory.value;
                let variants = converter[converterCategoryName].variants;
                let variantKey = `${leftSelect.value}:${rightSelect.value}`;
                let variant = variants[variantKey];
                leftInput.value = variant.calculationRevarse(rightInput.value)
            }else{
                leftInput.value = "";
            }
        })



}


function addOptionsInCategory(parent, option){
    let createOptions = document.createElement('option');
    createOptions.setAttribute('value', option.value);
    createOptions.innerText = option.text;

    parent.appendChild(createOptions);


}


function removeAllChild(parent){    
    while(parent.firstChild){
        //Both way you have executed to remove child element
            //parent.removeChild(parent.firstChild)
            parent.firstChild.remove()
    }
}

   
function updateInputCategoryChange(inputCategory,leftSelect,rightSelect){
    let converterCategoryName = inputCategory.value;
    let units = converter[converterCategoryName].units;
    let options = Object.keys(units) 

    //Left Handler
        removeAllChild(leftSelect)         
        options.forEach((item)=>{
            addOptionsInCategory(leftSelect, {value: item, text: units[item] })
        })  
        
        lastLeftSelectedValue = leftSelect.value;
        
    //Right Handler
         removeAllChild(rightSelect)     
         options.forEach((item)=>{
                 addOptionsInCategory(rightSelect, {value: item, text: units[item] });
                
             })
    // for right side input field selected value no -2
        rightSelect.getElementsByTagName('option')[1].selected = "selected";

        lastRightSelectedValue = rightSelect.value;
// change default value when change select category
        caculateValue(inputCategory,leftSelect, rightSelect)
}



function caculateValue(inputCategory,leftSelect, rightSelect){
    let leftInput = document.getElementById('left-inp');
    let rightInput = document.getElementById('right-inp');
    let converterCategoryName = inputCategory.value;
    let variants = converter[converterCategoryName].variants;
    let variantKey = `${leftSelect.value}:${rightSelect.value}`;
    let variant = variants[variantKey];
    let formulaDisplay = document.getElementById('display-formula')
    formulaDisplay.innerHTML = variant.formula;  
     leftInput.value = 1;
     rightInput.value = variant.calculation(1)
    

}





 