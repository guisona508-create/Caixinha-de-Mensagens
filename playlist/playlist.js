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

const audio = document.getElementById("audio");
const nome = document.getElementById("nomeMusica");
const capa = document.getElementById("capa");
const progresso = document.getElementById("progresso");
const volume = document.getElementById("volume");
const lista = document.getElementById("lista");
const buscarMusica = document.getElementById("buscarMusica");

const musicas = [
  {
    nome: "Cristiano Araújo - Caso Indefinido💖",
    arquivo: "songs/casoindefinido.mp3",
    capa: "photos/foto11.jpeg",
  },
  {
    nome: "Olha - Roberto Carlos (Stefano Mota) 💖",
    arquivo: "songs/olha.mp3",
    capa: "photos/foto1.jpeg",
  },
  {
    nome: "Falando Sério - Roberto Carlos (Stefano Mota) 💖",
    arquivo: "songs/FalandoSerio.mp3",
    capa: "photos/foto7.jpeg",
  },
  {
    nome: "Djavan – Oceano 💖",
    arquivo: "songs/oceano.mp3",
    capa: "photos/foto10.jpeg",
  },
  {
    nome: "João Gomes Cantor - LEMBREI DE NÓS 💖",
    arquivo: "songs/lembreidenos.mp3",
    capa: "photos/foto8.jpeg",
  },
  {
    nome: "Eu Amo Você - Tim Maia 💖",
    arquivo: "songs/euamovc.mp3",
    capa: "photos/foto9.jpeg",
  },
  {
    nome: "Luan Santana - Tudo Que Você Quiser 💖",
    arquivo: "songs/tudoquevcquiser.mp3",
    capa: "photos/foto4.jpeg",
  },
  {
    nome: "Gustavo Mioto - Contramão 💖",
    arquivo: "songs/contramao.mp3",
    capa: "photos/foto6.jpeg",
  },
  {
    nome: "Akon - Don't Matter💖",
    arquivo: "songs/dontmatter.mp3",
    capa: "photos/foto3.jpeg",
  },
  {
    nome: "Bruno Mars - Just The Way You Are💖",
    arquivo: "songs/justheway.mp3",
    capa: "photos/foto2.jpeg",
  },
  {
    nome: "Justin Timberlake - Mirrors💖",
    arquivo: "songs/mirrors.mp3",
    capa: "photos/foto5.jpeg",
  },
  {
    nome: "Zé Neto e Cristiano - Te Amo 💖",
    arquivo: "songs/Teamo.mp3",
    capa: "photos/foto12.jfif",
  },
  {
    nome: "Wiu - Maria do Olho Verde 💖",
    arquivo: "songs/olhoverde.mp3",
    capa: "photos/gato1.jpeg",
  },
  {
    nome: "Bryan Adams - Heaven 💖",
    arquivo: "songs/heaven.mp3",
    capa: "photos/gato2.jpg",
  },
  {
    nome: "Gustavo Mioto - Princesa 💖",
    arquivo: "songs/princesa.mp3",
    capa: "photos/gato3.png",
  },
  {
    nome: "TE VIVO - Luan Santana 💖",
    arquivo: "songs/tevivo.mp3",
    capa: "photos/gato4.jpg",
  },
  {
    nome: "Bon Jovi - Always 💖",
    arquivo: "songs/always.mp3",
    capa: "photos/gato5.png",
  },
];

let index = 0;

// Criar lista automática
musicas.forEach((m, i) => {
  const li = document.createElement("li");
  li.innerText = m.nome;
  li.onclick = () => {
    index = i;
    carregarMusica();
  };
  lista.appendChild(li);
});

function carregarMusica() {
  const m = musicas[index];
  audio.src = m.arquivo;
  nome.innerText = m.nome;
  capa.src = m.capa;
  audio.play();
}

function tocar() {
  audio.play();
}

function pausar() {
  audio.pause();
}

function proxima() {
  index = (index + 1) % musicas.length;
  carregarMusica();
}

function anterior() {
  index = (index - 1 + musicas.length) % musicas.length;
  carregarMusica();
}

function voltar() {
  window.location.href = "../index.html";
}

// Volume
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Barra de progresso
audio.addEventListener("timeupdate", () => {
  progresso.value = (audio.currentTime / audio.duration) * 100;
});

progresso.addEventListener("input", () => {
  audio.currentTime = (progresso.value / 100) * audio.duration;
});

// Próxima automática
audio.addEventListener("ended", () => {
  proxima();
});

function renderizarLista(listaMusicas) {
  lista.innerHTML = "";

  listaMusicas.forEach((m) => {
    const li = document.createElement("li");
    li.innerText = m.nome;

    li.onclick = () => {
      audio.src = m.arquivo;
      nome.innerText = m.nome;
      capa.src = m.capa;
      audio.play();
    };

    lista.appendChild(li);
  });
}

// escutar o Input
buscarMusica.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();

  const musicasFiltradas = musicas.filter((musica) =>
    musica.nome.toLowerCase().includes(termo),
  );

  renderizarLista(musicasFiltradas);
});
