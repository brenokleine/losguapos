let darkbtn = document.getElementById("darkmode")

darkbtn.addEventListener('click', function() {
   
   if(darkbtn.className === "fa fa-moon-o"){
      darkbtn.className = "fa fa-sun-o"
      document.body.style.backgroundColor = "#282a36"
      document.body.style.color = "#f5f5f5"
      document.querySelector(`.lightmode`).className = `team darkmode`
   }
   else {
      darkbtn.className = "fa fa-moon-o"
      document.body.style.backgroundColor = "#f5f5f5"
      document.body.style.color = "#000000"
      document.querySelector(`.darkmode`).className = `team lightmode`
      
   }
})
