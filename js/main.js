//pagina cargar
var indexSong = 0;

function paginaCargada() {
  //swiper

  var swiperAboutUs = new Swiper('.swiperAboutUs', {
    pagination: {
      el: '.swiperAboutUs-pagination',
      dynamicBullets: true,
    },
  });

  var swiperEvents = new Swiper('.swiperEvents', {
    direction: 'vertical',
    pagination: {
      el: '.swiperEventsPagination',
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper('.swiperSerie', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });


  //parallax header img
  var headerImg = document.getElementById('parallax');
  var parallaxInstance = new Parallax(headerImg);


  //interaction top-works

  var series = [{
      name: "Fate/EXTRA: Last Encore",
      id: 0
    },
    {
      name: "Anime 2",
      id: 1
    },
    {
      name: "Anime 3",
      id: 2
    }
  ];

  

  //menu

 

  function recorrerSeries(serie, index) {
    if (index == 0) {
      mostrarContenido();
    }

    function mostrarContenido() {

      //create content
      contenidoSeries.forEach(function (content) {
        content.style.display = 'none';
        if (mySong != null) {
          mySong.remove();
        }
      });
      indexSong = index;
      contenidoSeries[index].style.display = 'flex';

      var canvas = canvasSeries[index];

      mySong = new p5(visualizer, canvas);
      
      onClickListeners(index);

      console.log(index);
    }

    serie.addEventListener('click', mostrarContenido);
  }
  arraySeries.forEach(recorrerSeries);

  
}

window.addEventListener('load', paginaCargada);