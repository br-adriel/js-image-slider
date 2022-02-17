const imagens = [...document.querySelectorAll(".slider img")];

const btnProx = document.getElementById("btnProx");
btnProx.addEventListener("click", proxImagem);

const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", voltarImagem);

const seletores = [...document.querySelectorAll(".seletores button")];
seletores.map((seletor) =>
  seletor.addEventListener("click", () => acionarSeletor(seletor.dataset.src))
);

function proxImagem() {
  let encontrou = false;
  let indice = 0;

  imagens.map((img, i) => {
    if (!encontrou) {
      if (img.classList.contains("visivel")) {
        img.classList.remove("visivel");
        encontrou = true;
        indice = i;
      }
    }
  });

  if (indice === imagens.length - 1) {
    imagens[0].classList.add("visivel");
    atualizarSeletores(imagens[0].getAttribute("src"));
  } else {
    imagens[indice + 1].classList.add("visivel");
    atualizarSeletores(imagens[indice + 1].getAttribute("src"));
  }
}

function voltarImagem() {
  let encontrou = false;
  let indice = 0;

  imagens.map((img, i) => {
    if (!encontrou) {
      if (img.classList.contains("visivel")) {
        img.classList.remove("visivel");
        encontrou = true;
        indice = i;
      }
    }
  });

  if (indice === 0) {
    imagens[imagens.length - 1].classList.add("visivel");
    atualizarSeletores(imagens[imagens.length - 1].getAttribute("src"));
  } else {
    imagens[indice - 1].classList.add("visivel");
    atualizarSeletores(imagens[indice - 1].getAttribute("src"));
  }
}

function atualizarSeletores(src) {
  seletores.map((seletor) => {
    seletor.classList.remove("ativo");
    if (seletor.dataset.src === src) {
      seletor.classList.add("ativo");
    }
  });
}

function acionarSeletor(src) {
  imagens.map((img) => {
    if (img.getAttribute("src") === src) {
      img.classList.add("visivel");
    } else {
      img.classList.remove("visivel");
    }
  });

  atualizarSeletores(src);
}
