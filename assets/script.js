const elementNome = document.getElementById("nome");
const elementEstado = document.querySelector("#alterego");
const elementFoto = document.querySelector("#imagem")
let elementBtn = document.querySelector("#mudar")

elementBtn.addEventListener("click", () =>{
    if(elementBtn.value == "primeiro"){
        elementFoto.src = "./assets/imagens/miranha2.png"
        elementNome.innerText = "Homem-Aranha"
        elementEstado.innerText = "Pronto pra descer bandidos na porrada"
        elementBtn.value = "segundo"
    } else if(elementBtn.value == "segundo"){
        elementFoto.src = "./assets/imagens/preto.png"
        elementNome.innerText = "Homem-Aranha Preto"
        elementEstado.innerText = "Pronto pra matar bandidos na porrada"
        elementBtn.value = "terceiro"
    } else{
        elementFoto.src = "./assets/imagens/peter.png.png"
        elementEstado.innerText = "Tirando fotos"
        elementNome.innerText = "Peter Parker"
        elementBtn.value = "primeiro"
    }
})