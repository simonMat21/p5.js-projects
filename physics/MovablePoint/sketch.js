/*go to line 27 for more info
  rhe class and other function is in other folder*/

let a, b;
let P = [];

function setup() {
  createCanvas(400, 400);
  P[0] = new MovablePoint();
  P[1] = new MovablePoint();
  P[2] = new MovablePoint();
  P[3] = new MovablePoint();
  P[4] = new MovablePoint();
}

function draw() {
  background(220);
  checkClicked(P);

  let Pa = P[0].getPosition();
  let Pb = P[1].getPosition();
  let Pc = P[2].getPosition();
  push();
  stroke(0);
  line(Pa[0], Pa[1], Pb[0], Pb[1]);
  line(Pa[0], Pa[1], Pc[0], Pc[1]);
  line(Pc[0], Pc[1], Pb[0], Pb[1]);

  //change the info to sute your need!
  rectMode(CENTER);
  P[3].clickableR = 50;
  fill(20, 220, 3);
  noStroke();
  rect(P[3].x, P[3].y, 100);
  pop();
  P[0].show([0, 0, 200]);
  P[0].showFade();
  P[1].show([200, 0, 0]);
  P[1].showFade();
  P[2].show([0, 200, 0]);
  P[2].showFade();
  P[4].show([0, 0, 0]);
  P[4].changePosition(100,100);
  //P[4].changePosition(1+P[4].x,100);
}
