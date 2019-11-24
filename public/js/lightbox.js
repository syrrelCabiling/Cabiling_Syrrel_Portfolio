
let lightbox = document.querySelector(".lightbox")

let modal = document.querySelector(".lb-content")

let closeBtn = document.querySelector(".close")

    lightbox.onclick = function(){
        modal.style.display = "block"
    }
    closeBtn.onclick = function(){
        modal.style.display = "none",
        lightbox.style.display = "none"
    }


window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}