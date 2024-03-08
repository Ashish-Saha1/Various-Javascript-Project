let browseFileBtn = document.querySelector('.container button');
let inputFile = document.querySelector('input');
let mainContainer = document.querySelector('.container')


browseFileBtn.addEventListener('click',()=>{
    browseFileBtn.style.color = 'red';
    inputFile.click()


})

inputFile.addEventListener('change', function(event){
        let file = event.target.files[0];
            urlLink = URL.createObjectURL(file)
            mainContainer.style.background = `URL(${urlLink})`;
          for(let i of mainContainer.children){
                i.style.display = 'none'
          }
})

mainContainer.addEventListener('dragover', function(event){
    let dragText = document.querySelector('.drag-text');
    dragText.textContent = "Realese to upload";
    mainContainer.style.border = 'solid'
    mainContainer.style.borderColor = 'rgb(201, 203, 204)'


})

mainContainer.addEventListener('dragleave', function(event){
    let dragText = document.querySelector('.drag-text');
    dragText.textContent = "Drag & Drop";
    mainContainer.style.border = 'dotted';
    mainContainer.style.borderColor = 'rgb(201, 203, 204)'
    
})

mainContainer.addEventListener('drop', function(event){
    event.preventDefault()
    let dragText = document.querySelector('.drag-text');
    dragText.textContent = "Drag & Drop";
    let file = event.dataTransfer.files[0];
    console.dir(file)
    urlLink = URL.createObjectURL(file)
    mainContainer.style.background = `URL(${urlLink})`;
})