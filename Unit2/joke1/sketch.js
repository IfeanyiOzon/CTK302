let myState = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
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
