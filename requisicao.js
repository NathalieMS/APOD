// https://api.nasa.gov/planetary/apod?api_key=PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL

// Key PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL

let button = document.getElementById('button')
let date = document.getElementById('date')
let conteudo = document.getElementById('containerData')


button.addEventListener('click', function (event) { 
    event.preventDefault()
    console.log('Procurando a imagem')
    search(date.value)
})

async function search (date) {
 let resposta =  await fetch (`https://api.nasa.gov/planetary/apod?api_key=PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL&date=${date}`);
    console.log(resposta)

 let content = await resposta.json()   
 exibir(content)
}

function exibir(content) {


if (content.media_type === 'image') {
 conteudo.innerHTML =  `<h2>${content.title} (${content.date})</h2> <p>${content.explanation}</p> <img src= "${content.url}"> `
 

} else if (content.media_type === 'video') { 
    conteudo.innerHTML = `<h2>${content.title} (${content.date})</h2> <p>${content.explanation}</p> <iframe src=${content.url}></iframe>`
    
}    
}