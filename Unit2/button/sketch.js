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
fill('blue');
rect(100 ,100 ,100 ,100);


}

function mouseReleased(){

  if((mouseX > 100) &&(mouseX < 200) && (mouseY > 100)&& (mouseY < 200)){
    myState++ ;
    if (myState > 1) myState=0 ; 
  }

};
