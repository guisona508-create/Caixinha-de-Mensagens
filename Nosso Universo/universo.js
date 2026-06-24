const universe = document.getElementById("universe");
const modal = document.getElementById("modal");
const message = document.getElementById("message");

function voltar() {
  window.location.href = "../index.html";
}

// 💬 mensagens das estrelas
const mensagens = [
  "Lembro do dia que te conheci ✨",
  "Seu sorriso mudou meu mundo",
  "Cada momento com você vale tudo",
  "Você é meu lugar favorito",
  "Nosso amor é infinito",
];

// ♈ signos (você pode personalizar com o de vocês)
const signos = [
  {
    simbolo: "♈",
    nome: "Áries",
    texto: "Nosso amor tem intensidade de Áries 🔥",
  },
  { simbolo: "♉", nome: "Touro", texto: "Nosso amor é firme e verdadeiro 💖" },
  { simbolo: "♊", nome: "Gêmeos", texto: "Conversar com você é meu vício 💬" },
  { simbolo: "♋", nome: "Câncer", texto: "Você é meu lar 🏡" },
  { simbolo: "♌", nome: "Leão", texto: "Você ilumina tudo como o sol ☀️" },
  { simbolo: "♍", nome: "Virgem", texto: "Cada detalhe seu me encanta ✨" },
  { simbolo: "♎", nome: "Libra", texto: "Você trouxe equilíbrio pra mim ⚖️" },
  {
    simbolo: "♏",
    nome: "Escorpião",
    texto: "Nosso amor é intenso e profundo 🖤",
  },
  { simbolo: "♐", nome: "Sagitário", texto: "Com você, tudo é aventura 🌍" },
  {
    simbolo: "♑",
    nome: "Capricórnio",
    texto: "Construir futuro com você é tudo 🏗️",
  },
  { simbolo: "♒", nome: "Aquário", texto: "Nosso amor é único 💫" },
  { simbolo: "♓", nome: "Peixes", texto: "Você é meu sonho mais bonito 🌊" },
];

// ⭐ criar estrelas
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.style.left = x + "px";
  star.style.top = y + "px";

  // movimento sutil
  setInterval(() => {
    star.style.transform = `translateY(${Math.sin(Date.now() / 1000 + i) * 2}px)`;
  }, 50);

  star.onclick = () => {
    const random = mensagens[Math.floor(Math.random() * mensagens.length)];
    openModal(random);
  };

  universe.appendChild(star);
}

const especiais = ["Undefined", "Undefined", "Undefined"];

for (let i = 0; i < 5; i++) {
  const star = document.createElement("div");
  star.classList.add("star", "special");

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.onclick = () => {
    openModal(especiais[i]);
    star.remove(); // some depois de descobrir
  };

  universe.appendChild(star);
}

let descobertas = 0;

signos.forEach((signo) => {
  const el = document.createElement("div");
  el.classList.add("sign");
  el.innerText = signo.simbolo;

  el.style.left = Math.random() * 100 + "%";
  el.style.top = Math.random() * 100 + "%";

  el.onclick = () => {
    universe.style.background = "radial-gradient(circle, #1a001f, #000)";
    openModal("Entrando na energia de " + signo.nome + "...\n\n" + signo.texto);
  };

  universe.appendChild(el);
});
// abrir modal

function openModal(text) {
  message.innerText = text;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  descobertas++;

  if (descobertas === 5) {
    setTimeout(() => {
      message.innerText =
        "Você encontrou tudo... mas isso é só o começo do nosso universo 💖";
    }, 800);
  }
}

// fechar modal
function closeModal() {
  modal.classList.add("hidden");
  // libera scroll
  document.body.style.overflow = "auto";
}

function outsideClick(event) {
  if (event.target.id === "modal") {
    closeModal();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
