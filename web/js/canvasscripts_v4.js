var colunas=24;
var larguraCanvas=1200;
var alturaCanvas=640;


var larguraColuna=larguraCanvas/colunas;
var larguraLinha=larguraCanvas/colunas;
var linhas=alturaCanvas/larguraLinha;

var posicaoC=0;
var posicaoL=0;
var coluna=0;
var linha =0;
var tiles=[];
var nextC=0;
var nextR=0;


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




function randomStep(){
  var stR=(Math.floor(Math.random() * 3)-1)+nextR;
  var stC=(Math.floor(Math.random() * 3)-1)+nextC;

  while(stR==nextR && stC==nextC){
    stR=(Math.floor(Math.random() * 3)-1)+nextR;
    stC=(Math.floor(Math.random() * 3)-1)+nextC;
  }

  var directionR=0;
  var directionC=0;

  if(stR<0){
    directionR=1;
  }
  if(stR>linhas){
    directionR=-1;
  }

  if(stC<0){
    directionC=1;
  }
  if(stC>colunas){
    directionC=-1;
  }
  stR=stR+directionR;
  stC=stC+directionC;
  if(stR>nextR){
    directionR=1;
  }
  if(stR<nextR){
    directionR=-1;
  }
  if(stC>nextC){
    directionC=1;
  }
  if(stC<nextC){
    directionC=-1;
  }
  while(tiles[stR][stC].hidden){
    if(stR<0){
      directionR=1;
    }
    if(stR>linhas){
      directionR=-1;
    }

    if(stC<0){
      directionC=1;
    }
    if(stC>colunas){
      directionC=-1;
    }
    stR=stR+directionR;
    stC=stC+directionC;
  }

  nextR=stR;
  nextC=stC;

}


$( document ).ready(function() {
  var canvasLayer2 = document.getElementById('layer2');
  var contextLayer2 = canvasLayer2.getContext('2d');
  var audio = new Audio('./sound/piu.mp3');

  loadLayer1();


    //cria os quadrados

  for(linha=0;linha<linhas;linha++){
    tiles.push([]);
    for(coluna=0;coluna<colunas;coluna++){
      //contextLayer2.fillRect(posicaoC,posicaoL,larguraColuna,larguraLinha);
      var tile = new blackTile(canvasLayer2,contextLayer2,larguraColuna,larguraLinha,posicaoC,posicaoL,false);
      tiles[linha].push(tile);
      posicaoC=posicaoC+larguraColuna;
    }

    posicaoC=0;
    posicaoL=posicaoL+larguraLinha;
  }


  nextC=Math.floor(Math.random() * colunas);
  nextR=Math.floor(Math.random() * linhas);



  canvasLayer2.onmousemove = function(e) {

    // important: correct mouse position:
    var rect = this.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top,
        i = 0, r;


        for(linha=0;linha<linhas;linha++){
          for(coluna=0;coluna<colunas;coluna++){
            if(tiles[linha][coluna].mouseOverMe(x,y)){


              if(coluna==nextC && linha==nextR){
                if(tiles[linha][coluna].hidden==false){
                  audio.play();
                  tiles[linha][coluna].hide();
                }
                randomStep();

              }

            }
            posicaoC=posicaoC+larguraColuna;
          }
          posicaoC=0;
          posicaoL=posicaoL+larguraLinha;
        }

    }



});
