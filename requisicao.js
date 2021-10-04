// https://api.nasa.gov/planetary/apod?api_key=PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL

// Key PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL
let botao = document.getElementById('button')
let date = document.getElementById('date')
let div = document.getElementById('conteudo')


botao.addEventListener('click', function (event) { 
    event.preventDefault()
    console.log('Procurando a imagem')
    search(date.value)
})

async function search (date) {
 let response =  await fetch (`https://api.nasa.gov/planetary/apod?api_key=PsnCkbYnUby5g8RYgsNgPbl92Us5lupJEnhZgFOL&date=${date}`);
    console.log(response)

 let info = await response.json()   
 console.log (info)
 console.log ('Vai mermão')
 exibir(info)
}

function exibir(info) {

    div.style.boxSizing = 'content-box'
    div.style.background = 'rgb(99, 129, 212, .5)'
    div.style.border = '5px solid white'
    div.style.borderRadius = '4px'
    
    div.style.display = 'flex'
    div.style.flexDirection = 'row'
    div.style.justifyContent = 'space-around'
    div.style.flexWrap = 'wrap'


if (info.media_type === 'image') {
 div.innerHTML =  `<h2>${info.title} (${info.date})</h2> <p>${info.explanation}</p> <img src= "${info.url}"> `
 

} else if (info.media_type === 'video') { 
    div.innerHTML = `<h2>${info.title} (${info.date})</h2> <p>${info.explanation}</p> <iframe src=${info.url}></iframe>`
    
}    
}