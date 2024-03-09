// let browseFileBtn = document.querySelector('.container button');
// let inputFile = document.querySelector('input');
// let mainContainer = document.querySelector('.container')
// let myFile;

// browseFileBtn.addEventListener('click',()=>{
//     browseFileBtn.style.color = 'red';
//     inputFile.click()


// })

// inputFile.addEventListener('change', function(event){
//         myFile = event.target.files[0];
//             urlLink = URL.createObjectURL(file)
//             mainContainer.style.background = `URL(${urlLink})`;
//           for(let i of mainContainer.children){
//                 i.style.display = 'none'
//           }
         
          
// })

// mainContainer.addEventListener('dragover', function(event){
//     let dragText = document.querySelector('.drag-text');
//     dragText.textContent = "Realese to upload";
//     mainContainer.style.border = 'solid'
//     mainContainer.style.borderColor = 'rgb(201, 203, 204)'


// })

// mainContainer.addEventListener('dragleave', function(event){
//     let dragText = document.querySelector('.drag-text');
//     dragText.textContent = "Drag & Drop";
//     mainContainer.style.border = 'dotted';
//     mainContainer.style.borderColor = 'rgb(201, 203, 204)'
//     console.log(myFile);
// })

// mainContainer.addEventListener('drop', function(event){
//     event.preventDefault();
//    myFile = event.dataTransfer.files[0];
//     console.log(myFile);
    
// show()
    
// })

// // function show(){
// //     let fileType = file.type;
// //     let fileFormat = ["image/png", "image/jpeg", "image/jpg"];

// //     if(fileFormat.includes(fileType)){
// //         let fileReader = new FileReader;

// //         fileReader.onload = ()=>{
// //             let imgUrl = fileReader.result;
// //             let img = `<img src="${imgUrl}" alt=""></img>`;

// //             mainContainer.innerHTML = img;
// //         }

// //         fileReader.readAsDataURL(file)
// //     }else{
// //         alert('Error')
// //     }
// // }


// function ShowMe(){
//     let filetype = myFile.type; 
//     let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

//     if(VaildEx.includes(filetype)){
        
//       let fileReader  = new FileReader(); 

//       fileReader.onload = () => {
//           let imgUrl = fileReader.result; 
//           let img  = `<img src="${imgUrl}" alt="">`

//           mainContainer.innerHTML = img
//       }
//       fileReader.readAsDataURL(myFile); 
//     }
//     else  {
//         alert("আপনার ফাইল টা ভালো না পচা । দয়া করে ইমেজ ফাইল ব্যবহার করুন 🥰"); 
//         DragArea.classList.remove("active"); 
//         DragText.textContent = "Drag & Drop";
//     }
// }




const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input  = DragArea.querySelector("input");
let Myfile ; 



button.onclick  = () => {
    input.click()
}

input.addEventListener("change" ,function(){
    Myfile = this.files[0];
    DragArea.classList.add("active"); 
    ShowMe()
    
})

DragArea.addEventListener("dragover", (event)=> {
event.preventDefault(); 
DragArea.classList.add("active"); 

DragText.textContent = "Release to Upload File";

} ) 

DragArea.addEventListener("dragleave",  ()=> {
    DragArea.classList.remove("active"); 
    DragText.textContent = "Drag & Drop";
}); 


DragArea.addEventListener("drop", (event)=>{ 
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];

    ShowMe()
})

function ShowMe(){
    let filetype = Myfile.type; 
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

    if(VaildEx.includes(filetype)){
        
      let fileReader  = new FileReader(); 

      fileReader.onload = () => {
          let imgUrl = fileReader.result; 
          let img  = `<img src="${imgUrl}" alt="">`

          DragArea.innerHTML = img
      }
      fileReader.readAsDataURL(Myfile); 
    }
    else  {
        alert("আপনার ফাইল টা ভালো না পচা । দয়া করে ইমেজ ফাইল ব্যবহার করুন 🥰"); 
        DragArea.classList.remove("active"); 
        DragText.textContent = "Drag & Drop";
    }
}