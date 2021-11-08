let inputItem = document.querySelector(".inputItem")
const btnLog = document.querySelector("#btnLog")
const btnWarn = document.querySelector("#btnWarn")
const btnError = document.querySelector("#btnError")
const body = document.querySelector("#body")


btnLog.addEventListener('click', ()=>{
    inputItem.style.color = "black"
    body.style.backgroundColor = "yellowgreen"
})
btnWarn.addEventListener('click', ()=>{
    inputItem.style.color = "green"
    inputItem.style.backgroundColor="black"
     
})
btnError.addEventListener('click', ()=>{
    inputItem.style.color = "red"
    inputItem.style.backgroundColor= "yellow"
})