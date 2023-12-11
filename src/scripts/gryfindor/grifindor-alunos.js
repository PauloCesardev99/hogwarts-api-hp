"use strict"

const url = "https://hp-api.onrender.com/api/characters/house/gryffindor";
const conteudo_total = document.querySelector(".bruxos-total")

const getBruxosGrifindor = async()=>{ //Consumindo a api

    const response =  await fetch(url)
    const bruxos = await response.json()

    criarBruxos(bruxos)
    console.log(bruxos[0])
}
getBruxosGrifindor()


 const criarBruxos =(bruxos)=>{

    const image_padrao = "https://i.pinimg.com/originals/bc/1e/ef/bc1eefce6f581451fa8eed79aedb5eed.png"

        bruxos.map((e,i)=>{
            const article = document.createElement("article")
            article.innerHTML = `<img src=${e.image? e.image : image_padrao}>
                                 <h1>Nome: ${e.name} </h1>
                                <h2>Actor: ${e.actor}</h2>
                                <h2>Status: ${e.alive? "Alive": "Death"}
                                <h2>Ancestry: ${e.ancestry}</h2>
                                <h2>House: ${e.house}</h2>
            
            `

            conteudo_total.appendChild(article)

        })
}


