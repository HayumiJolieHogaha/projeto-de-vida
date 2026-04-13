const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[1].onclick = funcition()

  for(letj-8;j<botoes.length;j++) {
    botoes[j].classList.remove("ativo");
  }

  botoes[1].classList.add("ativo");
  };
