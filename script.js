const botao = document.getElementById('botao_tema');

function alternarModo () {
  document.body.classList.toggle('modo_escuro');

  if(document.body.classList.contains('modo_escuro')) {
    botao.textContent = 'Modo Claro';
  }else {
    botao.textContent = 'Modo Escuro';
  }
 
}
botao.addEventListener('click', alternarModo);
