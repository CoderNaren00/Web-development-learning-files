let button = document.getElementById("btn");

// button.addEventListener("click", ()=>{
    // document.getElementById(".box").innerHTML = 
    // "<b>Yayy you were clicked</b>Enjoy your click"
// })

button.addEventListener("contextmenu", ()=>{
    alert("dont hack us by right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e,e.key, e.keyCode)
})