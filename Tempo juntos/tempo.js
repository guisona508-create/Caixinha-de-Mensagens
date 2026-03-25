const inicio = new Date("2026-02-08T03:30:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  document.getElementById("contador").innerText =
    `${anos} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s ❤️`;
}

setInterval(atualizarContador, 1000);

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerHTML = "❤️";

  coracao.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 500);

function voltar() {
  window.location.href = "../index.html";
}
