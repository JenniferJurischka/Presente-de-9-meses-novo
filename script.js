document.getElementById("titulo").classList.toggle("subindo");
const btn = document.getElementById('btnAbrir');
const aba = document.getElementById('aba');
const carta = document.getElementById('carta');

btn.addEventListener('click', () => {
  aba.classList.toggle('aberta');
  carta.classList.toggle('visivel');
});

function abrirEnvelope() {
  document.getElementById("aba").classList.toggle("aberta");
  document.getElementById("carta").classList.toggle("visivel");
  document.getElementById("titulo").classList.toggle("subindo");
  
  let intervaloCorações = setInterval(criarCoracaoFlutuante, 300);
setTimeout(() => clearInterval(intervaloCorações), 3000); // Corações sobem por 3s
}

function criarCoracaoFlutuante() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao-flutuante");
  coracao.textContent = "❤️";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";
  document.querySelector(".coracoes").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 4000);
}