
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let toDoList = document.querySelector('.to-do-list');
let completeList = document.querySelector('.complete-task ul');



// Functions

let createTask  = function(task){
    let createLi = document.createElement('li');
    let createLabel = document.createElement('label');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

   createLi.appendChild(checkBox)
   createLi.appendChild(createLabel)

    createLabel.innerHTML = task;

    return createLi;
    
  
}


let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    toDoList.appendChild(listItem);
    newTask.value = ""

   //bind Function 

    bindIncompleteTask(listItem)
    //bindIncompleteTask(listItem, completeTask)

}

// let completeTask = function(){
//     let listItem = this.parentNode; //here parent node is li
//     let createDelete = document.createElement('button');
//     createDelete.innerText = 'Delete';
//     createDelete.className = 'delete';
//     listItem.appendChild(createDelete);

//     let checkBoxOfIncompleteTask = listItem.querySelector('input[type="checkbox"]') ;

//     checkBoxOfIncompleteTask.remove();

//     completeList.appendChild(listItem);

//     bindCompleteTask(listItem, deleteTask)

// }

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem)
}

let bindCompleteTask = function(taskItem, deleteClick){
    let listItem = taskItem.querySelector("button");
    listItem.onclick = deleteClick;
}

  
let bindIncompleteTask = function(taskItem){
    let checkBox = taskItem.querySelector('input[type = "checkbox"]');

    checkBox.onchange = function(){
        let listItem = this.parentNode; //here parent node is li
        let createDelete = document.createElement('button');
            createDelete.innerText = 'Delete';
            createDelete.className = 'delete';
            listItem.appendChild(createDelete);
    
        let checkBoxOfIncompleteTask = listItem.querySelector('input[type="checkbox"]') ;
            checkBoxOfIncompleteTask.remove();
            completeList.appendChild(listItem);
    
        bindCompleteTask(listItem, deleteTask)
    
    };

  
}




form.addEventListener('submit', addTask)

// for(let i = 0; i<toDoList.children.length; i++){
  

//    let xx = toDoList.children[i].querySelector('input[type="checkbox"]');

//    xx.onchange = completeTask;

   
// }

// for(let i = 0; i<completeList.children.length; i++){
  

//     let xx = completeList.children[i].querySelector('.delete');
 
//     xx.onclick = deleteTask;
 
    
//  }



for(let i = 0; i<toDoList.children.length; i++){
  

   bindIncompleteTask(toDoList.children[i])
 
    
 }

 for(let i = 0; i<completeList.children.length; i++){
  

    let xx = completeList.children[i].querySelector('.delete');
 
    xx.onclick = deleteTask;
 
    
 }
 


 // here change the code in my way && both is worked fine