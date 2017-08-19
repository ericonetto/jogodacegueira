$( document ).ready(function() {



  var canvasLayer1 = document.getElementById('layer1');
  var contextLayer1 = canvasLayer1.getContext('2d');
  var canvasLayer2 = document.getElementById('layer2');
  var contextLayer2 = canvasLayer2.getContext('2d');

  var imageObj = new Image();
  imageObj.src = './images/chicken_01.jpg';

  imageObj.onload = function() {

    var myimg = contextLayer1.drawImage(imageObj, 0, 0);





    var colunas=24;
    var larguraColuna=canvasLayer2.width/colunas;
    var larguraLinha=canvasLayer2.width/colunas;
    var linhas=canvasLayer2.height/larguraLinha;

    var posicaoC=0;
    var posicaoL=0;
    var coluna=0;
    var linha =0;

    for(linha=0;linha<linhas;linha++){
      for(coluna=0;coluna<colunas;coluna++){
        contextLayer2.fillRect(posicaoC,posicaoL,larguraColuna,larguraLinha);
        posicaoC=posicaoC+larguraColuna;
      }
      posicaoC=0;
      posicaoL=posicaoL+larguraLinha;
    }




    canvasLayer2.onmousemove = function(e) {

      // important: correct mouse position:
      var rect = this.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top,
          i = 0, r;

          contextLayer2.clearRect(x, y, larguraColuna, larguraLinha); // for demo

      }





  };


});
