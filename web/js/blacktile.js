

class blackTile {
  constructor(thisCanvas, thisContext, thisWidth, thisHeight, thisLeft, thisTop, thisVisible=true) {
    this.thisHeight = thisHeight;
    this.thisWidth = thisWidth;
    this.thisTop = thisTop;
    this.thisLeft = thisLeft;
    this.thisContext=thisContext;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }
  get width(){return this.width}
  set width(thisWidth){
    this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    this.thisWidth=thisWidth;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get height(){return this.thisHeight}
  set height(thisHeight){
    this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    this.thisHeight=thisHeight;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get left(){return this.thisLeft}
  set left(thisLeft){
    this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    this.thisLeft=thisLeft;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get top(){return this.thisTop}
  set top(thisTop){
    this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    this.top=thisTop;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get visible(){return this.thisVisible}
  set visible(thisVisible){
    this.thisVisible=thisVisible;
    if(thisVisible==false){
      this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    }else{
      this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
    }
  }

  hide(){
    this.thisVisible=false;
    this.thisContext.clearRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  show(){
    this.thisVisible=false;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }
  mouseOverMe(x,y){
    if(x>=this.thisLeft && x<=this.thisLeft+this.thisWidth && y>=this.thisTop && y<=this.thisTop+this.thisHeight){
      return true;
    }else{
      return false;
    }
  }

}
