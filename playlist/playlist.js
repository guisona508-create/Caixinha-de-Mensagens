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
    categoria: "Sertanejo",
  },
  {
    nome: "Olha - Roberto Carlos (Stefano Mota) 💖",
    arquivo: "songs/olha.mp3",
    capa: "photos/foto1.jpeg",
    categoria: "MPB",
  },
  {
    nome: "Falando Sério - Roberto Carlos (Stefano Mota) 💖",
    arquivo: "songs/FalandoSerio.mp3",
    capa: "photos/foto7.jpeg",
    categoria: "MPB",
  },
  {
    nome: "Djavan – Oceano 💖",
    arquivo: "songs/oceano.mp3",
    capa: "photos/foto10.jpeg",
    categoria: "MPB",
  },
  {
    nome: "João Gomes Cantor - LEMBREI DE NÓS 💖",
    arquivo: "songs/lembreidenos.mp3",
    capa: "photos/foto8.jpeg",
    categoria: "MPB",
  },
  {
    nome: "Eu Amo Você - Tim Maia 💖",
    arquivo: "songs/euamovc.mp3",
    capa: "photos/foto9.jpeg",
    categoria: "MPB",
  },
  {
    nome: "Luan Santana - Tudo Que Você Quiser 💖",
    arquivo: "songs/tudoquevcquiser.mp3",
    capa: "photos/foto4.jpeg",
    categoria: "Sertanejo",
  },
  {
    nome: "Gustavo Mioto - Contramão 💖",
    arquivo: "songs/contramao.mp3",
    capa: "photos/foto6.jpeg",
    categoria: "Sertanejo",
  },
  {
    nome: "Akon - Don't Matter💖",
    arquivo: "songs/dontmatter.mp3",
    capa: "photos/foto3.jpeg",
    categoria: "Internacional",
  },
  {
    nome: "Bruno Mars - Just The Way You Are💖",
    arquivo: "songs/justheway.mp3",
    capa: "photos/foto2.jpeg",
    categoria: "Internacional",
  },
  {
    nome: "Justin Timberlake - Mirrors💖",
    arquivo: "songs/mirrors.mp3",
    capa: "photos/foto5.jpeg",
    categoria: "Internacional",
  },
  {
    nome: "Zé Neto e Cristiano - Te Amo 💖",
    arquivo: "songs/Teamo.mp3",
    capa: "photos/foto12.jfif",
    categoria: "Sertanejo",
  },
  {
    nome: "Wiu - Maria do Olho Verde 💖",
    arquivo: "songs/olhoverde.mp3",
    capa: "photos/gato1.jpeg",
    categoria: "Trap/Pop",
  },
  {
    nome: "Bryan Adams - Heaven 💖",
    arquivo: "songs/heaven.mp3",
    capa: "photos/gato2.jpg",
    categoria: "Internacional",
  },
  {
    nome: "Gustavo Mioto - Princesa 💖",
    arquivo: "songs/princesa.mp3",
    capa: "photos/gato3.png",
    categoria: "Sertanejo",
  },
  {
    nome: "TE VIVO - Luan Santana 💖",
    arquivo: "songs/tevivo.mp3",
    capa: "photos/gato4.jpg",
    categoria: "Sertanejo",
  },
  {
    nome: "Bon Jovi - Always 💖",
    arquivo: "songs/always.mp3",
    capa: "photos/gato5.png",
    categoria: "Internacional",
  },
  {
    nome: "Pensando em Você - Paulinho Moska 💖",
    arquivo: "songs/pensandoemvc.mp3",
    capa: "photos/gato6.jpg",
    categoria: "MPB",
  },
  {
    nome: "Nando Reis, Ana Cañas - Pra Você Guardei O Amor 💖",
    arquivo: "songs/guardeiamor.mp3",
    capa: "photos/gatinho.jpg",
    categoria: "MPB",
  },
  {
    nome: "Ed Sheeran - Perfect 💖",
    arquivo: "songs/perfect.mp3",
    capa: "photos/gatinha.jpg",
    categoria: "Internacional",
  },
  {
    nome: "Reinaldo - Brilho no olhar 💖",
    arquivo: "songs/brilhonoolhar.mp3",
    capa: "photos/cat1.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: " Fundo de Quintal - Amor dos Deuses💖",
    arquivo: "songs/amordosdeuses.mp3",
    capa: "photos/cat2.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: " Jorge Aragão - Eu e Você sempre💖",
    arquivo: "songs/euevcsempre.mp3",
    capa: "photos/mouse.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: "Revelação - Essencia da Paixão 💖",
    arquivo: "songs/essenciadapaixao.mp3",
    capa: "photos/dog1.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: "Zeca Pagodinho - Outdoor 💖",
    arquivo: "songs/outdoor.mp3",
    capa: "photos/dog3.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: "Jorge Aragão - Lucidez 💖",
    arquivo: "songs/lucidez.mp3",
    capa: "photos/dog2.jpg",
    categoria: "Samba/Pagode",
  },
  {
    nome: "Zero a dez - Jó de Souza 💖",
    arquivo: "songs/zeroadez.mp3",
    capa: "photos/dog1.jpg",
    categoria: "MPB",
  },
];
mostrarCategorias();

