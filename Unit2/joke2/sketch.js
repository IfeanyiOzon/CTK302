let myState = 0;
let timer =0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  timer++;
  if(timer 2*60) {
    timer = 0;
    myState++;
    if(myState > 1) {
      myState = 0 ;
    }
  }

  switch (myState) {
    case 0:
    background('red');
    fill('black');
    textSize(48);
    text("why did the chicken cross the road?", width/2, height/2,400,300);
    break;


    case 1:
    background('red');
    fill('black');
    textSize(48);
    text("to get to the otherside?", width/2, height/2,400,300);
    break;
  }

}

function mouseReleased(){
myState = (myState + 1) % 2;
};
