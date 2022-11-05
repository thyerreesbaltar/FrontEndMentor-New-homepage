//Método responsável por ativar/desativar o menu estando na versão mobile
function handleClick() {
    const classNav = document.querySelector("nav")
    const buttonMenu = document.querySelector("header > button")
    const body = document.querySelector("body")

    if (classNav.getAttribute("class") == "active") {
        buttonMenu.className = "menuFechado"
        classNav.className = "desactive"
        body.removeAttribute('class')
    } else {
        buttonMenu.className = "menuAberto"
        classNav.className = "active"
        body.className = "active"
    }
}

//Método responsável por verificar o tamanho da tela e modificar a imagem principal dependendo de qual for o tamanho da tela
function responsiveImg() {
    const maxWidth = 375
    const width = screen.width

    const imgPrincipal = document.querySelector("div.principal-new > img")

    const pathImgDesktop = "./assets/image-web-3-desktop.jpg"
    const pathImageMobile = "./assets/image-web-3-mobile.jpg"

    width > maxWidth ? imgPrincipal.src = pathImgDesktop : imgPrincipal.src = pathImageMobile
}

responsiveImg()