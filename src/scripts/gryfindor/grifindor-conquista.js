"use strict"


const acordion = [...window.document.querySelectorAll(".acordion > h3")]
const about = [...window.document.querySelectorAll(".acordion > p")]
console.log(about)




acordion.map((e,i)=>{

    e.addEventListener("click", ()=>{

        if(i==0){
            about[0].classList.toggle("desbloquear-about")
            about[1].classList.remove("desbloquear-about")
            about[2].classList.remove("desbloquear-about")
        } else if(i==1){
            about[1].classList.toggle("desbloquear-about")
            about[0].classList.remove("desbloquear-about")
            about[2].classList.remove("desbloquear-about")

        } else{
            about[2].classList.toggle("desbloquear-about")
            about[0].classList.remove("desbloquear-about")
            about[1].classList.remove("desbloquear-about")
        }
    })
})