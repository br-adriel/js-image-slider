# Slider de imagens 🖼️

Slider de imagens construido com CSS e javascript.

Esse elemento foi constuído durante uma lição do [The Odin Project](https://www.theodinproject.com/).

Você pode ver como ficou o resultado clicando [aqui](https://br-adriel.github.io/js-image-slider/).

# Utilização

Para utilizar o menu basta definir os elementos com as mesmas classes e ids abaixo:

```html
<div class="slider">
      <img src="img1.jpg" alt="" class="visivel" />
      <img src="img2.jpg" alt="" />
      <img src="img3.jpg" alt="" />
      <div class="controles">
        <button title="Voltar" id="btnVoltar">Voltar</button>
        <div class="seletores">
          <button data-src="img1.jpg" class="ativo"></button>
          <button data-src="img2.jpg"></button>
          <button data-src="img3.jpg"></button>
        </div>
        <button title="Avançar" id="btnProx">Avançar</button>
      </div>
    </div>
</nav>
```

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Selo do HTML" title="HTML">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Selo do CSS" title="CSS">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Selo do JavaScript" title="JavaScript">
</div>
