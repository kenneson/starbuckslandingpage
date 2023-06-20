
function imgSlider(anything) {
    // seleciona a imagem atual e a próxima imagem
    const currentImg = $('.starbucks');
    const nextImg = $('<img>').attr('src', anything).css('display', 'none');

    // adiciona a próxima imagem à página HTML
    currentImg.after(nextImg);

    // faz a transição da imagem atual para a próxima imagem
    currentImg.fadeOut(0700, function() {
        currentImg.remove();
        nextImg.addClass('starbucks').fadeIn(0700);
    });
}
//Atualiza/Muda as cores do circulo usando um transiçao suave
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.transitionDuration = '0900ms';
    circle.style.backgroundColor = color;
}

//Tradução da página para o Português

//Variável que está armazenando cada elemento que quero traduzir
var langPtBr = {
    'menu1': 'Home',
    'menu2': 'Cardápio',
    'menu3': 'Novidades',
    'menu4': 'Contato',
    'mainMessage': 'Não é apenas café. É <span>Starbucks</span>',
    'txtParagraph': 'Aproveite uma experiência única com o café da Starbucks. Mais do que uma bebida, é um estilo de vida. Descubra uma variedade de misturas e sabores, feitos com ingredientes de alta qualidade e torras perfeitas. Envolve-te na atmosfera acolhedora das nossas lojas, onde cada detalhe é projetado para criar um momento especial. Com o café da Starbucks, você tem o sabor de uma tradição que transcende gerações.',
    'buttonText': 'Mudar Idioma',
    'btnDarkMode': 'Modo Escuro',
    'btnLearnMore': 'Saiba Mais'
  };
//Variável para armazenar a configuração do idioma atual (no caso, o inglês).
  var langEn = {
    'menu1': 'Home',
    'menu2': 'Menu',
    "menu3": "What's New",
    'menu4': 'Contact',
    "mainMessage": "It's no just Coffe It's <span>Starbucks</span>",
    'txtParagraph': 'Enjoy a unique experience with Starbucks coffee. More than a beverage, its a lifestyle. Discover a variety of blends and flavors, made with high-quality ingredients and perfect roasts. Immerse yourself in the cozy atmosphere of our stores, where every detail is designed to create a special moment. With Starbucks coffee, you get the taste of a tradition that transcends generations.',
    'buttonText': 'Change Language',
    'btnDarkMode': 'Dark Mode',
    'btnLearnMore': 'Learn More'
  };
//Armazena a o idioma atual (inglês).
  var lang = langEn;

  //A lógica é que quando o botão é clickado na interface ele ativa a estrutura condicional para troca de variável, logo, trocando o idioma baseado nas strings definidas nas variáveis.
  window.addEventListener('DOMContentLoaded', function() {
    var langButton = document.getElementById('langButton');
    langButton.addEventListener('click', function() {
      if (lang === langEn) {
        lang = langPtBr;
      } else {
        lang = langEn;
      }
  
      // atualiza os elementos de texto com as traduções do idioma atual
      document.getElementById('menu1').textContent = lang.menu1;
      document.getElementById('menu2').textContent = lang.menu2;
      document.getElementById('menu3').textContent = lang.menu3;
      document.getElementById('menu4').textContent = lang.menu4;
      document.getElementById('mainMessage').innerHTML = lang.mainMessage;
      document.getElementById('txtParagraph').textContent = lang.txtParagraph;
      document.getElementById('btnDarkMode').textContent = lang.btnDarkMode;
      document.getElementById('btnLearnMore').textContent = lang.btnLearnMore;
      langButton.textContent = lang.buttonText;
    });
  });


//Modo Dark
    
  const btn = document.getElementById("btnDarkMode");
  const lnk = document.querySelector("link[href='style.css']");
  const stlcss = new URL("./style.css", window.location)

  //Substitui o arquivo css inserind outro contendo as modificações para o modo dark
  btn.addEventListener("click", function () {
    if (lnk.href == stlcss.href){
      lnk.href = "DarkMode.css"; 
    } else {
      lnk.href = "style.css";
    }
  });