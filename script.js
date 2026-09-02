const botaoTema = document.getElementById("botao_tema");

botaoTema.addEventListener("click", function () {

  document.body.classList.toggle("modo_escuro");

  if (document.body.classList.contains("modo_escuro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }

});
