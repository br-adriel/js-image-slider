const imagens = [...document.querySelectorAll(".slider img")];

const btnProx = document.getElementById("btnProx");
btnProx.addEventListener("click", proxImagem);

const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", voltarImagem);

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
  } else {
    imagens[indice + 1].classList.add("visivel");
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
  } else {
    imagens[indice - 1].classList.add("visivel");
  }
}
