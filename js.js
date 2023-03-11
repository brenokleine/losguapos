let darkbtn = document.getElementById("darkmode")

darkbtn.addEventListener('click', function() {
   
   if(darkbtn.className === "fa fa-moon-o"){
      darkbtn.className = "fa fa-sun-o"
      document.body.style.backgroundColor = "#282a36"
      document.body.style.color = "#f5f5f5"
      let pList = document.getElementsByTagName("p")
      let pListArray = Array.prototype.slice.call(pList)

      pListArray.forEach(element => {element.style.color = "#f5f5f5"})
   }
   else {
      darkbtn.className = "fa fa-moon-o"
      document.body.style.backgroundColor = "#f5f5f5"
      document.body.style.color = "#000000"
      let pList = document.getElementsByTagName("p")
      let pListArray = Array.prototype.slice.call(pList)

      pListArray.forEach(element => {element.style.color = "#000000"})

      
   }
})

// function darkmode() {
    
//     let btn = document.getElementById("darkmode")

//      if(btn.value == "OFF"){
//         btn.className = "fa fa-sun-o"
//         btn.style.color = "#f1fa8c"
//         btn.value = "ON"
//         document.body.style.backgroundColor = "#282a36"
//         document.body.style.color = "#f5f5f5"
//         document.querySelectorAll(".linkpfp").forEach(link => { link.style.color = "#f5f5f5"})

//      } 
//      else if(btn.value == "ON"){
//         btn.className = "fa fa-moon-o"
//         btn.style.color = "#f5f5f5"
//         btn.value = "OFF"
//         document.body.style.backgroundColor = "#f5f5f5"
//         document.body.style.color = "#000000"
//         document.querySelectorAll(".linkpfp").forEach(link => { link.style.color = "#000000"})
//      }
// }

