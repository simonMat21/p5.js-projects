/*contains the class and the checkClick function*/
let taken = null;
function checkClicked(P) {
  for (var p of P) {
    if (taken == p || taken == null) {
      let dis = dist(mouseX, mouseY, p.x, p.y);
      if (mouseIsPressed) {
        if (dis < p.clickableR) {
          p.clicked = true;
          taken = p;
        }
      } else {
        p.clicked = false;
        taken = null;
      }

      if (p.clicked) {
        p.x = mouseX;
        p.y = mouseY;
      }
    }
  }
}

class MovablePoint {
  constructor(x = random(width / 2), y = random(height / 2), r = 10) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.clickableR=this.r;
    this.clicked=false;
    this.color=[];
  }
  
  show(color = [0, 0, 0],r=this.r) {
    this.color=color;
    this.r = r;
    noStroke();
    fill(color);
    circle(this.x, this.y, this.r*2);
    let o=this.color.push(100);
  }
  
  showFade(r=this.r*2,color=this.color.concat(100)){
    this.clickableR=r;
    noStroke();
    fill(color);
    circle(this.x,this.y,r*2);
  }
  
  getPosition(x,y){
    return [this.x,this.y];
  }
  
  changePosition(x=this.x,y=this.y){
    this.x=x;
    this.y=y;
  }
}