let listaAtual = musicas;

let index = 0;

function carregarMusica() {
  const m = listaAtual[index];
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
  index = (index + 1) % listaAtual.length;
  carregarMusica();
}

function anterior() {
  index = (index - 1 + listaAtual.length) % listaAtual.length;
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

  // Agrupar por categoria
  const categorias = {};

  listaMusicas.forEach((m) => {
    // Se existe uma categoria, adiciona a música nela, senão cria um array para a categoria.
    if (!categorias[m.categoria]) {
      categorias[m.categoria] = [];
    }
    // Adiciona a música na categoria
    categorias[m.categoria].push(m);
  });
  // Sem o IF, toda vez que o código encontrar uma música de "MPB", ele irá apagar a lista de "MPB" e criar uma nova, deixando a lista apenas com a última música encontrada de "MPB".

  // Criar na tela
  for (let categoria in categorias) {
    const titulo = document.createElement("h4");
    titulo.innerText = categoria;
    titulo.style.color = "white";
    lista.appendChild(titulo);

    categorias[categoria].forEach((m) => {
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
}

// escutar o Input
buscarMusica.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();

  if (termo === "") {
    mostrarCategorias();
    return;
  }

  const filtradas = musicas.filter((m) => m.nome.toLowerCase().includes(termo));

  renderizarLista(filtradas);
});

function mostrarCategorias() {
  lista.innerHTML = "";

  const categorias = {};

  // agrupar
  musicas.forEach((m) => {
    if (!categorias[m.categoria]) {
      categorias[m.categoria] = [];
    }
    categorias[m.categoria].push(m);
  });

  // criar na tela
  for (let categoria in categorias) {
    const li = document.createElement("li");
    li.innerText = categoria;

    li.onclick = () => {
      mostrarMusicasDaCategoria(categoria, categorias[categoria]);
    };

    lista.appendChild(li);
  }
}

function mostrarMusicasDaCategoria(nomeCategoria, listaMusicas) {
  lista.innerHTML = "";

  listaAtual = listaMusicas;

  //botão para voltar
  const voltarBtn = document.createElement("button");
  voltarBtn.innerText = "⬅️ Voltar";
  voltarBtn.style.background = "444";

  voltarBtn.onclick = () => {
    listaAtual = musicas;
    mostrarCategorias();
  };

  lista.appendChild(voltarBtn);

  // Título
  const titulo = document.createElement("h3");
  titulo.innerText = nomeCategoria;
  titulo.style.color = "white";
  lista.appendChild(titulo);

  // Músicas
  listaMusicas.forEach((m) => {
    const li = document.createElement("li");
    li.innerText = m.nome;

    li.onclick = () => {
      index = listaAtual.indexOf(m);
      carregarMusica();
    };

    lista.appendChild(li);
  });
}
