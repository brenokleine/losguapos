
function darkmode() {
    
    let btn = document.getElementById("darkmode")

     if(btn.value == "OFF"){
        btn.className = "fa fa-sun-o"
        btn.style.color = "#f1fa8c"
        btn.value = "ON"
        document.body.style.backgroundColor = "#282a36"
        document.body.style.color = "#f5f5f5"
     } 
     else if(btn.value == "ON"){
        btn.className = "fa fa-moon-o"
        btn.style.color = "#f5f5f5"
        btn.value = "OFF"
        document.body.style.backgroundColor = "#f5f5f5"
        document.body.style.color = "#000000"
     }
}