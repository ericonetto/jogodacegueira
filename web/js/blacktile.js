

class blackTile {
  constructor(thisCanvas, thisContext, thisWidth, thisHeight, thisLeft, thisTop, thisHidde) {
    this.thisHeight = thisHeight;
    this.thisWidth = thisWidth;
    this.thisTop = thisTop;
    this.thisLeft = thisLeft;
    this.thisContext=thisContext;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }
  get width(){return this.width}
  set width(thisWidth){
    this.thisContext.clearRect(this.thisLeft-1, this.thisTop-1, this.thisWidth+1, this.thisHeight+1);
    this.thisWidth=thisWidth;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get height(){return this.thisHeight}
  set height(thisHeight){
    this.thisContext.clearRect(this.thisLeft-1, this.thisTop-1, this.thisWidth+1, this.thisHeight+1);
    this.thisHeight=thisHeight;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get left(){return this.thisLeft}
  set left(thisLeft){
    this.thisContext.clearRect(this.thisLeft-1, this.thisTop-1, this.thisWidth+1, this.thisHeight+1);
    this.thisLeft=thisLeft;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get top(){return this.thisTop}
  set top(thisTop){
    this.thisContext.clearRect(this.thisLeft-1, this.thisTop-1, this.thisWidth+1, this.thisHeight+1);
    this.top=thisTop;
    this.thisContext.fillRect(this.thisLeft, this.thisTop, this.thisWidth, this.thisHeight);
  }

  get hidden(){
    if(this.thisHidden){
      return true;
    }else{
      return false;
    }
  }


  hide(){
    this.thisHidden=true;
    this.thisContext.clearRect(this.thisLeft-1, this.thisTop-1, this.thisWidth+1, this.thisHeight+1);
  }

  show(){
    this.thisHidden=false;
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
