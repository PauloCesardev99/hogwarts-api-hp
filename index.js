"use strict"

const url = "https://hp-api.onrender.com/api/characters/house/gryffindor"

const sessao_bruxos = document.querySelector("#sessao-bruxos")

const getBruxosGrifindor = async()=>{ //Consumindo a api

    const response =  await fetch(url)
    const bruxos = await response.json()


    criarBruxosGrifindor(bruxos)

}


const criarBruxosGrifindor =(bruxos)=>{ //criando a sessão dos bruxos e inserindos os atributos dos objetos

   

    let bruxos10 = bruxos.filter((e, i)=> i < 10)

    bruxos10.map((e, i)=>{

        const section = document.createElement("section")
        section.setAttribute("class", "bruxos-grifindor")

        

        section.innerHTML= `<img src=${e.image}>
                            <h1>Name:${e.name} </h1>
                            <h2>Species:${e.species}</h2>
                            <h2>Gender: ${e.gender}</h2>
                            <h2>House: ${e.house} </h2>                            
        
        `
        sessao_bruxos.appendChild(section)
    })

    
   
     
    
}


getBruxosGrifindor()