let display = document.querySelector('p')
// function time(){
//     const d = new Date()
//     const hour = new Date().getHours();
//     const min = new Date().getMinutes();
//     const sec = new Date().getSeconds();
    
//     let time = `${hour}:${min}:${sec}`
//    display.innerText = time;
// }
// console.log(time())
// console.log(setInterval(time,1000))

// setInterval(() => {
    
//         let d = new Date()
//         let hour = d.getHours();
//         let min = d.getMinutes();
//         let sec = d.getSeconds();
//         let amPm = hour >=12? 'PM': "AM";
//         hour = hour % 12
//         console.log(hour)
//         hour = hour? hour: 12;
//         min = min<10? "0"+min:min;
//         sec = sec<10? "0"+sec:sec;
//         let time = `${hour}:${min}:${sec} ${amPm}`
//         display.innerText = time;
    
    
// }, 1000);


// setInterval(() => {
//     let date = new Date();
   
// let times = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' })

// console.log(date.getDate())


// display.innerHTML = times;
 
    
    
// }, 1000);


let date = new Date();
   
let times = date.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit', second: 'numeric' })

let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()


let da = `${day}/${month}/${year}`
console.log(year)
display.innerHTML =  times
