let rowdiesr, syner ;


}


function setup() {
  createCanvas(500, 500);
  rowdiesr = loadFont("assets/Rowdies-R.ttf");
  syner = loadFont("assets/SyneTactile-R.ttf");

}

function draw() {
  background(100) ;
  textFont(rowdiesr);
  textSize(48)
  text("it's your boy")

  textFont(syner);
  textSize(48)
  text("it's your boy")

}
