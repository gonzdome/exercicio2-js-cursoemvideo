function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {

    img.src = 'manha.png'
    document.body.style.background = '#e3e4e6'

    } else if (hora >= 12 && hora < 18){

    document.body.style.background = '#d5c8b7'
    img.src = 'tarde.png'

    } else {

    img.src = 'noite.png'
    document.body.style.background = '#2e2e2e'
    }
}