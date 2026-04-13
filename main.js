const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[1].onclick = funcition(){
    botoes[1].classList.add("ativo");
  }

  console.log(i);
}