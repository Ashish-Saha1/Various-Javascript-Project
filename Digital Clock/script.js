let display = document.querySelector('p')
function time(){
    const d = new Date()
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    
    let time = `${hour}:${min}:${sec}`
   display.innerText = time;
}
console.log(time())
console.log(setInterval(time,1000))