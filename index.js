const casas = [...window.document.querySelectorAll(".casa > a > img")]




casas.map((e,i)=>{

    e.addEventListener("click", ()=>{

        if(i!=0){
            window.alert('Em Obras')
        }

    })
})
