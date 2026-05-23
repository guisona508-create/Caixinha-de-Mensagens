// Criar corações flutuantes animados
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

// Criar corações a cada 2 segundos
setInterval(criarCoracao, 2000);

// Animação ao fazer scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      entry.target.style.opacity = "1";
    }
  });
}, observerOptions);

// Observar todos os eventos
document.querySelectorAll(".evento").forEach((evento) => {
  evento.style.animationPlayState = "paused";
  observer.observe(evento);
});

// Adicionar interatividade aos eventos
const eventos = document.querySelectorAll(".conteudo-evento");
eventos.forEach((evento) => {
  evento.addEventListener("click", function (e) {
    e.stopPropagation();
    // Fechar todos os outros eventos
    eventos.forEach((ev) => {
      if (ev !== this) {
        ev.classList.remove("expandido");
      }
    });
    // Alternar o atual
    this.classList.toggle("expandido");
  });
});

// Fechar ao clicar fora
document.addEventListener("click", function () {
  eventos.forEach((evento) => {
    evento.classList.remove("expandido");
  });
});

function voltar() {
  window.location.href = "../index.html";
}
