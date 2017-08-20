var colunas=24;
var larguraCanvas=1200;
var alturaCanvas=1200;


var larguraColuna=larguraCanvas/colunas;
var larguraLinha=larguraCanvas/colunas;
var linhas=alturaCanvas/larguraLinha;

var posicaoC=0;
var posicaoL=0;
var coluna=0;
var linha =0;
var tiles=[];


function loadLayer1(){
  var canvasLayer1 = document.getElementById('layer1');
  var contextLayer1 = canvasLayer1.getContext('2d');
  canvasLayer1.width=larguraCanvas;
  canvasLayer1.height=alturaCanvas;

  var imageObj = new Image();
  imageObj.src = './images/chicken_01.jpg';

  imageObj.onload = function() {
    var myimg = contextLayer1.drawImage(imageObj, 0, 0);
  };
}




$( document ).ready(function() {
  var canvasLayer2 = document.getElementById('layer2');
  var contextLayer2 = canvasLayer2.getContext('2d');
  var audio = new Audio('./sound/piu.mp3');

  loadLayer1();

    //cria os quadrados
  for(linha=0;linha<linhas;linha++){
    for(coluna=0;coluna<colunas;coluna++){
      //contextLayer2.fillRect(posicaoC,posicaoL,larguraColuna,larguraLinha);
      var tile = new blackTile(canvasLayer2,contextLayer2,larguraColuna,larguraLinha,posicaoC,posicaoL,false);
      tiles.push(tile);
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

        var arrayLength = tiles.length;
        for (var i = 0; i < tiles.length; i++) {
          if(tiles[i].mouseOverMe(x,y) && tiles[i].hidden==false){

            audio.play();
            tiles[i].hide();
          }
        }
    }



});
