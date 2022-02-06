let rowdiesR;
let syneR;



function setup() {
  createCanvas(500, 500);
  rowdiesR = loadFont("assets/Rowdies-R.ttf") ;
  syneR = loadFont("assets/SyneTactile-R.ttf") ;

}

function draw() {
  background(100) ;

  textFont(rowdiesR);
  textSize(48);
  text("it's your boy",100 ,100);

  textFont(syneR) ;
  textSize(48) ;
  text("it's your boy", 200, 300) ;

}
